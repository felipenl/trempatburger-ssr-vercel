import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@ui/button'
import { Dialog, DialogContent, DialogHeader, DialogFooter } from '@ui/dialog'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@ui/accordion'
import initGA from '@lib/analytics'
import { getFromStorage, saveToStorage } from '@lib/environment'
import info from '@assets/contact-info.json'
import { DialogTitle } from '@radix-ui/react-dialog'

const COOKIE_KEY = import.meta.env.VITE_CONSENT_COOKIE || 'cookie-consent:v1'

const EXPIRE_DAYS = 30

const getConsent = (): boolean | null => {
  try {
    const raw = getFromStorage(COOKIE_KEY)
    if (!raw) return null
    const { accepted, expires } = raw
    if (!accepted || !expires) return false
    return Date.now() < expires
  } catch {
    return null
  }
}

export default function CookieBanner() {
  const { t } = useTranslation()
  const [accepted, setAccepted] = useState(getConsent())

  const setConsent = (accepted: boolean) => {
    const expires = Date.now() + EXPIRE_DAYS * 24 * 60 * 60 * 1000
    saveToStorage(COOKIE_KEY, JSON.stringify({ accepted, expires }))
    setAccepted(accepted)
  }

  const handleAccept = () => {
    setConsent(true)
  }

  const handleDecline = () => {
    setConsent(false)
  }

  useEffect(() => {
    if (accepted) {
      initGA()
    }
  }, [accepted])

  return (
    <Dialog open={accepted === null}>
      <DialogContent className="max-h-[90vh] overflow-y-auto" disableClose>
        <DialogHeader>
          <DialogTitle className="sr-only">{t('cookie-banner.message')}</DialogTitle>
          <h4>{t('cookie-banner.message')}</h4>
        </DialogHeader>
        <Accordion type="single" className="mb-2 w-full text-sm" defaultValue="intro">
          <AccordionItem value="intro">
            <AccordionTrigger>{t('privacy.title')}</AccordionTrigger>
            <AccordionContent>
              <p>{t('privacy.intro')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what-info">
            <AccordionTrigger>{t('privacy.what-info-title')}</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-4 list-inside list-disc">
                <li>{t('privacy.what-info-analytics')}</li>
                <li>{t('privacy.what-info-contact')}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cookies">
            <AccordionTrigger>{t('privacy.cookies-title')}</AccordionTrigger>
            <AccordionContent>
              <p>{t('privacy.cookies-intro')}</p>
              <ul className="ml-4 list-inside list-disc">
                <li>{t('privacy.cookies-lang-theme')}</li>
                <li>{t('privacy.cookies-analytics')}</li>
                <li>{t('privacy.cookies-experience')}</li>
              </ul>
              <p className="mt-2">{t('privacy.cookies-consent')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rights">
            <AccordionTrigger>{t('privacy.rights-title')}</AccordionTrigger>
            <AccordionContent>
              <ul className="ml-4 list-inside list-disc">
                <li>{t('privacy.rights-withdraw')}</li>
                <li>{t('privacy.rights-request')}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="contact">
            <AccordionTrigger>{t('privacy.contact-title')}</AccordionTrigger>
            <AccordionContent>
              <span>{t('privacy.contact-text')} </span>
              <a href={`mailto:${info.email}`} className="font-semibold underline">
                {info.email}
              </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <DialogFooter>
          <Button variant="outline" onClick={handleDecline} className="my-2">
            {t('cookie-banner.essential')}
          </Button>
          <Button variant="default" onClick={handleAccept} className="my-2">
            {t('cookie-banner.accept')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
