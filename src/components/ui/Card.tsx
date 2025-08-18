import { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Card
 * - Simple surface container with shadow and rounded corners.
 */
export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
