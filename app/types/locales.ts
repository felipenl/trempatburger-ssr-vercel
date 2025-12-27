export const Locales = {} as Record<string, Locale>

export const LocaleFallBack = 'ca' as const

export type SupportedLocale = keyof typeof Locales

export type Messages = { [key: string]: string | Messages }

export const LOCALE_STORAGE_KEY = 'locale:v1' as const

export type Locale = {
  id: string
  code: string
  name: string
}

export type Translation = {
  key: string
  value: string
}

export type LocaleWithTranslations = {
  code: string
  translations: Translation[]
}
