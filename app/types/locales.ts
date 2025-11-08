export const Locales = {
  en: { code: 'en', name: 'English' },
  es: { code: 'es', name: 'Castellano' },
  ca: { code: 'ca', name: 'Català' },
} as Record<string, Locale>;

export const LocaleFallBack = 'ca' as const;

export type SupportedLocale = keyof typeof Locales;

export type Locale = {
  code: SupportedLocale;
  name: string;
};

export type Messages = { [key: string]: string | Messages };

export const LOCALE_STORAGE_KEY = 'locale:v1' as const;
