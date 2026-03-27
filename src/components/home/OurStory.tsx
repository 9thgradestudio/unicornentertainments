import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Users } from "lucide-react";

const teamRoles = [
  { role: "Director", name: "Name Placeholder" },
  { role: "Cinematographer", name: "Name Placeholder" },
  { role: "Editor", name: "Name Placeholder" },
  { role: "Colorist", name: "Name Placeholder" },
  { role: "VFX Artist", name: "Name Placeholder" },
  { role: "Creative Designer", name: "Name Placeholder" },
];

const OurStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section
      ref={containerRef}
      id="our-story"
      className="relative w-full py-32 md:py-48 overflow-hidden bg-black flex flex-col items-center"
    >
      {/* ── 1. Visual Background (90deg/0deg grid like Work/Contact) ────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full animate-pulse-slow object-cover" />
         <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-zinc-800/10 blur-[130px] rounded-full" />
         <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
         </div>
      </div>

      {/* ── 2. Cinematic Heading ────────────────────────── */}
      <AnimatedSection className="relative z-10 w-full px-8 text-center mb-24 md:mb-32">
        <h2 className="text-5xl sm:text-7xl md:text-[8rem] tracking-tightest font-bold text-[#F5F5F5] leading-none mb-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.05)] uppercase max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          OUR <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary drop-shadow-[0_0_15px_rgba(212,189,114,0.3)]">STORY.</span>
        </h2>
        <div className="flex items-center justify-center gap-6">
           <div className="h-px w-16 bg-primary/40" />
           <p className="text-[#F5F5F5]/60 text-[10px] md:text-sm tracking-[0.8rem] uppercase font-medium">
             Cinematic vision, technical excellence.
           </p>
           <div className="h-px w-16 bg-primary/40" />
        </div>
      </AnimatedSection>

      {/* ── 3. Team Portraits Grid ────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamRoles.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-full aspect-[4/5] bg-zinc-950 border border-white/5 overflow-hidden mb-6 rounded-sm">
                
                {/* Portrait Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
                
                {/* Placeholder Frame/Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center bg-black/40 group-hover:border-primary/40 transition-colors duration-500">
                      <Users size={32} className="text-zinc-600 group-hover:text-primary transition-colors duration-500" />
                   </div>
                </div>

                {/* Sweep Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-sweep" />
                </div>
              </div>

              <div className="text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-medium text-[#F5F5F5] tracking-wide mb-2 group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold">
                  {member.role}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;

