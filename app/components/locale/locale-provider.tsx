import { initI18nClient } from '@lib/locales'
import type { i18n } from 'i18next'
import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import TrempatSpinner from '../trempat-spinner'

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null)

  useEffect(() => {
    initI18nClient().then(setI18nInstance)
  }, [])

  if (!i18nInstance) return <TrempatSpinner />

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
}
