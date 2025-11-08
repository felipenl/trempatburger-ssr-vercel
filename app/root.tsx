import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router';
import type { Route } from './+types/root';
import ErrorPage from '@routes/error';
import { ThemeProvider } from '@components/theme-provider';
import stylesheet from '@styles/main.css?url';
import type { ReactNode } from 'react';
import LocaleProvider from '@components/locale-provider';
import type { ServerContext } from '@/types/server';
import buildServerContext from './lib/server-context';
import Meta from './meta';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
  },
  { rel: 'stylesheet', href: stylesheet }
]

export async function loader(args: LoaderFunctionArgs) {
  return await buildServerContext(args)
}

export const meta: MetaFunction = () => Meta()

export function Layout({ children }: { children: ReactNode }) {
  const data = useLoaderData<ServerContext>()
  return (
    <html lang={data?.lang}>
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <meta charSet='utf-8' />
        <meta name='color-scheme' content='dark light' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </LocaleProvider>
  )
}

export const ErrorBoundary = ErrorPage
