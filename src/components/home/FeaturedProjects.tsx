import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import WaterElement from "../elements/WaterElement";

const projects = [
  { title: "Andhathma", category: "Short Film" },
  { title: "Punaha Punaha", category: "Album Song" },
  { title: "Spiral", category: "Short Film" },
  { title: "Dustbin", category: "Short Film" },
  { title: "Dhvaniya", category: "Short Film" },
  { title: "Billa Ranga Baasha", category: "Feature Film" },
  { title: "UI", category: "Feature Film" },
  { title: "Window Seat", category: "Feature Film" },
  { title: "Kabzaa", category: "Feature Film" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, rotateX: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const FeaturedProjects = () => {
  return (
    <section className="cinema-section relative overflow-hidden">
      <WaterElement />
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="cinema-heading text-foreground mb-16">
            Featured <span className="text-gold-gradient">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, y: -8, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group cursor-pointer overflow-hidden border border-border/20 h-[240px] md:h-[280px]"
              style={{ perspective: "800px" }}
            >
              <div className="absolute inset-0 bg-cinema-gray" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground group-hover:text-gold-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-all duration-500 z-20" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-gold z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
