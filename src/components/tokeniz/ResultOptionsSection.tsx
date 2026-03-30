export function ResultOptionsSection({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <section className="options-bg">
      <div className="container">
        <div className="options-intro">
          <div className="eyebrow">After Your Quiz</div>
          <h2>Your result, your choice of support</h2>
          <p>Once we know your profile, you choose how much guidance you want alongside you.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 20, padding: '12px 20px', borderRadius: 10, border: '1px solid var(--blue-border)', background: 'var(--blue-glow)' }}>
            <span style={{ fontSize: '1.1rem' }}>💡</span>
            <span style={{ fontSize: '0.83rem', color: 'var(--text)', lineHeight: 1.5 }}>
              <strong>These are advisory fees only.</strong> Company formation and government filing costs are separate — you pay those directly to the formation partner. Our fee covers the guidance, the roadmap, and the live support to make sure you don't waste a single application.
            </span>
          </div>
        </div>

        <div className="options-grid">
          {/* Option 1 — Free */}
          <div className="option-card">
            <div className="option-tier">Option 01 — Self-Serve</div>
            <div className="option-price"><span className="free-label">Free</span></div>
            <div style={{ fontSize: '0.72rem', color: 'var(--subtle)', marginBottom: 10, fontStyle: 'italic' }}>No fees · get your personalised action plan by email</div>
            <div className="option-timeline">Your roadmap — entity, jurisdiction, partners, next steps</div>
            <div className="option-desc">
              We send you everything you need to do it yourself: the right referral links,
              the exact documents to prepare, estimated annual costs, and a step-by-step action plan.
            </div>
            <ul className="option-features">
              <li><span className="ck">✓</span> <span>Recommended entity type &amp; jurisdiction</span></li>
              <li><span className="ck">✓</span> <span>Curated referral links with partner benefits</span></li>
              <li><span className="ck">✓</span> <span>Document checklist to prepare</span></li>
              <li><span className="ck">✓</span> <span>Estimated annual compliance costs</span></li>
              <li><span className="ck">✓</span> <span>Step-by-step action plan — yours to follow at your pace</span></li>
            </ul>
            <button className="opt-btn opt-btn-outline" onClick={onOpenQuiz}>Get My Action Plan →</button>
          </div>

          {/* Option 2 — Guided */}
          <div className="option-card featured">
            <div className="option-badge">Most Popular</div>
            <div className="option-tier">Option 02 — Guided</div>
            <div className="option-price"><span className="cur">$</span><span className="amt">497</span></div>
            <div style={{ fontSize: '0.72rem', color: 'var(--subtle)', marginBottom: 10, fontStyle: 'italic' }}>Advisory fee only · formation costs paid separately to partners</div>
            <div className="option-timeline">⏱ Step-by-step, at your pace — live on WhatsApp or Telegram</div>
            <div className="option-desc">
              We walk you through every step. We tell you which bank to approach first, exactly
              what to say, how to respond to follow-up requests, and answer your questions live.
              You do the actions — we make sure you don't waste a single application.
            </div>
            <ul className="option-features">
              <li><span className="ck">✓</span> <span><strong>Everything in Self-Serve</strong></span></li>
              <li><span className="ck">✓</span> <span>Step-by-step instructions sent after payment</span></li>
              <li><span className="ck">✓</span> <span>Live guidance via shared WhatsApp or Telegram</span></li>
              <li><span className="ck">✓</span> <span>We tell you exactly what to say at each step</span></li>
              <li><span className="ck">✓</span> <span>Document review before every submission</span></li>
              <li><span className="ck">✓</span> <span>Accompaniment through your shortlisted banking partners</span></li>
            </ul>
            <div className="option-disclaimer">
              Advisory service fee — account opening is not guaranteed, as final decisions rest with the financial institution. We maximise your chances by making sure every application is right the first time.
            </div>
            <button className="opt-btn opt-btn-primary" onClick={onOpenQuiz}>Start with the Quiz →</button>
          </div>

          {/* Option 3 — Fast Track */}
          <div className="option-card">
            <div className="option-tier">Option 03 — Fast Track</div>
            <div className="option-price"><span className="cur">$</span><span className="amt">997</span></div>
            <div style={{ fontSize: '0.72rem', color: 'var(--subtle)', marginBottom: 10, fontStyle: 'italic' }}>Advisory fee only · formation costs paid separately to partners</div>
            <div className="option-timeline">⚡ 10 business days — for when time is money</div>
            <div className="option-desc">
              Same hands-on guidance as Guided, with a dedicated priority slot.
              We respond faster, push harder, and keep everything moving so you're
              operational in 10 business days.
            </div>
            <ul className="option-features">
              <li><span className="ck">✓</span> <span><strong>Everything in Guided</strong></span></li>
              <li><span className="ck">✓</span> <span>Priority response — we move at your pace</span></li>
              <li><span className="ck">✓</span> <span>Dedicated support slot — no queue</span></li>
              <li><span className="ck">✓</span> <span>Target: operational in 10 business days</span></li>
            </ul>
            <div className="option-disclaimer">
              Advisory service fee — account opening is not guaranteed, as final decisions rest with the financial institution. We maximise your chances by making sure every application is right the first time.
            </div>
            <button className="opt-btn opt-btn-outline" onClick={onOpenQuiz}>Start with the Quiz →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
