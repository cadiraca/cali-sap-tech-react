import { cn } from "@/lib/cn";

/**
 * Avatar
 * - Displays a circular image with a border.
 * - Falls back to initials if the image fails to load.
 */
export default function Avatar({
  name,
  src,
  size = 64,
  className,
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0]!.toUpperCase())
    .slice(0, 2)
    .join("");

  const fallback = `https://placehold.co/${size}x${size}/003049/F8F9FA?text=${encodeURIComponent(
    initials
  )}`;

  return (
    <img
      src={src || fallback}
      alt={name}
      width={size}
      height={size}
      className={cn(
        "rounded-full border-4 border-chontaduro-gold object-cover",
        className
      )}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.src !== fallback) target.src = fallback;
      }}
    />
  );
}
