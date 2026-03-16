import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "You're on the list",
      description: "We'll be in touch soon with early access details.",
    });
    setEmail("");
  };

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
          Join the early adopters building digital-native companies and tokenized assets.
        </p>

        <form onSubmit={handleSubmit} className="fade-up fade-up-delay-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-secondary/50 border-border/60 h-11 text-sm"
            required
          />
          <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shrink-0">
            Register Early Access
            <ArrowRight size={16} />
          </Button>
        </form>

        <div className="fade-up fade-up-delay-3">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-white/10">
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
