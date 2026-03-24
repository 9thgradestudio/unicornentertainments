import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Stage 1: Logo visible (0-0.2)
  // Stage 2: Logo zooms and fades (0.2-0.45)
  // Stage 3: Text appears (0.45-0.85)
  // Stage 4: Exit (0.85-1)

  const logoScale = useTransform(scrollYProgress, [0, 0.2, 0.45], [1, 1, 2.5]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.45], [1, 1, 0]);
  const logoGlow = useTransform(scrollYProgress, [0, 0.25, 0.45], [0.3, 0.6, 0]);

  const textOpacity = useTransform(scrollYProgress, [0.45, 0.55, 0.85, 0.95], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.45, 0.55], [60, 0]);

  return (
    <section id="hero-section" ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
        </div>

        {/* Center logo - scales up and fades */}
        <motion.div
          className="absolute z-10 flex flex-col items-center"
          style={{
            scale: logoScale,
            opacity: logoOpacity,
          }}
        >
          <motion.img
            src="/images/logo.png"
            alt="Unicorn Entertainment"
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
            style={{
              filter: useTransform(logoGlow, (v) => `drop-shadow(0 0 ${40 + v * 40}px hsl(43 74% 49% / ${v}))`),
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Single cinematic text */}
        <motion.h2
          className="absolute z-10 font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wider text-foreground text-center text-shadow-gold px-6"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          From Vision to Visual Masterpiece.
        </motion.h2>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/60 to-transparent animate-float" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
