"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";

const floatingServices = [
  { name: "Netflix", color: "#E50914", x: -480, y: -200, rot: -10, delay: 0 },
  { name: "Spotify", color: "#1DB954", x: 460, y: -160, rot: 8, delay: 0.1 },
  { name: "Disney+", color: "#0F1D8C", x: -430, y: 220, rot: 6, delay: 0.2 },
  { name: "ChatGPT", color: "#74AA9C", x: 470, y: 240, rot: -6, delay: 0.3 },
  { name: "Microsoft 365", color: "#0078D4", x: -120, y: -340, rot: -3, delay: 0.4 },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const convergeProgress = useTransform<number, number>(scrollYProgress, [0, 0.7], [0, 1]);
  const fadeOut = useTransform<number, number>(scrollYProgress, [0, 0.6], [1, 0]);
  const cardOpacity = useTransform<number, number>(scrollYProgress, [0, 0.6], [0.55, 0]);
  const headlineY = useTransform<number, number>(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-5"
    >
      {/* Ambient gradient backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,113,227,0.18), transparent 60%)",
        }}
      />

      {/* Floating → converging glass cards — desktop/tablet only, avoids clutter on small screens */}
      <div className="hidden sm:flex absolute inset-0 -z-10 items-center justify-center" aria-hidden>
        {floatingServices.map((s, i) => (
          <FloatingCard
            key={s.name}
            service={s}
            converge={convergeProgress}
            opacity={cardOpacity}
            index={i}
          />
        ))}
      </div>

      <motion.div
        style={{ y: headlineY, opacity: fadeOut }}
        className="relative z-10 max-w-[920px] mx-auto text-center pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-apple-blue text-[15px] font-semibold tracking-wide mb-5"
        >
          StreamHub Premium
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-[44px] leading-[1.05] sm:text-[64px] lg:text-[84px] font-semibold tracking-tight"
        >
          All your premium
          <br />
          subscriptions.
          <br />
          <span className="text-secondary">One place.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-balance mt-7 text-[18px] sm:text-[21px] text-secondary max-w-[620px] mx-auto leading-relaxed"
        >
          Entertainment, music, learning and productivity — at prices that
          actually make sense.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Browse Plans
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary"
      >
        <span className="text-xs tracking-wide">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-current opacity-40"
        />
      </motion.div>
    </section>
  );
}

function FloatingCard({
  service,
  converge,
  opacity,
  index,
}: {
  service: { name: string; color: string; x: number; y: number; rot: number; delay: number };
  converge: MotionValue<number>;
  opacity: MotionValue<number>;
  index: number;
}) {
  const x = useTransform(converge, (v) => `${service.x * (1 - v)}px`);
  const y = useTransform(converge, (v) => `${service.y * (1 - v) + index * 2}px`);
  const rotate = useTransform<number, number>(converge, [0, 1], [service.rot, 0]);
  const scale = useTransform<number, number>(converge, [0, 1], [1, 0.94]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, zIndex: 10 - index }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 + service.delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
        className="glass flex h-[120px] w-[160px] sm:h-[140px] sm:w-[190px] flex-col justify-between rounded-2xl p-4 shadow-2xl"
      >
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
          style={{ backgroundColor: service.color }}
        >
          {service.name[0]}
        </span>
        <span className="text-[13px] font-medium text-[var(--text-primary)]">
          {service.name}
        </span>
      </motion.div>
    </motion.div>
  );
}
