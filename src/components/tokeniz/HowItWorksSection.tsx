const steps = [
  {
    num: "01",
    icon: "🏢",
    title: "Create a Tokenized Company",
    desc: "Launch a US Series LLC — a digital-native company structure designed for modern entrepreneurs and asset owners. No lawyer, no US address, no notary required.",
    time: "~10 minutes",
    active: true,
  },
  {
    num: "02",
    icon: "💼",
    title: "Attach Assets or Ventures",
    desc: "Real estate, funds, startups, infrastructure projects or digital businesses. Each Series LLC cell isolates your assets with legal separation built in.",
    time: "Same day",
  },
  {
    num: "03",
    icon: "🔗",
    title: "Tokenize Ownership",
    desc: "Enable fractional participation, manage cap tables on-chain, and transfer ownership globally. Compliant legal structures combined with programmable digital infrastructure.",
    time: "Automated",
  },
  {
    num: "04",
    icon: "🌍",
    title: "Operate Globally",
    desc: "Your global business account is open. Your Visa Platinum card is issued. Send money to 100+ countries, receive in USDC/USDT, and let the AI financial assistant run your operations.",
    time: "Ongoing",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="relative py-24 lg:py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4 text-center">How it works</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-4 text-center" style={{ letterSpacing: "-0.03em" }}>
          How Tokeniz Works
        </h2>
        <p className="fade-up fade-up-delay-1 text-base text-muted-foreground max-w-[560px] mx-auto text-center mb-12 leading-[1.75]">
          Four steps from traditional company to globally accessible digital infrastructure.
        </p>

        <div className="flex flex-col gap-0">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`fade-up flex items-start gap-5 p-6 rounded-2xl border transition-all duration-300 ${
                step.active
                  ? "bg-card border-primary/25"
                  : "border-transparent hover:bg-card/50 hover:border-border/50"
              }`}
            >
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-bold text-primary/60">{step.num}</span>
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-lg">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-[1.7]">{step.desc}</p>
              </div>
              <span className="text-[0.72rem] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 self-start">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
