import { ThemeProvider } from '@components/theme/theme-provider'
import LocaleProvider from '@components/locale/locale-provider'
import { Outlet } from 'react-router'
import '@lib/analytics'
import { useAnalytics } from './hooks/useAnalytics'

export default function App() {
  useAnalytics()

  return (
    <ThemeProvider>
      <LocaleProvider>
        <Outlet />
      </LocaleProvider>
    </ThemeProvider>
  )
}
