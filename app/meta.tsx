import info from '@assets/contact-info.json'
import stylesheet from '@styles/main.css?url'
import type { LinkDescriptor } from 'react-router'

export const getLinks = () =>
  [
    {
      rel: 'preload',
      as: 'style',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    },
    { rel: 'preload', as: 'style', href: stylesheet },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
    },
    { rel: 'stylesheet', href: stylesheet },
    // Favicons and manifest
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
  ] as LinkDescriptor[]

export const getMeta = (pathname: string) => {
  const image = `${info.url}/images/mano.svg`
  const currentUrl = `${info.url}${pathname}`

  return [
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { title: info.title },
    { name: 'description', content: info.description },
    { name: 'keywords', content: 'hamburgueseria, burger, Cardedeu, ...' },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'restaurant' },
    { property: 'og:title', content: info.title },
    { property: 'og:image', content: image },
    { property: 'og:url', content: currentUrl },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: image },

    { name: 'color-scheme', content: 'dark light' },
  ]
}
