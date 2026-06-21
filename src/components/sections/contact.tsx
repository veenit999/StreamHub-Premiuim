"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "Netflix",
  "Amazon Prime Video",
  "Spotify Premium",
  "YouTube Premium",
  "Disney+ Hotstar",
  "ChatGPT Plus",
  "Microsoft 365",
  "Something else",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", service: serviceOptions[0] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only: no backend wired up yet. Hook this up to your form handler / API route.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 bg-[var(--bg-secondary)]">
      <div className="max-w-[640px] mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-[36px] sm:text-[48px] font-semibold tracking-tight">
            Get in touch
          </h2>
          <p className="mt-4 text-[17px] text-secondary">
            Tell us what you need — we&apos;ll reply within minutes.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-[28px] bg-elevated border border-[var(--border-subtle)] p-7 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-apple-blue/10 text-apple-blue mb-5">
                  <Check size={28} />
                </span>
                <h3 className="text-xl font-semibold tracking-tight">Message sent</h3>
                <p className="mt-2 text-secondary text-sm max-w-[320px]">
                  Thanks, {form.name.split(" ")[0] || "there"} — our team will reach out on WhatsApp shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="form-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="form-input"
                  />
                </Field>
                <Field label="WhatsApp number">
                  <input
                    required
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="form-input"
                  />
                </Field>
                <Field label="Service required">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="form-input appearance-none"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Button type="submit" size="lg" className="w-full mt-2">
                  <Send size={16} /> Send message
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-medium text-secondary mb-2">{label}</span>
      {children}
    </label>
  );
}
