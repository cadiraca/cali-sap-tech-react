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

export type ProjectStatus = 'active' | 'alpha' | 'beta' | 'coming-soon';

export type ProjectCategory = 'ai-marketplace' | 'development-tool' | 'integration' | 'analytics';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  features: string[];
  technologies: string[];
  links: {
    website?: string;
    demo?: string;
    documentation?: string;
    earlyAccess?: string;
  };
  team?: string[];
  image?: string;
};

export type CommunityTopic = {
  id: string;
  /** ISO date string e.g., 2026-04-07 */
  date: string;
  title: string;
  /** HTML content for creative vibe coding presentations */
  content: string;
  author: string;
  tags?: string[];
};
