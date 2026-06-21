import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-[28px] transition-all duration-500 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
