import { Founder } from "@/types";

/**
 * Simple helper to build a placeholder avatar using initials.
 */
function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0]!.toUpperCase())
    .slice(0, 2)
    .join("");
}

function placeholderAvatar(name: string) {
  const initials = getInitials(name);
  return `https://placehold.co/128x128/003049/F8F9FA?text=${encodeURIComponent(
    initials
  )}`;
}

const names = [
  "Carlos Diego Ramírez",
  "Jhon Freddy Montaño",
  "Carlos Alexander Gonzalez",
  "Carlos Andres Gonzalez",
  "Yamit Alejandro Huertas",
  "Carlos Eduardo Cortes",
  "Mateo Cañas",
];

export const founders: Founder[] = names.map((name) => ({
  name,
  role: "Founder",
  avatarUrl: placeholderAvatar(name),
}));
