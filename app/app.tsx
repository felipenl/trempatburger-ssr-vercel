import { ThemeProvider } from '@components/theme/theme-provider'
import LocaleProvider from '@components/locale/locale-provider'
import { Outlet } from 'react-router'
import initGA from '@lib/analytics'
import { useAnalytics } from './hooks/useAnalytics'

initGA()

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
