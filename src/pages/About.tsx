import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Film, Star, Users, Calendar } from "lucide-react";

const milestones = [
  { year: "2018", title: "Established", desc: "Unicorn Entertainment founded in Karnataka, India" },
  { year: "2019", title: "First Productions", desc: "Launched short film projects and built core team" },
  { year: "2020", title: "Industry Recognition", desc: "IFH Short Film Contest Top 50, Mysuru Dhasara Festival Winner" },
  { year: "2021", title: "Major Collaborations", desc: "Associated with Vikrant Rona and major Kannada productions" },
  { year: "2022", title: "Feature Films", desc: "Worked on Kabzaa, UI, and expanded post-production services" },
  { year: "2023", title: "Studio Growth", desc: "Window Seat premiere, equipment rental division launched" },
  { year: "2024", title: "National Presence", desc: "Competing at national level with premium production services" },
];

const About = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 cinema-section">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Story</p>
            <h1 className="cinema-heading text-foreground mb-6">
              The Journey of<br />
              <span className="text-gold-gradient">Unicorn Entertainment</span>
            </h1>
            <p className="font-serif italic text-muted-foreground text-xl max-w-2xl mb-16">
              From a passionate dream in July 2018 to a full-fledged production house shaping Karnataka's cinematic landscape.
            </p>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border/30" />
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                    <span className="font-display text-3xl text-primary">{m.year}</span>
                    <h3 className="font-display text-xl tracking-wider text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-gold" />
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Awards */}
          <AnimatedSection className="mt-20">
            <h2 className="cinema-heading text-foreground text-center mb-12">
              <span className="text-gold-gradient">Recognition</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Award, text: "IFH Short Film Contest – Top 50" },
                { icon: Star, text: "Certificate of Appreciation – Indian Film House" },
                { icon: Film, text: "Mysuru Dhasara Film Festival Winner" },
                { icon: Users, text: "Collaborations with Major Kannada Film Teams" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 border border-border/20 bg-card/30 hover:border-primary/30 transition-all duration-500 group">
                  <item.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
