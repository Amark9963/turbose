"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "ClawdBot",
    description: "A multi-platform personal AI assistant — any OS, any platform, production-ready.",
    tags: ["AI Assistant", "Multi-Platform"],
    href: "https://github.com/Amark9963/clawdbot",
  },
  {
    name: "Automate AI",
    description: "Browser-based workflow automation powered by LLMs and computer vision.",
    tags: ["Automation", "Computer Vision", "LLM"],
    href: "https://github.com/Amark9963/automate-ai",
  },
  {
    name: "ProSmart AI Meeting",
    description: "Meeting intelligence system — makes your meetings accessible and actionable for AI agents.",
    tags: ["Voice AI", "Meeting Intelligence"],
    href: "https://github.com/Amark9963/prosmart-ai-meeting",
  },
  {
    name: "AI Scout Agent",
    description: "Autonomous GPT-powered research agent for startup scouting and market intelligence.",
    tags: ["Autonomous Agent", "Research AI"],
    href: "https://github.com/Amark9963/AI-Scout-Agent",
  },
  {
    name: "Doable",
    description: "Clone and recreate any website as a modern React application in seconds.",
    tags: ["Code Generation", "React"],
    href: "https://github.com/Amark9963/Doable",
  },
  {
    name: "ScoutAgent",
    description: "Open framework for building production-ready AI assistants with multi-channel support.",
    tags: ["AI Framework", "Assistants", "Open Source"],
    href: "https://github.com/Amark9963/scoutagent",
  },
];

export default function Lab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lab" ref={ref} className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-black/30 text-xs tracking-[0.3em] uppercase mb-4">Open Source & Research</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight max-w-sm">
              The Lab
            </h2>
            <p className="text-black/50 text-sm max-w-md leading-relaxed">
              We don&apos;t just consult — we build. A selection of tools and experiments
              from our open research practice.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-10 group hover:bg-black/5 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-black text-lg font-semibold tracking-tight">
                  {project.name}
                </h3>
                <svg
                  className="w-4 h-4 text-black/20 group-hover:text-black/60 transition-colors mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <p className="text-black/50 text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-black/40 text-xs border border-black/10 px-3 py-1 tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Amark9963"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/40 text-sm hover:text-black transition-colors tracking-wide border-b border-black/20 hover:border-black pb-px"
          >
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}