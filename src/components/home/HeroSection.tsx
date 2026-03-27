import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Step 1: Tiny Scroll - Logo Zoom (0 - 0.1)
  // Step 2: Tiny Scroll - Logo out, Text in (0.1 - 0.25)
  // Step 3: Natural Scroll Away (0.25 - 1)

  // Logo zooms in very quickly, then gets "pushed" and fades out early
  const logoScale = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 2.5, 4]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.12], [1, 1, 0]);
  const logoGlow = useTransform(scrollYProgress, [0, 0.1, 0.12], [0.3, 0.8, 0]);

  // Text starts appearing right as logo fades out
  const textOpacity = useTransform(scrollYProgress, [0.12, 0.2, 0.25, 0.4], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.12, 0.2], [40, 0]);

  return (
    <section id="hero-section" ref={sectionRef} className="relative" style={{ height: "200vh" }}>
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
          From Vision to Visual <span className="text-primary">Masterpiece.</span>
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
