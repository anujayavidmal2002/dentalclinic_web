import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success";
  className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
  const variantClasses = {
    primary: "bg-brand-100 text-brand-900",
    secondary: "bg-surface-100 text-surface-900",
    accent: "bg-accent-300 text-accent-900",
    success: "bg-green-100 text-green-900",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
