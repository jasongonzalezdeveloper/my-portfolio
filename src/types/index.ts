export interface NavLink {
  labelKey: string;
  href: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  via?: string;
  role: string;
  startDate: string;
  endDate: string;
  note?: string;
  bulletKeys: string[];
  techStack: string[];
  url?: string;
}

export interface ProjectItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
  isInProduction?: boolean;
  isPlaceholder?: boolean;
  isUnderConstruction?: boolean;
  isPoc?: boolean;
}

export interface SkillCategory {
  id: string;
  labelKey: string;
  skills: string[];
}

export interface LearningItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export type SupportedLocale = "en" | "es";

export interface LanguageContextValue {
  locale: SupportedLocale;
  toggleLocale: () => void;
}
