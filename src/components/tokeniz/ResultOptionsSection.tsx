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
            <div className="option-timeline">🤖 AI-guided, at your pace — instructions, checklists &amp; async support</div>
            <div className="option-desc">
              Our AI agent walks you through every step after payment — which entity to form, which bank to approach first, what documents to prepare, and exactly what to say. You do the actions, the agent makes sure you don't waste a single application.
            </div>
            <ul className="option-features">
              <li><span className="ck">✓</span> <span><strong>Everything in Self-Serve</strong></span></li>
              <li><span className="ck">✓</span> <span>AI-powered step-by-step guidance — sent after payment</span></li>
              <li><span className="ck">✓</span> <span>Entity-specific document checklist</span></li>
              <li><span className="ck">✓</span> <span>Bank application walkthrough — field by field</span></li>
              <li><span className="ck">✓</span> <span>Async Q&amp;A — ask anything, get answers fast</span></li>
              <li><span className="ck">✓</span> <span>Document review before every submission</span></li>
            </ul>
            <div className="option-disclaimer">
              Advisory service fee — account opening is not guaranteed, as final decisions rest with the financial institution. We maximise your chances by making sure every application is right the first time.
            </div>
            <button className="opt-btn opt-btn-primary" onClick={onOpenQuiz}>Start with the Quiz →</button>
          </div>

          {/* Option 3 — Founder's Pack */}
          <div className="option-card">
            <div className="option-tier">Option 03 — Founder's Pack</div>
            <div className="option-price"><span className="cur">$</span><span className="amt">697</span></div>
            <div style={{ fontSize: '0.72rem', color: 'var(--subtle)', marginBottom: 10, fontStyle: 'italic' }}>Advisory fee only · formation costs paid separately to partners</div>
            <div className="option-timeline">🛡 Human expert included</div>
            <div className="option-desc">
              Everything in Guided, plus a 30-minute intro call with a vetted legal expert — ask your specific questions on structure, banking eligibility, and compliance before you make a single move.
            </div>
            <ul className="option-features">
              <li><span className="ck">✓</span> <span><strong>Everything in Guided</strong></span></li>
              <li><span className="ck">✓</span> <span>30-min expert intro call — specialist revealed after payment</span></li>
              <li><span className="ck">✓</span> <span>Ask anything — structure, banking, compliance, your situation</span></li>
              <li><span className="ck">✓</span> <span>Specialist matched to your jurisdiction &amp; industry</span></li>
              <li><span className="ck">✓</span> <span>Priority async support after the call</span></li>
            </ul>
            <div className="option-disclaimer">
              Advisory service fee — account opening is not guaranteed, as final decisions rest with the financial institution. Expert call provided by a vetted independent specialist.
            </div>
            <button className="opt-btn opt-btn-outline" onClick={onOpenQuiz}>Start with the Quiz →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
