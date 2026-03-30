const steps = [
  {
    num: 1,
    title: "Answer 5 questions about your situation",
    desc: "Where you're based, where your customers are, what you're building, and what matters most to you. Takes two minutes. No signup required.",
  },
  {
    num: 2,
    title: "Get your personalised match",
    desc: "Your recommended entity type, jurisdiction, and the financial access partners most likely to approve your profile — ranked by fit, not by who pays us the most.",
  },
  {
    num: 3,
    title: "Choose your level of support",
    desc: "Get your personalised action plan by email and apply yourself for free. Or let Tokeniz handle the whole process — from formation to financial access — protecting every application.",
  },
  {
    num: 4,
    title: "Launch and operate",
    desc: "Your company is formed, your business account is open, and you're ready to receive payments globally — without the months of trial and error.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="tag">How It Works</div>
          <h2>One quiz. One recommendation.<br />A clear path forward.</h2>
        </div>
        <div className="flow-wrap">
          {steps.map((step, i) => (
            <div key={step.num} className="flow-row">
              <div className="flow-left">
                <div className="flow-num">{step.num}</div>
                {i < steps.length - 1 && <div className="flow-line" />}
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
  );
}
