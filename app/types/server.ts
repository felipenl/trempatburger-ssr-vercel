import type { Theme } from '@components/theme-provider';
import type { SupportedLocale } from './locales';
import type { WorkersEnv } from './workers';

export type ServerContext = {
  theme?: Theme;
  lang?: SupportedLocale;
  env: WorkersEnv;
};

export type Env = {
  [key: string]: unknown;
};
