export function debounce<T extends (..._args: unknown[]) => void>(func: T, wait = 200): T {
  let timeoutId: ReturnType<typeof globalThis.setTimeout> | null = null
  return function (...args: Parameters<T>) {
    if (timeoutId) globalThis.clearTimeout(timeoutId)
    timeoutId = globalThis.setTimeout(() => func(...args), wait)
  } as T
}
