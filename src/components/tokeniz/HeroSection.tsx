import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Grid visual */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[500px] h-[500px] animate-grid" style={{ transformStyle: "preserve-3d" }}>
          <svg viewBox="0 0 500 500" className="w-full h-full">
            {Array.from({ length: 11 }).map((_, i) =>
            <g key={i}>
                <line x1={i * 50} y1={0} x2={i * 50} y2={500} stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.5" />
                <line x1={0} y1={i * 50} x2={500} y2={i * 50} stroke="hsl(217 91% 60% / 0.3)" strokeWidth="0.5" />
              </g>
            )}
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 text-center max-w-4xl">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Infrastructure for Tokenized Ownership
          </div>
        </div>

        <h1 className="fade-up fade-up-delay-1 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-gradient mb-6">
          Turn Companies Into Digital Infrastructure
        </h1>

        <p className="fade-up fade-up-delay-2 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
          Tokeniz allows entrepreneurs, asset owners, and operators to create on-chain companies that can own, manage, and distribute real-world assets using programmable ownership.
        </p>

        <p className="fade-up fade-up-delay-3 text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10">
          Build, manage and distribute ownership of companies and assets using compliant legal structures combined with blockchain infrastructure.
        </p>

        <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2" asChild>
            <a href="#contact">
              Register Early Access
              <ArrowRight size={16} />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-secondary px-8" asChild>
            <a href="https://calendar.app.google/oj4GCa72dQYVC22RA">Book a Demo</a>
          </Button>
        </div>

        {/* Floating cards */}
        <div className="fade-up fade-up-delay-4 mt-16 lg:mt-24 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto">
          {["Real Estate", "Fund", "IP Assets"].map((label) =>
          <div
            key={label}
            className="glass rounded-lg p-3 sm:p-4 text-center hover:border-primary/30 transition-colors duration-300">
            
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <div className="w-3 h-3 rounded-sm bg-primary/60" />
              </div>
              <p className="text-xs font-medium text-muted-foreground">{label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}