export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "frontend" | "backend" | "fullstack" | "other";
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
}

export interface Experience {
  id: string;
  yearRange: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  tags: string[];
  isCurrent?: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Stat {
  val: number;
  label: string;
}
