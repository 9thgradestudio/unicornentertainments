import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/services", label: "Services" },
    { to: "/equipment", label: "Equipment" },
    { to: "/about", label: "Our Story" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0B0B0B]">
      <div className="h-[1px] bg-white/[0.08]" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 pt-[100px] pb-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">

          {/* Column 1 – Brand */}
          <div className="flex flex-col items-start">
            <Link to="/" onClick={handleClick}>
              <img
                src="/images/logo.png"
                alt="Unicorn Entertainment"
              className="h-11 w-auto hover:drop-shadow-[0_0_10px_hsl(43,74%,49%,0.35)] transition-all duration-300"
              />
            </Link>

            <p className="text-[12px] text-white/40 mt-[20px] tracking-wide">Creating Cinematic Experiences Since 2018</p>

            <div className="flex gap-5 mt-[24px]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors duration-300">
                <Youtube size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2 – Pages */}
          <div className="flex flex-col items-start">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6 font-bold">Navigation</p>
            <nav className="flex flex-col gap-[15px]">
              {pages.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={handleClick}
                  className="text-[11px] tracking-[0.1em] uppercase text-white/60 hover:text-primary transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 – Contact */}
          <div className="flex flex-col items-start">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-6 font-bold">Inquiries</p>
            <div className="flex flex-col gap-[14px] text-[13px]">
              <a href="tel:+918431172993" className="text-white/60 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2">
                <Phone size={13} strokeWidth={1.5} /> +91 84311 72993
              </a>
              <a href="tel:+919035536015" className="text-white/60 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2">
                <Phone size={13} strokeWidth={1.5} /> +91 90355 36015
              </a>
              <a href="mailto:contact@unicornentertainment.in" className="text-white/60 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2">
                <Mail size={13} strokeWidth={1.5} /> contact@unicornentertainment.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] mt-16 pt-6">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Unicorn Entertainment. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
