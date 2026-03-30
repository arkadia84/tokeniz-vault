const painCards = [
  {
    number: "4–8",
    title: "Weeks lost on average",
    desc: "The typical non-US founder spends 4 to 8 weeks applying to institutions before getting operational — and most of those applications go nowhere.",
  },
  {
    number: "73%",
    title: "Apply to the wrong institution first",
    desc: "Most founders approach providers that are structurally unsuitable for their industry, residency, or entity type — and only discover this after the rejection.",
  },
  {
    number: "0",
    title: "Personalised guidance anywhere else",
    desc: "Every other platform routes everyone to the same entity and the same account. Nobody stops to ask who you actually are and where you actually operate.",
  },
];

export function ProblemSection() {
  return (
    <section className="problem-bg">
      <div className="container">
        <div className="section-header">
          <div className="tag">The Real Cost of Getting It Wrong</div>
          <h2>Founders waste months on<br />applications that were never going to work</h2>
          <p>A failed KYB isn't just a rejection. It creates a compliance trail that follows your company — and quietly closes doors at the next institution.</p>
        </div>
        <div className="pain-grid">
          {painCards.map((card) => (
            <div key={card.number} className="pain-card">
              <div className="pain-number">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
