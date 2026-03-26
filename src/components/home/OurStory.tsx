import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
});

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <section
      id="our-story"
      className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(0 0% 1.5%)" }} // Deep cinematic black
    >
      {/* ── Abstract Background Elements ────────────────────────── */}
      {/* Soft central ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, hsl(43 74% 49% / 0.5) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      {/* Grid lines overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(43 74% 49%) 1px, transparent 1px), linear-gradient(to bottom, hsl(43 74% 49%) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Particle / Light flares */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(43 74% 49% / 0.1) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[140px]"
        style={{ background: "radial-gradient(circle, hsl(43 74% 49% / 0.08) 0%, transparent 70%)" }}
      />


      {/* ── Graphic-Driven Composition ────────────────────────── */}
      <div className="relative w-full max-w-[1400px] mx-auto px-8 md:px-16 py-32 flex flex-col items-center z-10">
        
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-6 mb-16 md:mb-24">
          <div className="w-12 h-[1px] bg-primary/40" />
          <span className="text-[10px] tracking-[0.55em] uppercase text-primary/60 font-semibold font-body">
            Our Story
          </span>
          <div className="w-12 h-[1px] bg-primary/40" />
        </motion.div>

        {/* Abstract Cinematic Blocks & Text */}
        <div className="relative w-full max-w-5xl aspect-square md:aspect-[21/9] flex items-center justify-center">
          
          {/* Block 1 - Background diagonal panel */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="absolute left-0 md:left-[10%] top-[10%] w-[70%] md:w-[50%] h-[60%] border border-primary/20 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(202,160,46,0.05) 0%, transparent 100%)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
            }}
          />

          {/* Block 2 - Foreground intersecting panel */}
          <motion.div
            initial={{ opacity: 0, rotate: 5, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, rotate: 3, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="absolute right-0 md:right-[15%] bottom-[15%] w-[65%] md:w-[45%] h-[55%] border border-primary/30 backdrop-blur-md overflow-hidden group hover:border-primary/50 transition-colors duration-700"
            style={{
              background: "linear-gradient(225deg, rgba(202,160,46,0.08) 0%, rgba(0,0,0,0.8) 100%)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.8)"
            }}
          >
            {/* Cinematic sweeping light line inside the block */}
            <div className="absolute top-0 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent -rotate-45 translate-y-[-50px] group-hover:translate-y-[400px] transition-transform duration-[1.5s] ease-in-out opacity-50" />
          </motion.div>

          {/* Core Typography overlaid */}
          <div className="relative z-20 text-center flex flex-col items-center pointer-events-none">
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="font-display uppercase leading-[0.9] text-foreground mix-blend-plus-lighter"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)", letterSpacing: "-0.02em" }}
            >
              Crafting Stories
              <br />
              <span className="text-primary italic">That Move.</span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mt-8 md:mt-12 font-display uppercase tracking-[0.25em] text-foreground/50"
              style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
            >
              From Concept to Screen
            </motion.h3>
          </div>
        </div>

        {/* Minimal Animated CTA */}
        <motion.div
           {...fadeUp(1)}
           className="mt-20 md:mt-32 relative z-20"
        >
          <button
            onClick={() => navigate("/about")}
            className="group flex flex-col items-center gap-4"
          >
            <span className="font-display text-sm tracking-[0.5em] uppercase text-primary/70 group-hover:text-primary transition-colors duration-500">
              Discover Our Origins
            </span>
            {/* Vertical Animated Line */}
            <div className="w-[1px] h-12 bg-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-primary origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
            </div>
            {/* Dot terminator */}
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-700" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default OurStory;
