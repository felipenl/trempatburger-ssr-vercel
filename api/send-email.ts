import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { Mail } from "@/types/api";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { name, email, subject, message } = req.body as Mail;

  const { MAIL_API_URL, MAIL_API_KEY, CONTACT_EMAIL } = process.env;

  if (!MAIL_API_URL || !MAIL_API_KEY || !CONTACT_EMAIL) {
    return res
      .status(500)
      .json({ status: "error", message: "Missing environment variables" });
  }

  // Sanitizado simple
  const safe = (str = "") =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const payload = {
    from: `Trempat Burger <${CONTACT_EMAIL}>`,
    to: CONTACT_EMAIL,
    subject: `Nuevo mensaje de ${safe(name)}`,
    reply_to: safe(email),
    html: `
      <h1>Nuevo mensaje de ${safe(name)}</h1>
      <p><strong>Email:</strong> ${safe(email)}</p>
      <p><strong>Asunto:</strong> ${safe(subject)}</p>
      <p>${safe(message).replace(/\n/g, "<br/>")}</p>
    `,
  };

  const apiRes = await fetch(MAIL_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MAIL_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await apiRes.json().catch(() => ({}));

  if (!apiRes.ok) {
    return res
      .status(apiRes.status)
      .json({ status: "error", message: data.message ?? apiRes.statusText });
  }

  res.status(200).json({ status: "success", data });
}
