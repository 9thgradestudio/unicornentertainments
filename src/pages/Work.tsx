import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion";
import { Play, Calendar, Tag, ChevronDown, X, Maximize2, ArrowUpRight, Clock } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import FilmGrain from "@/components/FilmGrain";

interface ProjectPlaceholder {
  id: string;
  title: string;
  category: string;
  year: string;
  type: string;
  description: string;
  isWide?: boolean;
}

const CHAPTERS = [
  "Films",
  "Music Videos",
  "Ads & Commercials",
  "Social Media Content",
  "Events",
  "VFX Work",
];

const workData: ProjectPlaceholder[] = [
  // Films (Chapter 01)
  { id: "f1", title: "The Silent Echo", category: "Films", year: "2024", type: "Feature Film", description: "A cinematic exploration of solitude in the modern age.", isWide: true },
  { id: "f2", title: "Nocturnal Dreams", category: "Films", year: "2024", type: "Short Film", description: "Vivid, high-contrast storytelling through shadow and light." },
  { id: "f3", title: "Eternal Horizons", category: "Films", year: "2023", type: "Feature Film", description: "Large-scale landscapes and atmospheric world-building." },

  // Music Videos (Chapter 02)
  { id: "m1", title: "Midnight Rhythm", category: "Music Videos", year: "2024", type: "Official Video", description: "Lush visuals synced with rhythmic electronic sequences.", isWide: true },
  { id: "m2", title: "Velvet Vocals", category: "Music Videos", year: "2023", type: "Performance Art", description: "Intimate portrait-style shots with warm, cinematic tones." },

  // Ads & Commercials (Chapter 03)
  { id: "a1", title: "Aura Tech Campaign", category: "Ads & Commercials", year: "2024", type: "Product Ad", description: "Sleek, product-focused commercial for a high-end tech brand.", isWide: true },
  { id: "a2", title: "Vanguard Lifestyle", category: "Ads & Commercials", year: "2024", type: "Brand Story", description: "Energetic lifestyle montage focusing on movement and grit." },

  // Social Media Content (Chapter 04)
  { id: "s1", title: "Meta Reels 01", category: "Social Media Content", year: "2024", type: "Vertical Video", description: "High-engagement content optimized for modern social platforms.", isWide: false },
  { id: "s2", title: "Creative Sprints", category: "Social Media Content", year: "2023", type: "Behind the Scenes", description: "Fast-paced documentary-style content for digital platforms." },

  // Events (Chapter 05)
  { id: "e1", title: "Summit 2024", category: "Events", year: "2024", type: "Event Film", description: "Capturing the energy and scale of international tech summits.", isWide: true },

  // VFX Work (Chapter 06)
  { id: "v1", title: "Digital Realms", category: "VFX Work", year: "2024", type: "VFX / CGI", description: "Pushing the boundaries of photorealistic environment creation.", isWide: true },
  { id: "v2", title: "Motion Synthesis", category: "VFX Work", year: "2023", type: "Motion Graphics", description: "Abstract visual systems and generative motion design." },
];

const ProjectCard = ({ project, index, onClick }: { project: ProjectPlaceholder; index: number; onClick: (p: ProjectPlaceholder) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className={`group relative overflow-hidden bg-zinc-950 border border-white/5 cursor-pointer rounded-sm ${
        project.isWide ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/5] sm:aspect-square"
      }`}
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
          <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tightest font-medium text-[#F5F5F5] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-4 text-[#F5F5F5]/50 group-hover:text-primary transition-colors duration-500 opacity-0 group-hover:opacity-100">
             <div className="h-[2px] w-6 bg-current transition-all duration-500 group-hover:w-10" />
             <span className="text-[9px] tracking-[0.4em] uppercase font-bold">Play</span>
             <Play size={12} className="ml-1 fill-current group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("Films");
  const [selectedProject, setSelectedProject] = useState<ProjectPlaceholder | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const activeProjects = workData.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen selection:bg-primary/30 selection:text-white">
        <FilmGrain />
        
        {/* ── 1. Immersive Header ────────────────────────── */}
        <section className="relative pt-32 md:pt-48 pb-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
             <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-pulse-slow" />
             <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-zinc-800/20 blur-[130px] rounded-full" />
             
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
                Our <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary">Work.</span>
              </h1>
              <p className="text-[#F5F5F5]/80 text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold">
                Stories We've Created
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Sticky Category Navigation ────────────────────────── */}
        <nav className="sticky top-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 py-4 md:py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-14 mx-auto">
              {CHAPTERS.map((cat) => (
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
                      layoutId="activeCategory"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 shadow-[0_0_20px_rgba(212,189,114,0.8)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

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
                {activeProjects.map((project, i) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={i} 
                    onClick={setSelectedProject}
                  />
                ))}
              </div>
              
              {activeProjects.length === 0 && (
                <div className="flex flex-col items-center justify-center py-40 text-center">
                   <p className="text-[#F5F5F5]/60 tracking-widest uppercase text-xs">No projects found in this archive.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* ── 4. Project Detail Modal ────────────────────────── */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-7xl w-[95vw] h-[90vh] bg-black/95 border-white/10 p-0 overflow-hidden flex flex-col md:flex-row gap-0 rounded-none">
            {selectedProject && (
              <>
                {/* Visual Section */}
                <div className="flex-1 bg-zinc-900 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6 opacity-40 group-hover:opacity-60 transition-opacity">
                      <Play size={64} className="text-primary fill-primary/10" />
                      <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-500">Preview Asset</span>
                    </div>
                  </div>
                  
                  {/* Subtle decorative elements */}
                  <div className="absolute top-8 left-8 border-t border-l border-white/20 w-12 h-12" />
                  <div className="absolute bottom-8 right-8 border-b border-r border-white/20 w-12 h-12" />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-[400px] p-8 md:p-16 flex flex-col justify-between border-l border-white/5 bg-black/40 backdrop-blur-xl">
                  <div>
                    <div className="flex items-center gap-4 mb-12">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Project Details</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl tracking-tightest font-extralight text-white mb-8">
                      {selectedProject.title}
                    </h2>
                    
                    <div className="space-y-8 mb-12">
                      <div className="flex items-start gap-4">
                        <Tag size={16} className="text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-[9px] tracking-widest uppercase text-zinc-600 mb-1">Category</p>
                          <p className="text-sm text-zinc-300 font-light">{selectedProject.type}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Calendar size={16} className="text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-[9px] tracking-widest uppercase text-zinc-600 mb-1">Production Year</p>
                          <p className="text-sm text-zinc-300 font-light">{selectedProject.year}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock size={16} className="text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-[9px] tracking-widest uppercase text-zinc-600 mb-1">Scope</p>
                          <p className="text-sm text-zinc-300 font-light">{selectedProject.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-6 border border-white/10 text-[10px] tracking-[0.5em] uppercase text-white hover:bg-white/5 transition-colors group flex items-center justify-center gap-4"
                  >
                    Close Archive
                    <X size={14} className="group-hover:rotate-90 transition-transform" />
                  </button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>



      </div>
    </PageTransition>
  );
};

export default Work;
