import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RentalsCTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[hsl(var(--cinema-black))] border-t border-zinc-900 border-b">
      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative z-10 bg-gradient-to-r from-black via-black/90 to-transparent">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6">
              Need Cinema-Grade Gear?
            </h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10">
              Sony FX3. DJI Gimbal. Godox TL60. Prime lenses. All maintained to production standard — available daily and weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/equipment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider text-sm rounded-full hover:bg-primary/90 transition-colors"
              >
                Browse Gear <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Contact for Availability
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual Side */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            src="/placeholder.svg"
            alt="Premium Cinema Gear Array"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default RentalsCTA;
