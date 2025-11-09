import type { Theme } from '@components/theme-provider'
import type { SupportedLocale } from './locales'

export type ServerContext = {
  theme?: Theme
  lang?: SupportedLocale
  prefersDark?: boolean
}
