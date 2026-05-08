"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const words = ["We", "Build", "AI", "That", "Works", "For", "Business."];

function AnimatedWord({ word, delay }: { word: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 60, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block mr-[0.22em]"
      style={{ transformOrigin: "bottom" }}
    >
      {word}
    </motion.span>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 1200);
    return () => clearTimeout(timer);
  }, [to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="grain relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-center">
          {/* Left: headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block w-10 h-[1px] bg-accent origin-left"
              />
              <span className="text-accent text-[11px] tracking-[0.35em] uppercase font-body">Enterprise AI Partner</span>
            </motion.div>

            <h1 className="font-display font-bold text-white leading-[1.0] tracking-[-0.035em] mb-10"
              style={{ fontSize: "clamp(2.2rem, 8vw, 6.8rem)", perspective: "800px" }}>
              {words.map((word, i) => (
                <AnimatedWord key={word} word={word} delay={0.3 + i * 0.1} />
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed font-body mb-10 md:mb-12"
            >
              From strategy to deployment — we design, build, and integrate
              intelligent systems that automate workflows, unlock insights,
              and scale operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("contact")}
                className="group relative overflow-hidden px-8 py-4 bg-accent text-white text-sm font-medium tracking-wider font-body transition-all duration-300 hover:bg-accent/90 flex items-center gap-3"
              >
                Start a Project
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </button>
              <button
                onClick={() => scrollTo("solutions")}
                className="px-8 py-4 text-white/50 text-sm font-body tracking-wider border border-white/[0.1] hover:border-white/30 hover:text-white transition-all duration-300"
              >
                Explore Solutions
              </button>
            </motion.div>
          </div>

          {/* Right: stats card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="border border-white/[0.07] bg-white/[0.02] backdrop-blur-sm p-8 space-y-8">
              <div className="pb-6 border-b border-white/[0.06]">
                <p className="text-white/25 text-[11px] tracking-[0.2em] uppercase font-body mb-1">Systems in Production</p>
                <p className="font-display font-bold text-white text-5xl tracking-tight">
                  <Counter to={8} suffix="+" />
                </p>
              </div>
              <div className="pb-6 border-b border-white/[0.06]">
                <p className="text-white/25 text-[11px] tracking-[0.2em] uppercase font-body mb-1">Avg. Weeks to Production</p>
                <p className="font-display font-bold text-white text-5xl tracking-tight">
                  <Counter to={8} />
                </p>
              </div>
              <div>
                <p className="text-white/25 text-[11px] tracking-[0.2em] uppercase font-body mb-1">On-Time Delivery Rate</p>
                <p className="font-display font-bold text-accent text-5xl tracking-tight">
                  <Counter to={100} suffix="%" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-8 flex items-center gap-4 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent"
        />
        <span className="text-white/20 text-[11px] tracking-[0.25em] uppercase font-body">Scroll</span>
      </motion.div>
    </section>
  );
}