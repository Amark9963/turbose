"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "AI Consulting & Strategy",
    description:
      "We work with leadership teams to identify high-impact AI opportunities, assess readiness, and define a clear roadmap for intelligent transformation.",
  },
  {
    number: "02",
    title: "AI Implementation",
    description:
      "End-to-end deployment of AI capabilities into your existing systems — from model selection and fine-tuning to integration and go-live.",
  },
  {
    number: "03",
    title: "Custom AI Tool Development",
    description:
      "We design and engineer bespoke AI tools tailored to your operational needs — replacing off-the-shelf software with precision-built solutions.",
  },
  {
    number: "04",
    title: "Workflow & Process Automation",
    description:
      "We eliminate manual overhead by engineering intelligent automation pipelines that operate across your entire business stack.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-xl">
            Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black p-10 group hover:bg-white/5 transition-colors duration-300"
            >
              <span className="text-white/20 text-sm font-mono tracking-widest block mb-6">
                {service.number}
              </span>
              <h3 className="text-white text-xl font-semibold tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}