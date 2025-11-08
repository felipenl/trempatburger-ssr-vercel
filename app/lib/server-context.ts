import { type SupportedLocale, LocaleFallBack, Locales } from '@/types/locales';
import { sanitize } from './locales';
import type { ServerContext } from '@/types/server';
import type { LoaderFunctionArgs } from 'react-router';

export default async function buildServerContext(args: LoaderFunctionArgs): Promise<ServerContext> {
  const { request, context } = args;
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  const code = sanitize(acceptLanguage.split(',')[0].split('-')[0]);
  const lang: SupportedLocale = Locales[code] ? code : LocaleFallBack;

  const theme = 'system';

  return { theme, lang, env: context.cloudflare?.env };
}
