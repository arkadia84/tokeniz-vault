import { Button } from "@/components/ui/button";

const plans = [
  {
    tier: "Starter",
    price: "$497",
    period: "one-time formation fee",
    features: [
      "Series LLC cell formation",
      "EIN application support",
      "Global business account setup",
      "6 months account fees waived ($108 value)",
      "Visa Platinum card (virtual + physical)",
      "0% FX on USD transactions",
      "Email support",
    ],
    value: "Best for founders validating their first global venture.",
  },
  {
    tier: "Pro",
    price: "$797",
    period: "one-time formation fee",
    featured: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Full operating agreement",
      "Registered agent (Year 1 included)",
      { text: "24 months account fees waived ($424 value)", bold: true },
      "Priority onboarding",
      "Dedicated setup call",
      "USDC / USDT support",
      "Transfers to 100+ countries",
    ],
    value: "The $424 fee waiver means you're effectively paying $373 for your entity, registered agent, and operating agreement.",
  },
  {
    tier: "Scale",
    price: "$1,497",
    period: "one-time formation fee",
    features: [
      "Everything in Pro",
      "Up to 3 Series LLC cells",
      "Bookkeeping intro session",
      "White-glove KYB assistance",
      "Ongoing compliance monitoring",
      "Multi-entity dashboard",
      "Dedicated account manager",
    ],
    value: "Best for founders managing multiple ventures or asset structures.",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4 text-center">Pricing</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-4 text-center" style={{ letterSpacing: "-0.03em" }}>
          Simple pricing. <span className="text-primary">Serious infrastructure.</span>
        </h2>
        <p className="fade-up fade-up-delay-1 text-base text-muted-foreground max-w-[560px] mx-auto text-center leading-[1.75]">
          One-time formation fee. No surprises. The account fee waiver alone covers a significant portion of your investment.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`fade-up relative bg-card border rounded-[20px] p-8 flex flex-col ${
                plan.featured ? "border-primary/40" : "border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[0.68rem] font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground/60 mb-2">{plan.tier}</div>
              <div className="text-4xl font-black text-foreground mb-1">{plan.price}</div>
              <div className="text-xs text-muted-foreground mb-6">{plan.period}</div>
              <div className="h-px bg-border mb-6" />
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => {
                  const text = typeof f === "string" ? f : f.text;
                  const bold = typeof f === "object" && f.bold;
                  return (
                    <li key={text} className="flex gap-2 text-[0.82rem] text-muted-foreground">
                      <span className="text-primary shrink-0">✓</span>
                      <span className={bold ? "font-bold text-foreground" : ""}>{text}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="text-xs text-muted-foreground/60 leading-[1.7] mt-6 mb-5">{plan.value}</p>
              <Button
                className={`w-full rounded-xl font-bold ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-card border border-border text-foreground hover:border-primary/40"
                }`}
                asChild
              >
                <a href="https://app.tokeniz.ai">Get started →</a>
              </Button>
            </div>
          ))}
        </div>

        <p className="fade-up text-center text-xs text-muted-foreground/60 mt-8">
          All plans include Visa Platinum card, global business account, and 0% FX on USD. Business account provided by Elephants (AU) Pty Ltd. Annual registered agent renewal applies after Year 1 ($149/year).
        </p>
      </div>
    </section>
  );
}
