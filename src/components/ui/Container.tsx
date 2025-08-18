import { ReactNode } from "react";

/**
 * Container
 * - Centers content and provides consistent horizontal padding.
 * - Keeps layout width consistent across sections.
 */
export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className ?? ""}`.trim()}>{children}</div>;
}
