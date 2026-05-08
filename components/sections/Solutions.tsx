"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    number: "01",
    title: "AI Systems Engineering",
    description: "We architect and deploy production-grade AI systems — autonomous agents, multi-model pipelines, and intelligent platforms built for enterprise scale.",
    tags: ["Autonomous Agents", "Multi-Model Pipelines", "LLM Integration"],
  },
  {
    number: "02",
    title: "Intelligent Automation",
    description: "We eliminate operational overhead by engineering LLM and computer vision-driven automation across enterprise workflows, CRMs, and web platforms.",
    tags: ["Browser Automation", "Computer Vision", "CRM Automation"],
  },
  {
    number: "03",
    title: "Enterprise Knowledge Infrastructure",
    description: "RAG-powered knowledge systems that give organizations structured, queryable access to institutional knowledge — accurate, grounded, and always current.",
    tags: ["RAG", "Semantic Search", "Vector Databases", "Embeddings"],
  },
  {
    number: "04",
    title: "Decision Intelligence",
    description: "AI-assisted analytics platforms that transform complex operational data into clear executive insights and forecast-ready reporting.",
    tags: ["Analytics Dashboards", "AI Reporting", "Business Intelligence"],
  },
  {
    number: "05",
    title: "Conversational & Voice AI",
    description: "Enterprise-grade AI assistants, voice interfaces, and meeting intelligence systems engineered for reliability, context-awareness, and scale.",
    tags: ["Voice AI", "Meeting Intelligence", "AI Assistants"],
  },
  {
    number: "06",
    title: "Platform Integration & Deployment",
    description: "From proof-of-concept to production — API orchestration, cloud infrastructure, and full-stack integration across your existing technology ecosystem.",
    tags: ["API Integration", "AWS", "Cloud Deployment", "DevOps"],
  },
];

export default function Solutions() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" ref={ref} className="grain bg-[#0A0A0A] py-24 md:py-40 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20 pb-8 md:pb-12 border-b border-white/[0.06]"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Capabilities</p>
            </div>
            <h2 className="font-display font-bold text-white tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              Our Solutions
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-sm leading-relaxed font-body">
            A full-spectrum AI practice built for businesses that demand more than off-the-shelf tools.
          </p>
        </motion.div>

        <div className="space-y-0">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
              onClick={() => setActive(active === i ? null : i)}
              className="group border-b border-white/[0.06] cursor-pointer"
            >
              <div className="py-6 md:py-8 flex items-start gap-5 md:gap-8">
                <span className={`font-body text-[11px] tracking-[0.2em] transition-colors duration-300 pt-1 w-8 shrink-0 ${active === i ? "text-accent" : "text-white/20"}`}>
                  {solution.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-6 mb-0">
                    <h3 className={`font-display font-semibold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${active === i ? "text-white" : "text-white/70"}`}>
                      {solution.title}
                    </h3>
                    <motion.span
                      animate={{ rotate: active === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-xl shrink-0 transition-colors duration-300 ${active === i ? "text-accent" : "text-white/20"}`}
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2">
                          <p className="text-white/40 text-sm leading-relaxed font-body mb-4 max-w-2xl">
                            {solution.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {solution.tags.map((tag) => (
                              <span key={tag} className="text-accent/60 text-[11px] border border-accent/20 px-3 py-1 tracking-wide font-body">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}