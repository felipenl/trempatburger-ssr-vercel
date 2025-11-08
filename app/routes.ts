import { index, layout, route, type RouteConfig } from '@react-router/dev/routes';

export const paths = [
  { id: 'home', path: '/', label: 'nav.home', file: 'routes/home.tsx' },
  { id: 'menu', path: '/carta', label: 'nav.menu', file: 'routes/menu.tsx' },
  { id: 'about', path: '/about', label: 'nav.about', file: 'routes/about.tsx' },
] as const;

export default [
  layout('components/layout/layout.tsx', [
    index('routes/home.tsx'),
    route('carta', 'routes/menu.tsx'),
    route('about', 'routes/about.tsx'),
    route('*', 'routes/not-found.tsx'),
  ]),
] satisfies RouteConfig;
