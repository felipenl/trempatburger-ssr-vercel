import { Button } from '@components/ui/button'
import { Store } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useRouteError } from 'react-router'

function Error() {
  const { t } = useTranslation()
  const error = useRouteError()
  console.log(error)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
      <div className="pt-20 text-center">
        <h2 className="text-3xl font-bold normal-case!">{t('errors.title')}</h2>
        <div>
          <div>{t('errors.message1')}</div>
          <div>
            {t('errors.message2')}
            <Link to={{ pathname: '/contacte', hash: '#contact-form' }} className="underline">
              {t('errors.contact-here')}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link to="/">
          <Button variant="outline" size="xl">
            <Store /> {t('errors.go-back-home')}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Error
