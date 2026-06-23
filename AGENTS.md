# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server
npm run build      # type-check then bundle (tsc --noEmit && vite build)
npm run preview    # serve the dist/ build locally
```

No lint or test commands are configured.

## Build and deploy

The build is a static SPA (`dist/`) served by nginx. Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the multi-stage `Dockerfile` (Node build → nginx serve) and pushes `ghcr.io/epochedrift/portfolio-pord:latest`. The VPS pulls that image; Caddy reverse-proxies to the container.

`nginx.conf` is the SPA-serving config baked into the image: hashed `/assets/` get `Cache-Control: immutable`, `index.html` is `no-cache` so deploys appear immediately, and unknown paths fall back to `/index.html` (client routing).

## Architecture

**Stack:** Vite + React 19 + TypeScript + Three.js

The app is a single-page portfolio archive rendered as a WebGL experience. `App.tsx` renders only `<ArchiveExperience />`, which is a thin React shell.

### Two-paradigm split

`src/archive/archiveEngine.ts` is the live runtime. It is marked `// @ts-nocheck` and uses imperative vanilla DOM manipulation inside a Three.js animation loop. React plays no role here beyond mounting. `ArchiveExperience.tsx` injects static HTML via `dangerouslySetInnerHTML` (from `archiveMarkup.ts`) then calls `mountArchiveExperience(container)`, which owns all state, routing, rendering, and event handling for the lifetime of the page.

`src/state/useArchiveMachine.ts` contains an extracted React-based implementation of the same logic (routing hook, signal queue, etc.), but it is **not wired into the current render tree**. Treat it as a migration target or reference, not the active code path. (There is no `src/components/` directory — the React migration path is only the state hook plus the `src/visual-anchor/` helpers below.)

### Route model

Routes are managed entirely inside `archiveEngine.ts` via `window.history.pushState`. The canonical route shapes live in `src/routes/routeState.ts`:

| Path | State |
|---|---|
| `/` | closed field (tesseract fills screen) |
| `/archive` | open / signal queue visible |
| `/projects/:slug` | project record / detail |
| `/about`, `/contact` | info overlay |

### Content and localization

All content is bilingual (English + Chinese). `LocalizedText = { en: string; zh?: string }` is the base type (`src/data/contentTypes.ts`). `resolveText` / `resolveOptionalText` in `src/data/localization.ts` pick the correct string given the active `LanguageCode`. Language preference is persisted to `localStorage`.

Projects are defined in `src/data/projects.ts` as `ProjectRecord[]`. Assets (images, SVGs) are imported directly from `src/assets/projects/<slug>/`.

### Visual layer

Three.js setup and the tesseract geometry live inline inside `archiveEngine.ts`. `src/visual-anchor/` contains extracted geometry and motion helpers (`tesseractGeometry.ts`, `tesseractMotion.ts`, `TesseractField.tsx`) that are not currently used by the engine but reflect the intended modular structure.

### Styles

`src/styles/tokens.css` defines all CSS custom properties (colors, fonts). `src/styles/archive.css` and `src/archive/archiveShell.css` hold layout and component styles. State transitions (open/closed/record/info) are handled by toggling CSS classes (`is-open`, `is-record-page`, `is-info-page`, `page-about`, `page-contact`) on the root container element.

### Design system

The studio's canonical visual language lives in a separate repo, **Chaostudio-DesignSystem** (`git@github.com:EpocheDrift/Chaostudio-DesignSystem.git`): design tokens (`--cs-*`), `PRINCIPLES.md`, and a living styleguide. Those tokens were *extracted from this portfolio* — `src/styles/tokens.css` here (using `--color-*` / `--font-*`) is the de-facto origin.

The two are **not yet wired together**: this portfolio still uses its own `src/styles/tokens.css`, not the `--cs-*` tokens. Adopting the design system (e.g. as a git submodule) is deferred so it can't break the live build. Until then, if you change colors/fonts/spacing here, keep them aligned with the design system and consider upstreaming the change there.

## Project record templates

Each `ProjectRecord` in `projects.ts` sets a `template` field: `"slab"` or `"case"`. This controls the entire detail page layout.

### `slab` — horizontal header, vertical sections (ZAI, TEND, CCS)

- Sidebar renders as a full-width horizontal header (3-column grid: title | thesis | meta)
- Sections scroll vertically below the header
- **Index**: `position: fixed; right: 32px; top: 168px` — must stay at 168px+ to avoid overlapping the Return/Back button fixed at `top: 28px`
- **Section spacing**: only sections that resolve to media (i.e. have a non-empty `mediaIds`) get `min-height: 62vh`. The engine adds `class="record-section has-media"` when media exist; CSS targets `.has-media` for the tall treatment. Text-only sections collapse to content height — do not add `min-height` to all sections

### `case` — fixed left sidebar, wide scrolling main (Energy Sense)

- Sidebar is `position: fixed; left: 32px; top: 54px; width: min(32vw, 460px)`
- Sidebar can be tall: a project with many meta rows (6 rows = ~200px) pushes content to ~530px from page top
- **Index**: `position: fixed; left: 32px; top: 84vh; width: min(18vw, 230px)` — left-aligned to match sidebar column; `top: 84vh` clears the sidebar content even with many meta rows. Do not use `right` positioning or vertical-center (`translateY(-50%)`) for case template index
- **Thesis**: `max-width: 90%` — fills sidebar width without running edge-to-edge
- `record-index-state` is hidden on both templates (same `display: none` rule)

### Return / Back button

Single amber filled button (`record-action`), `padding: 10px 24px; font-size: 12px`. Both templates fix it at `right: 32px; top: 28px`. Do not add a second return button — the engine iterates `recordActions` dynamically from a single button in the markup.

### `has-media` pattern

Media is a two-part data model, not a per-section `images` field:

- Each `ProjectRecord` has a flat `media: ProjectMedia[]` array — every image/diagram/video gets one entry with an `id`, `src`, `role` (`hero`/`plate`/`process`/`diagram`/`reference`), and bilingual `alt`/`caption`.
- A `ProjectSection` references media by id via `mediaIds?: string[]`.

At render time, `buildArchiveSignals` resolves each section's `mediaIds` into a runtime `section.images` array (mapping ids → entries in `project.media`). Section rendering then adds `has-media` when that resolved array is non-empty:

```js
`<section class="record-section${section.images ? " has-media" : ""}" ...>`
```

CSS uses `.record-section.has-media` to apply `min-height: 62vh` (slab only). Attach media through `media[]` + `mediaIds`, never inline HTML, so the class is applied correctly. `section.images` only exists post-resolution — do not add it to the data in `projects.ts`.

## Adding a project

1. Add assets to `src/assets/projects/<slug>/`
2. Add a `ProjectRecord` entry to `src/data/projects.ts` (import assets at the top)
3. For each asset, add a `ProjectMedia` entry to the record's `media[]` array (give it an `id`, `src`, `role`, bilingual `alt`), then reference it from a section via `mediaIds: ["that-id"]`
4. Choose `template: "slab"` or `template: "case"` — see template rules above
5. Run `npm run build` to verify the bundle
