# Zayn Archive Interface

Personal portfolio archive built as a WebGL field system. Projects enter as signals, route through a tesseract-led interface, and surface as archive records.

Live: [archive.chaostudio.org](https://archive.chaostudio.org)

## Stack

```
Vite + React 19 + TypeScript + Three.js
```

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + bundle → dist/
npm run preview   # serve dist/ locally
```

## Deploy

Docker image is built and pushed to `ghcr.io/epochedrift/portfolio-pord:latest` automatically on every push to `main` via GitHub Actions.

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
src/components/       Extracted React components (migration target)
src/state/            Archive state hooks (migration target)
src/routes/           URL state helpers
src/visual-anchor/    Tesseract geometry and motion helpers
```

## Adding a project

1. Add assets to `src/assets/projects/<slug>/`
2. Add a `ProjectRecord` entry to `src/data/projects.ts`
3. Run `npm run build` to verify
