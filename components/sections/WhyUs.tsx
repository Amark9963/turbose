"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BracketDecor from "@/components/BracketDecor";

const differentiators = [
  {
    number: "01",
    title: "You own everything we build.",
    description: "Full source code, full IP transfer at delivery. No licensing fees, no lock-in, no dependency on us to keep your systems running.",
  },
  {
    number: "02",
    title: "Production-ready, not prototype-grade.",
    description: "We don't hand over demos. Every system we deliver is engineered for reliability, security, and scale from day one.",
  },
  {
    number: "03",
    title: "End-to-end, not advisory-only.",
    description: "We don't write reports and walk away. We design, build, deploy, and support — one team, full accountability, clear outcomes.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#F7F7F6] py-24 md:py-40 border-t border-black/[0.06] overflow-hidden">
      <BracketDecor corner="top-right" inView={inView} delay={0.3} />
      <BracketDecor corner="bottom-left" inView={inView} delay={0.5} />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Why Turbose</p>
            </div>
            <h2 className="font-display font-bold text-black tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              What sets us apart.
            </h2>
          </div>
          <p className="text-black/40 text-sm max-w-sm leading-relaxed font-body">
            Three things every enterprise client should know before choosing an AI partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-black/[0.06]">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover="hovered"
              transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ backgroundColor: "#F7F7F6" }}
              variants={{ hovered: { backgroundColor: "#ffffff" } }}
              className="relative overflow-hidden p-7 md:p-10 cursor-default"
            >
              {/* Top-left radial gradient glow */}
              <motion.div
                variants={{ hovered: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 0% 0%, rgba(13,148,136,0.09) 0%, transparent 65%)",
                }}
              />

              {/* Top gradient line — slides in on hover */}
              <motion.div
                variants={{ hovered: { scaleX: 1, opacity: 1 } }}
                initial={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 left-0 right-0 h-[1.5px] origin-left pointer-events-none"
                style={{ background: "linear-gradient(90deg, #0D9488 0%, rgba(13,148,136,0.15) 100%)" }}
              />

              {/* Number */}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.15 }}
                className="text-accent text-[11px] font-body tracking-[0.2em] block mb-8 relative z-10"
              >
                {item.number}
              </motion.span>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="font-display font-semibold text-black text-xl tracking-tight leading-snug mb-4 relative z-10"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.38 + i * 0.15 }}
                variants={{ hovered: { color: "rgba(0,0,0,0.6)" } }}
                style={{ color: "rgba(0,0,0,0.45)" }}
                className="text-sm leading-relaxed font-body relative z-10 transition-colors duration-300"
              >
                {item.description}
              </motion.p>

              {/* Arrow */}
              <motion.span
                variants={{ hovered: { x: 0, opacity: 1 } }}
                initial={{ x: -8, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-8 right-8 md:bottom-10 md:right-10 text-accent text-base font-body z-10"
              >
                →
              </motion.span>

              {/* Bottom gradient accent line */}
              <motion.div
                variants={{ hovered: { scaleX: 1, opacity: 1 } }}
                initial={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 h-[2px] origin-left pointer-events-none"
                style={{ background: "linear-gradient(90deg, #0D9488 0%, rgba(13,148,136,0.2) 100%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}