/**
 * Minimal className merge helper.
 * Filters falsy values and joins class strings.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
