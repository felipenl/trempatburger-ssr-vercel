import { Skeleton } from '@components/ui/skeleton'
import useIntersectionObserver, { type UseIOOptions } from '@hooks/useIntersectionObserver'
import * as React from 'react'

type LazyImgProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src?: string
  alt: string
  options?: UseIOOptions
  width?: number | string
  height?: number | string
}

export default function LazyImg({ src, alt, options, className, ...rest }: LazyImgProps) {
  const imgRef = React.useRef<HTMLImageElement | null>(null)
  const visible = useIntersectionObserver(imgRef, options)

  if (!src) {
    return <Skeleton className="inset-0 h-full w-full" />
  }

  return (
    <>
      {!visible && <Skeleton className="inset-0 h-full w-full" />}
      <img
        ref={imgRef}
        alt={alt}
        src={src}
        loading="lazy"
        decoding="async"
        className={className}
        {...rest}
      />
    </>
  )
}
