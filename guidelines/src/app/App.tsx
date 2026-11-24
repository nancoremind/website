import { SEOHead } from "./components/SEOHead";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TechShowcaseSection } from "./components/TechShowcaseSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { PricingSection } from "./components/PricingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] dark">
      <SEOHead />
      <Header />
      <HeroSection />
      <TechShowcaseSection />
      <AboutSection />
      <ServicesSection />
      <UseCasesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}