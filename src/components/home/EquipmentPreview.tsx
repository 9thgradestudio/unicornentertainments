import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import SpaceElement from "../elements/SpaceElement";
import { Camera } from "lucide-react";

const gear = [
  "Sony Alpha Mark IV", "Sony FX3", "16-35mm G Master", "85mm G Master",
  "35mm 1.4 Sony", "16mm Sigma", "24-70mm Kit", "Hollyland Mic",
  "DJI Gimbal", "Godox TL60 LED",
];

const EquipmentPreview = () => {
  return (
    <section className="cinema-section bg-cinema-darker relative overflow-hidden">
      <SpaceElement />
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Rental Gear</p>
          <h2 className="cinema-heading text-foreground">
            Premium <span className="text-gold-gradient">Equipment</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {gear.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="group p-6 border border-border/20 bg-card/30 hover:border-primary/30 hover:glow-gold transition-all duration-500 text-center">
                <Camera size={28} className="mx-auto text-muted-foreground group-hover:text-primary transition-colors mb-3" />
                <p className="text-xs tracking-wider text-foreground/80 group-hover:text-foreground transition-colors">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/equipment"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block text-xs tracking-[0.25em] uppercase border border-primary/40 px-8 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Explore Rental Gear
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default EquipmentPreview;
