import type { ExecutionContext, Fetcher } from '@cloudflare/workers-types';
import type { Env } from './server';

export interface WorkersEnv extends Env {
  ASSETS: Fetcher;
}

export type Mail = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type RequestParams = {
  request: Request;
  env: WorkersEnv;
  ctx?: ExecutionContext;
};
