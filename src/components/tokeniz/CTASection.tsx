import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-confirmation", {
        body: { email },
      });

      if (error) throw error;

      toast({
        title: "You're on the list! 🎉",
        description: "Check your inbox for a confirmation email with more details.",
      });
      setEmail("");
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
          />
          <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 shrink-0" disabled={loading}>
            {loading ? <Loader2 size={16} className="animate-spin" /> : null}
            Register Early Access
            {!loading && <ArrowRight size={16} />}
          </Button>
        </form>

        <div className="fade-up fade-up-delay-3">
          <a href="https://calendar.app.google/oj4GCa72dQYVC22RA" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-white/10">
              Book a Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
