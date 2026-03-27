import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Capabilities from "@/components/home/Capabilities";
import ClientsGrid from "@/components/home/ClientsGrid";
import EquipmentPreview from "@/components/home/EquipmentPreview";
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
      <ContactCTA />
    </PageTransition>
  );
};

export default Index;
