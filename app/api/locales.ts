import { setDeep } from '@/lib/parsers'
import supabase, { handleResponse } from '@lib/supabase'
import type { Locale, LocaleWithTranslations, Translation } from '@/types/locales'
import type { Resource } from 'i18next'

export const getLocales = async () => {
  const locales = await supabase.from('locales').select('*').then(handleResponse)

  return locales as Locale[]
}

export const getTranslations = async (locale: string) => {
  const translations = (await supabase
    .from('translations')
    .select('key, value')
    .eq('locale', locale)
    .then(handleResponse)) as Translation[]

  const result = {}

  for (const row of translations) {
    setDeep(result, row.key, row.value)
  }

  return result
}

export const getAllResources = async () => {
  const data = (await supabase
    .from('locales')
    .select(
      `code,
      translations (key, value)
      `
    )
    .then(handleResponse)) as LocaleWithTranslations[]

  const resources: Record<string, Resource> = {}

  if (!data) return resources

  for (const locale of data) {
    const translationsMap = {}

    if (locale.translations) {
      locale.translations.forEach((row: Translation) => {
        setDeep(translationsMap, row.key, row.value)
      })
    }

    resources[locale.code] = {
      translation: translationsMap,
    }
  }

  return resources
}
