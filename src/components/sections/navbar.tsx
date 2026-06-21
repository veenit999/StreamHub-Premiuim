"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Plans", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-[1200px] px-5 lg:px-8 transition-all duration-500 ${
          scrolled ? "max-w-[1100px]" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled ? "glass px-5 py-2.5 shadow-lg" : "px-2 py-1"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 text-[17px] font-semibold tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-apple-blue text-white text-xs font-bold">
              S
            </span>
            StreamHub
            <span className="font-normal text-secondary">Premium</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-secondary hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex h-9 w-9 items-center justify-center rounded-full text-secondary hover:bg-[var(--border-subtle)] transition-colors"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Button size="sm" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Browse Plans
            </Button>
          </div>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden glass mt-2 rounded-3xl overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-[15px] font-medium text-secondary hover:bg-[var(--border-subtle)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-secondary">Appearance</span>
                  <button
                    onClick={toggleTheme}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--border-subtle)]"
                  >
                    {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
                  </button>
                </div>
                <Button className="mt-2 w-full" onClick={() => setOpen(false)}>
                  Browse Plans
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
