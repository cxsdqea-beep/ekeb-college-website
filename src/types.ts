export type Language = 'ru' | 'kk' | 'en';

export interface Specialty {
  id: string;
  code: string;
  title: Record<Language, string>;
  category: 'economics' | 'law' | 'it' | 'sport';
  duration: Record<Language, string>;
  qualification: Record<Language, string>;
  description: Record<Language, string>;
  isDualEducation: boolean;
  imagePlaceholder: string;
  imageUrl: string;
  careerProspects: Record<Language, string[]>;
  baseCurriculum: Record<Language, string[]>;
}

export interface NewsArticle {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  date: string;
  readTime: string;
  summary: Record<Language, string>;
  content: Record<Language, string>;
  imagePlaceholder: string;
  imageUrl: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: Record<Language, string>;
  year: Record<Language, string> | string;
  specialty: Record<Language, string>;
  quote: Record<Language, string>;
  rating: number;
  avatarPlaceholder?: string;
  avatarUrl: string;
}

export interface StepItem {
  number: number;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  iconName: string;
  actionHint: Record<Language, string>;
}

export interface AdvantageItem {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  stat?: string;
  badge?: Record<Language, string>;
}

export interface TourLocation {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  imagePlaceholder: string;
  imageUrl: string;
  features: Record<Language, string[]>;
}
