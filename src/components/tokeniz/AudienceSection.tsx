const audiences = [
  {
    icon: "🚀",
    title: "Starting a new company",
    desc: "You need a US entity, a business account, and the ability to operate globally — without flying to the US.",
    items: ["Form a Series LLC in 10 minutes", "Open a global business account same day", "Get a Visa Platinum card instantly", "Send and receive in 100+ countries"],
  },
  {
    icon: "🏢",
    title: "Already have a company",
    desc: "Your entity is formed but your financial infrastructure is stuck in the old world. Upgrade without touching your legal structure.",
    items: ["Add a global business account to your entity", "0% FX on USD transactions", "Add stablecoin (USDC/USDT) capability", "One dashboard for all your financial operations"],
  },
];

export function AudienceSection() {
  return (
    <section className="py-24 lg:py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4 text-center">Who is it for</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-4 text-center" style={{ letterSpacing: "-0.03em" }}>
          Built for <span className="text-primary">Global Founders</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {audiences.map((aud) => (
            <div key={aud.title} className="bg-card border border-border rounded-[20px] p-9 hover:border-primary/25 transition-all duration-300 hover:-translate-y-0.5">
              <span className="text-3xl block mb-5">{aud.icon}</span>
              <h3 className="text-xl font-extrabold mb-2.5" style={{ letterSpacing: "-0.02em" }}>{aud.title}</h3>
              <p className="text-sm text-muted-foreground leading-[1.7] mb-5">{aud.desc}</p>
              <ul className="flex flex-col gap-2">
                {aud.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[0.82rem] text-foreground font-medium">
                    <span className="text-primary shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
