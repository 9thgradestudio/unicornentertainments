import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Capabilities from "@/components/home/Capabilities";
import ClientsGrid from "@/components/home/ClientsGrid";
import ColorGradingSection from "@/components/home/ColorGradingSection";
import YouTubeShowcase from "@/components/home/YouTubeShowcase";
import EquipmentPreview from "@/components/home/EquipmentPreview";
import OurStory from "@/components/home/OurStory";
import ContactCTA from "@/components/home/ContactCTA";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedProjects />
      <Capabilities />
      <ClientsGrid />
      <EquipmentPreview />
      <OurStory />
      <ColorGradingSection />
      <YouTubeShowcase />
      <ContactCTA />
    </PageTransition>
  );
};

export default Index;
