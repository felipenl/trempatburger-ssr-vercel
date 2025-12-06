import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LangDetector from 'i18next-browser-languagedetector';
import { Locales, LocaleFallBack, LOCALE_STORAGE_KEY, type SupportedLocale } from '@/types/locales';
import { isBrowser } from './environment';

export function sanitize(code: string): SupportedLocale {
  return code.toLowerCase().split('-')[0] as SupportedLocale;
}

export function setDocumentLanguage(lang: string) {
  if (!isBrowser) return;
  const norm = sanitize(lang);
  document.documentElement.setAttribute('lang', norm);
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, norm);
  } catch {
    console.warn('Could not write locale to localStorage');
  }
}

export function getStoredLocale(): SupportedLocale | null {
  if (!isBrowser) return null;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored ? sanitize(stored) : null;
}

export async function loadResources(): Promise<
  Record<SupportedLocale, { common: Record<string, string> }>
> {
  const resources: Record<SupportedLocale, { common: Record<string, string> }> = {};

  for (const key of Object.keys(Locales) as SupportedLocale[]) {
    try {
      const messages = await import(`../assets/locales/${key}.json`);
      resources[key] = { common: messages.default || messages };
    } catch {
      console.warn(`No se encontró JSON para el locale "${key}"`);
    }
  }

  return resources;
}

export async function initI18nSSR(lang?: SupportedLocale) {
  const resources = await loadResources();

  await i18n
    .use(initReactI18next)
    .use(LangDetector)
    .init({
      resources,
      fallbackLng: LocaleFallBack,
      supportedLngs: Object.keys(Locales) as SupportedLocale[],
      ns: ['common'],
      defaultNS: 'common',
      load: 'languageOnly',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      detection: {
        order: ['localStorage', 'cookie', 'navigator', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
        lookupLocalStorage: LOCALE_STORAGE_KEY,
      },
      lng: lang || LocaleFallBack,
    });

  if (isBrowser) {
    i18n.on('languageChanged', lng => setDocumentLanguage(lng));
  }

  return i18n;
}

export function detectLanguage(headerLang: string | null): SupportedLocale {
  if (!headerLang) return LocaleFallBack;

  const code = sanitize(headerLang);

  return Locales[code] ? code : LocaleFallBack;
}

export async function initI18nClient() {
  const stored = getStoredLocale();
  const i18nInstance = await initI18nSSR(stored || undefined);

  if (isBrowser) setDocumentLanguage(i18nInstance.language);

  return i18nInstance;
}

export function setAppLanguage(raw: string) {
  const norm = sanitize(raw);
  const pick = Locales[norm] ? norm : (LocaleFallBack as SupportedLocale);
  setDocumentLanguage(pick);
  void i18n.changeLanguage(pick);
}
