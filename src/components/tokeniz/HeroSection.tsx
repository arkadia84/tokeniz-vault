export function HeroSection({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="tag">Smart Company Formation &amp; Financial Access</div>
        <h1>Stop applying to companies<br />and banks that will say <em>no.</em></h1>
        <p className="hero-sub">
          Two minutes to know exactly which entity, which jurisdiction, and which financial
          access partners give you the highest chance of success — based on who you actually are.
        </p>
        <div className="hero-cta-wrap">
          <button className="btn btn-primary btn-xl" onClick={onOpenQuiz}>
            Take the Smart Match Quiz — Free →
          </button>
          <span className="hero-note">5 questions · No signup · Results in 2 minutes</span>
        </div>
      </div>
    </section>
  );
}
