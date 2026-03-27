import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/tokeniz/Header";
import { HeroSection } from "@/components/tokeniz/HeroSection";
import { StatsSection } from "@/components/tokeniz/StatsSection";
import { ProblemSection } from "@/components/tokeniz/ProblemSection";
import { AudienceSection } from "@/components/tokeniz/AudienceSection";
import { HowItWorksSection } from "@/components/tokeniz/HowItWorksSection";
import { FeaturesSection } from "@/components/tokeniz/FeaturesSection";
import { VisionSection } from "@/components/tokeniz/VisionSection";
import { PricingSection } from "@/components/tokeniz/PricingSection";
import { TestimonialsSection } from "@/components/tokeniz/TestimonialsSection";
import { FAQSection } from "@/components/tokeniz/FAQSection";
import { CTASection } from "@/components/tokeniz/CTASection";
import { Footer } from "@/components/tokeniz/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <AudienceSection />
      <HowItWorksSection />
      <FeaturesSection />
      <VisionSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
