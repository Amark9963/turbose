"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  { name: "SaaS & Technology", description: "AI tooling, workflow automation, and customer intelligence for software companies." },
  { name: "Operations & Logistics", description: "Process automation, real-time analytics, and intelligent routing systems." },
  { name: "Finance & FinTech", description: "AI-assisted reporting, decision support, and compliance-aware automation." },
  { name: "Healthcare", description: "Knowledge infrastructure, document intelligence, and operational AI for care teams." },
  { name: "Professional Services", description: "AI augmentation for consulting, legal, and advisory workflows." },
  { name: "Enterprise & Corporate", description: "Cross-functional AI strategy, internal tooling, and productivity platforms." },
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#F7F7F6] py-24 md:py-40 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Sectors</p>
            </div>
            <h2 className="font-display font-bold text-black tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Industries
            </h2>
            <p className="text-black/40 text-sm leading-relaxed font-body max-w-xs">
              Delivering AI impact across sectors with operational complexity and data-driven decision needs.
            </p>
          </motion.div>

          <div className="space-y-0">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09 }}
                className="group flex items-start gap-5 border-b border-black/[0.07] py-6 md:py-8 hover:border-accent/20 transition-colors duration-300"
              >
                <span className="font-body text-[11px] text-black/20 tracking-widest pt-1 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display font-semibold text-black text-lg tracking-tight mb-1.5 group-hover:text-accent transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-black/40 text-sm leading-relaxed font-body">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}