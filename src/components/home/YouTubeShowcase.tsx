import { useState } from "react";
import { Play } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import WindElement from "../elements/WindElement";
import { motion } from "framer-motion";

const videos = [
  "zgdjUO4_wXw", "P2WRGfrl1VQ", "kKkSOiSzRko", "RRkkZTtTPyM",
  "g8Aic6r2-4o", "H51lxymw_cg", "sy3fNXXzCK8", "IUuMgALHzhA",
  "06eAr1gzuFc", "5TG59UJQRhI", "cHWFKj29YrY",
];

const YouTubeShowcase = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="cinema-section relative overflow-hidden">
      <WindElement />
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Showreel</p>
          <h2 className="cinema-heading text-foreground">
            Our <span className="text-gold-gradient">Work</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((id, i) => (
            <AnimatedSection key={id} delay={i * 0.05}>
              <motion.div
                className="relative aspect-video bg-cinema-gray border border-border/20 overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveVideo(id)}
              >
                {activeVideo === id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border border-primary/50 flex items-center justify-center bg-background/40 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                        <Play size={20} className="text-primary ml-0.5" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeShowcase;
