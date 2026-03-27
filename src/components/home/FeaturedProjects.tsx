import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  return (
    <section id="featured-work" className="w-full bg-black py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
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

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
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
