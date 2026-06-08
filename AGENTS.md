# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server
npm run build      # type-check then bundle (tsc --noEmit && vite build)
npm run preview    # serve the dist/ build locally
```

No lint or test commands are configured.

## Architecture

**Stack:** Vite + React 19 + TypeScript + Three.js

The app is a single-page portfolio archive rendered as a WebGL experience. `App.tsx` renders only `<ArchiveExperience />`, which is a thin React shell.

### Two-paradigm split

`src/archive/archiveEngine.ts` is the live runtime. It is marked `// @ts-nocheck` and uses imperative vanilla DOM manipulation inside a Three.js animation loop. React plays no role here beyond mounting. `ArchiveExperience.tsx` injects static HTML via `dangerouslySetInnerHTML` (from `archiveMarkup.ts`) then calls `mountArchiveExperience(container)`, which owns all state, routing, rendering, and event handling for the lifetime of the page.

`src/state/useArchiveMachine.ts` and `src/components/` contain an extracted React-based implementation of the same logic (routing hook, signal queue, project detail, etc.), but they are **not wired into the current render tree**. Treat them as a migration target or reference, not the active code path.

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

## Project record templates

Each `ProjectRecord` in `projects.ts` sets a `template` field: `"slab"` or `"case"`. This controls the entire detail page layout.

### `slab` — horizontal header, vertical sections (ZAI, TEND, CCS)

- Sidebar renders as a full-width horizontal header (3-column grid: title | thesis | meta)
- Sections scroll vertically below the header
- **Index**: `position: fixed; right: 32px; top: 168px` — must stay at 168px+ to avoid overlapping the Return/Back button fixed at `top: 28px`
- **Section spacing**: only sections with a `images` array get `min-height: 62vh`. The engine adds `class="record-section has-media"` when images exist; CSS targets `.has-media` for the tall treatment. Text-only sections collapse to content height — do not add `min-height` to all sections

### `case` — fixed left sidebar, wide scrolling main (Energy Sense)

- Sidebar is `position: fixed; left: 32px; top: 54px; width: min(32vw, 460px)`
- Sidebar can be tall: a project with many meta rows (6 rows = ~200px) pushes content to ~530px from page top
- **Index**: `position: fixed; left: 32px; top: 84vh; width: min(18vw, 230px)` — left-aligned to match sidebar column; `top: 84vh` clears the sidebar content even with many meta rows. Do not use `right` positioning or vertical-center (`translateY(-50%)`) for case template index
- **Thesis**: `max-width: 90%` — fills sidebar width without running edge-to-edge
- `record-index-state` is hidden on both templates (same `display: none` rule)

### Return / Back button

Single amber filled button (`record-action`), `padding: 10px 24px; font-size: 12px`. Both templates fix it at `right: 32px; top: 28px`. Do not add a second return button — the engine iterates `recordActions` dynamically from a single button in the markup.

### `has-media` pattern

In `archiveEngine.ts`, section rendering adds `has-media` to `<section>` when `section.images` exists:

```js
`<section class="record-section${section.images ? " has-media" : ""}" ...>`
```

CSS uses `.record-section.has-media` to apply `min-height: 62vh` (slab only). Always add images via the `images` field on the section object, not inline HTML, so the class is applied correctly.

## Adding a project

1. Add assets to `src/assets/projects/<slug>/`
2. Add a `ProjectRecord` entry to `src/data/projects.ts` (import assets at the top)
3. Choose `template: "slab"` or `template: "case"` — see template rules above
4. Run `npm run build` to verify the bundle
