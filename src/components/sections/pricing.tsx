"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { services, categories } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [active, setActive] = useState<typeof categories[number]>("All");

  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-12">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-[17px] text-secondary">
            Choose a category and find the plan that fits.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                active === c
                  ? "bg-apple-blue text-white shadow-[0_4px_20px_rgba(0,113,227,0.35)]"
                  : "bg-[var(--bg-secondary)] text-secondary hover:text-[var(--text-primary)]"
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <PricingCard service={s} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ service }: { service: (typeof services)[number] }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <GlassCard className="group h-full p-7 hover:shadow-2xl">
        <div className="flex items-center justify-between">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{ backgroundColor: service.accent }}
          >
            {service.initial}
          </span>
          <span className="text-xs font-medium text-secondary uppercase tracking-wide">
            {service.category}
          </span>
        </div>

        <h3 className="mt-5 text-[19px] font-semibold tracking-tight">{service.name}</h3>

        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="text-[32px] font-semibold tracking-tight">₹{service.price}</span>
          <span className="text-sm text-secondary">/{service.period}</span>
        </div>

        {/* Hidden until hover — the "expand" */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-out">
          <ul className="mt-5 space-y-2.5 pt-1">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-secondary">
                <Check size={15} className="mt-0.5 shrink-0 text-apple-blue" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <Button size="sm" className="mt-6 w-full" variant="secondary">
          Choose Plan
        </Button>
      </GlassCard>
    </motion.div>
  );
}
