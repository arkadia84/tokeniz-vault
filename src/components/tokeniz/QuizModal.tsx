import { useState, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Answers {
  [key: string]: { text: string; speed?: boolean };
}

const tierLabels: Record<string, string> = {
  free: "Free action plan",
  guided: "Guided advisory ($497)",
  founders: "Founder's Pack ($697)",
};

interface PartnerPayload {
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
}

const partnerMap: Record<string, PartnerPayload> = {
  "Wyoming LLC": {
    formation_partner_name: "Fileform",
    formation_partner_desc: "US-based filing service. Handles state filings, registered agent, and operating agreement.",
    formation_partner_url: "https://register.fileforms.com/partner-file-now-cta-v2/?REFERRALCODE=recM4mmc9COERzwg5",
    formation_cta_text: "Register via Fileform →",
    bank_1_name: "Mercury",
    bank_1_desc: "US digital bank for startups. No minimum balance. Remote-friendly onboarding for foreign-owned LLCs.",
    bank_2_name: "Revolut Business",
    bank_2_desc: "Multi-currency account with USD, EUR, GBP. Good fallback if Mercury requires US presence.",
    stablecoin_partner_name: "",
    stablecoin_partner_desc: "",
  },
  "Delaware C-Corp": {
    formation_partner_name: "Fileform",
    formation_partner_desc: "Handles Delaware C-Corp formation including registered agent and founder documents.",
    formation_partner_url: "https://register.fileforms.com/partner-file-now-cta-v2/?REFERRALCODE=recM4mmc9COERzwg5",
    formation_cta_text: "Register via Fileform →",
    bank_1_name: "Mercury",
    bank_1_desc: "Preferred for VC-backed startups. SAFE-note friendly. Remote onboarding available.",
    bank_2_name: "Brex",
    bank_2_desc: "Corporate card + banking for startups. Good for pre-revenue companies with investor backing.",
    stablecoin_partner_name: "",
    stablecoin_partner_desc: "",
  },
  "Singapore Pte Ltd": {
    formation_partner_name: "Osome",
    formation_partner_desc: "Singapore company formation for non-residents. Includes registered address, nominee director if needed, and compliance setup.",
    formation_partner_url: "https://osome.com/hk/r/8V3C7H7V",
    formation_cta_text: "Register via Osome →",
    bank_1_name: "Aspire",
    bank_1_desc: "Singapore-native neobank for SMEs. Multi-currency, fast onboarding for Singapore entities.",
    bank_2_name: "Revolut Business SG",
    bank_2_desc: "Revolut's Singapore product. Good multi-currency alternative for SG-registered companies.",
    stablecoin_partner_name: "Elephants Inc.",
    stablecoin_partner_desc: "Stablecoin custodial account for APAC entities. USDC-based, compliant, fast setup via the referral link.",
  },
  "Hong Kong Limited": {
    formation_partner_name: "Osome",
    formation_partner_desc: "HK company formation for non-residents. Includes registered address, company secretary, and annual compliance.",
    formation_partner_url: "https://osome.com/hk/r/8V3C7H7V",
    formation_cta_text: "Register via Osome →",
    bank_1_name: "Airwallex",
    bank_1_desc: "HK-founded neobank. Multi-currency accounts, strong for China-adjacent businesses and cross-border payments.",
    bank_2_name: "Aspire",
    bank_2_desc: "Multi-currency neobank covering HK entities. Good APAC alternative with fast onboarding.",
    stablecoin_partner_name: "Elephants Inc.",
    stablecoin_partner_desc: "Stablecoin custodial account for APAC entities. USDC-based, compliant, fast setup via the referral link.",
  },
};

function resolveEntity(answers: Answers) {
  const q3 = answers.q3?.text || "";
  const q4 = answers.q4?.text || "";
  const q5text = answers.q5?.text || "";
  const wantsVC = q5text.includes("Raising investment");
  const isASEAN = q3.includes("Southeast Asia");
  const isChina = q3.includes("China") || q3.includes("Greater Bay");
  const isCrypto = q4.includes("Crypto") || q4.includes("Web3") || q4.includes("DeFi");

  if (wantsVC) {
    return {
      entity: "Delaware C-Corp",
      subline: "VCs expect a Delaware C-Corp — the global standard for equity rounds and stock option plans.",
      bankingNote: "Your action plan will include our shortlisted banking partners for Delaware entities — selected for non-resident founders. Share your contact to receive the full list.",
      tokenizable: true,
    };
  }
  if (isChina || (isASEAN && isCrypto)) {
    return {
      entity: "Hong Kong Limited",
      partners: ["Osome", "Airwallex", "Aspire", "Elephants Inc."],
      subline: "Hong Kong gives you direct access to China's market, a clear crypto licensing framework, and zero need for a local resident director.",
      bankingNote: "Your action plan includes vetted banking partners for HK entities — including multi-currency accounts and stablecoin custody options. Available after you share your contact.",
      tokenizable: false,
    };
  }
  if (isASEAN) {
    return {
      entity: "Singapore Pte Ltd",
      partners: ["Osome", "Aspire", "Revolut Business SG", "Elephants Inc."],
      subline: "For ASEAN expansion and VC-backed growth, Singapore is the regional benchmark — 100+ tax treaties, robust IP protection, and investor-grade credibility.",
      bankingNote: "Your action plan includes vetted banking partners for Singapore entities — including traditional accounts and stablecoin custody options. Available after you share your contact.",
      tokenizable: false,
    };
  }
  return {
    entity: "Wyoming LLC",
    subline: "The most flexible, privacy-first structure for global founders — default winner when compliance criteria are met.",
    bankingNote: "Your action plan includes our shortlisted banking partners for US LLCs — selected for non-resident founders with no US address. Revealed after you share your contact.",
    tokenizable: true,
  };
}

const questions = [
  {
    id: "q1",
    step: "Question 1 of 5",
    question: "What's your current situation?",
    sub: "This helps us understand where you're starting from.",
    options: [
      "I'm starting a new business and need to set up properly",
      "I already have a company but need better financial infrastructure",
      "I'm exploring my options before committing",
    ],
  },
  {
    id: "q2",
    step: "Question 2 of 5",
    question: "Where are you currently based?",
    sub: "Your residency affects banking eligibility and some formation requirements.",
    options: [
      "🌏 Southeast Asia (Singapore, Bali, Thailand, Malaysia…)",
      "🇦🇪 Middle East / UAE",
      "🇪🇺 Europe",
      "🌍 Africa",
      "🌎 Latin America",
      "🌐 Nomadic / no fixed base",
    ],
  },
  {
    id: "q3",
    step: "Question 3 of 5",
    question: "Where will your business primarily operate?",
    sub: "Where your customers are — not where you live. This is the most important question.",
    options: [
      "🇺🇸 Primarily the US market",
      "🌏 Southeast Asia / ASEAN (Indonesia, Vietnam, Thailand…)",
      "🇨🇳 China / Greater Bay Area",
      "🇪🇺 Europe",
      "🌍 Middle East & Africa",
      "🌐 Global / fully remote, customers everywhere",
    ],
  },
  {
    id: "q4",
    step: "Question 4 of 5",
    question: "What best describes what you're building?",
    sub: "Industry determines which financial partners are realistically available to you.",
    options: [
      "⛓ Crypto, Web3, DeFi, or NFTs",
      "🤖 SaaS, AI, or software products",
      "💳 Fintech or payments",
      "🛍 E-commerce or marketplace",
      "🎥 Content, creator, or media",
      "🏢 Consulting, services, or agency",
    ],
  },
  {
    id: "q5",
    step: "Question 5 of 5",
    question: "What matters most to you right now?",
    sub: "When two structures could both work, this tells us which to recommend.",
    options: [
      "🔒 Asset protection and privacy",
      "💰 Raising investment from VCs or angels",
      "🌐 Receiving payments and operating globally",
      "📉 Tax efficiency",
      "⚡ Speed — I need to be operational as fast as possible",
    ],
    speedIndex: 4,
  },
];

export function QuizModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [tokenInterest, setTokenInterest] = useState(false);
  const [hint, setHint] = useState("Select a tier above, then enter your email — we'll be in touch within 24 hours.");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const reset = useCallback(() => {
    setCurrentQ(0);
    setAnswers({});
    setSelected({});
    setProgress(0);
    setShowResult(false);
    setSelectedTier(null);
    setEmailSent(false);
    setSending(false);
    setTokenInterest(false);
    setHint("Select a tier above, then enter your email — we'll be in touch within 24 hours.");
  }, []);

  const handleClose = () => { onClose(); setTimeout(reset, 300); };
  const handleOverlayClick = (e: React.MouseEvent) => { if (e.target === e.currentTarget) handleClose(); };

  const selectOpt = (qId: string, optIndex: number, text: string, isSpeed?: boolean) => {
    setSelected((prev) => ({ ...prev, [qId]: optIndex }));
    setAnswers((prev) => ({ ...prev, [qId]: { text, speed: isSpeed } }));
  };

  const progressSteps = [0, 20, 40, 60, 80, 100];

  const nextQ = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((p) => p + 1);
      setProgress(progressSteps[currentQ + 1]);
    } else {
      setShowResult(true);
      setProgress(100);
    }
  };

  const prevQ = () => {
    if (currentQ > 0) {
      setCurrentQ((p) => p - 1);
      setProgress(progressSteps[currentQ - 1]);
    }
  };

  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
    setHint(`Selected: ${tierLabels[tier]} — enter your email and we'll be in touch within 24 hours.`);
    emailRef.current?.focus();
  };

  const handleSubmitEmail = async () => {
    const firstName = firstNameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";
    const contact = contactRef.current?.value.trim() || "";

    let valid = true;
    if (!firstName) {
      if (firstNameRef.current) firstNameRef.current.style.borderColor = "red";
      valid = false;
    } else {
      if (firstNameRef.current) firstNameRef.current.style.borderColor = "";
    }
    if (!email || !email.includes("@")) {
      if (emailRef.current) emailRef.current.style.borderColor = "red";
      valid = false;
    } else {
      if (emailRef.current) emailRef.current.style.borderColor = "";
    }
    if (!valid) return;

    const tier = selectedTier || "free";
    const result = resolveEntity(answers);
    const partners = partnerMap[result.entity] || partnerMap["Wyoming LLC"];

    setSending(true);
    try {
      const answerTexts: Record<string, string> = {};
      for (const key of ["q1", "q2", "q3", "q4", "q5"]) {
        answerTexts[key] = answers[key]?.text || "";
      }

      const { data, error } = await supabase.functions.invoke("send-action-plan-email", {
        body: {
          first_name: firstName,
          email,
          contact,
          tier,
          answers: answerTexts,
          entity_name: result.entity,
          entity_reason: result.subline,
          ...partners,
          tokenInterest,
        },
      });

      if (error) {
        console.error("Edge function error:", error);
        if (!data?.success) {
          setHint("Something went wrong — please try again or email hello@tokeniz.ai");
          setSending(false);
          return;
        }
      }

      setEmailSent(true);
      setHint("✓ Check your inbox — your action plan is on its way.");
    } catch (err) {
      console.error("Submit error:", err);
      setHint("Something went wrong — please try again or email hello@tokeniz.ai");
    } finally {
      setSending(false);
    }
  };

  const result = resolveEntity(answers);

  if (!open) return null;

  return (
    <div className={`modal-overlay${open ? " open" : ""}`} onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={handleClose}>✕</button>
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {!showResult ? (
          <div className="quiz-screen active">
            <div className="quiz-step-label">{questions[currentQ].step}</div>
            <div className="quiz-q">{questions[currentQ].question}</div>
            <div className="quiz-sub">{questions[currentQ].sub}</div>
            <div className="quiz-opts">
              {questions[currentQ].options.map((opt, i) => (
                <div
                  key={i}
                  className={`qopt${selected[questions[currentQ].id] === i ? " sel" : ""}`}
                  onClick={() => selectOpt(questions[currentQ].id, i, opt, questions[currentQ].speedIndex === i)}
                >
                  <div className="qopt-radio" />
                  {opt}
                </div>
              ))}
            </div>
            <div className="quiz-nav">
              {currentQ > 0 ? (
                <button className="quiz-back" onClick={prevQ}>← Back</button>
              ) : <span />}
              <span className="quiz-nav-step">{currentQ + 1} / 5</span>
              <button
                className="btn btn-primary"
                style={{ padding: "10px 22px", fontSize: "0.875rem" }}
                onClick={nextQ}
              >
                {currentQ === questions.length - 1 ? "See My Match →" : "Next →"}
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-screen active">
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 6 }}>🎯 Your Match</div>
              <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)" }}>{result.entity}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: 4 }}>{result.subline}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, justifyContent: "center", marginTop: 10 }}>
                <span className="result-tag">{result.entity}</span>
                <span className="result-tag" style={{ opacity: 0.5, fontStyle: "italic" }}>+ matched banking partners →</span>
              </div>
              <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 9, background: "var(--blue-glow)", border: "1px solid var(--blue-border)", fontSize: "0.78rem", color: "var(--muted)", textAlign: "left", lineHeight: 1.5 }}>
                🔒 <strong>Banking partners matched</strong> — {result.bankingNote}
              </div>
            </div>

            <p style={{ fontSize: "0.78rem", color: "var(--subtle)", textAlign: "center", marginBottom: 12 }}>Choose your level of support:</p>

            <div className="result-paths">
              {[
                { key: "free", title: "Get my action plan by email", desc: "Referral links, doc checklist & step-by-step guide — apply yourself, free", price: "Free" },
                { key: "guided", title: "Guided — AI walks you through every step", desc: "AI-powered guidance · document checklists · async Q&A · advisory fee only", price: "$497" },
                { key: "founders", title: "Founder's Pack — human expert included", desc: "Everything in Guided + 30-min expert intro call · specialist matched to your situation", price: "$697" },
              ].map((tier) => (
                <div
                  key={tier.key}
                  className={`result-path${selectedTier === tier.key ? " selected" : ""}`}
                  onClick={() => handleSelectTier(tier.key)}
                >
                  <div className="rp-left">
                    <h4>{tier.title}</h4>
                    <p>{tier.desc}</p>
                  </div>
                  <div className="rp-price">{tier.price}</div>
                  <div className="rp-arrow">→</div>
                </div>
              ))}
            </div>

            {result.tokenizable && (
              <div style={{ marginTop: 18, padding: "14px 16px", borderRadius: 12, border: "1px solid rgba(139,92,246,0.35)", background: "rgba(139,92,246,0.07)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgb(167,139,250)", marginBottom: 4 }}>🔮 Coming Soon — Tokenization</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Turn your company shares into digital tokens</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: 3 }}>On-chain cap table, tokenized equity, and global investor access — built on your US entity.</div>
                  </div>
                  <button
                    onClick={() => setTokenInterest(true)}
                    disabled={tokenInterest}
                    style={{ flexShrink: 0, background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.45)", color: "rgb(167,139,250)", fontSize: "0.78rem", fontWeight: 600, padding: "8px 16px", borderRadius: 8, cursor: tokenInterest ? "default" : "pointer", whiteSpace: "nowrap", opacity: tokenInterest ? 0.6 : 1 }}
                  >
                    {tokenInterest ? "✓ Noted — we'll reach out" : "I'm interested →"}
                  </button>
                </div>
              </div>
            )}

            <div className="email-row" style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <input
                type="text"
                className="email-input"
                ref={firstNameRef}
                placeholder="Your first name"
                style={{ gridColumn: "1" }}
              />
              <input
                type="email"
                className="email-input"
                ref={emailRef}
                placeholder="Your email address"
                style={{ gridColumn: "2" }}
              />
              <input
                type="text"
                className="email-input"
                ref={contactRef}
                placeholder="WhatsApp or Telegram (optional)"
                style={{ gridColumn: "1 / -1" }}
              />
              <button
                className="btn btn-primary"
                onClick={handleSubmitEmail}
                disabled={emailSent || sending}
                style={{ whiteSpace: "nowrap", padding: "11px 20px", fontSize: "0.875rem", gridColumn: "1 / -1" }}
              >
                {emailSent ? "✓ Sent!" : sending ? "Sending…" : "Send →"}
              </button>
            </div>
            <p style={{ fontSize: "0.72rem", color: emailSent ? "var(--muted)" : "var(--subtle)", marginTop: 8, textAlign: "center" }}>
              {hint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
