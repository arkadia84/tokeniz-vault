const tradItems = [
  { icon: "📄", text: "Legal Entity — weeks of paperwork, lawyers, notaries" },
  { icon: "🏛️", text: "Business Account — requires US address, in-person verification" },
  { icon: "📋", text: "Share Registry — manual spreadsheets, no on-chain record" },
  { icon: "👤", text: "Broker — high fees, slow transfers, geographic limits" },
  { icon: "📊", text: "Cap Table — offline, opaque, impossible to transfer digitally" },
];

const tokItems = [
  { icon: "🏢", text: "Series LLC — formed in 10 minutes, no US address required", badge: "Instant" },
  { icon: "💳", text: "Global business account — open alongside your entity, same day", badge: "Same day" },
  { icon: "🔗", text: "Programmable ownership — structured, fractionalized, transferable digitally", badge: "On-chain" },
  { icon: "🌍", text: "Global payouts — 100+ countries, 0% FX on USD, stablecoin support", badge: "0% FX" },
  { icon: "⚡", text: "AI financial operations — manage everything by WhatsApp, 24/7", badge: "Automated" },
];

export function ProblemSection() {
  return (
    <section id="about" className="relative py-24 lg:py-24 bg-gradient-to-b from-background to-[hsl(222,60%,4%)]">
      <div className="max-w-[1100px] mx-auto px-5">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4">The problem</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-4" style={{ letterSpacing: "-0.03em" }}>
          The World's Assets Still Run on <span className="text-primary">Paper Infrastructure</span>
        </h2>
        <p className="fade-up fade-up-delay-1 text-base text-muted-foreground max-w-[560px] leading-[1.75]">
          Companies and assets today rely on fragmented systems: lawyers, registries, brokers and spreadsheets. Ownership transfers are slow, costly and opaque. The moment you go global, the system breaks.
        </p>

        {/* Traditional Stack */}
        <div className="fade-up fade-up-delay-2 bg-card2 border border-border rounded-[20px] p-8 mt-12">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-muted-foreground/60 mb-5">Traditional Stack</p>
          <div className="divide-y divide-border">
            {tradItems.map((item) => (
              <div key={item.text} className="flex items-center gap-3.5 py-3.5">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-secondary flex items-center justify-center text-base shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-muted-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[0.78rem] font-bold uppercase tracking-[0.08em] text-muted-foreground/60">Tokeniz replaces all of this</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Tokeniz Stack */}
        <div className="fade-up bg-gradient-to-br from-primary/8 to-primary/3 border border-primary/25 rounded-[20px] p-8">
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-primary mb-5">Tokeniz Stack</p>
          <div className="divide-y divide-primary/10">
            {tokItems.map((item) => (
              <div key={item.text} className="flex items-center gap-3.5 py-3.5">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-primary/15 flex items-center justify-center text-base shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm text-foreground font-semibold">{item.text}</span>
                <span className="ml-auto text-[0.68rem] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
