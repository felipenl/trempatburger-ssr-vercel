import info from '@assets/contact-info.json'

export async function loader() {
  const robots = `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api\nDisallow: /*.json$\nDisallow: /home\n\n# Block access to non-existent or private routes\nDisallow: /contact\nDisallow: /action.about\n\nSitemap: ${info.url}/sitemap.xml\n`
  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}

export default function Robots() {
  return null
}
