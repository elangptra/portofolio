import { useState, useEffect } from "react"
import { motion } from 'framer-motion'

const links = [
    { id: 'home', label: '01. HOME' },
    { id: 'about', label: '02. ABOUT' },
    { id: 'skills', label: '03. SKILLS' },
    { id: 'experience', label: '04. EXPERIENCE' },
    { id: 'projects', label: '05. ARSENAL' },
    { id: 'contact', label: '06. CONTACT' },
]

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.id));
      const y = window.scrollY + window.innerHeight / 3;
      for (const s of sections) {
        if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-4 flex items-center justify-between gap-6">
        <button onClick={() => scrollTo("home")} className="flex flex-col items-start group">
          <div className="font-display italic text-2xl tracking-wider leading-none" style={{ transform: "skewX(-10deg)" }}>
            <span className="text-bone">ELANG </span>
            <span className="text-electric">PUTRA</span>
          </div>
          <div className="font-marker text-[11px] text-electric tracking-widest">
            {"{ DEV PORTFOLIO }"}
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`relative font-display italic tracking-widest text-sm px-4 py-2 transition-colors ${
                  isActive ? "text-bone" : "text-bone hover:text-electric"
                }`}
                style={{ transform: "skewX(-8deg)" }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-electric ribbon-clip"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className="relative z-10 font-bold"
                  style={isActive ? { textShadow: "1.5px 1.5px 0 var(--ink)" } : undefined}
                >
                  {l.label}
                </span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="font-display italic tracking-widest text-sm px-6 py-2.5 bg-bone text-ink ribbon-clip hover:bg-electric transition-colors"
          style={{ transform: "skewX(-10deg)" }}
        >
          <span style={{ transform: "skewX(10deg)" }} className="inline-block">LET'S TALK!</span>
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar