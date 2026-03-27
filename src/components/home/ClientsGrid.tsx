import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const industries = [
  { num: "01", name: "Film Industry",          copy: "Collaborating with visionaries"  },
  { num: "02", name: "Music Industry",         copy: "Visualizing the rhythm"          },
  { num: "03", name: "Brands & Startups",      copy: "Defining the identity"           },
  { num: "04", name: "Influencers & Creators", copy: "Amplifying the voice"            },
  { num: "05", name: "Event Industry",         copy: "Immortalizing the experience"    },
  { num: "06", name: "Corporate Clients",      copy: "Elevating the message"           },
];

const tickerItems = [...industries, ...industries, ...industries];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const ClientsGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="clients-grid" className="w-full overflow-hidden bg-black relative py-32 md:py-48 z-10">
      
      {/* ── Ambient Background Texture ────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-zinc-800/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      {/* ── Section Header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="max-w-[1400px] mx-auto px-8 md:px-16 pb-16 relative z-10 flex flex-col gap-6"
      >
        <div className="flex items-center gap-6">
          <div className="w-10 h-[1px] bg-primary/40" />
          <span className="text-[11px] tracking-[0.55em] uppercase text-zinc-500 font-bold">
            Industries & Clients
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] tracking-tight">
          Who we <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary drop-shadow-[0_0_15px_rgba(212,189,114,0.3)]">work with.</span>
        </h2>
      </motion.div>

      {/* ── Cinematic Staggered Grid ────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {industries.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              onClick={() => navigate("/work")}
              className={`group relative flex flex-col justify-end bg-zinc-950 overflow-hidden cursor-pointer p-10 md:p-12 aspect-[4/3] border border-white/5 ${
                idx % 2 === 1 ? 'lg:translate-y-12' : '' // Staggered layout for alternating items
              }`}
            >
              {/* Background Ambient Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-primary z-0 pointer-events-none" />
              
              {/* Sweep Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-10">
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-sweep" />
              </div>

              {/* Large background number */}
              <span className="absolute top-8 right-8 font-display font-medium leading-none select-none text-zinc-800/10 group-hover:text-primary/10 transition-colors duration-700 tracking-tighter text-6xl md:text-8xl z-0">
                {item.num}
              </span>

              {/* Foreground Content */}
              <div className="relative z-20 flex flex-col gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-light text-[#F5F5F5] group-hover:text-white transition-colors duration-500 tracking-wide">
                  {item.name}
                </h3>
                <div className="w-8 h-px bg-primary/40 group-hover:bg-primary group-hover:w-16 transition-all duration-500" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-bold group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 duration-500">
                  {item.copy}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsGrid;
