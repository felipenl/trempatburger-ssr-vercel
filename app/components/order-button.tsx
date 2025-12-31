import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router'
import { cn } from '@lib/utils'
import { ShoppingBag } from 'lucide-react'
import info from '@assets/contact-info.json'
import { isBrowser } from '@lib/environment'
import { logEvent } from '@lib/analytics'

export default function OrderButton({ className }: { className?: string }) {
  const elementRef = useRef(null)
  const { t } = useTranslation()

  const onClick = () => {
    if (isBrowser) {
      logEvent({
        action: 'order-button-click',
        category: 'engagement',
        label: 'Order Button Click',
        value: 1,
      })
    }
  }

  return (
    <Link to={info.onlineOrderUrl} target="_blank" rel="noopener noreferrer">
      <Button
        className={cn('order-btn', className)}
        id="order-button"
        ref={elementRef}
        onClick={onClick}
      >
        <ShoppingBag className="icon" />
        <div className="text">{t('nav.order')}</div>
      </Button>
    </Link>
  )
}
