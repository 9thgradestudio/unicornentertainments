import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ─── Data ──────────────────────────────────────────────────── */
const categories = [
  {
    num: "01",
    name: "Camera Bodies",
    tag: "Cinema-Grade",
    // Unique gradient per block — gold/black palette only, varied direction & tone
    bg: "radial-gradient(ellipse at 20% 80%, rgba(202,160,46,0.12) 0%, transparent 55%), linear-gradient(160deg, #0a0a0a 0%, #111108 100%)",
    span: "lg:col-span-2 lg:row-span-2", // Featured large block
  },
  {
    num: "02",
    name: "Lenses",
    tag: "G Master · Sigma Art",
    bg: "radial-gradient(ellipse at 80% 20%, rgba(202,160,46,0.10) 0%, transparent 60%), linear-gradient(140deg, #0c0c0a 0%, #0a0a0a 100%)",
    span: "lg:col-span-1",
  },
  {
    num: "03",
    name: "Audio",
    tag: "Wireless · Studio",
    bg: "radial-gradient(ellipse at 20% 20%, rgba(202,160,46,0.08) 0%, transparent 55%), linear-gradient(200deg, #0d0d0b 0%, #080808 100%)",
    span: "lg:col-span-1",
  },
  {
    num: "04",
    name: "Stabilization",
    tag: "DJI 3-Axis",
    bg: "radial-gradient(ellipse at 50% 100%, rgba(202,160,46,0.10) 0%, transparent 60%), linear-gradient(120deg, #0a0a0a 0%, #0e0e0c 100%)",
    span: "lg:col-span-1",
  },
  {
    num: "05",
    name: "Lighting",
    tag: "Godox TL60",
    bg: "radial-gradient(ellipse at 100% 50%, rgba(202,160,46,0.13) 0%, transparent 55%), linear-gradient(170deg, #0c0c09 0%, #080808 100%)",
    span: "lg:col-span-1",
  },
  {
    num: "06",
    name: "Software & Brands",
    tag: "Adobe · DaVinci · Sony",
    bg: "radial-gradient(ellipse at 0% 50%, rgba(202,160,46,0.08) 0%, transparent 60%), linear-gradient(135deg, #0a0a0a 0%, #0d0d0a 100%)",
    span: "lg:col-span-2",
  },
];

/* ─── Animation variants ─────────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const blockVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─── Component ──────────────────────────────────────────────── */
const EquipmentPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="equipment-showcase" className="w-full overflow-hidden" style={{ background: "hsl(0 0% 3%)" }}>

      {/* ── Section Header ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="max-w-[1400px] mx-auto px-8 md:px-16 pt-24 md:pt-36 pb-14"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-10 h-[1px] bg-primary/40" />
          <span className="text-[11px] tracking-[0.55em] uppercase text-zinc-500 font-bold">
            Equipment
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#F5F5F5] tracking-tight">
          Premium <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary drop-shadow-[0_0_15px_rgba(212,189,114,0.3)]">gear.</span>
        </h2>
      </motion.div>

      {/* ── Bento Staggered Grid ────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] md:auto-rows-[280px] gap-3 md:gap-4"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={blockVariants}
              onClick={() => navigate("/equipment")}
              className={`group relative overflow-hidden cursor-pointer ${cat.span}`}
              style={{ background: cat.bg }}
            >
              {/* Hover sweep overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                   style={{ background: "linear-gradient(135deg, rgba(202,160,46,0.07) 0%, transparent 60%)" }} />

              {/* Big BG number — top-right, very subtle */}
              <span
                className="absolute top-6 right-8 font-display font-black leading-none select-none text-primary/[0.06] group-hover:text-primary/[0.12] transition-colors duration-700 tracking-tighter"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
              >
                {cat.num}
              </span>

              {/* Content — bottom left */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col gap-3">
                {/* Expanding gold line */}
                <div className="h-[1.5px] rounded-full bg-primary/40 w-8 group-hover:w-20 group-hover:bg-primary transition-all duration-700 ease-out" />

                {/* Category name */}
                <h3
                  className="font-display uppercase text-foreground/70 group-hover:text-foreground transition-colors duration-500 leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", letterSpacing: "0.14em" }}
                >
                  {cat.name}
                </h3>

                {/* Tag — micro-copy slides in on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-8 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                  <span className="text-[9px] font-body font-medium tracking-[0.5em] uppercase text-primary/70">
                    {cat.tag}
                  </span>
                </div>
              </div>

              {/* Bottom glow border */}
              <div
                className="absolute inset-x-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{ background: "linear-gradient(to right, transparent, rgba(202,160,46,0.5), transparent)" }}
              />

              {/* Corner bracket */}
              <div className="absolute top-5 left-6 w-6 h-6 border-t border-l border-primary/0 group-hover:border-primary/40 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Actionless Bottom Spacing ────────────────────────── */}
      <div className="pb-32 md:pb-48" />
    </section>
  );
};

export default EquipmentPreview;
