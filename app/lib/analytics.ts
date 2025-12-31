import ReactGA from 'react-ga4'
import { isBrowser } from './environment'

export interface GAEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export const logPageView = (path: string): void => {
  ReactGA.send({ hitType: 'pageview', page: path })
}

export const logEvent = ({ category, action, label, value }: GAEvent): void => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  })
}

export default function init(): void {
  if (!isBrowser) return

  const trackingId = import.meta.env.VITE_GA_ID

  if (!trackingId) {
    console.warn('No tracking id is found for Google Analytics')
    return
  }

  ReactGA.initialize([
    {
      trackingId,
      gaOptions: {
        page: window.location.origin,
        testMode: import.meta.env.DEV,
      },
    },
  ])

  console.log(ReactGA)
}
