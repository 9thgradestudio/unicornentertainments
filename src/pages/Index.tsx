import PageTransition from "@/components/PageTransition";
import HeroShowcase from "@/components/home/HeroShowcase";
import ServicesOverview from "@/components/home/ServicesOverview";
import HowWeWork from "@/components/home/HowWeWork";
import RentalsCTA from "@/components/home/RentalsCTA";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(var(--cinema-black))]">
        <HeroShowcase />
        <ServicesOverview />
        <HowWeWork />
        <RentalsCTA />
      </div>
    </PageTransition>
  );
};

export default Index;
