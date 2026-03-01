import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-white rounded-xl p-6 shadow-card",
        hover && "hover:shadow-card-hover transition-shadow duration-300 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
