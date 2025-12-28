import { setDeep } from '@/lib/parsers'
import supabase, { handleResponse } from '@lib/supabase'
import {
  type LocalesResources,
  type LocalesType,
  type LocaleWithTranslations,
  type Translation,
} from '@/types/locales'

export const getLocales = async () => {
  const locales = await supabase.from('locales').select('*').then(handleResponse)

  return locales as LocalesType[]
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
      name,
      translations (key, value)
      `
    )
    .then(handleResponse)) as LocaleWithTranslations[]

  const resources: LocalesResources = {}
  const locales: LocalesType = {}

  if (!data) {
    return {
      resources,
      locales,
    }
  }

  for (const locale of data) {
    const translationsMap = {}

    if (locale.translations) {
      locale.translations.forEach((row: Translation) => {
        setDeep(translationsMap, row.key, row.value)
      })
    }

    locales[locale.code] = {
      id: locale.code,
      code: locale.code,
      name: locale.name,
    }

    resources[locale.code] = {
      translation: translationsMap,
    }
  }

  return { resources, locales }
}
