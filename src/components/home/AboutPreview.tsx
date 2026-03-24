import AnimatedSection from "../AnimatedSection";
import FireElement from "../elements/FireElement";
import { Award, Film, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  { icon: Award, text: "IFH Short Film Contest – Top 50" },
  { icon: Star, text: "Certificate of Appreciation – Indian Film House" },
  { icon: Film, text: "Mysuru Dhasara Film Festival Winner" },
  { icon: Users, text: "Major Industry Collaborations" },
];

const AboutPreview = () => {
  return (
    <section className="cinema-section bg-cinema-darker relative overflow-hidden">
      <FireElement />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">About Us</p>
          <h2 className="cinema-heading text-foreground mb-6">
            An Official Movie<br />
            <span className="text-gold-gradient">Production Company</span>
          </h2>
          <p className="font-serif italic text-muted-foreground mb-8 text-lg">
            Film Making · Event Management · Photography · Post Production
          </p>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block text-xs tracking-[0.25em] uppercase border border-primary/40 px-8 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Our Story
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-6">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 border border-border/30 bg-card/50 hover:border-primary/30 transition-all duration-500 group"
              >
                <item.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm text-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutPreview;
