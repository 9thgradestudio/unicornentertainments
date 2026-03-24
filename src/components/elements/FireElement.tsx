import { motion } from "framer-motion";

const FireElement = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Base warm glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 via-transparent to-transparent" />
    
    {/* Animated flame particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 60 + i * 30,
          height: 80 + i * 40,
          left: `${10 + i * 12}%`,
          bottom: "-20%",
          background: `radial-gradient(ellipse, hsl(30 90% 40% / 0.08), hsl(43 74% 49% / 0.03), transparent)`,
          filter: "blur(30px)",
        }}
        animate={{
          y: [0, -120 - i * 20, -60, 0],
          opacity: [0.15, 0.3, 0.15, 0.15],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 6 + i * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.7,
        }}
      />
    ))}
  </div>
);

export default FireElement;
