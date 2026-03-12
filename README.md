# explore-uswds

An exploration project demonstrating how to integrate **[USWDS (U.S. Web Design System)](https://designsystem.digital.gov/how-to-use-uswds/)** within an **[Astro](https://docs.astro.build/en/tutorial/0-introduction/)** static-site project.

![Homepage screenshot](https://github.com/user-attachments/assets/39a6d4d0-93d0-4c26-9999-fd0b8398117f)

## What's inside

| Path | Purpose |
|------|---------|
| `src/layouts/Layout.astro` | Base layout — USWDS banner, header, nav, footer, CSS/JS links |
| `src/pages/index.astro` | Home page — hero, feature cards, getting-started cards |
| `src/pages/components.astro` | USWDS component showcase — alerts, buttons, forms, accordion, table, tags |
| `src/pages/typography.astro` | Type scale, headings, color palette, prose styles |
| `scripts/setup-uswds.mjs` | Copies USWDS static assets (CSS, JS, fonts, images) from `node_modules` to `public/uswds/` |

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/Hamberfim/explore-uswds.git
cd explore-uswds

# 2. Install dependencies (also copies USWDS assets via the predev script)
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Astro dev server (auto-runs `setup` first) |
| `npm run build` | Build the static site to `dist/` (auto-runs `setup` first) |
| `npm run preview` | Preview the production build locally |
| `npm run setup` | Copy USWDS assets from `node_modules` to `public/uswds/` |

## How USWDS is integrated

1. **Install** — `@uswds/uswds` is a regular npm dependency.
2. **Copy assets** — `scripts/setup-uswds.mjs` copies the compiled CSS, JavaScript, fonts, and images from `node_modules/@uswds/uswds/dist/` into `public/uswds/` so Astro can serve them as static files. This runs automatically before `dev` and `build`.
3. **Link in the layout** — `src/layouts/Layout.astro` loads:
   - `/uswds/js/uswds-init.min.js` in `<head>` (prevents a flash of unstyled content)
   - `/uswds/css/uswds.min.css` stylesheet
   - `/uswds/js/uswds.min.js` at the end of `<body>` (enables interactive components)
4. **Use components** — Any Astro page wrapped in `<Layout>` can use USWDS HTML class names directly.

## Resources

- [USWDS Documentation](https://designsystem.digital.gov/)
- [USWDS Component library](https://designsystem.digital.gov/components/overview/)
- [Astro Documentation](https://docs.astro.build/)
