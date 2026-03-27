import { useState, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Camera, ArrowUpRight, Phone } from "lucide-react";
import FilmGrain from "@/components/FilmGrain";

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  brand: string;
}

const CATEGORIES = [
  "Cameras",
  "Lenses",
  "Audio",
  "Stabilization",
  "Lighting",
  "Software"
];

const equipmentData: EquipmentItem[] = [
  // Cameras
  { id: "c1", name: "Sony FX3 Cinema Line", category: "Cameras", brand: "Sony" },
  { id: "c2", name: "Sony Alpha Mark IV", category: "Cameras", brand: "Sony" },
  
  // Lenses
  { id: "l1", name: "16–35mm G Master", category: "Lenses", brand: "Sony" },
  { id: "l2", name: "85mm G Master", category: "Lenses", brand: "Sony" },
  { id: "l3", name: "35mm f/1.4 Sony", category: "Lenses", brand: "Sony" },
  { id: "l4", name: "16mm Sigma", category: "Lenses", brand: "Sigma" },
  { id: "l5", name: "24–70mm Kit Lens", category: "Lenses", brand: "Sony" },

  // Audio
  { id: "a1", name: "Wireless Mic System", category: "Audio", brand: "Hollyland" },

  // Stabilization
  { id: "s1", name: "DJI RS 3 Pro Gimbal", category: "Stabilization", brand: "DJI" },

  // Lighting
  { id: "li1", name: "TL60 LED Tube Lights", category: "Lighting", brand: "Godox" },

  // Software
  { id: "sw1", name: "DaVinci Resolve Studio", category: "Software", brand: "Blackmagic" },
  { id: "sw2", name: "Adobe Creative Cloud", category: "Software", brand: "Adobe" },
];

const EquipmentCard = ({ item, index }: { item: EquipmentItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative overflow-hidden bg-zinc-950 border border-white/5 cursor-pointer rounded-sm aspect-[4/5] sm:aspect-square"
    >
      {/* Cinematic Thumbnail Base */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black transition-transform duration-[1500ms] ease-out group-hover:scale-105"
      >
        <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
      </motion.div>
      
      {/* Subtle Light Reveal on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-sweep" />
      </div>

      {/* Info Overlay (Minimal) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500">
        <div className="overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <div className="flex items-center gap-3 mb-3">
             <span className="text-[9px] tracking-[0.4em] uppercase text-zinc-500 font-bold group-hover:text-primary transition-colors">
               {item.brand}
             </span>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tightest font-medium text-[#F5F5F5] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {item.name}
          </h3>
          
          <div className="flex items-center gap-4 text-[#F5F5F5]/50 group-hover:text-primary transition-colors duration-500 opacity-0 group-hover:opacity-100">
             <div className="h-[2px] w-6 bg-current transition-all duration-500 group-hover:w-10" />
             <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Rent Item</span>
             <ArrowUpRight size={12} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Equipment = () => {
  const [activeCategory, setActiveCategory] = useState("Cameras");

  const filteredItems = equipmentData.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen selection:bg-primary/30 selection:text-white">
        <FilmGrain />
        
        {/* ── 1. Immersive Header ────────────────────────── */}
        <section className="relative pt-32 md:pt-48 pb-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
             <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-pulse-slow" />
             <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-zinc-800/20 blur-[130px] rounded-full" />
             
             {/* Dynamic background lines */}
             <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
             </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <h1 className="text-5xl sm:text-6xl md:text-[8rem] tracking-tightest font-bold text-[#F5F5F5] leading-none mb-6">
                Studio <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary lowercase">Gear.</span>
              </h1>
              <p className="text-[#F5F5F5]/80 text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold">
                Premium Filmmaking Arsenal
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Wrap-enabled Category Navigation ────────────────────────── */}
        <nav className="sticky top-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 py-4 md:py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-14 mx-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative group py-2"
                >
                  <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-700 block ${
                    activeCategory === cat ? "text-primary font-bold scale-105" : "text-[#F5F5F5]/70 group-hover:text-[#F5F5F5]"
                  }`}>
                    {cat}
                  </span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeEquipmentCat"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 shadow-[0_0_20px_rgba(212,189,114,0.8)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ── 3. Content Grid ────────────────────────── */}
        <main className="max-w-7xl mx-auto px-8 py-16 min-h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredItems.map((item, i) => (
                  <EquipmentCard 
                    key={item.id} 
                    item={item} 
                    index={i} 
                  />
                ))}
              </div>
              
              {filteredItems.length === 0 && (
                <div className="flex flex-col items-center justify-center py-40 text-center">
                   <p className="text-[#F5F5F5]/60 tracking-widest uppercase text-xs">No equipment found in this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* ── 4. CTA Bridge ────────────────────────── */}
        <section className="py-40 border-t border-white/5 flex flex-col items-center justify-center text-center px-8">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
           >
             <span className="text-[9px] tracking-[1rem] uppercase text-[#F5F5F5]/40 font-bold mb-12 ml-[0.5rem]">Availability</span>
             <h2 className="text-4xl md:text-6xl tracking-tightest font-extralight text-white mb-10">
               Ready to <span className="italic text-primary/70">Shoot?</span>
             </h2>
             
             <div className="flex flex-col sm:flex-row gap-6 mb-16">
               <a
                 href="https://wa.me/918431172993"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex items-center gap-4 border border-primary/40 px-8 py-4 bg-primary/10 hover:bg-primary transition-all duration-500 rounded-sm"
               >
                 <Phone size={14} className="text-primary group-hover:text-black transition-colors" />
                 <span className="text-[10px] tracking-[0.3em] uppercase text-white group-hover:text-black font-bold transition-colors">
                   Rent Now via WhatsApp
                 </span>
               </a>
             </div>
             
             <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent opacity-30" />
           </motion.div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Equipment;
