# Portfolio Production

This repository contains the buildable production version of the portfolio archive interface.

The app was migrated from:

```text
/Users/zaynw/Documents/Projects/portfolio/site
```

Research notes, mirrored references, and exploratory HTML prototypes should stay in the research archive:

```text
/Users/zaynw/Documents/Projects/portfolio
```

## Stack

```text
Vite + React + TypeScript + Three.js
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

```text
src/archive/          Archive experience shell, markup, and interaction engine
src/assets/projects/ Project images and diagrams
src/components/       Extracted React components from the production scaffold
src/data/             Structured bilingual project content and navigation copy
src/routes/           URL state helpers
src/state/            Archive interaction state
src/styles/           Shared tokens and global styles
src/visual-anchor/    Tesseract field geometry and motion helpers
```

## Production Notes

- Keep production code, content, assets, and deploy configuration in this repo.
- Keep exploratory branches, downloaded mirrors, and visual experiments in the original portfolio archive.
- Run `npm run build` before treating a change as ready to ship.
