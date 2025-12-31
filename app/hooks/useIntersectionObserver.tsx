import * as React from 'react'

export type UseIOOptions = {
  root?: Element | Document | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
  defaultVisible?: boolean
}

export default function useIntersectionObserver<T extends Element | null>(
  targetRef: React.RefObject<T>,
  opts: UseIOOptions = {}
) {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    once = true,
    defaultVisible = false,
  } = opts

  const [visible, setVisible] = React.useState(defaultVisible)

  React.useEffect(() => {
    const el = targetRef.current
    if (!el) return

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            if (once) {
              io.disconnect()
              break
            }
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      { root, rootMargin, threshold }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [targetRef, root, rootMargin, threshold, once])

  return visible
}
