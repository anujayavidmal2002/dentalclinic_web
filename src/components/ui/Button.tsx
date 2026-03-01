import Link from "next/link";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-cta hover:shadow-lg",
        secondary:
          "bg-surface-100 text-surface-900 hover:bg-surface-200 border border-surface-200",
        outline:
          "border-2 border-brand-600 text-brand-600 hover:bg-brand-50",
        ghost:
          "text-brand-600 hover:bg-brand-50",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
        xl: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asLink?: boolean;
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant,
  size,
  asLink,
  href,
  children,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  const buttonClass = cn(
    buttonVariants({ variant, size }),
    fullWidth && "w-full",
    className
  );

  if (asLink && href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
