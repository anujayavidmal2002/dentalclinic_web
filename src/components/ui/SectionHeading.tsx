import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        "mb-12",
        className
      )}
    >
      {subtitle && (
        <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-surface-900 mb-4">
        {title}
      </h2>
      {align === "center" && (
        <div className="w-16 h-1 bg-gradient-to-r from-brand-600 to-accent-500 mx-auto mb-6" />
      )}
      {description && (
        <p className="text-lg text-surface-700 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
