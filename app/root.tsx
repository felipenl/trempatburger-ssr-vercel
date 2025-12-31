import {
  Links,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LoaderFunctionArgs,
} from 'react-router'
import type { ReactNode } from 'react'
import type { ServerContext } from '@/types/server'
import ErrorBoundary from '@routes/error'
import buildServerContext from './components/server/server-context'
import { meta, links } from './meta'
import { Analytics } from '@vercel/analytics/react'
import App from './app'

export async function loader(args: LoaderFunctionArgs) {
  return await buildServerContext(args)
}

export function Layout({ children }: { children: ReactNode }) {
  const data = useLoaderData<ServerContext>()

  return (
    <html lang={data?.lang} className={data.theme} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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

export default App

export { ErrorBoundary, meta, links }
