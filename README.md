# Zayn Archive Interface

Personal portfolio archive built as a WebGL field system. Projects enter as signals, route through a tesseract-led interface, and surface as archive records.

Live: [zayn.chaostudio.org](https://zayn.chaostudio.org)

## Stack

```
Vite + React 19 + TypeScript + Three.js
```

## Runtime model

React only mounts the shell. The live archive experience runs through
`src/archive/archiveEngine.ts`, which owns the Three.js scene, DOM updates,
routing, language state, and event handling after `ArchiveExperience` mounts.

The React implementation under `src/state/` is a migration target/reference
path, not the active render tree.

## Routes

| Path | State |
| --- | --- |
| `/` | closed field |
| `/archive` | open signal queue |
| `/projects/:slug` | project record |
| `/about` | about overlay |
| `/contact` | contact overlay |

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + bundle → dist/
npm run preview   # serve dist/ locally
```

## Deploy

Docker image is built and pushed to `ghcr.io/epochedrift/portfolio-pord:latest` automatically on every push to `main` via GitHub Actions.

To verify the production image locally:

```bash
docker build -t portfolio-pord:local .
docker run --rm -p 3088:80 portfolio-pord:local
```

To deploy on VPS:

```bash
docker pull ghcr.io/epochedrift/portfolio-pord:latest
docker compose -f /opt/portfolio-pord/docker-compose.yml up -d --force-recreate
docker image prune -f
```

Caddy reverse-proxies port 3010 to the container.

## Structure

```
src/archive/          Engine, markup, shell styles (live runtime)
src/assets/projects/  Project images and diagrams
src/data/             Bilingual project content and site copy
src/styles/           Shared CSS tokens and global styles
src/state/            Archive state hooks (migration target)
src/routes/           URL state helpers
src/visual-anchor/    Tesseract geometry and motion helpers
```

## Design system

The studio's visual language is maintained in a separate repo,
[Chaostudio-DesignSystem](https://github.com/EpocheDrift/Chaostudio-DesignSystem)
(tokens, principles, living styleguide). Those tokens were extracted from this
portfolio's `src/styles/tokens.css`. The portfolio does not consume that repo yet
— adopting it is deferred so it can't break the live build. Keep visual changes
here aligned with the design system.

## Adding a project

1. Add assets to `src/assets/projects/<slug>/`
2. Add a `ProjectRecord` entry to `src/data/projects.ts`
3. Choose a detail template:
   - `slab` for long-form records with a horizontal header and vertical sections
   - `case` for dossier-style records with a fixed left sidebar
4. Add section media through `mediaIds`/project media records so the engine can apply media-aware layout classes
5. Run `npm run build` to verify
