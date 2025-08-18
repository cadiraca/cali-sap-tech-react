import { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Badge
 * - Small inline label used for statuses like "Past Event".
 */
type Variant = "default" | "gold" | "outline";

export default function Badge({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const base =
    "inline-block px-3 py-1 rounded-full text-xs font-inter uppercase tracking-wide";
  const variants: Record<Variant, string> = {
    default: "bg-charcoal text-white",
    gold: "bg-chontaduro-gold text-charcoal",
    outline: "bg-white/10 border border-white/20 text-chontaduro-gold",
  };
  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}
