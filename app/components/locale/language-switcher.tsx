import { Button } from '@components/ui/button'
import { Locales } from '@/types/locales'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LocaleFallBack } from '@/types/locales'
import { Globe } from 'lucide-react'
import LazyImg from '@components/lazy/lazy-image'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (e: React.MouseEvent) => {
    const code = e.currentTarget.getAttribute('data-value')
    if (!code) return
    i18n.changeLanguage(code)
  }

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || LocaleFallBack
  }, [i18n.resolvedLanguage])

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild title={t('lang.toggle')}>
        <Button variant="outline" size="icon">
          <Globe className="icon" />
          <span className="sr-only">{t('lang.toggle')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {Object.values(Locales).map(l => {
          const active = i18n.resolvedLanguage === l.code
          return (
            <DropdownMenuItem
              className="menu-item"
              key={l.code}
              data-value={l.code}
              onClick={handleLanguageChange}
              disabled={active}
              aria-disabled={active}
              aria-current={active ? 'page' : undefined}
            >
              <LazyImg
                src={`/images/locales/${l.code}.png`}
                alt={i18n.resolvedLanguage || LocaleFallBack}
                className="mx-1 h-auto w-6 lg:w-4"
              />
              {l.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
