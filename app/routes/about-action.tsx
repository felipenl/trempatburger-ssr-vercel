import type { Mail } from '@/types/workers'
import type { ActionFunctionArgs } from 'react-router'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()

  const mail: Mail = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(formData.get('message') ?? '')
  }

  const MAIL_API_URL = process.env.MAIL_API_URL
  const MAIL_API_KEY = process.env.MAIL_API_KEY
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL

  if (!MAIL_API_URL || !MAIL_API_KEY || !CONTACT_EMAIL) {
    return { status: 'error', message: 'Missing environment variables' }
  }

  const safe = (str = '') =>
    String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')

  const payload = {
    from: `Trempat Burger <${CONTACT_EMAIL}>`,
    to: CONTACT_EMAIL,
    subject: `Nuevo mensaje de ${safe(mail.name)}`,
    reply_to: safe(mail.email),
    html: `
      <h1>Nuevo mensaje de ${safe(mail.name)}</h1>
      <p><strong>Email:</strong> ${safe(mail.email)}</p>
      <p><strong>Asunto:</strong> ${safe(mail.subject)}</p>
      <p>${safe(mail.message).replace(/\n/g, '<br/>')}</p>
    `
  }

  const res = await fetch(MAIL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${MAIL_API_KEY}`
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    return { status: 'error', message: data.message ?? res.statusText }
  }

  return { status: 'success' }
}
