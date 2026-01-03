import { useTranslation } from 'react-i18next'
import type { ReactElement } from 'react'

export default function Privacy(): ReactElement {
  const { t } = useTranslation()
  return (
    <main className="mx-auto my-12 max-w-2xl px-4">
      <h1>{t('privacy.title')}</h1>
      <p>{t('privacy.intro')}</p>

      <div className="mt-6">
        <h3>{t('privacy.what-info-title')}</h3>
        <ul>
          <li>{t('privacy.what-info-analytics')}</li>
          <li>{t('privacy.what-info-contact')}</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3>{t('privacy.cookies-title')}</h3>
        {t('privacy.cookies-intro')}

        <ul className="ml-4 list-inside">
          <li className="list-disc">{t('privacy.cookies-lang-theme')}</li>
          <li className="list-disc">{t('privacy.cookies-analytics')}</li>
          <li className="list-disc">{t('privacy.cookies-experience')}</li>
        </ul>

        <p>{t('privacy.cookies-consent')}</p>
      </div>

      <div className="mt-6">
        <h3>{t('privacy.rights-title')}</h3>
        <ul className="ml-4 list-inside">
          <li className="list-disc">{t('privacy.rights-withdraw')}</li>
          <li className="list-disc">{t('privacy.rights-request')}</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3>{t('privacy.contact-title')}</h3>
        {t('privacy.contact-text')}{' '}
        <a href="mailto:info@trempatburger.com" className="text-trempat-red font-semibold">
          info@trempatburger.com
        </a>
        .
      </div>
    </main>
  )
}
