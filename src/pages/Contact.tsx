import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Instagram, Youtube, Send, Linkedin, ArrowUpRight } from "lucide-react";
import FilmGrain from "@/components/FilmGrain";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(formData.message + (formData.phone ? `\n\nPhone: ${formData.phone}` : ''));
    window.location.href = `mailto:contact@unicornentertainments.com?subject=${subject}&body=${body}`;
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageTransition>
      <div className="bg-black min-h-screen selection:bg-primary/30 selection:text-white">
        <FilmGrain />

        {/* ── 1. Hero / Header Section ────────────────────────── */}
        <section className="relative pt-32 md:pt-48 pb-16 overflow-hidden flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-0 opacity-50">
             <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-pulse-slow" />
             <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-zinc-800/20 blur-[130px] rounded-full" />
             <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(0deg,white_1px,transparent_1px)] bg-[length:10vw_10vh]" />
             </div>
          </div>

          <AnimatedSection className="relative z-10 w-full px-8 flex flex-col items-center">
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] tracking-tightest font-bold text-[#F5F5F5] leading-none mb-6">
              Contact <span className="italic font-display text-transparent bg-clip-text bg-gradient-to-br from-primary/80 to-primary">Us.</span>
            </h1>
            <p className="text-[#F5F5F5]/80 text-[10px] md:text-sm tracking-[0.4em] uppercase font-bold">
              Let’s create something extraordinary together.
            </p>
          </AnimatedSection>
        </section>

        {/* ── 2. Split-Screen Form & Info ────────────────────────── */}
        <section id="contact-form" className="pb-24 pt-8 relative z-10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Form Section (Left) */}
              <AnimatedSection className="lg:col-span-7">
                <div className="mb-12">
                   <h2 className="text-3xl font-light text-[#F5F5F5] tracking-tight mb-4">Start a Conversation</h2>
                   <p className="text-[#F5F5F5]/70 font-light">Fill out the form below and our team will get back to you shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="group relative">
                      <input
                        type="text"
                        required
                        placeholder="Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 pb-4 text-[#F5F5F5] text-lg font-light focus:border-primary focus:outline-none transition-colors placeholder:text-zinc-600"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-focus-within:w-full" />
                    </div>
                    <div className="group relative">
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 pb-4 text-[#F5F5F5] text-lg font-light focus:border-primary focus:outline-none transition-colors placeholder:text-zinc-600"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-focus-within:w-full" />
                    </div>
                  </div>

                  <div className="group relative">
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-4 text-[#F5F5F5] text-lg font-light focus:border-primary focus:outline-none transition-colors placeholder:text-zinc-600"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  <div className="group relative">
                    <textarea
                      required
                      rows={4}
                      placeholder="Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 pb-4 text-[#F5F5F5] text-lg font-light focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-zinc-600"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-focus-within:w-full" />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center gap-4 bg-primary/10 border border-primary/40 px-8 py-4 text-[10px] tracking-[0.3em] uppercase text-white font-bold hover:bg-primary transition-all duration-500"
                  >
                    Send Message
                    <Send size={14} className="text-primary group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </button>
                </form>
              </AnimatedSection>

              {/* Info Section (Right) */}
              <AnimatedSection delay={0.2} className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold mb-8">Direct Contact</h3>
                  <div className="flex flex-col gap-8 mb-16">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-black">
                        <Phone size={16} className="text-zinc-400" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-xs tracking-widest uppercase text-zinc-600 mb-1">Phone</span>
                        <a href="tel:+918431172993" className="text-lg font-light text-[#F5F5F5] hover:text-primary transition-colors">+91 84311 72993</a>
                        <a href="tel:+919035536015" className="text-lg font-light text-[#F5F5F5] hover:text-primary transition-colors">+91 90355 36015</a>
                      </div>
                    </div>

                    <a href="mailto:contact@unicornentertainments.com" className="group flex items-start gap-6">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                        <Mail size={16} className="text-zinc-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs tracking-widest uppercase text-primary mb-1">Email Us</span>
                        <span className="text-lg font-light text-[#F5F5F5] group-hover:text-primary transition-colors break-all">contact@unicornentertainments.com</span>
                      </div>
                    </a>

                    <a href="https://maps.google.com/maps?q=17/1,%201st%20Main%20Rd,%20RK%20Layout%201st%20Stage,%20Padmanabhanagar,%20Bengaluru,%20Karnataka%20560061" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-6">
                      <div className="w-10 h-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:border-primary/40 group-hover:bg-primary/10 transition-colors">
                        <MapPin size={16} className="text-zinc-400 group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs tracking-widest uppercase text-zinc-600 mb-1">Address</span>
                        <span className="text-sm md:text-base font-light text-[#F5F5F5] group-hover:text-primary transition-colors leading-relaxed">
                          17/1, 1st Main Rd, RK Layout 1st Stage,<br className="hidden sm:block" />
                          Padmanabhanagar, Bengaluru, Karnataka 560061
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500 font-bold mb-6">Social</h3>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/unicornentertainmentsckm" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 text-zinc-400 hover:text-primary transition-all">
                      <Instagram size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 text-zinc-400 hover:text-primary transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 text-zinc-400 hover:text-primary transition-all">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              
            </div>
          </div>
        </section>

        {/* ── 3. Embedded Map ────────────────────────── */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8">
            <AnimatedSection>
              <div className="w-full h-96 bg-zinc-900 border border-white/10 rounded-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none z-10" />
                <iframe
                  src="https://maps.google.com/maps?q=17/1,%201st%20Main%20Rd,%20RK%20Layout%201st%20Stage,%20Padmanabhanagar,%20Bengaluru,%20Karnataka%20560061&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 4. Footer CTA ────────────────────────── */}
        <section className="py-32 border-t border-white/5 flex flex-col items-center justify-center text-center px-8 relative z-10">
           <AnimatedSection className="flex flex-col items-center">
             <h2 className="text-3xl md:text-5xl tracking-tightest font-light text-[#F5F5F5] mb-10">
               Ready to create? <br className="sm:hidden" />
               <span className="italic text-zinc-600">Let’s talk.</span>
             </h2>

             <button
               onClick={scrollToForm}
               className="group flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-bold hover:text-white transition-colors py-4"
             >
               Back to top
               <ArrowUpRight size={14} className="text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </button>
           </AnimatedSection>
        </section>

      </div>
    </PageTransition>
  );
};

export default Contact;

