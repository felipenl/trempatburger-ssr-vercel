import {
  createClient,
  type PostgrestResponse,
  type PostgrestSingleResponse,
  type SupabaseClientOptions,
} from '@supabase/supabase-js'
import { isBrowser } from './environment'

export function getClient(options?: SupabaseClientOptions<'public'>) {
  return createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    options
  )
}

export const handleResponse = async (
  response: PostgrestResponse<unknown> | PostgrestSingleResponse<unknown>
) => {
  if (response.error) {
    console.error('Supabase error:', response.error)
    throw response.error
  }

  return response.data
}

const getConfig = () => {
  if (isBrowser) {
    return {
      url: import.meta.env.VITE_SUPABASE_URL,
      key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    }
  } else {
    return {
      url: process.env.VITE_SUPABASE_URL,
      key: process.env.SUPABASE_SECRET_KEY,
      options: {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    }
  }
}

export const initClient = () => {
  const { url, key, options } = getConfig()

  if (!url) {
    throw new Error('Supabase URL is not defined')
  }

  if (!key) {
    throw new Error('Supabase Key is not defined')
  }

  return createClient(url!, key!, options)
}

export default initClient()
