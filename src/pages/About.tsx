import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { 
  Film, Zap, MonitorPlay, Sparkles, CheckCircle2,
  Trophy, Globe, Camera, Users
} from "lucide-react";
import FilmGrain from "@/components/FilmGrain";

const missionPoints = [
  { icon: Camera, text: "Deliver premium-quality content" },
  { icon: MonitorPlay, text: "Support creators, brands, and filmmakers" },
  { icon: Zap, text: "Maintain cinematic standards across all projects" },
];

const teamRoles = [
  { role: "Director", name: "Name Placeholder" },
  { role: "Cinematographer", name: "Name Placeholder" },
  { role: "Editor", name: "Name Placeholder" },
  { role: "Colorist", name: "Name Placeholder" },
  { role: "VFX Artist", name: "Name Placeholder" },
  { role: "Creative Designer", name: "Name Placeholder" },
];

const highlights = [
  { icon: Film, title: "End-to-End Production", desc: "Pre-production to final digital output" },
  { icon: Trophy, title: "Cinematic Quality", desc: "Premium studio-grade visual standards" },
  { icon: Zap, title: "Fast Turnaround Time", desc: "Efficient pipeline without compromising craft" },
  { icon: Sparkles, title: "Creative & Tech Expertise", desc: "Mastery over both art and modern tools" },
  { icon: Globe, title: "Experienced Team", desc: "Veterans in Feature Films & Digital Content" },
  { icon: MonitorPlay, title: "Strong VFX Capabilities", desc: "Pushing realistic CGI and seamless composites" },
];

const About = () => {
  return (
    <PageTransition>
      <div className="bg-black min-h-screen selection:bg-primary/30 selection:text-white">
        <FilmGrain />

        {/* ── 1. Hero / Header Section ────────────────────────── */}
        <section className="relative pt-32 md:pt-48 pb-16 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0 opacity-50">
             <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-pulse-slow" />
             <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-zinc-800/20 blur-[130px] rounded-full" />
             <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
             </div>
          </div>

          <AnimatedSection className="relative z-10 w-full px-8 flex flex-col items-center">
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] tracking-tightest font-bold text-[#F5F5F5] leading-none mb-6">
              Our <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary">Story.</span>
            </h1>
            <p className="text-[#F5F5F5]/80 text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold">
              Crafting Stories. Creating Impact.
            </p>
          </AnimatedSection>
        </section>

        {/* ── 2. About / Overview Section ────────────────────────── */}
        <section className="py-12 md:py-16 pt-8">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              <AnimatedSection className="order-2 md:order-1">
                <div className="w-full aspect-[4/5] md:aspect-square bg-gradient-to-br from-zinc-900 to-black border border-white/5 relative group overflow-hidden">
                   <div className="absolute inset-x-0 bottom-0 top-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
                   <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center z-10">
                     <Film size={64} className="text-zinc-800 mb-6 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
                     <span className="text-[10px] tracking-[0.6em] uppercase text-[#F5F5F5]/60 font-bold group-hover:text-primary transition-colors">Visual Placeholder</span>
                   </div>
                   <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:30px_30px]" />
                   </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-light text-[#F5F5F5] tracking-tight mb-10 leading-tight">
                  A full-service <br />
                  <span className="text-primary font-medium italic">creative production</span> company.
                </h2>
                <div className="flex flex-col gap-6">
                  <p className="text-lg md:text-xl text-[#F5F5F5] font-light tracking-wide border-l border-primary/40 pl-6">
                    Cinematic Visuals <span className="text-primary px-2">|</span> Powerful Editing <span className="text-primary px-2">|</span> Cutting-Edge VFX
                  </p>
                  <p className="text-sm md:text-base text-[#F5F5F5]/80 font-light leading-relaxed max-w-lg mt-4">
                    We blur the line between technical precision and raw artistry, shaping narratives that command attention. From expansive feature films to scroll-stopping digital content, our pipeline is built for modern storytelling.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── 3. Vision & Mission ────────────────────────── */}
        <section className="py-24 md:py-32 bg-zinc-950/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4 block">Our Core</span>
              <h2 className="text-3xl md:text-4xl font-light text-[#F5F5F5] tracking-tight">
                Impactful visual experiences <br className="hidden md:block"/>
                <span className="italic text-primary/70">across all platforms.</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missionPoints.map((pt, i) => (
                <AnimatedSection key={i} delay={0.1 * i} className="p-8 border border-white/5 bg-black/40 hover:border-primary/30 transition-colors group">
                   <pt.icon size={24} className="text-zinc-600 mb-6 group-hover:scale-110 group-hover:text-primary transition-all duration-500" />
                   <p className="text-[#F5F5F5] font-light tracking-wide">{pt.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Our Team ────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] tracking-tight uppercase">Our Team</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamRoles.map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.05} className="flex flex-col items-center group cursor-pointer">
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

        {/* ── 5. Why Choose Us / Highlights ────────────────────────── */}
        <section className="py-24 md:py-32 bg-zinc-950/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold mb-4 block">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] tracking-tight">Why Choose Us</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {highlights.map((h, i) => (
                <AnimatedSection key={i} delay={0.1 * i} className="flex flex-col gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <h.icon size={20} className="text-zinc-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-[#F5F5F5] tracking-wide">{h.title}</h3>
                  <p className="text-sm font-light text-zinc-500 leading-relaxed">{h.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA Section ────────────────────────── */}
        <section className="py-40 border-t border-white/5 flex flex-col items-center justify-center text-center px-8">
           <AnimatedSection className="flex flex-col items-center">
             <span className="text-[9px] tracking-[1rem] uppercase text-primary/60 font-bold mb-12 ml-[0.5rem]">Collaboration</span>
             <h2 className="text-4xl md:text-6xl tracking-tightest font-extralight text-white mb-10">
               Start Your <span className="italic text-primary/70">Project.</span>
             </h2>
             
             <div className="flex flex-col sm:flex-row gap-6 mb-16">
               <Link
                 to="/contact"
                 className="group flex items-center gap-4 border border-white/20 px-8 py-4 hover:border-primary transition-all duration-500 rounded-sm"
               >
                 <span className="text-[10px] tracking-[0.3em] uppercase text-white group-hover:text-primary font-bold transition-colors">
                   Contact Us
                 </span>
                 <div className="h-px w-6 bg-white/30 group-hover:bg-primary group-hover:w-10 transition-all duration-500" />
               </Link>
             </div>
             
             <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent opacity-30" />
           </AnimatedSection>
        </section>

      </div>
    </PageTransition>
  );
};

export default About;
