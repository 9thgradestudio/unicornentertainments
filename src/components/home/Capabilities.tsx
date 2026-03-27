import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const capabilities = [
  { 
    id: "01", 
    label: "Pre-Production", 
    copy: "Crafting the Vision",
    gradient: "from-zinc-900 via-zinc-900 to-black",
    secondaryColor: "bg-blue-500/10"
  },
  { 
    id: "02", 
    label: "Production", 
    copy: "Capturing the Moment",
    gradient: "from-zinc-800 via-zinc-900 to-black",
    secondaryColor: "bg-amber-500/10"
  },
  { 
    id: "03", 
    label: "Post-Production", 
    copy: "Shaping the Story",
    gradient: "from-zinc-900 via-zinc-800 to-black",
    secondaryColor: "bg-purple-500/10"
  },
  { 
    id: "04", 
    label: "VFX", 
    copy: "Bringing Worlds to Life",
    gradient: "from-zinc-800 via-zinc-800 to-black",
    secondaryColor: "bg-emerald-500/10"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Capabilities = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for the water background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={containerRef} id="capabilities" className="relative w-full bg-black py-32 md:py-48 overflow-hidden">
      
      {/* ── WATER ELEMENT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep ocean base */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#005B96]/30 via-[#005B96]/10 to-transparent" />
        
        {/* Animated slow ripples (Caustics simulation via layered blurred blobs) */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] left-[-10%] w-[1200px] h-[800px] bg-[#00A8E8]/60 rounded-[100%] blur-[100px] mix-blend-screen"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[20%] right-[-10%] w-[1000px] h-[800px] bg-[#005B96]/70 rounded-[100%] blur-[120px] mix-blend-screen"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Liquid surface reflection overlay */}
        <motion.div 
          className="absolute inset-0 mix-blend-overlay opacity-60"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.7) 0%, transparent 60%)",
            y: y2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="w-10 h-[1px] bg-primary/40" />
            <span className="text-[11px] tracking-[0.55em] uppercase text-[#F5F5F5]/60 font-bold">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] tracking-tight">
            From Concept <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary drop-shadow-[0_0_15px_rgba(212,189,114,0.3)]">to Screen.</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-t border-white/5"
      >
        {capabilities.map((cap) => (
          <motion.div
            key={cap.id}
            variants={itemVariants}
            onClick={() => navigate("/services")}
            className="relative h-[60vh] md:h-[70vh] group cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0"
          >
            {/* Cinematic CSS Background with deep blue hover ripple */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} transition-transform duration-[2000ms] ease-out group-hover:scale-110`}>
              {/* Noise Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
              {/* Secondary Color Glow & Water Ripple */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${cap.secondaryColor} bg-[#00A8E8]/5 blur-3xl`} />
            </div>

            {/* Subtle Number Reveal */}
            <div className="absolute top-12 left-12 overflow-hidden h-12">
              <span className="block font-display text-4xl text-white/5 group-hover:text-primary transition-all duration-700 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 font-bold tracking-tighter">
                {cap.id}
              </span>
            </div>

            {/* Content Reveal */}
            <div className="absolute inset-x-0 bottom-0 p-12 flex flex-col items-center md:items-start text-center md:text-left">
              {/* Decorative Line */}
              <div className="w-8 h-[2px] bg-primary/40 group-hover:w-16 group-hover:bg-primary transition-all duration-700 mb-6" />
              
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-[#F5F5F5]/60 group-hover:text-[#F5F5F5] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-700 leading-none font-bold">
                {cap.label}
              </h3>

              {/* Hover Detailed Info Reveal (Minimal) */}
              <div className="mt-8 overflow-hidden h-0 group-hover:h-8 transition-all duration-700 ease-out flex items-center gap-3">
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80 whitespace-nowrap">
                  {cap.copy}
                </span>
                <div className="w-6 h-[1px] bg-primary animate-pulse" />
              </div>
            </div>

            {/* Border Glow Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-1000" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Capabilities;
