import info from '@assets/contact-info.json'
import type { Route } from './+types/root'
import stylesheet from '@styles/main.css?url'
import type { MetaFunction } from 'react-router'

export const links: Route.LinksFunction = () => [
  // Preload main font and CSS for performance
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
]

export const meta: MetaFunction = ({ location }) => {
  const image = `${info.url}/images/mano.svg`
  const currentUrl = `${info.url}${location.pathname}`

  return [
    { title: info.title },
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: info.description },

    {
      name: 'keywords',
      content:
        'hamburgueseria, burger, Cardedeu, Barcelona, menjar ràpid, comida rápida, hamburguesas artesanas, ingredients locals, trempat',
    },
    { name: 'author', content: 'Trempat Burger' },
    { name: 'robots', content: 'index, follow' },

    // Canonical URL
    { tagName: 'link', rel: 'canonical', href: currentUrl },

    // Open Graph (para Facebook, WhatsApp, etc.)
    { property: 'og:type', content: 'restaurant' },
    { property: 'og:title', content: info.title },
    { property: 'og:description', content: info.description },
    { property: 'og:url', content: currentUrl },
    { property: 'og:image', content: image },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'ca_ES' },
    { property: 'og:locale:alternate', content: 'es_ES' },
    { property: 'og:locale:alternate', content: 'en_US' },
    { property: 'og:site_name', content: 'Trempat Burger' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: info.title },
    { name: 'twitter:description', content: info.description },
    { name: 'twitter:image', content: image },

    // Favicons (multiple formats for better compatibility)
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
    // Shortcut icon for Google and other search engines

    { rel: 'shortcut icon', href: '/favicon.ico' },

    { name: 'color-scheme', content: 'dark light' },

    // Schema.org LocalBusiness
    {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'Trempat Burger',
        image,
        '@id': info.url,
        url: info.url,
        telephone: `${info.prefix}${info.phone}`,
        mobile: `${info.prefix}${info.mobile}`,
        ...info.meta,
      }),
    },
  ]
}
