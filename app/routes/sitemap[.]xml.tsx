import info from '@assets/contact-info.json'
import { paths } from '../routes'

export async function loader() {
  const baseUrl = info.url

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
