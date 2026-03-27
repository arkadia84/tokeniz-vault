import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="start" className="relative py-28 lg:py-40 overflow-hidden text-center bg-gradient-to-b from-background to-[hsl(222,70%,3%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 max-w-2xl relative">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4">Get started</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] mb-4" style={{ letterSpacing: "-0.03em" }}>
          Build the Next Generation<br />of <span className="text-primary">Companies</span>
        </h2>
        <p className="fade-up fade-up-delay-1 text-base text-muted-foreground max-w-[480px] mx-auto mb-12 leading-[1.7]">
          Experience tokenized ownership infrastructure firsthand. Your company and global account — set up in one afternoon.
        </p>

        <div className="fade-up fade-up-delay-2 flex flex-col items-center gap-3.5">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2.5 rounded-xl font-bold w-[280px] h-[52px] text-base" asChild>
            <a href="https://app.tokeniz.ai">Try Demo App →</a>
          </Button>
          <Button size="lg" className="bg-orange text-foreground hover:bg-orange/90 px-8 gap-2.5 rounded-xl font-bold w-[280px] h-[52px] text-base" asChild>
            <a href="https://calendar.app.google/oj4GCa72dQYVC22RA" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
        <p className="fade-up fade-up-delay-3 mt-4 text-[0.78rem] text-muted-foreground/60">
          No US address needed · No lawyer required · Pay only at formation
        </p>
      </div>
    </section>
  );
}
