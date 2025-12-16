import { type SupportedLocale, LocaleFallBack, Locales } from '@/types/locales'
import { sanitize } from '../../lib/locales'
import type { ServerContext } from '@/types/server'

export default async function buildServerContext({
  request,
}: {
  request: Request
}): Promise<ServerContext> {
  const acceptLanguage = request.headers.get('Accept-Language') || ''
  const code = sanitize(acceptLanguage.split(',')[0].split('-')[0])
  const lang: SupportedLocale = Locales[code] ? code : LocaleFallBack

  return { lang }
}
