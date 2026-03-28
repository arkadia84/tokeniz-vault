import { useState } from "react";
import { Button } from "@/components/ui/button";

const heroData = {
  new: {
    h1: <>Your Company. <span className="text-primary">Built for<br />the World.</span></>,
    sub: "Tokeniz lets non-US founders launch a US Series LLC and open a global business account — without a US address, a lawyer, or a bank appointment.",
    sub2: "Build, manage and distribute ownership of companies and assets using compliant legal structures combined with digital infrastructure.",
    cta: "Launch My Company →",
  },
  existing: {
    h1: <>Better Infrastructure. <span className="text-primary">No Reforms.</span></>,
    sub: "Already have a company? Upgrade your financial setup. Get a global business account, 0% FX on USD, and transfers to 100+ countries — without touching your existing entity.",
    sub2: "Connect your existing LLC to the full Tokeniz infrastructure stack. Account-only setup from $197.",
    cta: "Upgrade My Account →",
  },
};

const heroCards = [
  { icon: "🏢", text: "Series LLC Formation" },
  { icon: "💳", text: "Global Business Account" },
  { icon: "🌍", text: "100+ Countries" },
  { icon: "⚡", text: "10 Minute Setup" },
];

export function HeroSection() {
  const [audience, setAudience] = useState<"new" | "existing">("new");
  const data = heroData[audience];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 text-center px-5 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-orange/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Badge */}
        <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-xs font-semibold text-primary mb-9">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Infrastructure for Tokenized Ownership
        </div>

        {/* Audience toggle */}
        <div className="fade-up fade-up-delay-1 flex gap-0 bg-card border border-border rounded-xl p-1 w-fit mx-auto mb-9">
          <button
            className={`px-7 py-2.5 rounded-[9px] text-sm font-semibold transition-all ${
              audience === "new" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
            onClick={() => setAudience("new")}
          >
            Starting fresh
          </button>
          <button
            className={`px-7 py-2.5 rounded-[9px] text-sm font-semibold transition-all ${
              audience === "existing" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
            onClick={() => setAudience("existing")}
          >
            Already incorporated
          </button>
        </div>

        {/* Headline */}
        <h1 className="fade-up fade-up-delay-1 text-4xl sm:text-5xl lg:text-[4.2rem] font-black tracking-tight leading-[1.08] mb-6" style={{ letterSpacing: "-0.03em" }}>
          {data.h1}
        </h1>

        <p className="fade-up fade-up-delay-2 text-base sm:text-lg lg:text-[1.15rem] text-muted-foreground max-w-[560px] mx-auto mb-4 leading-[1.7]">
          {data.sub}
        </p>

        <p className="fade-up fade-up-delay-3 text-sm max-w-[500px] mx-auto mb-12 leading-[1.7] text-muted-foreground">
          {data.sub2}
        </p>

        {/* CTA buttons */}
        <div className="fade-up fade-up-delay-4 flex flex-col items-center gap-3.5">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2.5 rounded-xl font-bold w-[280px] h-[52px] text-base" asChild>
            <a href="https://app.tokeniz.ai">{data.cta}</a>
          </Button>
          <Button size="lg" className="bg-orange text-foreground hover:bg-orange/90 px-8 gap-2.5 rounded-xl font-bold w-[280px] h-[52px] text-base" asChild>
            <a href="https://calendar.app.google/oj4GCa72dQYVC22RA" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>

        {/* Feature cards */}
        <div className="fade-up fade-up-delay-4 flex flex-wrap justify-center gap-4 mt-[72px]">
          {heroCards.map((card) => (
            <div key={card.text} className="bg-card border border-border rounded-2xl px-6 py-5 flex items-center gap-3 min-w-[160px]">
              <div className="w-9 h-9 rounded-[10px] bg-primary/15 flex items-center justify-center text-base shrink-0">
                {card.icon}
              </div>
              <span className="text-[0.82rem] font-semibold text-foreground">{card.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
