import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-2xl relative text-center">
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Build the Next Generation of Companies
        </h2>
        <p className="fade-up fade-up-delay-1 text-muted-foreground mb-10 text-base lg:text-lg">
          Experience tokenized ownership infrastructure firsthand.
        </p>

        <div className="fade-up fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 gap-2" asChild>
            <a href="https://app.tokeniz.ai">
              Try Demo App
              <ArrowRight size={16} />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-secondary px-8" asChild>
            <a href="https://calendar.app.google/oj4GCa72dQYVC22RA" target="_blank" rel="noopener noreferrer">
              Book a Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
