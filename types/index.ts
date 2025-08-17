export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'parent' | 'teacher';
  avatar?: string;
  createdAt: Date;
  preferences?: {
    notifications: boolean;
    language: 'fr' | 'mg';
  };
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  slug: string;
  duration: string;
  level: string;
  prerequisites: string[];
  institutions: Institution[];
  cost: {
    min: number;
    max: number;
    currency: 'MGA';
  };
  sectors: string[];
  imageUrl: string;
}

export interface Metier {
  id: string;
  title: string;
  description: string;
  slug: string;
  missions: string[];
  skills: string[];
  salary: {
    min: number;
    max: number;
    currency: 'MGA';
  };
  sectors: string[];
  formations: Formation[];
  imageUrl: string;
  outlook: 'excellent' | 'good' | 'moderate' | 'limited';
}

export interface Institution {
  id: string;
  name: string;
  location: string;
  type: 'university' | 'institute' | 'school';
  website?: string;
}

export interface TestResult {
  id: string;
  userId: string;
  testType: 'questionnaire' | 'holland';
  results: {
    [key: string]: number;
  };
  recommendations: {
    metiers: Metier[];
    formations: Formation[];
  };
  completedAt: Date;
}

export interface Question {
  id: string;
  text: string;
  type: 'multiple-choice' | 'scale' | 'ranking';
  options?: string[];
  category: string;
}

export type HollandCode = 'R' | 'I' | 'A' | 'S' | 'E' | 'C';

export interface HollandResult {
  R: number; // Realistic
  I: number; // Investigative
  A: number; // Artistic
  S: number; // Social
  E: number; // Enterprising
  C: number; // Conventional
}