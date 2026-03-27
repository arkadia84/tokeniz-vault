import { useState } from "react";

const featData: Record<string, { tag: string; title: string; pills: string[] }> = {
  entity: {
    tag: "Entity Formation",
    title: "Your US company, without the paperwork nightmare.",
    pills: ["Series LLC", "Wyoming registered", "EIN support", "Operating agreement", "Multi-cell structure", "No US address", "Asset protection"],
  },
  account: {
    tag: "Global Business Account",
    title: "A business account built for cross-border founders.",
    pills: ["Visa Platinum card", "0% FX on USD", "Virtual + physical", "USDC & USDT", "US & Euro accounts", "AI assistant", "24/7 access"],
  },
  transfers: {
    tag: "Transfers & Collections",
    title: "Send and receive in 100+ countries.",
    pills: ["100+ countries", "Local networks", "SWIFT available", "Wholesale FX", "Shopify payouts", "Amazon compatible", "Stablecoin transfers"],
  },
  ai: {
    tag: "AI Financial Operations",
    title: "Your business won't manage money. It'll delegate it.",
    pills: ["WhatsApp agent", "Voice commands", "Payroll batches", "Card management", "Expense tracking", "Invoice automation", "24/7"],
  },
  ownership: {
    tag: "Programmable Ownership",
    title: "Turn companies into digital infrastructure.",
    pills: ["On-chain cap tables", "Fractional ownership", "Global transfer", "Compliant structure", "Digital-native", "Asset tokenization", "DAO-ready"],
  },
};

const tabs = [
  { key: "entity", icon: "🏢", title: "US Series LLC Formation", desc: "A Series LLC gives you the legal flexibility of a US company with asset isolation between each cell — the most powerful structure for founders managing multiple ventures, IP assets, or investment vehicles. No lawyer required. No US address needed." },
  { key: "account", icon: "💳", title: "Global Business Account", desc: "Powered by Elephants Inc. — purpose-built for entrepreneurs who operate across borders. Open in minutes, spend globally from day one." },
  { key: "transfers", icon: "🌍", title: "Outbound Transfers & Collections", desc: "Send money to contractors, suppliers, and partners in 100+ countries. Receive from Shopify, Amazon, and global platforms into your US or Euro virtual account." },
  { key: "ai", icon: "⚡", title: "AI Financial Operations", desc: "The AI financial assistant manages your expenses, flags card utilization, runs payroll batches, and lets you manage your entire financial operation by voice or WhatsApp — 24/7." },
  { key: "ownership", icon: "🔗", title: "Programmable Ownership", desc: "Create digital-native companies. Tokenize ownership of assets. Enable fractional participation. Manage cap tables on-chain. Transfer ownership globally." },
];

export function FeaturesSection() {
  const [active, setActive] = useState("entity");
  const feat = featData[active];

  return (
    <section id="features" className="py-24 lg:py-24 bg-gradient-to-b from-background to-[hsl(222,60%,4%)] px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4 text-center">What you get</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
          A New Infrastructure for <span className="text-primary">Ownership</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-0">
          {/* Tab list */}
          <div className="flex flex-col gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`text-left p-6 border-l-2 transition-all duration-300 ${
                  active === tab.key
                    ? "border-l-primary bg-card"
                    : "border-l-transparent hover:bg-card/30"
                }`}
                onClick={() => setActive(tab.key)}
              >
                <h4 className="text-sm font-bold text-foreground mb-1.5">
                  {tab.icon} {tab.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-[1.7]">{tab.desc}</p>
              </button>
            ))}
          </div>

          {/* Visual panel */}
          <div className="bg-card border border-border rounded-[20px] p-10 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary mb-3">{feat.tag}</div>
              <div className="text-xl font-extrabold text-foreground leading-tight" style={{ letterSpacing: "-0.02em" }}>
                {feat.title}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {feat.pills.map((pill, i) => (
                <span
                  key={pill}
                  className={`px-4 py-2 rounded-full text-[0.78rem] font-semibold border transition-all ${
                    i === 0
                      ? "bg-primary/15 border-primary/30 text-primary"
                      : "bg-card2 border-border text-muted-foreground"
                  }`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
