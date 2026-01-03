import { ThemeProvider } from '@components/theme/theme-provider'
import LocaleProvider from '@components/locale/locale-provider'
import { Outlet } from 'react-router'
import { useAnalytics } from './hooks/useAnalytics'
import CookieBanner from '@components/cookie-banner'

export default function App() {
  useAnalytics()

  return (
    <ThemeProvider>
      <LocaleProvider>
        <Outlet />
        <CookieBanner />
      </LocaleProvider>
    </ThemeProvider>
  )
}
