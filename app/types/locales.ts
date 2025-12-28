import type { Resource } from 'i18next'

export const Locales = {} as Record<string, Locale>

export const LocaleFallBack = 'ca' as const

export type LocalesType = typeof Locales
export type SupportedLocale = keyof typeof Locales

export type Messages = { [key: string]: string | Messages }

export const LOCALE_STORAGE_KEY = 'locale:v1' as const
export const SESSION_STORAGE_KEY = 'translations:v1' as const

export type LocalesResources = Record<SupportedLocale, Resource>

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
  name: string
  translations: Translation[]
}
