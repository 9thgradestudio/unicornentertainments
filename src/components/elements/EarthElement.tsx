import { motion } from "framer-motion";

const EarthElement = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-amber-950/5 via-transparent to-amber-950/5" />
    
    {/* Floating dust particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 2 + (i % 4),
          height: 2 + (i % 4),
          left: `${(i * 7) % 100}%`,
          top: `${(i * 13 + 10) % 90}%`,
          background: `hsl(43 60% 49% / ${0.1 + (i % 3) * 0.05})`,
          filter: "blur(1px)",
        }}
        animate={{
          y: [0, -30 - (i % 5) * 10, 0],
          x: [0, (i % 2 === 0 ? 15 : -15), 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8 + (i % 4) * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.6,
        }}
      />
    ))}
  </div>
);

export default EarthElement;
