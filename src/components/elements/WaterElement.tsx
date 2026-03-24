import { motion } from "framer-motion";

const WaterElement = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-blue-950/5" />
    
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full"
        style={{
          height: "2px",
          top: `${20 + i * 15}%`,
          background: `linear-gradient(90deg, transparent, hsl(210 60% 40% / 0.06), hsl(43 74% 49% / 0.04), transparent)`,
          filter: "blur(8px)",
        }}
        animate={{
          x: ["-30%", "30%", "-30%"],
          opacity: [0.3, 0.6, 0.3],
          scaleY: [1, 2, 1],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.2,
        }}
      />
    ))}

    {/* Ripple circles */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`ripple-${i}`}
        className="absolute rounded-full border"
        style={{
          width: 200,
          height: 200,
          left: `${25 + i * 25}%`,
          top: `${40 + i * 10}%`,
          borderColor: "hsl(210 50% 50% / 0.04)",
        }}
        animate={{
          scale: [0.5, 2, 0.5],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 3,
        }}
      />
    ))}
  </div>
);

export default WaterElement;
