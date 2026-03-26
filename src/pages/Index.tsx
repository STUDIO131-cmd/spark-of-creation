import HeroSection from "@/components/HeroSection";
import ServicesTicker from "@/components/ServicesTicker";
import ImageCarousel from "@/components/ImageCarousel";
import ValueProposition from "@/components/ValueProposition";
import CasesSection from "@/components/CasesSection";
import VideoSection from "@/components/VideoSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import CtaSection from "@/components/CtaSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-studio-cream overflow-x-hidden">
      <HeroSection />
      <ServicesTicker />
      <ImageCarousel />
      <ValueProposition />
      <CasesSection />
      <VideoSection />
      <DifferentialsSection />
      <CtaSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
