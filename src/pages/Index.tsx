import HeroSection from "@/components/HeroSection";
import UserJourney from "@/components/UserJourney";
import TechStack from "@/components/TechStack";
import BharatStrategy from "@/components/BharatStrategy";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UserJourney />
      <TechStack />
      <BharatStrategy />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
