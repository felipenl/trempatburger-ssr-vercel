import type { MetaFunction } from 'react-router'
import { useTranslation } from 'react-i18next'
import Trempat from '@assets/logos/trempat_doble.svg?react'
import Steps from '@components/home/steps'
import OpenMenu from '@components/home/open-menu'
import LazyImg from '@components/lazy/lazy-image'
import info from '@assets/contact-info.json'

export const meta: MetaFunction = () => [
  { title: info.pages.home.title },
  { name: 'description', content: info.pages.home.description },
]

function Home() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <Trempat
          role="img"
          aria-label={t('brand.name')}
          className="text-trempat-red animate-in slide-in-from-top z-10 m-8 mx-auto w-4/5 max-w-2xl md:w-1/2 lg:w-3/5"
        />
        <LazyImg
          src="images/tri-burger.png"
          alt="Burgers"
          className="slide-in-from-bottom animate-in -mt-8 w-8/10 max-w-4xl drop-shadow-lg ease-in-out lg:-mt-18"
        />

        <div className="mx-auto my-8 w-full text-center md:max-w-3/4 lg:my-20 lg:w-7/10 xl:max-w-3/5">
          <div>
            {(t('brand.description') || '').split('\n').map((line, index) => (
              <p
                className="text-foreground/70 text-xl leading-tight! whitespace-pre-wrap italic lg:text-4xl!"
                key={index}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <Steps />
        <OpenMenu />
      </div>
    </div>
  )
}

export default Home
