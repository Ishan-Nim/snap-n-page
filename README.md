# Project Name

Frontend web app built with **Vite + React + TypeScript + Tailwind CSS + shadcn-ui**.

---

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui

---

## Getting Started

### Prerequisites
- Node.js + npm (install via nvm if you want): https://github.com/nvm-sh/nvm

### Install & Run (Local)
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev


The dev server will print a local URL (commonly http://localhost:5173).

Build & Preview
Production Build
npm run build


Build output goes to:

dist/

Preview the Production Build Locally
npm run preview

Editing the Project (No Platform Required)
Option A — Use your preferred IDE (recommended)

Clone the repo

Install dependencies with npm install

Run npm run dev

Edit files, commit, and push

Option B — Edit directly in GitHub

Open the file you want to change

Click the pencil (Edit)

Commit your changes

Option C — GitHub Codespaces

Repo → Code → Codespaces → New codespace

Make changes

Commit and push

Deployment

This project builds to static files in dist/. Deployment is:

npm install

npm run build

Upload/serve the dist/ folder on a static host

Recommended Hosts
Vercel

Framework preset: Vite

Build command: npm run build

Output directory: dist

Netlify

Build command: npm run build

Publish directory: dist

Cloudflare Pages

Build command: npm run build

Build output directory: dist

GitHub Pages

GitHub Pages usually serves from a repo subpath, so you may need to set Vite’s base path.

Update vite.config.ts:

If deploying to https://<user>.github.io/<repo>/, set:

base: "/<repo>/"

Build:

npm run build


Deploy dist/ to GitHub Pages (commonly using a GitHub Action)

If you deploy to a root domain (e.g. https://example.com), you typically keep base: "/".

Environment Variables

If you need environment variables:

Local: create a .env file

Hosting provider: set the same variables in the provider’s dashboard

Vite only exposes variables to the browser if they start with VITE_.

Example:

VITE_API_URL=https://api.example.com

Useful Commands

npm run dev — start dev server

npm run build — build for production

npm run preview — preview production build locally
