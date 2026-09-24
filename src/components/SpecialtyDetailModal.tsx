import React from 'react';
import { 
  X, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  Layers, 
  Sparkles, 
  Building2
} from 'lucide-react';
import { Specialty, Language } from '../types';
import { UI_TRANSLATIONS, COLLEGE_INFO } from '../data/mockData';
import { getSpecialtyVisualConfig } from '../utils/specialtyIcons';

interface SpecialtyDetailModalProps {
  specialty: Specialty | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onApply: (specialty: Specialty) => void;
}

export const SpecialtyDetailModal: React.FC<SpecialtyDetailModalProps> = ({
  specialty,
  isOpen,
  onClose,
  language,
  onApply,
}) => {
  if (!isOpen || !specialty) return null;

  const t = UI_TRANSLATIONS[language];
  const visual = getSpecialtyVisualConfig(specialty.id);
  const SpecialtyIcon = visual.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header banner & badges (No photos) */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden shrink-0">
          <div className={`absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-gradient-to-br ${visual.glowColor} rounded-full blur-2xl pointer-events-none`} />
          <SpecialtyIcon className={`absolute -right-6 -bottom-6 w-36 h-36 ${visual.watermarkOpacity} pointer-events-none -rotate-12`} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-end justify-between gap-4 relative z-10 pt-2">
            <div className="flex items-start gap-4 min-w-0 max-w-full">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${visual.gradient} text-white flex items-center justify-center shadow-lg shadow-blue-950/50 ring-1 ring-white/20 shrink-0`}>
                <SpecialtyIcon className="w-7 h-7 text-white" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs font-mono font-bold bg-white/15 border border-white/20 text-white px-2.5 py-1 rounded-md inline-block mb-2">
                  {language === 'ru' ? 'Код специальности:' : language === 'kk' ? 'Мамандық коды:' : 'Specialty Code:'} {specialty.code}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  {specialty.title[language]}
                </h2>
              </div>
            </div>
            
            {specialty.isDualEducation && (
              <span className="bg-emerald-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm shrink-0">
                <CheckCircle2 className="w-4 h-4" />
                {language === 'ru' ? 'Дуальное обучение' : language === 'kk' ? 'Дуальді оқыту' : 'Dual Education'}
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Key metrics row */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-[#FAF8F5] border border-slate-200/80 text-xs">
            <div>
              <span className="text-slate-600 block">
                {language === 'ru' ? 'Срок обучения:' : language === 'kk' ? 'Оқу мерзімі:' : 'Study Duration:'}
              </span>
              <strong className="text-slate-900 font-bold">{specialty.duration[language]}</strong>
            </div>
            <div>
              <span className="text-slate-600 block">
                {language === 'ru' ? 'Присваиваемая квалификация:' : language === 'kk' ? 'Берілетін біліктілік:' : 'Awarded Qualification:'}
              </span>
              <strong className="text-blue-900 font-bold">{specialty.qualification[language]}</strong>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              {language === 'ru' ? 'О специальности' : language === 'kk' ? 'Мамандық туралы' : 'About the Specialty'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {specialty.description[language]}
            </p>
          </div>

          {/* Dual education details */}
          {specialty.isDualEducation && (
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950">
              <h4 className="font-bold flex items-center gap-2 text-amber-900 mb-1">
                <Sparkles className="w-4 h-4 text-amber-600" />
                {language === 'ru' ? 'Преимущество дуального обучения в EKEB' : language === 'kk' ? 'EKEB-тегі дуальді оқытудың артықшылығы' : 'Dual Education Advantage in EKEB'}
              </h4>
              <p className="leading-relaxed">
                {language === 'ru'
                  ? 'До 40% учебного времени проходит непосредственно на рабочем месте в компаниях-партнерах. Студенты получают практический стаж еще до получения диплома и часто продолжают работу в штате организации.'
                  : language === 'kk'
                  ? 'Оқу уақытының 40%-на дейінгі бөлігі тікелей серіктес компаниялардағы жұмыс орнында өтеді. Студенттер диплом алғанға дейін тәжірибелік еңбек өтілін жинақтап, ұйымның негізгі штатына қабылданады.'
                  : 'Up to 40% of the study curriculum takes place directly on the job in partner companies, providing students with verified work experience before graduation.'}
              </p>
            </div>
          )}

          {/* Curriculum disciplines */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              {language === 'ru' ? 'Ключевые профильные дисциплины' : language === 'kk' ? 'Негізгі бейіндік пәндер' : 'Core Professional Subjects'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {specialty.baseCurriculum[language].map((sub, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Prospects */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              {language === 'ru' ? 'Кем вы сможете работать (Карьерный рост)' : language === 'kk' ? 'Кім болып жұмыс істей аласыз (Мансаптық өсу)' : 'Career Opportunities & Positions'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {specialty.careerProspects[language].map((role, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-semibold">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-600 hidden sm:block">
            {language === 'ru' ? 'Прием документов:' : language === 'kk' ? 'Құжаттарды қабылдау:' : 'Admissions hours:'} {typeof COLLEGE_INFO.workingHours === 'object' ? (COLLEGE_INFO.workingHours as any)[language] : (language === 'kk' ? 'Дс - Жм: 09:00 - 18:00' : 'Пн - Пт: 09:00 - 18:00')}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {language === 'ru' ? 'Закрыть' : language === 'kk' ? 'Жабу' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(specialty);
              }}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md transition-colors cursor-pointer"
            >
              {language === 'ru' ? 'Подать заявку на эту специальность' : language === 'kk' ? 'Осы мамандыққа өтініш беру' : 'Apply for this specialty'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
