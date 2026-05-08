"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  { question: "What types of businesses do you work with?", answer: "We work with businesses of all sizes — from growth-stage startups to established enterprises. Our engagements are most impactful for organizations with operational complexity, large volumes of data, or repetitive workflows ready to be automated or augmented with AI." },
  { question: "How long does a typical project take?", answer: "A focused automation or AI assistant build typically takes 3–6 weeks. Larger implementations involving custom model pipelines, knowledge infrastructure, or multi-system integrations range from 6–16 weeks. We provide a clear timeline estimate during the discovery phase." },
  { question: "Who owns the code and IP after delivery?", answer: "You do — entirely. Every system, tool, and codebase we build for you is transferred in full at delivery. There are no licensing fees, no vendor lock-in, and no dependency on us to keep your systems running." },
  { question: "Do you offer support after deployment?", answer: "Yes. We offer post-deployment support and maintenance engagements for all projects. This includes performance monitoring, model updates, integration support, and ongoing improvements as your business needs evolve." },
  { question: "How do you handle data security and confidentiality?", answer: "All client data and project details are treated with strict confidentiality. We operate under non-disclosure agreements and follow security best practices throughout — including secure handling of API keys, access credentials, and sensitive business data." },
  { question: "Where are you based and do you work internationally?", answer: "We are headquartered in Penang, Malaysia, and work with clients across Asia and internationally. All engagements are conducted remotely with structured communication and delivery milestones." },
  { question: "How do we get started?", answer: "Reach out via email at amar@turbose.com with a brief description of your challenge or goal. We'll schedule an initial discovery call to understand your needs and outline a proposed approach — at no cost or commitment." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="grain bg-[#0A0A0A] py-24 md:py-40 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[360px_1fr] gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 self-start"
          >
            <div className="flex items-center gap-3 mb-5">
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Questions</p>
            </div>
            <h2 className="font-display font-bold text-white tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
              Frequently<br />Asked
            </h2>
            <p className="text-white/30 text-sm leading-relaxed font-body">
              Everything you need to know before starting an engagement with us.
            </p>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
                className="border-b border-white/[0.06]"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between py-6 md:py-7 text-left group gap-4"
                >
                  <span className={`font-body text-sm leading-relaxed transition-colors duration-200 ${open === i ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`text-lg shrink-0 mt-0.5 transition-colors duration-200 ${open === i ? "text-accent" : "text-white/20 group-hover:text-white/40"}`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/35 text-sm leading-relaxed font-body pb-6 md:pb-7 pr-4 md:pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}