# Development Guide

This document outlines the commands and operations used to build and maintain this personal portfolio website.

## Prerequisites

-   **Node.js**: Version 20.x (Enforced by `.nvmrc`).
    -   *Note*: If you use `nvm`, run `nvm use` in the project root.
-   **Package Manager**: `npm` provided with Node.js.

## Project Setup

To get started with the project locally:

1.  **Clone the repository**:
    ```bash
    git clone git@github.com:Lchris22/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Development

To start the local development server:

```bash
npm run dev
```
This runs Astro's dev server at `http://localhost:4321`.

## Building for Production

To create a production build (outputs to `dist/`):

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment Operations

The project is configured for continuous deployment on **Netlify** via GitHub.

### Netlify Configuration (`netlify.toml`)
-   **Build Command**: `npm run build`
-   **Publish Directory**: `dist`
-   **Node Version**: Set to `20` in `[build.environment]`.

### Workflow
1.  **Make changes** to the code.
2.  **Commit and Push**:
    ```bash
    git add .
    git commit -m "Description of changes"
    git push origin main
    ```
3.  **Netlify** will automatically detect the push and trigger a new deployment.

### Troubleshooting
-   **Node Version Mismatch**: Ensure `.nvmrc` is present and matches the `NODE_VERSION` in `netlify.toml` (both set to `20`).
-   **Missing Build Folder**: Astro outputs to `dist`, not `build`. Ensure `netlify.toml` has `publish = "dist"`.

## Project Structure

-   `src/components/`: Reusable UI components (Hero, Projects, etc.).
-   `src/layouts/`: Main page layouts (`Layout.astro`).
-   `src/pages/`: Route definitions (`index.astro`).
-   `src/styles/`: Global CSS and Tailwind directives.
-   `public/`: Static assets (favicon, images).
