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
    <section id="clients-grid" className="w-full overflow-hidden bg-background">

      <style>{`
        @keyframes ucMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.3333%); }
        }
        .uc-marquee {
          display: flex;
          width: max-content;
          animation: ucMarquee 28s linear infinite;
          will-change: transform;
        }
        .uc-marquee:hover { animation-play-state: paused; }
      `}</style>

      {/* ── Section Header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="max-w-[1400px] mx-auto px-8 md:px-16 pt-24 md:pt-36 pb-14 flex items-center gap-6"
      >
        <div className="w-10 h-[1px] bg-primary shrink-0" />
        <span className="text-[11px] tracking-[0.55em] uppercase text-primary/70 font-semibold font-body">
          Industries &amp; Clients
        </span>
        <div className="flex-1 h-[1px] bg-primary/10" />
      </motion.div>

      {/* ── Marquee Ticker ──────────────────────────────────── */}
      <div className="relative w-full overflow-hidden pb-16 md:pb-24">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="uc-marquee select-none items-center">
          {tickerItems.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="flex items-center shrink-0">
              <span
                className="font-display font-black uppercase tracking-tight leading-none px-8 md:px-12 text-primary/[0.18]"
                style={{ fontSize: "clamp(3rem, 6.5vw, 6rem)" }}
              >
                {item.name}
              </span>
              <span className="text-primary/30 text-3xl">&nbsp;·&nbsp;</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cinematic Grid ──────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-32 md:pb-48">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10"
        >
          {industries.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              onClick={() => navigate("/work")}
              className="group relative flex flex-col justify-between bg-background overflow-hidden cursor-pointer min-h-[300px] p-10 md:p-12"
            >
              {/* Gold ambient hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-br from-primary/[0.06] to-transparent" />

              {/* Large background number */}
              <span className="font-display font-black leading-none select-none text-primary/[0.07] group-hover:text-primary/[0.13] transition-colors duration-700 tracking-tighter"
                    style={{ fontSize: "clamp(5rem, 9vw, 8rem)" }}>
                {item.num}
              </span>

              {/* Bottom label block */}
              <div className="flex flex-col gap-3 mt-auto relative z-10">
                {/* Gold accent line — expands on hover */}
                <div className="h-[1.5px] bg-primary/40 w-8 group-hover:w-16 group-hover:bg-primary transition-all duration-700 ease-out rounded-full" />

                {/* Industry name */}
                <h3 className="font-display text-2xl md:text-3xl tracking-[0.18em] uppercase text-foreground/60 group-hover:text-foreground transition-colors duration-500 leading-tight">
                  {item.name}
                </h3>

                {/* Micro-copy — slides up on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-8 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                  <span className="text-[9px] tracking-[0.5em] uppercase text-primary/75 font-medium font-body">
                    {item.copy}
                  </span>
                </div>
              </div>

              {/* Bottom glow border */}
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-1000" />
              {/* Corner bracket */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/0 group-hover:border-primary/40 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsGrid;
