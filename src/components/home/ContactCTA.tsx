import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ContactCTA = () => {
  const containerRef = useRef<HTMLElement>(null);

  // Parallax for the Space background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  });

  return (
    <section
      ref={containerRef}
      id="contact-cta"
      className="relative w-full py-32 md:py-40 bg-[#0A0A0D] overflow-hidden flex items-center justify-center border-t border-white/5"
    >
      {/* ── SPACE ELEMENT BACKGROUND ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Deep space nebula gradients */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#3D3D5C]/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen"
        />
        
        {/* Static Starfield (using CSS radial gradients for massive performance) */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            backgroundImage: "radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, rgba(202,160,46,0.8), rgba(0,0,0,0))",
            backgroundSize: "200px 200px"
          }}
        />

        {/* Twinkling parallax stars overlay */}
        <motion.div 
          className="absolute inset-[-50%] mix-blend-screen"
          style={{
            y: y3,
            backgroundImage: "radial-gradient(1.5px 1.5px at 50px 150px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 50px, rgba(202,160,46,0.5), rgba(0,0,0,0))",
            backgroundSize: "300px 300px"
          }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
        
        {/* Center vignette to pull focus to text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0A0A0D_80%)] opacity-80" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center text-center">
        
        {/* Minimal Impactful Phrase */}
        <motion.h2 
          {...fadeUp(0)}
          className="text-4xl md:text-7xl tracking-tightest font-bold text-[#F5F5F5] leading-tight mb-12 uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          Let’s create something <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary font-display">extraordinary.</span>
        </motion.h2>

        {/* Clean, Elegant CTA Button */}
        <motion.div {...fadeUp(0.3)}>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-black font-display text-[10px] md:text-xs tracking-[0.4rem] uppercase overflow-hidden transition-all hover:glow-gold rounded-sm active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Story <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
            
            {/* Elegant light sweep */}
            <motion.div 
              className="absolute inset-0 bg-white/20 translate-x-[-100%]"
              whileHover={{ translateX: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactCTA;
