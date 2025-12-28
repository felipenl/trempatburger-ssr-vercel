import { initI18nClient } from '@lib/locales'
import type { i18n, Resource } from 'i18next'
import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import TrempatSpinner from '../trempat-spinner'
import { type SupportedLocale } from '@/types/locales'

type LocaleProviderProps = {
  children: React.ReactNode
  resources: Record<SupportedLocale, Resource>
}

export default function LocaleProvider({ children, resources }: LocaleProviderProps) {
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null)

  useEffect(() => {
    initI18nClient(resources).then(setI18nInstance)
  }, [resources])

  if (!i18nInstance) return <TrempatSpinner />

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
}
