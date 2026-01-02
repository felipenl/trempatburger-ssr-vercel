import { index, layout, route, type RouteConfig } from '@react-router/dev/routes'

export const paths = [
  {
    id: 'home',
    path: '/',
    label: 'nav.home',
    file: 'routes/home.tsx',
    priority: '1.0',
    changefreq: 'daily',
  },
  {
    id: 'menu',
    path: '/carta',
    label: 'nav.menu',
    file: 'routes/menu.tsx',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    id: 'about',
    path: '/contacte',
    label: 'nav.about',
    file: 'routes/contacte.tsx',
    priority: '0.8',
    changefreq: 'monthly',
  },
] as const

export default [
  layout('components/layout/layout.tsx', [
    index('routes/home.tsx'),
    route('carta', 'routes/menu.tsx'),
    route('contacte', 'routes/contacte.tsx'),
    route('home', 'routes/home-redirect.tsx'),
    route('*', 'routes/not-found.tsx'),
  ]),
  route('sitemap.xml', 'routes/sitemap[.]xml.tsx'),
] satisfies RouteConfig
