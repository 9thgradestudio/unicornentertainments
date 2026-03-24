import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ColorGradingSection from "@/components/home/ColorGradingSection";
import YouTubeShowcase from "@/components/home/YouTubeShowcase";
import EquipmentPreview from "@/components/home/EquipmentPreview";
import ContactCTA from "@/components/home/ContactCTA";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <ColorGradingSection />
      <YouTubeShowcase />
      <EquipmentPreview />
      <ContactCTA />
    </PageTransition>
  );
};

export default Index;
