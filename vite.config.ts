import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import devtoolsJson from 'vite-plugin-devtools-json';
import svgr from 'vite-plugin-svgr';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    tailwindcss(),
    devtoolsJson(),
    vercel(),
    svgr({
      svgrOptions: { icon: false },
      include: '**/*.svg?react'
    })
  ]
})
