import { motion } from "framer-motion";

const SpaceElement = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {/* Stars */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 1 + (i % 3),
          height: 1 + (i % 3),
          left: `${(i * 5.3) % 98}%`,
          top: `${(i * 4.7 + 3) % 95}%`,
          background: `hsl(${i % 2 === 0 ? "43 74% 49%" : "0 0% 90%"} / ${0.15 + (i % 4) * 0.08})`,
        }}
        animate={{
          opacity: [0.1, 0.6, 0.1],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3 + (i % 5) * 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.4,
        }}
      />
    ))}

    {/* Cosmic dust cloud */}
    <motion.div
      className="absolute w-96 h-96 rounded-full"
      style={{
        left: "60%",
        top: "30%",
        background: "radial-gradient(circle, hsl(43 74% 49% / 0.02), transparent)",
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);

export default SpaceElement;
