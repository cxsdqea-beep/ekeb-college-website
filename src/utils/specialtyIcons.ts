import React from 'react';
import { 
  Calculator, 
  Building2, 
  Scale, 
  Code2, 
  Trophy,
  Award,
  Globe,
  HeartHandshake,
  Home,
  Medal,
  Sparkles,
  Briefcase,
  CheckCircle2,
  Server,
  ShieldCheck,
  Binary
} from 'lucide-react';
import { Specialty, NewsArticle } from '../types';

export interface SpecialtyVisualConfig {
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  badgeBorder: string;
  glowColor: string;
  accentText: string;
  watermarkOpacity: string;
}

export const getSpecialtyVisualConfig = (specialtyIdOrCategory: string): SpecialtyVisualConfig => {
  switch (specialtyIdOrCategory) {
    case 'accounting-audit':
    case '04110100':
      return {
        icon: Calculator,
        gradient: 'from-blue-600 via-indigo-600 to-sky-500',
        badgeBorder: 'border-blue-400/40',
        glowColor: 'from-blue-500/25 to-sky-500/10',
        accentText: 'text-sky-300',
        watermarkOpacity: 'text-sky-300/[0.07]',
      };
    case 'procurement-manager':
      return {
        icon: Briefcase,
        gradient: 'from-blue-700 via-sky-700 to-indigo-800',
        badgeBorder: 'border-sky-400/40',
        glowColor: 'from-sky-500/25 to-blue-500/10',
        accentText: 'text-sky-200',
        watermarkOpacity: 'text-sky-200/[0.07]',
      };
    case 'valuation-appraisal':
    case '04120200':
      return {
        icon: Building2,
        gradient: 'from-sky-700 via-blue-800 to-indigo-900',
        badgeBorder: 'border-sky-400/40',
        glowColor: 'from-sky-500/25 to-indigo-600/10',
        accentText: 'text-sky-200',
        watermarkOpacity: 'text-sky-200/[0.07]',
      };
    case 'law-jurisprudence':
    case '04210100':
    case 'law':
      return {
        icon: Scale,
        gradient: 'from-indigo-800 via-blue-900 to-slate-900',
        badgeBorder: 'border-indigo-400/40',
        glowColor: 'from-indigo-500/25 to-blue-600/10',
        accentText: 'text-indigo-200',
        watermarkOpacity: 'text-indigo-200/[0.07]',
      };
    case 'software-development':
    case '06130100':
    case 'it':
      return {
        icon: Code2,
        gradient: 'from-sky-600 via-blue-600 to-cyan-500',
        badgeBorder: 'border-cyan-400/40',
        glowColor: 'from-cyan-500/25 to-blue-500/10',
        accentText: 'text-cyan-200',
        watermarkOpacity: 'text-cyan-200/[0.07]',
      };
    case 'software-testing-qa':
      return {
        icon: CheckCircle2,
        gradient: 'from-emerald-700 via-teal-700 to-cyan-700',
        badgeBorder: 'border-teal-400/40',
        glowColor: 'from-teal-500/25 to-emerald-500/10',
        accentText: 'text-teal-200',
        watermarkOpacity: 'text-teal-200/[0.07]',
      };
    case 'network-administration':
    case '06120100':
      return {
        icon: Server,
        gradient: 'from-blue-800 via-indigo-800 to-slate-900',
        badgeBorder: 'border-blue-400/40',
        glowColor: 'from-blue-500/25 to-indigo-500/10',
        accentText: 'text-blue-200',
        watermarkOpacity: 'text-blue-200/[0.07]',
      };
    case 'information-security':
    case '06120200':
      return {
        icon: ShieldCheck,
        gradient: 'from-slate-900 via-indigo-950 to-blue-900',
        badgeBorder: 'border-amber-400/40',
        glowColor: 'from-amber-500/25 to-indigo-500/10',
        accentText: 'text-amber-200',
        watermarkOpacity: 'text-amber-200/[0.07]',
      };
    default:
      return {
        icon: Award,
        gradient: 'from-blue-600 via-indigo-600 to-sky-600',
        badgeBorder: 'border-blue-400/40',
        glowColor: 'from-blue-500/20 to-sky-500/10',
        accentText: 'text-sky-200',
        watermarkOpacity: 'text-white/[0.06]',
      };
  }
};

export const getNewsVisualConfig = (articleId: string) => {
  switch (articleId) {
    case 'sports-faculty-opening':
      return {
        icon: Trophy,
        gradient: 'from-blue-700 via-indigo-700 to-sky-500',
        glow: 'from-sky-500/20 to-indigo-600/10',
      };
    case 'international-forums':
      return {
        icon: Globe,
        gradient: 'from-blue-800 via-sky-700 to-indigo-600',
        glow: 'from-blue-500/20 to-sky-500/10',
      };
    case 'y-peer-network':
      return {
        icon: HeartHandshake,
        gradient: 'from-indigo-700 via-blue-600 to-sky-400',
        glow: 'from-indigo-500/20 to-blue-400/10',
      };
    case 'student-home-living':
      return {
        icon: Home,
        gradient: 'from-blue-900 via-blue-800 to-sky-600',
        glow: 'from-sky-500/20 to-blue-600/10',
      };
    case 'worldskills-champions':
      return {
        icon: Medal,
        gradient: 'from-blue-700 via-indigo-600 to-cyan-500',
        glow: 'from-cyan-500/20 to-indigo-500/10',
      };
    default:
      return {
        icon: Sparkles,
        gradient: 'from-blue-700 via-indigo-700 to-sky-600',
        glow: 'from-blue-500/20 to-sky-500/10',
      };
  }
};
