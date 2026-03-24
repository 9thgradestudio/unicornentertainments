import AnimatedSection from "../AnimatedSection";
import EarthElement from "../elements/EarthElement";

const ColorGradingSection = () => {
  return (
    <section className="cinema-section bg-cinema-darker relative overflow-hidden">
      <EarthElement />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Color Grading</p>
            <h2 className="cinema-heading text-foreground mb-6">
              Color Is <span className="text-gold-gradient">Emotion</span>
            </h2>
            <p className="cinema-subheading mb-4">From flat frames to cinematic brilliance.</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Our color grading transforms raw footage into visual poetry. Every frame is crafted to evoke the precise emotion your story demands — warmth, tension, wonder, or raw power.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">Before</p>
                <div className="relative overflow-hidden border border-border/20 aspect-video group-hover:border-primary/30 transition-all duration-500">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/videos/before.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-gold pointer-events-none" />
                </div>
              </div>
              <div className="relative group">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3 text-center">After</p>
                <div className="relative overflow-hidden border border-border/20 aspect-video group-hover:border-primary/30 transition-all duration-500">
                  <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                    <source src="/videos/after.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-gold pointer-events-none" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ColorGradingSection;
