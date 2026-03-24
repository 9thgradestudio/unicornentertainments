import { motion } from "framer-motion";

const WindElement = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Flowing lines */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          width: 120 + i * 40,
          height: "1px",
          top: `${15 + i * 14}%`,
          left: "-10%",
          background: `linear-gradient(90deg, transparent, hsl(43 74% 49% / 0.06), hsl(0 0% 100% / 0.04), transparent)`,
          filter: "blur(2px)",
        }}
        animate={{
          x: ["-10%", "110%"],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 12 + i * 2,
          repeat: Infinity,
          ease: "linear",
          delay: i * 2,
        }}
      />
    ))}

    {/* Small floating particles */}
    {[...Array(10)].map((_, i) => (
      <motion.div
        key={`p-${i}`}
        className="absolute rounded-full"
        style={{
          width: 3,
          height: 3,
          left: `${(i * 11) % 100}%`,
          top: `${(i * 17 + 5) % 90}%`,
          background: `hsl(43 74% 49% / 0.12)`,
        }}
        animate={{
          x: [0, 80, 160],
          y: [0, -20 + (i % 3) * 10, 0],
          opacity: [0, 0.4, 0],
        }}
        transition={{
          duration: 10 + i,
          repeat: Infinity,
          ease: "linear",
          delay: i * 1.5,
        }}
      />
    ))}
  </div>
);

export default WindElement;
