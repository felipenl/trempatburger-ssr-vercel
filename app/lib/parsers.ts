// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setDeep = (obj: Record<string, any>, path: string, value: string): void => {
  const keys = path.split('.')
  let current = obj

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (i === keys.length - 1) {
      current[key] = value
      continue
    }

    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    }

    current = current[key]
  }
}
