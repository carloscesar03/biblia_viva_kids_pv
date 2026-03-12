import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import FeaturesSection from "./components/FeaturesSection";
import JourneySection from "./components/JourneySection";
import OfferSection from "./components/OfferSection";
import GuaranteeSection from "./components/GuaranteeSection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-200 selection:text-emerald-900">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <JourneySection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
