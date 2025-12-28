import { Outlet, useLoaderData } from 'react-router'
import LocaleProvider from './components/locale/locale-provider'
import { ThemeProvider } from './components/theme/theme-provider'
import type { ServerContext } from './types/server'

export default function App() {
  const { theme, locales } = useLoaderData<ServerContext>()

  return (
    <ThemeProvider defaultTheme={theme}>
      <LocaleProvider resources={locales}>
        <Outlet />
      </LocaleProvider>
    </ThemeProvider>
  )
}
