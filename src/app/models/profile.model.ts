export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  profileImage?: string;
  shortBio: string;
  skills: Skills;
  socials: Socials;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  other: string[];
}

export interface Socials {
  github: string;
  linkedin: string;
  twitter?: string;
  portfolioDomain: string;
}
