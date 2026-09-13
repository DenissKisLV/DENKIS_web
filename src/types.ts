export type DisciplineId = 'water' | 'road' | 'electrical';

export interface Discipline {
  id: DisciplineId;
  title: string;
  tagline: string;
  color: {
    primary: string;
    light: string;
    border: string;
    badge: string;
    text: string;
  };
  iconName: string;
  description: string;
  coreServices: string[];
  designStandards: string[];
  deliverables: string[];
}

export interface ProjectWork {
  id: string;
  title: string;
  subtitle: string;
  disciplineId: DisciplineId;
  disciplineName: string;
  imageUrl: string;
  year: string;
  location: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  softwareUsed: string[];
}

export interface PracticeInfo {
  companyName: string;
  legalForm: string;
  motto: string;
  founder: string;
  email: string;
  phone: string;
  location: string;
  serviceRadius: string;
  experienceYears: number;
  certifications: string[];
}
