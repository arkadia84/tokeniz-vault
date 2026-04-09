import { Resend } from "npm:resend@4.1.2";

const ALLOWED_ORIGINS = [
  "https://tokeniz.ai",
  "https://www.tokeniz.ai",
  "https://tokeniz-vault.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const isAllowed =
    ALLOWED_ORIGINS.includes(origin) ||
    origin.endsWith(".lovable.app") ||
    origin.endsWith(".lovableproject.com");
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

Deno.serve(async (req) => {
  const cors = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }

  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: "name and email required" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(resendKey);

    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f2f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a1628 0%,#1a2e5a 100%);padding:36px 40px 28px;text-align:center;">
            <div style="font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;margin-bottom:8px;">Token<span style="color:#5b8ff9;">iz</span></div>
            <div style="font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.45);">Tokenization Infrastructure</div>
          </td>
        </tr>
        <!-- Accent line -->
        <tr>
          <td style="background:#5b8ff9;padding:12px 40px;text-align:center;">
            <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;letter-spacing:0.06em;text-transform:uppercase;">✅ You're on the waitlist</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 20px;font-size:16px;color:#1a202c;line-height:1.6;">Hi <strong>${name}</strong>,</p>
            <p style="margin:0 0 20px;font-size:15px;color:#4a5568;line-height:1.7;">Thanks for joining the Tokeniz waitlist. We're building tokenization infrastructure for founders and asset owners — compliant issuance, on-chain cap tables, and global investor access.</p>
            <p style="margin:0 0 20px;font-size:15px;color:#4a5568;line-height:1.7;">We're onboarding the first wave soon. When your spot opens, we'll reach out with everything you need to get started.</p>
            <p style="margin:0 0 28px;font-size:15px;color:#4a5568;line-height:1.7;">In the meantime, check out what's already live on our partner marketplace:</p>
            <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
              <tr><td>
                <a href="https://propex.app" target="_blank" style="display:inline-block;background:#5b8ff9;color:#ffffff;font-size:14px;font-weight:700;padding:12px 28px;border-radius:8px;text-decoration:none;letter-spacing:0.02em;">Explore Propex Marketplace →</a>
              </td></tr>
            </table>
            <p style="margin:0;font-size:13px;color:#a0aec0;line-height:1.6;">Questions? Reply to this email anytime — we read every message.</p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #edf2f7;">
            <p style="margin:0 0 4px;font-size:12px;color:#a0aec0;">Token<span style="color:#5b8ff9;font-weight:700;">iz</span></p>
            <p style="margin:0;font-size:11px;color:#cbd5e0;">Tokenization infrastructure for founders and asset owners.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    await resend.emails.send({
      from: "Tokeniz <hey@tokeniz.ai>",
      to: [email],
      cc: ["hey@tokeniz.ai"],
      subject: "You're on the Tokeniz waitlist 🎉",
      html,
      reply_to: "hey@tokeniz.ai",
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Waitlist email error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
