import type { Theme } from '@/components/theme/theme-provider'
import type { SupportedLocale } from './locales'

export type ServerContext = {
  theme?: Theme
  lang?: SupportedLocale
  prefersDark?: boolean
}
