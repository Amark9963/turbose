"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoMark from "@/components/LogoMark";

const links = ["Solutions", "How We Work", "About", "Contact"];

const scrollIds: Record<string, string> = {
  "How We Work": "how-we-work",
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const target = scrollIds[id] ?? id.toLowerCase();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A0A0A]/80 backdrop-blur-2xl border-b border-white/[0.05]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8" style={{ height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <LogoMark variant="E" theme="light" />
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative text-white/45 hover:text-white text-[13px] tracking-wider font-body transition-colors duration-300 group py-1"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-400" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="ml-2 relative overflow-hidden px-6 py-2.5 border border-accent/40 text-accent text-[13px] font-medium tracking-wider hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 group"
          >
            <span className="relative z-10">Start a Project</span>
          </button>
        </nav>

        <button className="md:hidden text-white p-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-5 space-y-[5px]">
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block h-[1px] bg-white origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-[1px] bg-white" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-[1px] bg-white origin-center" />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-[#0A0A0A] border-t border-white/[0.05] overflow-hidden"
          >
            <div className="px-5 sm:px-8 py-6 flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link)}
                  className="text-white/50 hover:text-white text-sm tracking-wider text-left font-body transition-colors"
                >
                  {link}
                </motion.button>
              ))}
              <button onClick={() => scrollTo("Contact")} className="px-6 py-3 border border-accent/40 text-accent text-sm font-medium tracking-wider w-fit">
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}