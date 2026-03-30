import { useState } from "react";
import { Header } from "@/components/tokeniz/Header";
import { HeroSection } from "@/components/tokeniz/HeroSection";
import { TrustStrip } from "@/components/tokeniz/TrustStrip";
import { ProblemSection } from "@/components/tokeniz/ProblemSection";
import { HowItWorksSection } from "@/components/tokeniz/HowItWorksSection";
import { ResultOptionsSection } from "@/components/tokeniz/ResultOptionsSection";
import { EntityTypesSection } from "@/components/tokeniz/EntityTypesSection";
import { PartnersSection } from "@/components/tokeniz/PartnersSection";
import { CTASection } from "@/components/tokeniz/CTASection";
import { Footer } from "@/components/tokeniz/Footer";
import { QuizModal } from "@/components/tokeniz/QuizModal";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);
  const openQuiz = () => setQuizOpen(true);
  const closeQuiz = () => setQuizOpen(false);

  return (
    <>
      <Header onOpenQuiz={openQuiz} />
      <HeroSection onOpenQuiz={openQuiz} />
      <TrustStrip />
      <ProblemSection />
      <HowItWorksSection />
      <ResultOptionsSection onOpenQuiz={openQuiz} />
      <EntityTypesSection />
      <PartnersSection />
      <CTASection onOpenQuiz={openQuiz} />
      <Footer />
      <QuizModal open={quizOpen} onClose={closeQuiz} />
    </>
  );
};

export default Index;
