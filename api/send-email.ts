import type { Mail } from '@/types/workers';

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ status: "error", message: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const { name, email, subject, message } = (await request.json()) as Mail;
      const MAIL_API_URL = process.env.MAIL_API_URL;
      const MAIL_API_KEY = process.env.MAIL_API_KEY;
      const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

      if (!MAIL_API_URL || !MAIL_API_KEY || !CONTACT_EMAIL) {
        return new Response(JSON.stringify({ status: "error", message: "Missing env vars" }), { status: 500 });
      }

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
        reply_to: email,
        html: `
          <h1>Nuevo mensaje de ${safe(name)}</h1>
          <p><strong>Email:</strong> ${safe(email)}</p>
          <p><strong>Asunto:</strong> ${safe(subject)}</p>
          <p>${safe(message).replace(/\n/g, "<br/>")}</p>
        `,
      };

      const res = await fetch(MAIL_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MAIL_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        return new Response(JSON.stringify({ status: "error", message: data.message ?? res.statusText }), {
          status: res.status,
          headers: { "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ status: "success", data }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ status: "error", message: (err as Error)?.message ?? "Unexpected error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
