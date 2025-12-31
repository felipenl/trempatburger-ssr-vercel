import { useInView, type UseInViewOptions } from 'framer-motion'
import { useRef } from 'react'

export default function useLazyMount<T extends HTMLElement>({
  margin = '-50px',
  once = true,
}: UseInViewOptions) {
  const ref = useRef<T>(null)
  const isInView = useInView(ref, { once, margin })
  return { ref, isInView }
}
