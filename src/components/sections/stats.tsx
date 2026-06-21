"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { label: "Active subscribers", value: 42000, suffix: "+" },
  { label: "Services available", value: 7, suffix: "" },
  { label: "Average activation time", value: 12, suffix: " min" },
  { label: "Support rating", value: 4.9, suffix: "/5", decimals: 1 },
];

export function Stats() {
  return (
    <section className="relative py-20 sm:py-28 px-5 border-y border-[var(--border-subtle)]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
            <p className="mt-2 text-[13px] sm:text-sm text-secondary">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix,
  decimals,
}: {
  value: number;
  suffix: string;
  decimals: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <p ref={ref} className="text-[32px] sm:text-[42px] font-semibold tracking-tight">
      {display.toFixed(decimals)}
      {suffix}
    </p>
  );
}
