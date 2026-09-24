import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Briefcase,
  Sparkles,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Specialty, Language } from '../types';
import { SPECIALTIES, UI_TRANSLATIONS } from '../data/mockData';
import { getSpecialtyVisualConfig } from '../utils/specialtyIcons';

interface SpecialtiesSectionProps {
  language: Language;
  onSelectSpecialty: (specialty: Specialty) => void;
  onApplyForSpecialty: (specialty: Specialty) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  language,
  onSelectSpecialty,
  onApplyForSpecialty,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const t = UI_TRANSLATIONS[language];

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'economics', label: t.catEconomics },
    { id: 'law', label: t.catLaw },
    { id: 'it', label: t.catIT },
  ];

  const filteredSpecialties = SPECIALTIES.filter((spec) => {
    const matchesCategory = activeCategory === 'all' || spec.category === activeCategory;
    const title = spec.title[language].toLowerCase();
    const desc = spec.description[language].toLowerCase();
    const matchesSearch = !searchQuery || title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="specialties" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.specialtiesTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.specialtiesHeading}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2">
              {t.specialtiesSubtitle}
            </p>
          </motion.div>

          {/* Quick search input */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full md:w-72"
          >
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 transition-all"
            />
          </motion.div>
        </div>

        {/* Categories Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {categories.map((cat) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs shadow-blue-600/30'
                  : 'bg-[#F7F5EE] text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Specialties Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredSpecialties.map((specialty, index) => {
              const getProgramNote = () => {
                if (specialty.isDualEducation) {
                  return language === 'ru'
                    ? 'Дуальное обучение: практическая стажировка на предприятиях с выплатой стипендии'
                    : language === 'kk'
                    ? 'Дуальді оқыту: серіктес кәсіпорындарда тәжірибеден өту және шәкіртақы тағайындау'
                    : 'Dual education: practical enterprise internship with scholarship opportunity';
                }
                if (specialty.category === 'it') {
                  return language === 'ru'
                    ? 'Современные IT-лаборатории, разработка ПО и участие в чемпионатах WorldSkills'
                    : language === 'kk'
                    ? 'Заманауи IT-зертханалар, бағдарламалық жасақтама әзірлеу және WorldSkills чемпионаттары'
                    : 'Modern IT labs, software engineering, and participation in WorldSkills championships';
                }
                if (specialty.category === 'law') {
                  return language === 'ru'
                    ? 'Юридическая клиника EKEB, практические судебные процессы и стажировки'
                    : language === 'kk'
                    ? 'EKEB заң клиникасы, сот процестерінің тәжірибесі және тағылымдамалар'
                    : 'EKEB legal clinic, simulated court hearings, and judicial internships';
                }
                return language === 'ru'
                  ? 'Практика в банках и финансовых организациях Актобе с 1-го курса'
                  : language === 'kk'
                  ? '1-курстан бастап Ақтөбе банктері мен қаржылық ұйымдарында тәжірибе'
                  : 'Internships in Aktobe banks and financial institutions from Year 1';
              };

              const visual = getSpecialtyVisualConfig(specialty.id);
              const SpecialtyIcon = visual.icon;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  key={specialty.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Specialty Header Card Banner (No Photos) */}
                  <div className="relative h-40 sm:h-44 w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-5 flex flex-col justify-between overflow-hidden">
                    <div className={`absolute top-0 right-0 -mr-8 -mt-8 w-36 h-36 bg-gradient-to-br ${visual.glowColor} rounded-full blur-xl pointer-events-none`} />
                    
                    {/* Subtle decorative watermark icon */}
                    <SpecialtyIcon className={`absolute -right-4 -bottom-4 w-28 h-28 ${visual.watermarkOpacity} pointer-events-none -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0`} />

                    {/* Top Row: Unique Category/Specialty Icon & Code Badge */}
                    <div className="flex items-center justify-between relative z-10">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${visual.gradient} text-white flex items-center justify-center shadow-md shadow-blue-950/40 ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/10 pointer-events-none" />
                        <SpecialtyIcon className="w-6 h-6 text-white relative z-10" />
                      </div>
                      <span className="text-xs font-mono font-bold bg-white/15 backdrop-blur-xs text-white px-2.5 py-1 rounded-md border border-white/20">
                        {specialty.code}
                      </span>
                    </div>

                    {/* Badges on bottom: Duration & Dual Education */}
                    <div className="flex items-center justify-between gap-2 relative z-10">
                      <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg text-white text-xs font-semibold">
                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                        <span>{specialty.duration[language]}</span>
                      </div>

                      {specialty.isDualEducation && (
                        <div className="flex items-center gap-1 bg-emerald-600/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-white text-[11px] font-bold shadow-xs">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{t.dualEducationBadge}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 
                        onClick={() => onSelectSpecialty(specialty)}
                        className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors mb-2 leading-snug cursor-pointer"
                      >
                        {specialty.title[language]}
                      </h3>

                      <div className="mb-3">
                        <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block leading-tight">
                          {t.qualificationLabel}: {specialty.qualification[language]}
                        </span>
                      </div>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                        {specialty.description[language]}
                      </p>

                      {/* Colored feature highlight frame: amber for dual, sky for standard */}
                      <div className={`rounded-xl p-3 text-xs mb-4 flex items-start gap-2 border ${
                        specialty.isDualEducation
                          ? 'bg-amber-50/95 border-amber-300/90 text-amber-950 font-medium'
                          : 'bg-sky-50/90 border-sky-200/90 text-sky-950 font-medium'
                      }`}>
                        <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${specialty.isDualEducation ? 'text-amber-700' : 'text-sky-700'}`} />
                        <p className="leading-snug">
                          {getProgramNote()}
                        </p>
                      </div>
                    </div>

                    {/* Actions: "Узнать больше" & "Подать заявку" */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectSpecialty(specialty)}
                        className="flex-1 py-2.5 px-3 sm:px-4 rounded-xl bg-slate-100 hover:bg-blue-50 text-blue-900 hover:text-blue-700 font-bold text-xs sm:text-sm transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{t.learnMore}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onApplyForSpecialty(specialty)}
                        className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer shrink-0"
                      >
                        {language === 'ru' ? 'Выбрать' : language === 'kk' ? 'Таңдау' : 'Select'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">{t.noSpecialtiesFound}</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
            >
              {t.resetFilters}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

