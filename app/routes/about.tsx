import ContactForm from '@components/about/contact-form'
import ContactInfo from '@components/about/contact-info'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Map from '@components/about/map'
import LazyImg from '@components/lazy/lazy-image'
import { useLocation, type MetaFunction } from 'react-router'
import { isBrowser } from '@lib/environment'
import { action } from '@routes/action.about'
import info from '@assets/contact-info.json'

export { action }

export const meta: MetaFunction = () => [
  { title: info.pages.about.title },
  { name: 'description', content: info.pages.about.description },
]

function About() {
  const { t } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    if (!isBrowser) return
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className="w-full max-w-6xl sm:px-6 lg:px-8">
      <div className="my-4">
        <h1 className="mb-10">{t('about.who-we-are')}</h1>
        <div className="grid grid-cols-1 items-start justify-center gap-10 lg:grid-cols-2">
          <div>
            <p className="p-2 text-lg font-light">{t('about.we-are')}</p>
          </div>
          <LazyImg src="images/us.webp" alt="Our Team" className="rounded-lg shadow-lg" />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactForm />
        <div>
          <h2>{t('about.contact.title')}</h2>
          <Map />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

export default About
