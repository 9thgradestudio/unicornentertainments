import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      if (isHome) {
        const heroEl = document.getElementById("hero-section");
        const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 0;
        setPastHero(heroBottom <= 64);
      } else {
        setPastHero(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    const isSamePage = location.pathname === to;
    
    if (isSamePage) {
      // If same page, perform smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If different page, navigate immediately
      navigate(to);
    }
    setIsOpen(false);
  };

  const showBg = pastHero || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        showBg
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, "/")}
          className="z-[110] relative group"
        >
          <img
            src="/images/logo.png"
            alt="Unicorn Entertainment"
            className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { label: "Home", to: "/" },
            { label: "Work", to: "/work" },
            { label: "Services", to: "/services" },
            { label: "Equipment", to: "/equipment" },
            { label: "Our Story", to: "/about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.to}
              onClick={(e) => handleNavClick(e, item.to)}
              className="text-[11px] tracking-[0.25em] uppercase font-medium text-white/70 hover:text-white transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className="px-6 py-2 border border-white/20 text-[11px] tracking-[0.25em] uppercase font-medium text-white hover:bg-white hover:text-black transition-all duration-500 rounded-full"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-[110] text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-black backdrop-blur-3xl overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-10 p-12 text-center">
              {[
                { label: "Home", to: "/" },
                { label: "Work", to: "/work" },
                { label: "Services", to: "/services" },
                { label: "Equipment", to: "/equipment" },
                { label: "Our Story", to: "/about" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className="text-2xl tracking-[0.3em] uppercase text-white hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, "/contact")}
                className="mt-8 px-12 py-4 border border-primary text-primary tracking-[0.4em] uppercase hover:bg-primary hover:text-black transition-all"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
