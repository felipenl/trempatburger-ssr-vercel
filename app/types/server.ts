import type { Theme } from '@/components/theme/theme-provider'
import type { Locales, LocalesResources, SupportedLocale } from './locales'

export type ServerContext = {
  theme?: Theme
  lang?: SupportedLocale
  prefersDark?: boolean
  locales: {
    resources: LocalesResources
    locales: Locales
  }
}
