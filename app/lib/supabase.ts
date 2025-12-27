import {
  createClient,
  type PostgrestResponse,
  type PostgrestSingleResponse,
} from '@supabase/supabase-js'

export const init = () => {
  const { VITE_SUPABASE_URL: url, VITE_SUPABASE_PUBLISHABLE_API_KEY: apiKey } = import.meta.env

  if (!url) {
    throw new Error('VITE_SUPABASE_URL is not defined in environment variables.')
  }

  if (!apiKey) {
    throw new Error('VITE_SUPABASE_PUBLISHABLE_API_KEY is not defined in environment variables.')
  }

  return createClient(url, apiKey)
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

export default init()
