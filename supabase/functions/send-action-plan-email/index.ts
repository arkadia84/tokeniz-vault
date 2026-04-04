import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://tokeniz.ai",
  "https://www.tokeniz.ai",
  "https://tokeniz-vault.lovable.app",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const isAllowed = ALLOWED_ORIGINS.includes(origin) || origin.endsWith(".lovable.app");
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

function buildTierBlock(tier: string): string {
  if (tier === "guided") {
    return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f5ff;border:1px solid #c3d4fd;border-radius:12px;margin-bottom:36px;">
      <tr><td style="padding:24px 28px;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5b8ff9;">Guided — $497</p>
        <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#1a202c;">Great choice — let's get you started.</p>
        <p style="margin:0 0 16px;font-size:13px;color:#4a5568;line-height:1.6;">Here's how it works: once you confirm, we'll send you the payment link and set up a shared WhatsApp or Telegram chat within 24 hours. From there, we walk you through every step — which bank to approach first, exactly what to say, how to respond to follow-up requests, and when to move to the next option.</p>
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#2d3748;">To get started, reply to this email with:</p>
        <p style="margin:0;font-size:13px;color:#2d3748;line-height:1.9;">📱 <strong>WhatsApp:</strong> +[your number with country code]<br/>✈️ <strong>Telegram:</strong> @[your username] (if you prefer TG)<br/>🌍 <strong>Your timezone</strong> — so we reach you at the right time</p>
      </td></tr>
    </table>`;
  }
  if (tier === "founders") {
    return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;margin-bottom:36px;">
      <tr><td style="padding:24px 28px;">
        <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#f97316;">🛡 Founder's Pack — $697</p>
        <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#1a202c;">You've unlocked expert access — here's what happens next.</p>
        <p style="margin:0 0 16px;font-size:13px;color:#4a5568;line-height:1.6;">Everything in Guided, plus a 30-minute intro call with a vetted legal expert — ask your specific questions on structure, banking eligibility, and compliance before you make a single move. Once you confirm, we send the payment link and match you with a specialist within 48 hours.</p>
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#2d3748;">Reply now with:</p>
        <p style="margin:0;font-size:13px;color:#2d3748;line-height:1.9;">📱 <strong>WhatsApp:</strong> +[your number with country code]<br/>✈️ <strong>Telegram:</strong> @[your username] (if you prefer TG)<br/>🌍 <strong>Your timezone</strong> — so we can match you with the right specialist</p>
      </td></tr>
    </table>`;
  }
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:36px;">
    <tr><td style="padding:24px 28px;">
      <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a0aec0;">✓ Self-Serve — Free</p>
      <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#1a202c;">Your action plan is above — you're all set.</p>
      <p style="margin:0 0 14px;font-size:13px;color:#4a5568;line-height:1.6;">Follow the steps in order, use the referral links provided, and read the notes before submitting any banking application. The order matters — a rejected application creates a compliance trail that can quietly close doors with the next institution.</p>
      <p style="margin:0;font-size:13px;color:#4a5568;line-height:1.6;">Questions? Reply to this email anytime. If at any point you'd like us to walk you through it live, you can upgrade to the Guided option — just reply and we'll get you sorted.</p>
    </td></tr>
  </table>`;
}

function buildEmailHtml(data: {
  first_name: string;
  email: string;
  answers: Record<string, string>;
  entity_name: string;
  entity_reason: string;
  formation_partner_name: string;
  formation_partner_desc: string;
  formation_partner_url: string;
  formation_cta_text: string;
  bank_1_name: string;
  bank_1_desc: string;
  bank_2_name: string;
  bank_2_desc: string;
  stablecoin_partner_name: string;
  stablecoin_partner_desc: string;
  tier: string;
}): string {
  const {
    first_name, email, answers, entity_name, entity_reason,
    formation_partner_name, formation_partner_desc, formation_partner_url, formation_cta_text,
    bank_1_name, bank_1_desc, bank_2_name, bank_2_desc,
    stablecoin_partner_name, stablecoin_partner_desc, tier,
  } = data;

  const stablecoinBlock = stablecoin_partner_name
    ? `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;margin-bottom:28px;">
        <tr><td style="padding:18px 20px;">
          <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a0aec0;">Stablecoin Account</p>
          <p style="margin:0 0 5px;font-size:15px;font-weight:700;color:#2d3748;">${stablecoin_partner_name}</p>
          <p style="margin:0 0 10px;font-size:13px;color:#718096;line-height:1.5;">${stablecoin_partner_desc}</p>
          <p style="margin:0;"><a href="https://app.elephants.inc/onboard/signup?referral=PROPEX" style="background:#5b8ff9;color:#ffffff;font-size:12px;font-weight:700;padding:9px 18px;border-radius:6px;text-decoration:none;display:inline-block;letter-spacing:0.04em;">Open Elephants Account →</a></p>
        </td></tr>
      </table>`
    : "";

  const tierBlock = buildTierBlock(tier);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your Tokeniz Match is Ready</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;color:#f0f2f5;">
    Your personalised entity match + recommended partners are ready. Here's your roadmap. &#8199;&#65279;&#847;
  </div>
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f2f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a1628 0%,#1a2e5a 100%);padding:36px 40px 28px;text-align:center;">
            <div style="font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.03em;margin-bottom:8px;">Token<span style="color:#5b8ff9;">iz</span></div>
            <div style="font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.45);">Smart Company Formation &amp; Financial Access</div>
          </td>
        </tr>
        <!-- Hero line -->
        <tr>
          <td style="background:#5b8ff9;padding:12px 40px;text-align:center;">
            <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;letter-spacing:0.06em;text-transform:uppercase;">🎯 Your Personalised Match is Ready</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:36px 40px 0;">
            <p style="margin:0 0 20px;font-size:16px;color:#1a202c;line-height:1.6;">Hi <strong>${first_name}</strong>,</p>
            <p style="margin:0 0 28px;font-size:15px;color:#4a5568;line-height:1.7;">Thank you for completing the Tokeniz Smart Match quiz. Based on your answers, we've built your personalised roadmap below — including the entity structure we recommend and the vetted partners best suited to your profile.</p>

            <!-- Quiz Summary -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:28px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#718096;">Your Quiz Answers</p>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#718096;width:50%;">Current situation</td>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#2d3748;font-weight:600;">${answers.q1 || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#718096;">Based in</td>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#2d3748;font-weight:600;">${answers.q2 || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#718096;">Primary market</td>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#2d3748;font-weight:600;">${answers.q3 || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#718096;">Building</td>
                    <td style="padding:6px 0;border-bottom:1px solid #edf2f7;font-size:13px;color:#2d3748;font-weight:600;">${answers.q4 || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:13px;color:#718096;">Priority right now</td>
                    <td style="padding:6px 0;font-size:13px;color:#2d3748;font-weight:600;">${answers.q5 || "—"}</td>
                  </tr>
                </table>
              </td></tr>
            </table>

            <!-- Entity Match -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:linear-gradient(135deg,#0f1e3a 0%,#1a3060 100%);border-radius:12px;margin-bottom:28px;">
              <tr><td style="padding:24px 28px;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5b8ff9;">✓ Your Recommended Entity</p>
                <p style="margin:0 0 8px;font-size:20px;font-weight:800;color:#ffffff;letter-spacing:-0.02em;">${entity_name}</p>
                <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.65);line-height:1.6;">${entity_reason}</p>
              </td></tr>
            </table>

            <!-- Partners -->
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#718096;">🔓 Your Matched Partners</p>
            <p style="margin:0 0 18px;font-size:13px;color:#718096;line-height:1.6;">These are the specific partners we recommend for your profile. They have been selected based on your residency, industry, and business model — not because they pay us to recommend them.</p>

            <!-- Formation -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;margin-bottom:12px;">
              <tr><td style="padding:18px 20px;">
                <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a0aec0;">Formation</p>
                <p style="margin:0 0 5px;font-size:15px;font-weight:700;color:#2d3748;"><a href="${formation_partner_url}" style="color:#2d3748;text-decoration:none;">${formation_partner_name}</a></p>
                <p style="margin:0;font-size:13px;color:#718096;line-height:1.5;">${formation_partner_desc}</p>
                <p style="margin:8px 0 0;"><a href="${formation_partner_url}" style="font-size:12px;color:#5b8ff9;text-decoration:none;font-weight:600;">${formation_cta_text || "Start Formation →"}</a></p>
              </td></tr>
            </table>

            <!-- Banking 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;margin-bottom:12px;">
              <tr><td style="padding:18px 20px;">
                <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a0aec0;">Business Banking — Primary</p>
                <p style="margin:0 0 5px;font-size:15px;font-weight:700;color:#2d3748;">${bank_1_name}</p>
                <p style="margin:0;font-size:13px;color:#718096;line-height:1.5;">${bank_1_desc}</p>
              </td></tr>
            </table>

            <!-- Banking 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e2e8f0;border-radius:10px;margin-bottom:${stablecoin_partner_name ? "12" : "28"}px;">
              <tr><td style="padding:18px 20px;">
                <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#a0aec0;">Business Banking — Alternative</p>
                <p style="margin:0 0 5px;font-size:15px;font-weight:700;color:#2d3748;">${bank_2_name}</p>
                <p style="margin:0;font-size:13px;color:#718096;line-height:1.5;">${bank_2_desc}</p>
              </td></tr>
            </table>

            ${stablecoinBlock}

            <!-- Action Plan -->
            <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#718096;">📋 Your Next Steps</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f2f5;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:28px;height:28px;background:#5b8ff9;border-radius:50%;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#fff;">1</td>
                  <td style="padding-left:14px;font-size:13px;color:#4a5568;line-height:1.6;">Register your entity via the formation partner link above. Use the referral link for any discounts or priority handling we've negotiated.</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f2f5;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:28px;height:28px;background:#5b8ff9;border-radius:50%;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#fff;">2</td>
                  <td style="padding-left:14px;font-size:13px;color:#4a5568;line-height:1.6;">Once your entity is formed, prepare the documents listed in the checklist below before applying to any bank. <strong>Do not apply without reading it first</strong> — a poorly prepared application can create a compliance trail.</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f2f5;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:28px;height:28px;background:#5b8ff9;border-radius:50%;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#fff;">3</td>
                  <td style="padding-left:14px;font-size:13px;color:#4a5568;line-height:1.6;">Apply to <strong>${bank_1_name}</strong> first. We've listed the exact fields where non-resident founders typically get stuck — read the notes before you submit.</td>
                </tr></table>
              </td></tr>
              <tr><td style="padding:10px 0;vertical-align:top;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="width:28px;height:28px;background:#5b8ff9;border-radius:50%;text-align:center;vertical-align:middle;font-size:12px;font-weight:700;color:#fff;">4</td>
                  <td style="padding-left:14px;font-size:13px;color:#4a5568;line-height:1.6;">If you chose a paid tier, you'll hear from us within 24 hours on WhatsApp or Telegram to walk through the steps together.</td>
                </tr></table>
              </td></tr>
            </table>

            <!-- Tier Block -->
            ${tierBlock}

            <!-- Disclaimer -->
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f9fc;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:32px;">
              <tr><td style="padding:20px 24px;">
                <p style="margin:0 0 10px;font-size:11px;color:#a0aec0;line-height:1.7;">
                  <strong style="color:#718096;">Not Legal or Financial Advice.</strong> Tokeniz provides technology-driven recommendations based on the quiz answers you submitted. This email does not constitute legal, tax, or financial advice. Always consult a licensed professional before making entity formation, banking, or investment decisions.
                </p>
                <p style="margin:0 0 10px;font-size:11px;color:#a0aec0;line-height:1.7;">
                  <strong style="color:#718096;">Jurisdictional Limitations.</strong> Not all services, entity types, or banking partners are available in all countries. Tokeniz does not represent that its services comply with the laws of any specific jurisdiction.
                </p>
                <p style="margin:0 0 10px;font-size:11px;color:#a0aec0;line-height:1.7;">
                  <strong style="color:#718096;">Data &amp; Privacy.</strong> By submitting your quiz responses and email address, you agree to our <a href="https://tokeniz.ai/privacy" style="color:#5b8ff9;text-decoration:none;">Privacy Policy</a>, <a href="https://tokeniz.ai/terms" style="color:#5b8ff9;text-decoration:none;">Terms of Service</a>, and <a href="https://tokeniz.ai/dpa" style="color:#5b8ff9;text-decoration:none;">Data Processing Addendum</a>.
                </p>
                <p style="margin:0;font-size:11px;color:#a0aec0;line-height:1.7;">
                  <strong style="color:#718096;">Referral Relationships.</strong> Tokeniz may receive referral fees or commissions from third-party partners when you use their services through our links. This does not influence the recommendations we make.
                </p>
              </td></tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f7f9fc;border-top:1px solid #e2e8f0;padding:24px 40px;border-radius:0 0 16px 16px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td>
                <p style="margin:0 0 4px;font-size:13px;font-weight:800;color:#1a202c;letter-spacing:-0.02em;">Token<span style="color:#5b8ff9;">iz</span></p>
                <p style="margin:0 0 12px;font-size:11px;color:#a0aec0;">Smart company formation &amp; financial access for global founders.</p>
                <p style="margin:0;font-size:11px;color:#a0aec0;line-height:1.7;">
                  <a href="https://tokeniz.ai" style="color:#5b8ff9;text-decoration:none;">tokeniz.ai</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:hello@tokeniz.ai" style="color:#5b8ff9;text-decoration:none;">hello@tokeniz.ai</a>
                  &nbsp;·&nbsp;
                  <a href="https://tokeniz.ai/unsubscribe?email=${email}" style="color:#a0aec0;text-decoration:none;">Unsubscribe</a>
                </p>
                <p style="margin:8px 0 0;font-size:10px;color:#cbd5e0;">© 2026 Tokeniz. All rights reserved.</p>
              </td></tr>
            </table>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      first_name, email, contact, answers, tier,
      entity_name, entity_reason,
      formation_partner_name, formation_partner_desc, formation_partner_url, formation_cta_text,
      bank_1_name, bank_1_desc, bank_2_name, bank_2_desc,
      stablecoin_partner_name, stablecoin_partner_desc,
    } = body;

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Valid email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!first_name || typeof first_name !== "string") {
      return new Response(JSON.stringify({ error: "First name is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Rate limiting
    const forwarded = req.headers.get("x-forwarded-for") || "";
    const ips = forwarded.split(",").map(s => s.trim()).filter(Boolean);
    const ip = ips[ips.length - 1] || "unknown";
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

    const { count } = await supabase
      .from("rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", ip)
      .eq("endpoint", "send-action-plan-email")
      .gte("created_at", oneHourAgo);

    if ((count ?? 0) >= 5) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    await supabase.from("rate_limits").insert({
      ip_address: ip,
      endpoint: "send-action-plan-email",
    });

    // Save lead
    const selectedTier = tier || "free";
    const { error: dbError } = await supabase.from("leads").insert({
      first_name: first_name,
      email: email,
      contact: contact || null,
      entity: entity_name || null,
      tier: selectedTier,
      answers: answers || null,
    });

    if (dbError) {
      console.error("DB error saving lead:", dbError);
    }

    // Send email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ success: true, emailSent: false }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const quizAnswers: Record<string, string> = {};
    if (answers) {
      for (const key of ["q1", "q2", "q3", "q4", "q5"]) {
        quizAnswers[key] = answers[key] || "—";
      }
    }

    const emailHtml = buildEmailHtml({
      first_name,
      email,
      answers: quizAnswers,
      entity_name: entity_name || "Wyoming LLC",
      entity_reason: entity_reason || "",
      formation_partner_name: formation_partner_name || "",
      formation_partner_desc: formation_partner_desc || "",
      formation_partner_url: formation_partner_url || "",
      formation_cta_text: formation_cta_text || "Start Formation →",
      bank_1_name: bank_1_name || "",
      bank_1_desc: bank_1_desc || "",
      bank_2_name: bank_2_name || "",
      bank_2_desc: bank_2_desc || "",
      stablecoin_partner_name: stablecoin_partner_name || "",
      stablecoin_partner_desc: stablecoin_partner_desc || "",
      tier: selectedTier,
    });

    const subject = `Your Tokeniz Match — ${entity_name || "Wyoming LLC"}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Yacine at Tokeniz <hello@tokeniz.ai>",
        to: [email],
        cc: ["hey@tokeniz.ai"],
        subject,
        html: emailHtml,
      }),
    });

    const resendData = await res.json();
    if (!res.ok) {
      console.error("Resend error:", resendData);
    }

    // Send internal notification email
    try {
      const notifBody = `New quiz submission on tokeniz.ai\n\nName: ${first_name}\nEmail: ${email}\nContact (WA/TG): ${contact || "—"}\nEntity match: ${entity_name || "—"}\nTier selected: ${selectedTier}\n\nQuiz answers:\nQ1 (Situation): ${quizAnswers.q1}\nQ2 (Based in): ${quizAnswers.q2}\nQ3 (Market): ${quizAnswers.q3}\nQ4 (Building): ${quizAnswers.q4}\nQ5 (Priority): ${quizAnswers.q5}`;

      const notifRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Tokeniz Leads <hey@tokeniz.ai>",
          to: ["hey@tokeniz.ai"],
          subject: `🔔 New lead — ${first_name} · ${entity_name || "Unknown"} · ${selectedTier}`,
          text: notifBody,
        }),
      });

      if (!notifRes.ok) {
        const notifErr = await notifRes.json();
        console.error("Notification email error:", notifErr);
      }
    } catch (notifError) {
      console.error("Failed to send notification email:", notifError);
    }

    console.log("Action plan lead:", { email, tier: selectedTier, entity: entity_name });

    return new Response(
      JSON.stringify({ success: true, emailSent: res.ok }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
