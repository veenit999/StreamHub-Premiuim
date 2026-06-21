"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full font-medium",
          "transition-all duration-300 ease-out will-change-transform",
          "active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-[15px]",
          size === "lg" && "px-8 py-4 text-base",
          variant === "primary" &&
            "bg-apple-blue text-white hover:bg-apple-blue-hover hover:shadow-[0_8px_30px_rgba(0,113,227,0.35)] hover:-translate-y-0.5",
          variant === "secondary" &&
            "bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:-translate-y-0.5 hover:shadow-lg",
          variant === "ghost" &&
            "text-apple-blue hover:gap-3",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
