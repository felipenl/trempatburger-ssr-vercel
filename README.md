# Trempat Burger SSR React Router (Vercel)

Server-side rendered React application using React Router and the Vercel adapter. This repo contains the app source under `app/`, reusable UI in `components/`, and static assets in `public/`.

**Highlights**

- Server-side rendering (SSR) with `@react-router/node` and `@vercel/react-router`
- TypeScript-first codebase
- Tailwind CSS for styling
- i18n support with `i18next` + language detector
- Vercel analytics integration

## Prerequisites

- Node.js (recommended: 18+)
- npm (this project uses npm scripts)

## Install

Install dependencies:

```bash
npm install
```

## Available scripts

- `npm run dev` start the development server with HMR
- `npm run build` create a production build
- `npm run start` serve the built server (`react-router-serve`)
- `npm run typecheck` run `react-router` typegen + `tsc`
- `npm run lint` run ESLint
- `npm run lint:fix` run ESLint and auto-fix
- `npm run format` run Prettier formatting

Use these during development and CI to validate code quality and types.

## Development

Start the dev server:

```bash
npm run dev
```

The dev server exposes the app locally (default port depends on the dev server; common ports are `5173` or as printed by the CLI).

## Build & Run (Production)

Create an optimized production build:

```bash
npm run build
```

Serve the built server:

```bash
npm run start
```

The build output structure typically contains a `client/` folder for static assets and a `server/` entrypoint.

## Deployment

Vercel

- This project is prepared for Vercel (uses `@vercel/react-router` and `@vercel/analytics`). To deploy, connect the repository in the Vercel dashboard and use the default build command (`npm run build`). Vercel will pick up the server adapter and handle SSR automatically.

Docker

- A `Dockerfile` is included for containerized deployments. Build and run with:

```bash
docker build -t trempatburger-ssr .
docker run -p 3000:3000 trempatburger-ssr
```

Other platforms that accept Node containers (Cloud Run, ECS, Fly, Railway) can also be used.

## Project Layout

- `app/` application routes, entry points, assets and top-level UI
- `components/` reusable components and UI primitives
- `public/` static files served as-is (fonts, images)
- `styles/` global CSS and Tailwind configuration
- `scripts/` small helper scripts (e.g. `dark-mode.js`)

## Notes

- Internationalization files are under `app/assets/locales/` and `public/images/locales/`.
- Tailwind configuration is in `tailwind.config.ts` and integrated via Vite.

## References

- React Router docs: https://reactrouter.com/
- Vercel deployment docs: https://vercel.com/docs
