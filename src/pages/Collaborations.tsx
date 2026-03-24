import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const collabs = [
  { name: "Vikrant Rona", desc: "Color grading and post-production for the pan-India blockbuster" },
  { name: "Kabzaa", desc: "VFX and post-production services for the period action drama" },
  { name: "UI", desc: "Post-production collaboration for Upendra's directorial vision" },
  { name: "Divo Music", desc: "Music video production and color grading partnership" },
  { name: "Prime Show Entertainment", desc: "Production collaboration for multiple projects" },
  { name: "Billa Ranga Baasha", desc: "Color grading and visual effects for the feature film" },
];

const Collaborations = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 cinema-section">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Partners</p>
            <h1 className="cinema-heading text-foreground mb-6">
              We've Worked With<br />
              <span className="text-gold-gradient">The Best</span>
            </h1>
          </AnimatedSection>

          <div className="space-y-0">
            {collabs.map((collab, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="group border-b border-border/20 py-10 px-4 hover:bg-card/20 transition-all duration-500 cursor-default"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="font-display text-3xl md:text-5xl tracking-wider text-foreground group-hover:text-gold-gradient transition-all glitch-hover">
                      {collab.name}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-sm md:text-right">{collab.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Collaborations;
