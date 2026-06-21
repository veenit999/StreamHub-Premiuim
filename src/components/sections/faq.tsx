"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";

export function FAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0].id);

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-5">
      <div className="max-w-[720px] mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight">
            Frequently asked
          </h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === f.id;
            return (
              <Reveal key={f.id} delay={i * 0.05}>
                <div className="rounded-2xl border border-[var(--border-subtle)] bg-elevated overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] sm:text-[17px] font-medium tracking-tight">
                      {f.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-secondary)]"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 text-[15px] text-secondary leading-relaxed">
                          {f.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
