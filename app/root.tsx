import {
  Links,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  type LoaderFunctionArgs,
  data,
} from 'react-router'
import type { ReactNode } from 'react'
import type { ServerContext } from '@/types/server'
import ErrorBoundary from '@routes/error'
import buildServerContext from './components/server/server-context'
import { meta, links } from './meta'
import App from './app'
import { Analytics } from '@vercel/analytics/react'

export async function loader(args: LoaderFunctionArgs) {
  const serverContext = await buildServerContext(args)
  return data(serverContext, {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=600',
    },
  })
}

export function Layout({ children }: { children: ReactNode }) {
  const data = useLoaderData<ServerContext>()

  return (
    <html lang={data?.lang} className={data.theme} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <script src="/scripts/dark-mode.js" />
        <Links />
      </head>
      <body>
        <Analytics framework="react-router" />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default App

export { ErrorBoundary, meta, links }
