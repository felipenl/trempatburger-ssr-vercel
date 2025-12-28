'use client'

import { initI18nClient, setLocales } from '@lib/locales'
import type { i18n } from 'i18next'
import React, { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import TrempatSpinner from '../trempat-spinner'
import { type LocalesResources, type LocalesType } from '@/types/locales'

type LocaleProviderProps = {
  children: React.ReactNode
  locales: LocalesType
  resources: LocalesResources
}

export default function LocaleProvider({ children, resources, locales }: LocaleProviderProps) {
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null)

  useEffect(() => {
    initI18nClient(resources).then(setI18nInstance)
  }, [resources])

  useEffect(() => {
    setLocales(locales)
  }, [locales])

  if (!i18nInstance) return <TrempatSpinner />

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>
}
