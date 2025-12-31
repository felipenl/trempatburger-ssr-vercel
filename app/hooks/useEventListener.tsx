import { useEffect, useRef } from 'react'
import { isBrowser } from '@lib/environment'

type EventCallback<T extends Event = Event> = (_event: T) => void

export default function useEventListener<T extends Event = Event>(
  eventType: string,
  callback: EventCallback<T>,
  element: EventTarget | null = isBrowser ? globalThis.window : null
) {
  const callbackRef = useRef<EventCallback<T>>(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!isBrowser || element == null) return

    const handler = (event: Event) => callbackRef.current(event as T)

    element.addEventListener(eventType, handler)
    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}
