import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Camera, Phone } from "lucide-react";

const equipment = [
  { name: "Sony FX3", desc: "Cinema line full-frame camera for professional video production", category: "Camera" },
  { name: "Sony Alpha Mark IV", desc: "Hybrid mirrorless camera for stills and video", category: "Camera" },
  { name: "16-35mm G Master", desc: "Ultra-wide zoom lens for cinematic wide shots", category: "Lens" },
  { name: "85mm G Master", desc: "Portrait lens with stunning bokeh and sharpness", category: "Lens" },
  { name: "35mm 1.4 Sony", desc: "Fast prime lens for versatile shooting", category: "Lens" },
  { name: "16mm Sigma", desc: "Ultra-wide prime for dramatic perspectives", category: "Lens" },
  { name: "24-70mm Kit", desc: "Versatile standard zoom for all-purpose use", category: "Lens" },
  { name: "Hollyland Mic", desc: "Professional wireless microphone system", category: "Audio" },
  { name: "DJI Gimbal", desc: "3-axis stabilizer for smooth cinematic movement", category: "Stabilizer" },
  { name: "Godox TL60 LED", desc: "RGB tube light for creative lighting setups", category: "Lighting" },
];

const Equipment = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 cinema-section">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Rental</p>
            <h1 className="cinema-heading text-foreground mb-6">
              Premium <span className="text-gold-gradient">Equipment</span>
            </h1>
            <p className="cinema-subheading">Professional-grade gear available for your production needs.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {equipment.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="group p-6 border border-border/20 bg-card/30 hover:border-primary/30 hover:glow-gold transition-all duration-700">
                  <div className="flex items-start justify-between mb-4">
                    <Camera size={24} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{item.category}</span>
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-foreground mb-2">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{item.desc}</p>
                  <a
                    href="https://wa.me/918431172993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] tracking-[0.2em] uppercase border border-primary/40 px-4 py-2 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact section */}
          <AnimatedSection className="text-center border border-border/20 bg-card/30 p-12">
            <h2 className="font-display text-3xl tracking-wider text-foreground mb-6">Need Equipment?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918431172993" className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors">
                <Phone size={16} /> +91 84311 72993
              </a>
              <a href="tel:+919035536015" className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors">
                <Phone size={16} /> +91 90355 36015
              </a>
            </div>
            <a
              href="https://wa.me/918431172993"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-xs tracking-[0.25em] uppercase bg-gold-gradient text-primary-foreground px-8 py-3"
            >
              WhatsApp Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default Equipment;
