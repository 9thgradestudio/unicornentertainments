import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Palette, Film, Scissors, Sparkles, Music, Video } from "lucide-react";

const services = [
  { icon: Palette, title: "Color Grading", desc: "Transform raw footage into cinematic masterpieces with professional color science and mood-driven grading." },
  { icon: Film, title: "DI (Digital Intermediate)", desc: "Complete digital intermediate pipeline ensuring theatrical-quality output for every project." },
  { icon: Scissors, title: "Editing", desc: "Precision editing that shapes narrative, pacing, and emotion to create compelling stories." },
  { icon: Sparkles, title: "VFX", desc: "Visual effects that seamlessly blend with live-action footage for breathtaking results." },
  { icon: Video, title: "Motion Poster Animation", desc: "Dynamic, eye-catching motion posters that build anticipation and captivate audiences." },
  { icon: Music, title: "Sound Design", desc: "Immersive soundscapes that elevate the cinematic experience to another dimension." },
];

const Services = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 cinema-section">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Post Production</p>
            <h1 className="cinema-heading text-foreground mb-6">
              We Shape Emotion<br />
              <span className="text-gold-gradient">Through Frames</span>
            </h1>
            <p className="cinema-subheading max-w-xl mx-auto">
              From raw footage to cinematic brilliance — our post-production pipeline delivers world-class results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group p-8 border border-border/20 bg-card/30 hover:border-primary/30 hover:glow-gold transition-all duration-700 h-full">
                  <service.icon size={32} className="text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl tracking-wider text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
