'use client'

import { isBrowser } from '@lib/environment'
import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

export function useInstantScrollOnNavigate() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (!isBrowser) return

    window.scroll({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
}
