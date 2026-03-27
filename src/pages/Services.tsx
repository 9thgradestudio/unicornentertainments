import { useState, useRef, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { motion, AnimatePresence, useScroll, useSpring, useInView } from "framer-motion";
import { 
  Palette, Film, Scissors, Sparkles, Music, Video, 
  Search, FileText, Layout, MapPin, Users, Calendar,
  Camera, Lightbulb, Zap, Instagram, Youtube, Monitor, 
  Presentation, Mic2, FileAudio, Play, X, ArrowUpRight, Clock
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import FilmGrain from "@/components/FilmGrain";

interface ServiceSubItem {
  id: string;
  title: string;
  icon: any;
  description: string;
  features?: string[];
}

interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  items: ServiceSubItem[];
}

const servicesData: ServiceCategory[] = [
  {
    id: "pre-production",
    title: "Pre-Production",
    tagline: "The Blueprint for Brilliance",
    items: [
      { id: "concept", title: "Concept Development", icon: Lightbulb, description: "Transforming raw ideas into cohesive cinematic visions." },
      { id: "script", title: "Script Writing", icon: FileText, description: "Crafting compelling narratives that resonate with audiences." },
      { id: "storyboard", title: "Storyboarding", icon: Layout, description: "Visualizing every frame before the first shot is taken." },
      { id: "location", title: "Location Scouting", icon: MapPin, description: "Finding the perfect backdrop for your story." },
      { id: "casting", title: "Casting", icon: Users, description: "Curating the right talent to bring characters to life." },
      { id: "planning", title: "Production Planning", icon: Calendar, description: "Strategic roadmaps for seamless project execution." },
    ]
  },
  {
    id: "production",
    title: "Production",
    tagline: "Capturing Every Detail",
    items: [
      { id: "features", title: "Feature Films", icon: Film, description: "Large-scale storytelling for the big screen." },
      { id: "shorts", title: "Short Films", icon: Video, description: "Impactful narratives in condensed formats." },
      { id: "music-videos", title: "Music Videos", icon: Music, description: "Vibrant visual companions to sonic art." },
      { id: "ads", title: "Commercial Ads", icon: Zap, description: "High-conversion visual storytelling for brands." },
      { id: "events", title: "Events", icon: Camera, description: "Capturing weddings, corporate meets, and live shows." },
      { id: "social", title: "Social Media Content", icon: Instagram, description: "High-engagement vertical content (Reals/Shorts)." },
    ]
  },
  {
    id: "post-production",
    title: "Post-Production",
    tagline: "Shaping the Final Frame",
    items: [
      { id: "editing", title: "Video Editing", icon: Scissors, description: "Precision cutting for Films, Ads, and Digital content." },
      { id: "grading", title: "Color Grading", icon: Palette, description: "Achieving the perfect cinematic look and mood." },
      { id: "sound", title: "Sound Design", icon: FileAudio, description: "Immersive soundscapes and professional mixing." },
      { id: "motion", title: "Motion Graphics", icon: Sparkles, description: "Dynamic titles and abstract visual data." },
    ]
  },
  {
    id: "vfx-cgi",
    title: "VFX & CGI",
    tagline: "Pushing the Boundaries",
    items: [
      { id: "film-vfx", title: "Film VFX", icon: Sparkles, description: "Seamless visual effects for feature-length projects." },
      { id: "green", title: "Compositing", icon: Monitor, description: "Advanced green screen and multi-layer blending." },
      { id: "cgi", title: "CGI Integration", icon: Monitor, description: "Merging computer-generated assets with reality." },
      { id: "cleanup", title: "Cleanup / Object Removal", icon: Scissors, description: "Flawless removal of unwanted elements." },
    ]
  },
  {
    id: "outputs",
    title: "Platform Outputs",
    tagline: "Optimized for Every Screen",
    items: [
      { id: "theatre", title: "Theatre / Cinema", icon: Film, description: "DCP ready formats for professional projection." },
      { id: "youtube", title: "YouTube Content", icon: Youtube, description: "Optimized long-form and HD delivery." },
      { id: "social-outs", title: "Instagram / Shorts", icon: Instagram, description: "Multi-platform vertical aspect ratio masters." },
      { id: "corporate", title: "Corporate / Brand", icon: Presentation, description: "Polished presentations for high-stakes meetings." },
    ]
  },
  {
    id: "creative-content",
    title: "Music & Creative",
    tagline: "Sonic Visual Synthesis",
    items: [
      { id: "rap", title: "Rap & Music", icon: Mic2, description: "Specialized shoots for urban music and performance." },
      { id: "lyrical", title: "Lyrical Videos", icon: FileText, description: "Typography-driven creative music visuals." },
      { id: "concept-mus", title: "Concept Music Videos", icon: Play, description: "Deeply narrative-driven musical experiences." },
    ]
  }
];

const ServiceCard = ({ item, index, onClick }: { item: ServiceSubItem; index: number; onClick: (item: ServiceSubItem) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      onClick={() => onClick(item)}
      className="group relative p-8 bg-zinc-950 border border-white/5 cursor-pointer overflow-hidden rounded-sm hover:border-primary/20 transition-all duration-500"
    >
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
           <item.icon size={24} className="text-zinc-500 group-hover:text-primary transition-colors" />
        </div>
        
        <h3 className="text-2xl font-light text-white tracking-widest uppercase mb-4 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        
        <p className="text-[#F5F5F5]/80 text-sm leading-relaxed font-light mb-8 group-hover:text-white transition-colors">
          {item.description}
        </p>
        
        <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-[#F5F5F5]/60 font-bold group-hover:text-primary transition-colors">
           <span>Explore Detail</span>
           <ArrowUpRight size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors" />
    </motion.div>
  );
};

const Services = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(servicesData[0].id);
  const [selectedService, setSelectedService] = useState<ServiceSubItem | null>(null);

  const activeCategory = servicesData.find(cat => cat.id === activeCategoryId);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen selection:bg-primary/30 selection:text-white">
        <FilmGrain />

        {/* ── 1. Immersive Hero ────────────────────────── */}
        <section className="relative pt-32 md:pt-48 pb-8 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-50">
             <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-pulse-slow" />
             <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-zinc-800/20 blur-[130px] rounded-full" />
             
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
                Our <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary">Services.</span>
              </h1>
              <p className="text-[#F5F5F5]/80 text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold">
                From Concept to Screen
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 2. Sticky Category Navigation ────────────────────────── */}
        <nav className="sticky top-0 z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 py-4 md:py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-14 mx-auto">
              {servicesData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className="relative group py-2"
                >
                  <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase transition-all duration-700 block ${
                    activeCategoryId === cat.id ? "text-primary font-bold scale-105" : "text-[#F5F5F5]/70 group-hover:text-[#F5F5F5]"
                  }`}>
                    {cat.title}
                  </span>
                  {activeCategoryId === cat.id && (
                    <motion.div 
                      layoutId="activeServiceTab"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 shadow-[0_0_20px_rgba(212,189,114,0.8)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ── 3. Category Content Section ────────────────────────── */}
        <main className="max-w-7xl mx-auto px-8 py-16 min-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col mb-24">
                   <h2 className="text-3xl md:text-6xl tracking-tightest font-bold text-[#F5F5F5] mb-6 uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                      {activeCategory.title}
                   </h2>
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-px bg-primary/40" />
                      <p className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold">
                        {activeCategory.tagline}
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {activeCategory.items.map((item, i) => (
                    <ServiceCard 
                      key={item.id} 
                      item={item} 
                      index={i} 
                      onClick={setSelectedService}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* ── 4. Service Detail Modal ────────────────────────── */}
        <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent className="max-w-4xl w-[95vw] bg-zinc-950 border-white/10 p-0 overflow-hidden flex flex-col md:flex-row gap-0 rounded-none border-t-2 border-t-primary">
            {selectedService && (
              <>
                <div className="flex-1 p-12 md:p-20 relative">
                   <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                      <selectedService.icon size={200} />
                   </div>
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-12">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold">Service Capability</span>
                      </div>
                      
                      <h2 className="text-4xl md:text-6xl tracking-tightest font-extralight text-white mb-8 uppercase">
                        {selectedService.title}
                      </h2>
                      
                      <p className="text-zinc-500 text-lg leading-relaxed font-light mb-12">
                        {selectedService.description}
                      </p>

                      <div className="space-y-4 mb-16">
                         <div className="flex items-center gap-4 text-zinc-400">
                            <Clock size={16} className="text-primary" />
                            <span className="text-[10px] tracking-widest uppercase">Professional Execution Timeframes</span>
                         </div>
                         <div className="flex items-center gap-4 text-zinc-400">
                            <Zap size={16} className="text-primary" />
                            <span className="text-[10px] tracking-widest uppercase">High-End Studio Grade Delivery</span>
                         </div>
                      </div>

                      <button 
                        onClick={() => setSelectedService(null)}
                        className="group flex items-center gap-6 px-10 py-5 border border-white/10 text-[10px] tracking-[0.5em] uppercase text-white hover:bg-white/5 transition-all"
                      >
                        Return to Pipeline
                        <X size={14} className="group-hover:rotate-90 transition-transform" />
                      </button>
                   </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* ── 5. Perspective Grid (Background Decorative) ────────────────────────── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
           <div className="absolute -bottom-[20%] left-0 right-0 h-[60%] bg-[linear-gradient(transparent,black),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_100%,80px_80px,80px_80px] [transform:perspective(500px)_rotateX(60deg)]" />
        </div>

      </div>
    </PageTransition>
  );
};

export default Services;
