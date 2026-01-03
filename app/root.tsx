import {
  Links,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  Meta,
  type LoaderFunctionArgs,
} from 'react-router'
import type { ReactNode } from 'react'
import type { ServerContext } from '@/types/server'
import ErrorBoundary from '@routes/error'
import buildServerContext from './components/server/server-context'
import App from './app'
import type { Route } from './+types/root'
import { getLinks, getMeta } from './meta'

export async function loader(args: LoaderFunctionArgs) {
  return await buildServerContext(args)
}

export const links: Route.LinksFunction = () => getLinks()

export const meta: Route.MetaFunction = ({ location }) => {
  return getMeta(location.pathname)
}

export function Layout({ children }: { children: ReactNode }) {
  const data = useLoaderData<ServerContext>()

  return (
    <html lang={data?.lang} className={data.theme} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Meta />
        <Links />
        <script src="/scripts/dark-mode.js" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default App

export { ErrorBoundary }
