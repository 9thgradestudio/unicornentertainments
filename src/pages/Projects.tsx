import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

const categories = ["All", "Short Films", "Trailers", "Album Songs", "Feature Films", "Color Grading"];

const projects = [
  { title: "Andhathma", category: "Short Films", videoId: "zgdjUO4_wXw", role: "Full Production" },
  { title: "Punaha Punaha", category: "Album Songs", videoId: "P2WRGfrl1VQ", role: "Production & Color Grading" },
  { title: "Spiral", category: "Short Films", videoId: "kKkSOiSzRko", role: "Full Production" },
  { title: "Dustbin", category: "Short Films", videoId: "RRkkZTtTPyM", role: "Direction & Post Production" },
  { title: "Dhvaniya", category: "Short Films", videoId: "g8Aic6r2-4o", role: "Full Production" },
  { title: "Billa Ranga Baasha", category: "Feature Films", videoId: "H51lxymw_cg", role: "Color Grading & VFX" },
  { title: "UI", category: "Feature Films", videoId: "sy3fNXXzCK8", role: "Post Production" },
  { title: "Window Seat", category: "Feature Films", videoId: "IUuMgALHzhA", role: "Color Grading" },
  { title: "Kabzaa", category: "Feature Films", videoId: "06eAr1gzuFc", role: "Post Production & VFX" },
  { title: "Project X", category: "Color Grading", videoId: "5TG59UJQRhI", role: "Color Grading" },
  { title: "Reel Demo", category: "Trailers", videoId: "cHWFKj29YrY", role: "Trailer Cut & Grade" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <section className="pt-32 pb-20 cinema-section">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Portfolio</p>
            <h1 className="cinema-heading text-foreground mb-12">
              Our <span className="text-gold-gradient">Projects</span>
            </h1>
          </AnimatedSection>

          {/* Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 ${
                    activeCategory === cat
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/30 text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group cursor-pointer border border-border/20 bg-card/30 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                  onClick={() => setActiveVideo(activeVideo === project.videoId ? null : project.videoId)}
                >
                  <div className="relative aspect-video">
                    {activeVideo === project.videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-background/40 group-hover:scale-110 transition-transform">
                            <Play size={18} className="text-primary ml-0.5" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-1">{project.category}</p>
                    <h3 className="font-display text-xl tracking-wider text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{project.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
