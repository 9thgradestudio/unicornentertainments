import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Instagram, Youtube, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:contact@unicornentertainment.in?subject=${subject}&body=${body}`;
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20 cinema-section">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</p>
            <h1 className="cinema-heading text-foreground mb-6">
              Let's <span className="text-gold-gradient">Connect</span>
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl tracking-wider text-foreground mb-6">Contact Details</h3>
                  <div className="space-y-4">
                    <a href="tel:+918431172993" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone size={16} className="text-primary" /> +91 84311 72993
                    </a>
                    <a href="tel:+919035536015" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone size={16} className="text-primary" /> +91 90355 36015
                    </a>
                    <a href="mailto:contact@unicornentertainment.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail size={16} className="text-primary" /> contact@unicornentertainment.in
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={16} className="text-primary" /> Karnataka, India
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl tracking-wider text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/unicornentertainmentsckm" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-all">
                      <Instagram size={18} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 border border-border/30 flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-all">
                      <Youtube size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-border/30 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-border/30 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border border-border/30 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase bg-gold-gradient text-primary-foreground px-8 py-3 hover:opacity-90 transition-opacity"
                >
                  <Send size={14} /> Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
