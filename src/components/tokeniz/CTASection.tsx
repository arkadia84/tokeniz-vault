export function CTASection({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="tag" style={{ margin: '0 auto 20px' }}>Free · 2 Minutes · No Signup</div>
        <h2>Two minutes to know<br />exactly where you stand.</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 460, margin: '0 auto 40px' }}>
          Take the Smart Match quiz. Get your personalised entity recommendation and financial access shortlist — then choose how much support you want.
        </p>
        <button className="btn btn-primary btn-xl" onClick={onOpenQuiz}>
          Start My Smart Match →
        </button>
        <div className="final-note">No commitment required. Free results always available.</div>
      </div>
    </section>
  );
}
