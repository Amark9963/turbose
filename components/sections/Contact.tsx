"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.08] text-white text-sm font-body placeholder-white/20 px-4 py-3.5 focus:outline-none focus:border-accent/50 transition-colors duration-200";

  return (
    <section id="contact" ref={ref} className="grain relative bg-[#0A0A0A] py-24 md:py-40 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-accent/[0.05] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block w-8 h-[1px] bg-accent origin-left"
              />
              <p className="text-accent text-[11px] tracking-[0.3em] uppercase font-body">Get In Touch</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-white tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
            >
              Let&apos;s build
              <br />
              something that
              <br />
              <span className="text-accent">matters.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/35 text-[15px] leading-relaxed font-body mb-10 max-w-md"
            >
              Tell us about your challenge. We&apos;ll outline an approach, scope the work,
              and get back to you within 24 hours — no commitment required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-4 text-white/25 text-xs font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                Responds within 24 hours
              </div>
              <div className="flex items-center gap-4 text-white/25 text-xs font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                No commitment required
              </div>
              <div className="flex items-center gap-4 text-white/25 text-xs font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                Global engagements welcomed
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border border-white/[0.07] bg-white/[0.02] p-7 md:p-10 text-center space-y-4"
              >
                <span className="w-3 h-3 rounded-full bg-accent inline-block" />
                <h3 className="font-display text-white text-2xl font-semibold tracking-tight">Message received.</h3>
                <p className="text-white/35 text-sm font-body leading-relaxed">
                  We&apos;ll review your enquiry and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/[0.07] bg-white/[0.02] p-6 md:p-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/30 text-[11px] tracking-[0.2em] uppercase font-body mb-2">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-white/30 text-[11px] tracking-[0.2em] uppercase font-body mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/30 text-[11px] tracking-[0.2em] uppercase font-body mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Corp"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-white/30 text-[11px] tracking-[0.2em] uppercase font-body mb-2">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe the challenge you're working on..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400/80 text-xs font-body">Something went wrong. Try emailing us directly at amar@turbose.com</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-8 py-4 bg-accent text-white text-sm font-medium tracking-wider font-body hover:bg-accent/90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}