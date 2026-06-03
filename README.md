# Fangshuo Xu Portfolio

This repository contains a static academic portfolio website for Fangshuo Xu, designed for GitHub Pages deployment and research-oriented graduate application presentation.

## Tech Stack

- React
- Vite
- TypeScript
- Static assets under `public/assets`

## Local Development

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local URL such as:

```text
http://localhost:5173
```

## Build

Create a production build:

```bash
npm run build
```

The generated static files will be placed in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## Assets

Place local photos, demo videos, and paper files in:

```text
public/assets/
```

Expected placeholders:

```text
public/assets/profile-photo.jpg
public/assets/demo-stereo-vo.mp4
public/assets/demo-auto-aiming.mp4
public/assets/hsi-paper.pdf
```

The current demo gallery uses:

```text
public/assets/demo-stereo-vo.mp4
public/assets/demo-auto-aiming.mp4
```

If a video file is missing, the website displays a clean placeholder instead of a broken media panel.

## GitHub Pages Deployment

For a user or organization site, name the repository:

```text
TurnXu.github.io
```

Then push this project to:

```text
https://github.com/TurnXu/TurnXu.github.io
```

In GitHub:

1. Open the repository settings.
2. Go to `Pages`.
3. Set the source to GitHub Actions or deploy the built static files from the default branch according to your preferred workflow.
4. If using the repository name `TurnXu.github.io`, the final site address should be:

```text
https://TurnXu.github.io
```

## Manual Deployment Option

Build locally:

```bash
npm run build
```

Then deploy the generated `dist/` directory using your preferred GitHub Pages workflow.
