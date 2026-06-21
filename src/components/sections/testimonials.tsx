"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 px-5 bg-[var(--bg-secondary)]">
      <div className="max-w-[760px] mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight">
            Loved by subscribers
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative rounded-[28px] bg-elevated border border-[var(--border-subtle)] px-8 py-12 sm:px-14 sm:py-14 min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < t.rating ? "fill-apple-blue text-apple-blue" : "text-[var(--border-subtle)]"}
                    />
                  ))}
                </div>
                <p className="text-[19px] sm:text-[22px] leading-relaxed font-medium tracking-tight text-balance">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-apple-blue text-white text-sm font-semibold">
                    {t.initials}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-secondary">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((tm, i) => (
                <button
                  key={tm.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-apple-blue" : "w-2 bg-[var(--border-subtle)]"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
