import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    type: "BEST MOVIES",
    title: "KANNADA BLOCKBUSTER",
    role: "Full Production",
    image: "/placeholder.svg",
    size: "hero",
  },
  {
    type: "BEST MOVIES",
    title: "Cinematic Journey",
    role: "Post-Production",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    type: "BEST MOVIES",
    title: "Urban Tales",
    role: "Color Grading",
    image: "/placeholder.svg",
    size: "medium",
  },
  {
    type: "BEST MUSIC VIDEO",
    title: "Midnight Rhythm",
    role: "Artist Name",
    image: "/placeholder.svg",
    size: "small",
  },
  {
    type: "BEST BRAND AD",
    title: "Elevate Brand",
    role: "Commercial",
    image: "/placeholder.svg",
    size: "small",
  },
];

const HeroShowcase = () => {
  return (
    <section className="relative w-full pt-32 pb-20 bg-[hsl(var(--cinema-black))] text-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-baseline justify-between"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">Featured Projects</h1>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex-none rounded-xl overflow-hidden group snap-center cursor-pointer ${
                project.size === "hero" ? "w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh]" :
                project.size === "medium" ? "w-[70vw] md:w-[40vw] h-[60vh] md:h-[70vh]" :
                "w-[60vw] md:w-[30vw] h-[60vh] md:h-[70vh]"
              }`}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/60" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-primary text-sm tracking-[0.2em] font-medium mb-3">
                  {project.type}
                </p>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wide mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-lg">
                  {project.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HeroShowcase;
