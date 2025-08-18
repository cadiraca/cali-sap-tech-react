export type Socials = {
  github?: string;
  linkedin?: string;
};

export type Founder = {
  name: string;
  role: string;
  avatarUrl: string;
  socials?: Socials;
};

export type PastEvent = {
  title: string;
  /** ISO date string e.g., 2025-07-31 */
  date: string;
  location: string;
  type: string; // e.g., "In-person talk"
};
