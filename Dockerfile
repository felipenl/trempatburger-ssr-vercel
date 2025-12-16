FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

FROM base AS development-dependencies-env
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

FROM base AS production-dependencies-env
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile --prod

FROM base AS build-env
COPY . .
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
RUN pnpm run build

FROM node:20-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build

CMD ["pnpm", "run", "start"]
