"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { number: "01", title: "Precision over hype", description: "We build what works, not what sounds impressive. Every solution is scoped to deliver measurable business value." },
  { number: "02", title: "Enterprise-grade by default", description: "Production-ready from day one. We engineer for reliability, security, and scale — not just demos." },
  { number: "03", title: "End-to-end ownership", description: "From first discovery call to post-deployment support, we own the outcome alongside our clients." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="grain bg-[#0A0A0A] py-24 md:py-40 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-l-2 border-accent pl-5 sm:pl-8 mb-14 md:mb-24 max-w-3xl"
        >
          <p className="font-display font-semibold text-white/80 leading-tight tracking-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}>
            &ldquo;Most AI projects fail in the gap between prototype and production. We exist to close that gap — permanently.&rdquo;
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Who We Are</p>
            </div>
            <h2 className="font-display font-bold text-white tracking-tight mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}>
              About Turbose<br />AI Labs
            </h2>
            <div className="space-y-5">
              <p className="text-white/45 text-[15px] leading-relaxed font-body">
                Turbose AI Labs Enterprise is an AI consulting and implementation firm dedicated to helping
                businesses move from AI curiosity to AI capability. We combine deep technical expertise
                with a practitioner&apos;s understanding of real-world business operations.
              </p>
              <p className="text-white/45 text-[15px] leading-relaxed font-body">
                Based in Penang, Malaysia, we work with organizations across Asia and beyond — delivering
                intelligent systems that solve real problems, reduce costs, and create competitive advantage.
              </p>
              <p className="text-white/45 text-[15px] leading-relaxed font-body">
                Our practice is built on production experience — we build and operate the same
                class of AI systems we deliver to clients, which means every engagement is
                grounded in what actually works at scale.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Our Principles</p>
            </div>
            <div className="space-y-0">
              {values.map((value, i) => (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="group border-b border-white/[0.06] py-6 md:py-8 hover:border-accent/20 transition-colors duration-300"
                >
                  <div className="flex gap-5 items-start">
                    <span className="text-accent text-[11px] font-body tracking-widest mt-1 shrink-0">{value.number}</span>
                    <div>
                      <h3 className="font-display font-semibold text-white/80 group-hover:text-white text-lg tracking-tight mb-2 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-white/35 text-sm leading-relaxed font-body">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}