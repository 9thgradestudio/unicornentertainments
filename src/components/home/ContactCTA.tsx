import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";

const ContactCTA = () => {
  return (
    <section className="cinema-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="cinema-heading text-foreground mb-6">
            Let's Create Something<br />
            <span className="text-gold-gradient">Extraordinary</span>
          </h2>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block font-display text-sm tracking-[0.3em] uppercase bg-gold-gradient text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactCTA;
