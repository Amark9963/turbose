"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import BracketDecor from "@/components/BracketDecor";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We audit your operations, identify friction points, and map AI opportunities with measurable business impact.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "We define a prioritized AI roadmap — scoped, costed, and aligned with your objectives and technical environment.",
  },
  {
    number: "03",
    title: "Build",
    description: "Our team engineers production-ready AI systems — assistants, pipelines, dashboards, and automations built to last.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Full deployment, stack integration, team onboarding, and ongoing performance monitoring.",
  },
];

function StepRow({ step, index, sectionInView }: {
  step: typeof steps[0];
  index: number;
  sectionInView: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-[28px_64px_1fr] md:grid-cols-[28px_120px_1fr] lg:grid-cols-[28px_180px_1fr] items-start border-b border-black/[0.07] py-8 md:py-10 hover:border-accent/30 transition-colors duration-500"
    >
      {/* Timeline dot column */}
      <div className="flex justify-center pt-[14px] md:pt-[18px]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 + index * 0.13, type: "spring", stiffness: 280, damping: 20 }}
          className="w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent transition-colors duration-500 shrink-0"
        />
      </div>

      {/* Large display number */}
      <div className="flex items-start">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.13 }}
          className="font-display font-bold transition-colors duration-500 group-hover:text-accent/25"
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            lineHeight: 1,
            color: inView ? "rgba(0,0,0,0.13)" : "rgba(0,0,0,0.05)",
          }}
        >
          {step.number}
        </motion.span>
      </div>

      {/* Content */}
      <div className="pt-1 md:pt-2">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 + index * 0.13, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-black text-2xl md:text-3xl tracking-tight mb-3"
        >
          {step.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.28 + index * 0.13, ease: [0.22, 1, 0.36, 1] }}
          className="text-black/45 text-sm leading-relaxed font-body max-w-xl"
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function HowWeWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-we-work" ref={ref} className="relative bg-[#F7F7F6] py-24 md:py-40 overflow-hidden">
      <BracketDecor corner="top-left" inView={inView} delay={0.3} />
      <BracketDecor corner="bottom-right" inView={inView} delay={0.5} />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block w-8 h-[1px] bg-accent origin-left"
            />
            <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Our Process</p>
          </div>
          <h2 className="font-display font-bold text-black tracking-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            How We Work
          </h2>
        </motion.div>

        {/* Steps with vertical timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[13px] top-0 bottom-0 w-[1px] bg-black/[0.07]">
            <motion.div
              className="w-full bg-accent/50 origin-top"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{ height: "100%" }}
            />
          </div>

          {steps.map((step, i) => (
            <StepRow key={step.number} step={step} index={i} sectionInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}