import info from '@assets/contact-info.json';

export default function Meta() {
  const image = `${info.url}/images/mano.svg`;

  return [
    { name: 'title', content: info.title },
    { name: 'description', content: info.description },

    // Open Graph (para Facebook, WhatsApp, etc.)
    { property: 'og:type', content: 'restaurant' },
    { property: 'og:title', content: info.title },
    { property: 'og:description', content: info.description },
    { property: 'og:url', content: info.url },
    { property: 'og:image', content: image },
    { property: 'og:locale', content: 'ca_ES' },
    { property: 'og:site_name', content: 'Trempat Burger' },

    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: info.title },
    { name: 'twitter:description', content: info.description },
    { name: 'twitter:image', content: image },

    // Favicon
    { rel: 'icon', href: '/favicon.svg' },

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
  ];
}
