import { type SupportedLocale, LocaleFallBack, Locales } from '@/types/locales'
import { sanitize } from '../../lib/locales'
import type { ServerContext } from '@/types/server'
import { getAllResources } from '@/api/locales'
import type { LoaderFunctionArgs } from 'react-router'

export default async function buildServerContext({
  request,
}: LoaderFunctionArgs): Promise<ServerContext> {
  const acceptLanguage = request.headers.get('Accept-Language') || ''
  const code = sanitize(acceptLanguage.split(',')[0].split('-')[0])
  const lang: SupportedLocale = Locales[code] ? code : LocaleFallBack

  const locales = await getAllResources()

  return { lang, locales }
}
