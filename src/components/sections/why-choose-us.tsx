"use client";

import { Zap, ShieldCheck, Headset, BadgeCheck, Wallet, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Most orders activate within minutes of payment confirmation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Every transaction is encrypted end to end. We never see your card details.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Real people on WhatsApp and email, any hour of the day.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Accounts",
    description: "Every subscription is checked and confirmed active before it reaches you.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Transparent rates, no hidden fees, no surprise renewals.",
  },
  {
    icon: Rocket,
    title: "Fast Activation",
    description: "A streamlined process gets you from checkout to first login in no time.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 px-5 bg-[var(--bg-secondary)]">
      <div className="max-w-[1200px] mx-auto">
        <Reveal className="max-w-[640px] mx-auto text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight">
            Why choose us
          </h2>
          <p className="mt-4 text-[17px] text-secondary">
            Built around trust, speed, and a price that respects your wallet.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-[24px] bg-elevated border border-[var(--border-subtle)] p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-apple-blue/10">
                  <f.icon size={22} className="text-apple-blue" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[14px] text-secondary leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
