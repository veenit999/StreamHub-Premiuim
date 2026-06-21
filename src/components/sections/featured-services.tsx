"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function FeaturedServices() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight">
            Seven services.
            <br />
            One subscription.
          </h2>
          <p className="mt-4 text-[17px] text-secondary">
            Pick what you need, pay one bill, and let us handle the rest.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const discount = service.originalPrice
    ? Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100)
    : null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full rounded-[28px] border border-[var(--border-subtle)] bg-elevated p-7 overflow-hidden"
    >
      <div
        className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
        style={{ background: service.accent }}
        aria-hidden
      />

      <div className="relative flex items-start justify-between">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg"
          style={{ backgroundColor: service.accent }}
        >
          {service.initial}
        </span>
        {discount && (
          <span className="rounded-full bg-[var(--border-subtle)] px-3 py-1 text-xs font-semibold text-secondary">
            {discount}% off
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-[20px] font-semibold tracking-tight">{service.name}</h3>
      <p className="relative text-xs text-secondary mt-0.5">{service.category}</p>

      <div className="relative mt-4 flex items-baseline gap-2">
        <span className="text-[28px] font-semibold tracking-tight">₹{service.price}</span>
        <span className="text-sm text-secondary">/ {service.period}</span>
        {service.originalPrice && (
          <span className="text-sm text-secondary line-through">₹{service.originalPrice}</span>
        )}
      </div>

      <ul className="relative mt-5 space-y-2.5">
        {service.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[14px] text-secondary">
            <Check size={16} className="mt-0.5 shrink-0 text-apple-blue" />
            {b}
          </li>
        ))}
      </ul>

      <Button className="relative mt-7 w-full" size="sm">
        Buy Now
      </Button>
    </motion.div>
  );
}
