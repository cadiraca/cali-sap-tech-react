import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Button
 * - Minimal variant system for consistent styling.
 * - Server component compatible (no client state).
 */
type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center font-bold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-chontaduro-gold disabled:opacity-60 disabled:cursor-not-allowed";
  const variants: Record<Variant, string> = {
    primary: "bg-chontaduro-gold text-charcoal hover:bg-opacity-90",
    secondary: "bg-charcoal text-white hover:bg-pacifico-blue",
    ghost: "bg-transparent text-charcoal hover:bg-warm-white border border-charcoal/10",
  };
  const sizes: Record<Size, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
