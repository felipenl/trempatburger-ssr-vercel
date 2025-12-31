'use client'

import { useEffect } from 'react'

export default function useOnce<T extends unknown[]>(cb: (..._args: T) => void, ...args: T) {
  useEffect(() => {
    cb(...args)
  }, [])
}
