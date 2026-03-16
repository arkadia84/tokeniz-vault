import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Valid email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Save to database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase
      .from("early_access_signups")
      .upsert({ email }, { onConflict: "email" });

    if (dbError) {
      console.error("DB error:", dbError);
    }

    // Send confirmation email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ success: true, emailSent: false }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const calendarLink = "https://calendar.app.google/oj4GCa72dQYVC22RA";

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0e1a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0e1a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#111827;border-radius:12px;border:1px solid rgba(255,255,255,0.1);overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 20px 40px;">
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Tokeniz</h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:20px 40px 10px 40px;">
              <h2 style="margin:0 0 16px 0;font-size:22px;font-weight:600;color:#ffffff;">Welcome to the Future of Ownership</h2>
              <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:#9ca3af;">
                Thank you for joining the early adopters of <strong style="color:#ffffff;">Tokeniz</strong>. We're building the infrastructure for tokenized companies and real-world assets — and you're now part of it.
              </p>
              <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:#9ca3af;">
                We'll keep you updated on our progress and let you know as soon as early access is available.
              </p>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding:10px 40px 20px 40px;">
              <p style="margin:0 0 16px 0;font-size:15px;line-height:1.6;color:#9ca3af;">
                Have questions or want to see a live demo? Book a call with our team:
              </p>
              <a href="${calendarLink}" style="display:inline-block;padding:12px 28px;background-color:#3b82f6;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">
                Book a Live Demo
              </a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:30px 40px 40px 40px;border-top:1px solid rgba(255,255,255,0.05);">
              <p style="margin:0;font-size:12px;color:#6b7280;">
                Tokeniz — Infrastructure for tokenized companies and real-world assets.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Tokeniz <onboarding@resend.dev>",
        to: [email],
        subject: "Welcome to Tokeniz — You're on the Early Access List!",
        html: emailHtml,
      }),
    });

    const resendData = await res.json();
    if (!res.ok) {
      console.error("Resend error:", resendData);
    }

    return new Response(
      JSON.stringify({ success: true, emailSent: res.ok }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
