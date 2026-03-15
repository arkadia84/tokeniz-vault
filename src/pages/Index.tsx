import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Header } from "@/components/tokeniz/Header";
import { HeroSection } from "@/components/tokeniz/HeroSection";
import { ProblemSection } from "@/components/tokeniz/ProblemSection";
import { SolutionSection } from "@/components/tokeniz/SolutionSection";
import { HowItWorksSection } from "@/components/tokeniz/HowItWorksSection";
import { UseCasesSection } from "@/components/tokeniz/UseCasesSection";
import { FinancialStackSection } from "@/components/tokeniz/FinancialStackSection";
import { VisionSection } from "@/components/tokeniz/VisionSection";
import { EcosystemSection } from "@/components/tokeniz/EcosystemSection";
import { CTASection } from "@/components/tokeniz/CTASection";
import { Footer } from "@/components/tokeniz/Footer";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <UseCasesSection />
      <FinancialStackSection />
      <VisionSection />
      <EcosystemSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
