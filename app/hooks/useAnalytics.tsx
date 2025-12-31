import { logPageView } from '@lib/analytics'
import { useEffect } from 'react'
import { useLocation } from 'react-router'

export const useAnalytics = (): void => {
  const location = useLocation()

  useEffect(() => {
    const currentPath = location.pathname
    logPageView(currentPath)
  }, [location.pathname])
}
