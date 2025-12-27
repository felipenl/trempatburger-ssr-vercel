import {
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LoaderFunctionArgs,
} from 'react-router'
import type { ReactNode } from 'react'
import type { ServerContext } from '@/types/server'
import ErrorBoundary from '@routes/error'
import { ThemeProvider } from '@/components/theme/theme-provider'
import LocaleProvider from '@components/locale/locale-provider'
import buildServerContext from './components/server/server-context'
import { meta, links } from './meta'
import { Analytics } from '@vercel/analytics/react'

export async function loader(args: LoaderFunctionArgs) {
  return await buildServerContext(args)
}

export function Layout({ children }: { children: ReactNode }) {
  const data = useLoaderData<ServerContext>()

  return (
    <html lang={data?.lang} className={data.theme} suppressHydrationWarning>
      <head>
        <script src="/scripts/dark-mode.js" />
        <Links />
      </head>
      <body>
        <Analytics />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <Outlet />
      </LocaleProvider>
    </ThemeProvider>
  )
}

export { ErrorBoundary, meta, links }
