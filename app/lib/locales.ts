import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LangDetector from 'i18next-browser-languagedetector'
import {
  LocaleFallBack,
  LOCALE_STORAGE_KEY,
  type SupportedLocale,
  type LocalesType,
  type LocalesResources,
  Locales,
} from '@/types/locales'
import { isBrowser } from './environment'

export function sanitize(code: string): string {
  return code.toLowerCase().split('-')[0] as SupportedLocale
}

export function setDocumentLanguage(lang: string) {
  if (!isBrowser) return
  const norm = sanitize(lang)
  document.documentElement.setAttribute('lang', norm)
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, norm)
  } catch {
    console.warn('Could not write locale to localStorage')
  }
}

export function getStoredLocale(): SupportedLocale | null {
  if (!isBrowser) return null
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  return stored ? sanitize(stored) : null
}

export function setLocales(locales: LocalesType) {
  Object.assign(Locales, locales)
}

export async function initI18nSSR(lang: SupportedLocale | null, resources: LocalesResources) {
  await i18n
    .use(initReactI18next)
    .use(LangDetector)
    .init({
      resources,
      fallbackLng: LocaleFallBack,
      supportedLngs: Object.keys(resources),
      load: 'languageOnly',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      detection: {
        order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
        lookupLocalStorage: LOCALE_STORAGE_KEY,
      },
      lng: lang || LocaleFallBack,
    })

  if (isBrowser) {
    i18n.on('languageChanged', lng => setDocumentLanguage(lng))
  }

  return i18n
}

export function detectLanguage(headerLang: string | null): SupportedLocale {
  if (!headerLang) return LocaleFallBack

  const code = sanitize(headerLang)

  return Locales[code] ? code : LocaleFallBack
}

export async function initI18nClient(resources: LocalesResources) {
  const i18nInstance = await initI18nSSR(getStoredLocale(), resources)

  if (isBrowser) setDocumentLanguage(i18nInstance.language)

  return i18nInstance
}

export function setAppLanguage(raw: string) {
  const norm = sanitize(raw)
  const pick = Locales[norm] ? norm : (LocaleFallBack as SupportedLocale)
  setDocumentLanguage(pick)
  void i18n.changeLanguage(pick)
}
