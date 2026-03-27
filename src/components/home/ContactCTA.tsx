import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ContactCTA = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  });

  return (
    <section
      id="contact-cta"
      className="relative w-full py-32 md:py-40 bg-black overflow-hidden flex items-center justify-center border-t border-white/5"
    >
      {/* ── Subdued Cinematic Background ────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
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
