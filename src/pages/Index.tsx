import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hint, setHint] = useState("No spam. We'll email you when early access opens.");
  const [hintColor, setHintColor] = useState("var(--subtle)");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    waitlistRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const submitWaitlist = async () => {
    setNameError(false);
    setEmailError(false);

    if (!name.trim()) {
      setNameError(true);
      setHint("Please enter your name.");
      setHintColor("#EF4444");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setEmailError(true);
      setHint("Please enter a valid email.");
      setHintColor("#EF4444");
      return;
    }

    setSubmitting(true);

    try {
      // Save to early_access_signups
      await supabase.from("early_access_signups").insert({ email: email.trim() });

      // Send confirmation email via edge function
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/send-waitlist-confirmation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ name: name.trim(), email: email.trim() }),
        }
      );

      setSuccess(true);
    } catch (err) {
      console.error("Waitlist error:", err);
      setHint("Something went wrong — please try again.");
      setHintColor("#EF4444");
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* NAV */}
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo">Token<span>iz</span></a>
          <div className="nav-right nav-desktop">
            <a href="#how-it-works" className="nav-link" style={{ marginRight: 4 }}>How it works</a>
            <a href="#use-cases" className="nav-link" style={{ marginRight: 4 }}>Use cases</a>
            <a href="#operators" className="nav-link" style={{ marginRight: 4 }}>Operators</a>
            <a href="https://companiz.xyz" className="nav-link" style={{ marginRight: 16 }}>Need a company? →</a>
            <a href="#waitlist" className="btn btn-primary" style={{ fontSize: "0.83rem", padding: "8px 18px" }} onClick={scrollToWaitlist}>
              Join Waitlist →
            </a>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="nav-mobile-menu">
            <a href="#how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#use-cases" className="nav-link" onClick={() => setMenuOpen(false)}>Use cases</a>
            <a href="#operators" className="nav-link" onClick={() => setMenuOpen(false)}>Operators</a>
            <a href="https://companiz.xyz" className="nav-link" onClick={() => setMenuOpen(false)}>Need a company? →</a>
            <a href="#waitlist" className="btn btn-primary" style={{ fontSize: "0.85rem", padding: "10px 20px", width: "100%", justifyContent: "center" }} onClick={(e) => { setMenuOpen(false); scrollToWaitlist(e); }}>
              Join Waitlist →
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="tag">Tokenization Infrastructure</div>
          <h1>Turn real-world assets<br />into <em>digital tokens.</em></h1>
          <p className="hero-sub">
            Tokeniz gives non-US founders, asset owners, and operators the infrastructure to tokenize equity, real estate, and alternative assets — with compliant issuance, on-chain cap tables, and global investor access. Accept digital dollars (USDC/USDT) from day one.
          </p>
          <div className="hero-cta-wrap">
            <a href="#waitlist" className="btn btn-primary btn-xl" onClick={scrollToWaitlist}>
              Join the Waitlist →
            </a>
            <span className="hero-note">Early access opening soon · No commitment</span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="container trust-inner">
          <div className="trust-item"><div className="trust-dot"></div>Real estate · Equity · Alternative assets</div>
          <div className="trust-item"><div className="trust-dot"></div>Compliant token issuance</div>
          <div className="trust-item"><div className="trust-dot"></div>On-chain cap tables</div>
          <div className="trust-item"><div className="trust-dot"></div>Global investor access</div>
        </div>
      </div>

      {/* WHY TOKENIZE */}
      <section className="problem-bg">
        <div className="container">
          <div className="section-header">
            <div className="tag">Why Tokenize?</div>
            <h2>Unlock liquidity, access,<br />and transparency</h2>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-number">24/7</div>
              <h3>Liquidity</h3>
              <p>Tokenized assets trade around the clock — no waiting for business hours, intermediaries, or manual settlement.</p>
            </div>
            <div className="pain-card">
              <div className="pain-number">$100</div>
              <h3>Lower minimums</h3>
              <p>Fractional ownership lets investors participate from $100 instead of $100,000. Bigger pool, faster raises.</p>
            </div>
            <div className="pain-card">
              <div className="pain-number">100%</div>
              <h3>On-chain transparency</h3>
              <p>Every transaction, every cap table entry, every distribution — verifiable on-chain. No black boxes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-header">
            <div className="tag">How It Works</div>
            <h2>From asset to token.<br />Four steps.</h2>
          </div>
          <div className="flow-wrap">
            {[
              { num: "1", title: "Define your asset", desc: "Real estate, equity, revenue share, or alternative asset. We help you structure what gets tokenized and how." },
              { num: "2", title: "Compliant issuance", desc: "Tokens are issued under the right legal framework for your jurisdiction. Smart contracts handle the rules — transfer restrictions, investor caps, vesting." },
              { num: "3", title: "Distribute to investors", desc: "Offer tokens to qualified investors via your own branded marketplace or our partner network. Primary issuance and secondary trading supported." },
              { num: "4", title: "Manage on-chain", desc: "Cap table, distributions, transfers, compliance — all managed through the Tokeniz dashboard. Automated yield distributions to token holders." },
            ].map((step, i, arr) => (
              <div className="flow-row" key={step.num}>
                <div className="flow-left">
                  <div className="flow-num">{step.num}</div>
                  {i < arr.length - 1 && <div className="flow-line"></div>}
                </div>
                <div className="flow-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-header">
            <div className="tag">Use Cases</div>
            <h2>If it has value, it can be tokenized.</h2>
          </div>
          <div className="use-grid">
            {[
              { icon: "🏠", title: "Real Estate", desc: "Tokenize rental properties, development projects, or commercial real estate. Fractional ownership with automated yield distribution." },
              { icon: "📈", title: "Equity & Cap Tables", desc: "Put your cap table on-chain. Issue tokenized shares, manage vesting schedules, and enable secondary trading." },
              { icon: "🎨", title: "Alternative Assets", desc: "Art, collectibles, commodities, IP rights — tokenize any asset class with compliant issuance and global distribution." },
              { icon: "🏢", title: "Fund Structures", desc: "Tokenize fund units for real estate funds, VC funds, or SPVs. Automated distributions and investor reporting." },
            ].map((uc) => (
              <div className="use-card" key={uc.title}>
                <div className="use-icon">{uc.icon}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE OPERATORS */}
      <div className="partners-wrap" id="operators">
        <div className="container">
          <div className="partners-label">Live operators using Tokeniz infrastructure</div>
          <div className="partners-row">
            <a href="https://balirealtx.propex.app" target="_blank" rel="noopener" className="partner-pill"><div className="p-dot live"></div>BaliRealTX</a>
            <a href="https://century21.propex.app" target="_blank" rel="noopener" className="partner-pill"><div className="p-dot live"></div>Century21</a>
            <a href="https://propex.app" target="_blank" rel="noopener" className="partner-pill"><div className="p-dot live"></div>Propex</a>
          </div>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: "0.78rem", color: "var(--subtle)" }}>
            Powered by Propex marketplace technology
          </div>
        </div>
      </div>

      {/* WAITLIST FORM */}
      <section className="waitlist-section" id="waitlist" ref={waitlistRef}>
        <div className="container">
          <div className="waitlist-box">
            {!success ? (
              <div>
                <h2>Get early access to Tokeniz</h2>
                <p>We're onboarding the first wave of asset owners and founders. Join the waitlist and we'll reach out when your spot opens.</p>
                <input
                  type="text"
                  className="wl-input"
                  placeholder="Your name"
                  autoComplete="given-name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(false); }}
                  style={nameError ? { borderColor: "#EF4444" } : undefined}
                />
                <input
                  type="email"
                  className="wl-input"
                  placeholder="Your best email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                  style={emailError ? { borderColor: "#EF4444" } : undefined}
                />
                <button
                  className="btn btn-primary"
                  onClick={submitWaitlist}
                  disabled={submitting}
                  style={{ width: "100%", justifyContent: "center", marginTop: 6, padding: "14px 24px", fontSize: "0.95rem" }}
                >
                  {submitting ? "Joining…" : "Join Waitlist →"}
                </button>
                <div className="wl-hint" style={{ color: hintColor }}>{hint}</div>
              </div>
            ) : (
              <div className="wl-success" style={{ display: "block" }}>
                <div className="check">✓</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>You're on the list!</div>
                <div style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: 20 }}>We'll reach out when your spot opens. In the meantime, check out what's already live:</div>
                <a href="https://propex.app" target="_blank" rel="noopener" className="btn btn-ghost" style={{ fontSize: "0.85rem" }}>
                  Explore Propex Marketplace →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DIGITAL DOLLAR */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="section-header">
            <div className="tag">Digital Dollar Ready</div>
            <h2>No bank account? No problem.</h2>
            <p>Tokenized assets settle in USDC/USDT. Your investors pay in digital dollars. Your operators receive distributions on-chain. No traditional banking required to start — add fiat rails later when you need them.</p>
          </div>
          <div className="dd-grid">
            <div className="dd-card">
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>💵</div>
              <h3>Instant settlement</h3>
              <p>USDC/USDT payments arrive in seconds, not days. No wire delays, no intermediary fees, no banking hours.</p>
            </div>
            <div className="dd-card">
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>🌍</div>
              <h3>Global by default</h3>
              <p>Investors from anywhere can participate. No SWIFT codes, no correspondent banks, no currency conversion friction.</p>
            </div>
            <div className="dd-card">
              <div style={{ fontSize: "1.5rem", marginBottom: 10 }}>🏗</div>
              <h3>No EIN needed to start</h3>
              <p>Non-US founders accepting only crypto don't need an EIN upfront. Save $200+ and weeks of waiting. Add it when you go fiat.</p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <p style={{ fontSize: "0.78rem", color: "var(--subtle)", maxWidth: 600, margin: "0 auto" }}>Primarily for non-US based founders and asset owners. US persons may have additional regulatory and tax obligations. Always consult a qualified professional.</p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "24px 0" }}>
        <div className="container">
          <p style={{ fontSize: "0.72rem", color: "var(--subtle)", textAlign: "center", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
            <strong>Disclaimer:</strong> Tokeniz provides tokenization infrastructure and technology. This is not legal, tax, investment, or financial advice. Tokenized assets involve risks including but not limited to: regulatory uncertainty, liquidity risk, smart contract risk, and potential loss of value. Token offerings may be subject to securities laws in your jurisdiction. Always seek independent legal and financial advice before participating in or offering tokenized assets. Tokeniz does not guarantee returns, liquidity, or regulatory approval. Cryptocurrency and stablecoin transactions are irreversible and subject to market volatility. Past performance of any tokenized asset does not guarantee future results.
          </p>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="tag" style={{ margin: "0 auto 20px" }}>Early Access</div>
          <h2>Ready to tokenize your assets?</h2>
          <p style={{ color: "var(--muted)", maxWidth: 480, margin: "0 auto 40px" }}>
            Join the waitlist. We're onboarding the first wave of founders and asset owners.
          </p>
          <a href="#waitlist" className="btn btn-primary btn-xl" onClick={scrollToWaitlist}>
            Join the Waitlist →
          </a>
          <div className="final-note">No commitment. We'll reach out when your spot opens.</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-logo">Token<span>iz</span></div>
            <div className="footer-note">Tokenization infrastructure for founders and asset owners.</div>
          </div>
          <div className="footer-links">
            <a href="https://companiz.xyz">Need a company? Companiz →</a>
            <a href="https://propex.app">Propex</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:hello@tokeniz.ai">hello@tokeniz.ai</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
