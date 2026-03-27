import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const projects = [
  { id: 1, title: "The Silent Echo", category: "Film", color: "bg-zinc-900" },
  { id: 2, title: "Midnight Rhythm", category: "Music Video", color: "bg-zinc-800" },
  { id: 3, title: "Luxury Horizon", category: "Ads & Commercials", color: "bg-zinc-900" },
  { id: 4, title: "Urban Pulse", category: "Social Media Content", color: "bg-zinc-800" },
  { id: 5, title: "Glow Festival", category: "Events", color: "bg-zinc-900" },
  { id: 6, title: "Nebula Transition", category: "VFX Work", color: "bg-zinc-800" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const FeaturedProjects = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for the fire background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} id="featured-work" className="relative w-full bg-black py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* ── FIRE ELEMENT BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep background heat */}
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#FF6B35]/5 via-transparent to-transparent" />
        
        {/* Animated glowing embers/heat blobs */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute -bottom-[20%] left-[10%] w-[800px] h-[800px] bg-[#FF8C42]/10 rounded-full blur-[120px] mix-blend-screen"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-[30%] right-[10%] w-[600px] h-[600px] bg-[#FF6B35]/15 rounded-full blur-[100px] mix-blend-screen"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF8C42]/5 rounded-[100%] blur-[150px] mix-blend-screen"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Film grain overlay for cinematic feel over the fire */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => navigate("/work")}
              className="group relative cursor-pointer aspect-[16/10] overflow-hidden"
            >
              {/* Placeholder Thumbnail */}
              <div className={`absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105 ${project.color}`}>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="flex items-center justify-center h-full opacity-10">
                  <span className="font-display text-4xl tracking-widest uppercase">{project.category}</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 group-hover:via-[#FF8C42]/10 transition-all duration-700" />
              
              {/* Content Reveal */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[10px] md:text-[11px] tracking-[0.4em] uppercase text-primary/80 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase text-white mb-2 leading-none">
                  {project.title}
                </h3>
                <div className="h-[1px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out origin-left mt-4 opacity-0 group-hover:opacity-100" />
              </div>

              {/* Play Indicator (Subtle) */}
              <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent translate-x-[2px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 md:mt-32 flex justify-center"
        >
          <button
            onClick={() => navigate("/work")}
            className="group flex items-center gap-4 text-[#F5F5F5]/60 hover:text-[#F5F5F5] transition-all duration-300"
          >
            <span className="text-xs md:text-sm tracking-[0.5em] uppercase font-bold">
              View All Archive
            </span>
            <div className="w-10 h-[2px] bg-primary/20 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
