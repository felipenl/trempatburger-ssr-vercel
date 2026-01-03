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
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ] as LinkDescriptor[]

export const getMeta = (pathname: string) => {
  const image = `${info.url}/favicon.png`
  const currentUrl = `${info.url}${pathname}`

  return [
    { title: info.title },
    { name: 'description', content: info.description },
    { name: 'keywords', content: 'trempat, smash, burger, Cardedeu, fast, food, hamburguesa' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: info.title },
    { name: 'theme-color', content: '#dc2626' },
    { name: 'color-scheme', content: 'dark light' },

    // Open Graph
    { property: 'og:type', content: 'restaurant' },
    { property: 'og:title', content: info.title },
    { property: 'og:description', content: info.description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: currentUrl },
    { property: 'og:site_name', content: info.title },
    { property: 'og:locale', content: 'es_ES' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: info.title },
    { name: 'twitter:description', content: info.description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:site', content: '@trempatburger' },

    // Additional SEO
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'msapplication-TileColor', content: '#dc2626' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
  ]
}
