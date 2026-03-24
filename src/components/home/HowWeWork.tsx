import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "We understand your project, your vision, and your budget — before anything else.",
  },
  {
    num: "02",
    title: "Develop",
    description: "Script, storyboard, concept. We align on the creative direction before we shoot.",
  },
  {
    num: "03",
    title: "Produce",
    description: "Camera rolls. Full crew. Professional gear. We execute at the highest standard.",
  },
  {
    num: "04",
    title: "Deliver",
    description: "Edited, graded, mixed, and delivered to spec. On time. Every time.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 bg-[hsl(var(--cinema-black))] text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Simple Process. No Surprises.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-zinc-800" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center font-bold text-xl text-primary mb-6 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-wide mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
