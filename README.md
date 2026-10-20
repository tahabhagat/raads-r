# RAADS-R

A RAADS-R self-assessment app built with Next.js and React, and packaged for desktop with Tauri 2. The app presents the questionnaire, calculates total and category scores, and shows a summary of responses.

> This app is for self-reflection only. It is not a diagnostic tool and does not replace an evaluation by a qualified professional.

## Requirements

- [Bun](https://bun.sh/) 1.4.0
- [Rust](https://www.rust-lang.org/tools/install) (stable toolchain)
- The native build prerequisites for [Tauri 2](https://v2.tauri.app/start/prerequisites/) on your operating system

## Getting started

Install the JavaScript dependencies:

```sh
bun install
```

Run the web app locally:

```sh
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Run the desktop app in development mode:

```sh
bunx tauri dev
```

## Build

Create a static web export in `out/`:

```sh
bun run build
```

Build a desktop app bundle for the current platform:

```sh
bunx tauri build
```

Tauri runs the frontend build as part of its build process. Bundles are written under `src-tauri/target/release/bundle/`.

## Deploy to the web

The app is a fully static site, so it can be hosted without a server. The workflow in `.github/workflows/deploy.yml` builds it and publishes it to GitHub Pages on every push to `main`.

One-time setup: in the GitHub repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**. The site is then served at `https://<owner>.github.io/<repo>/`.

Because GitHub Pages serves the site from a sub-path, the workflow sets `PAGES_BASE_PATH=/<repo>` for the build. Local and Tauri builds leave it unset.

## Project structure

- `app/` — Next.js pages for the home screen, questionnaire, and results
- `data/questions.json` — questionnaire text
- `data/categories.json` — question-to-category scoring data
- `src-tauri/` — Tauri desktop application and bundle configuration
- `.github/workflows/deploy.yml` — GitHub Pages deployment


The questionnaire responses are held in browser session storage to display the results during the current session.
