export type ProjectId = 
  | "vacas-locas" 
  | "demoPilates" 
  | "tienda" 
  | "cinemark-app" 
  | "finanzas";

export type SectionId = "profile" | "projects-hub" | ProjectId;

export interface ProjectTheme {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  border: string;
  bgGradient: string;
  badgeBg: string;
  badgeText: string;
  tag: string;
}

export interface DeepTechnicalData {
  architecture: string;
  algorithmsAndConcurrency: string;
  databaseAndTelemetry: string;
  securityAndPerformance: string;
}

export interface ProjectData {
  id: ProjectId;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  status: "Producción" | "Deploy Live" | "Enterprise" | "Infraestructura";
  liveUrl?: string;
  githubUrl?: string;
  techStack: {
    name: string;
    category: "frontend" | "backend" | "database" | "mobile" | "infra";
  }[];
  overview: string;
  whatItDoes: string;
  solutionProvided: string;
  deepTechnicalData: DeepTechnicalData;
  challenges: string[];
  keyModules: {
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  theme: ProjectTheme;
}

export interface SkillItem {
  name: string;
  level: "Avanzado" | "Experto" | "Dominio";
  iconName: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  hours?: number;
  badge: string;
  topics: string[];
  description: string;
}
