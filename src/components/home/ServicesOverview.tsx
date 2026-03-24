import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Film, Video, Scissors, Wand2, Music, Camera } from "lucide-react";

const services = [
  {
    icon: <Film className="w-8 h-8" />,
    title: "Pre-Production",
    description: "Script, storyboard, casting, location — we plan every detail before Day 1.",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Film & Video Production",
    description: "Feature films, music videos, ads, social content. Full crew, any scale.",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Post-Production",
    description: "Editing, color grading, sound design, motion graphics — delivered to spec.",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "VFX & CGI",
    description: "Green screen, compositing, CGI integration, visual cleanup and enhancements.",
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Music & Creative Content",
    description: "Rap songs, album songs, lyrical videos, concept music videos.",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Gear Rentals",
    description: "Sony FX3, DJI Gimbal, Godox lights — available daily and weekly.",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Everything Your Production Needs.
          </h2>
          <p className="text-xl text-zinc-400 leading-relaxed font-light">
            From the first idea to the final frame — pre-production, production, post, VFX, music, and gear rental, all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800/50 p-8 rounded-2xl hover:bg-zinc-900 transition-colors duration-300 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center md:justify-start"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider text-sm rounded-full hover:bg-primary/90 transition-colors"
          >
            Explore All Services &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
