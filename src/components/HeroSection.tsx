import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  Users, 
  Award, 
  Briefcase, 
  ShieldCheck, 
  BookOpen, 
  Landmark 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { UI_TRANSLATIONS, COLLEGE_INFO } from '../data/mockData';

interface HeroSectionProps {
  language: Language;
  onSelectSpecialtyClick: () => void;
  onOpenApplication: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onSelectSpecialtyClick,
  onOpenApplication,
}) => {
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-white to-[#F6F4ED] pt-6 pb-12 sm:pb-16 lg:pt-10 lg:pb-20">
      {/* Decorative architectural background geometry */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 -mr-24 -mt-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-sky-200/40 blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 left-0 -ml-24 -mb-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6"
          >
            
            {/* Top Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-800"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-blue-900 font-extrabold tracking-wide">EKEB</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">{t.heroBadge}</span>
            </motion.div>

            {/* Main Headline - fluid and robust on mobile */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] break-words"
            >
              {language === 'ru' ? (
                <>Добро пожаловать в <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-900">EKEB</span>! Твое успешное будущее в экономике и бизнесе начинается здесь</>
              ) : language === 'kk' ? (
                <> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-900">EKEB</span>-ке қош келдіңіз! Экономика мен бизнестегі табысты болашағыңыз осы жерден басталады</>
              ) : (
                <>Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-900">EKEB</span>! Your successful future in economics and business starts here</>
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl"
            >
              {t.heroSubtitle}
            </motion.p>

            {/* Action Buttons:
                - «Выбрать специальность»
                - «Подать документы онлайн»
            */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.025, y: -2 }}
                whileTap={{ scale: 0.98 }}
                id="hero-choose-specialty-btn"
                onClick={onSelectSpecialtyClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-600/20 transition-all duration-200 cursor-pointer text-center"
              >
                <span>{t.btnChooseSpecialty}</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                id="hero-apply-btn"
                onClick={onOpenApplication}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 font-bold text-sm sm:text-base border border-slate-300 shadow-xs transition-all duration-200 cursor-pointer text-center"
              >
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.applyOnlineShort || t.applyOnline}</span>
              </motion.button>
            </motion.div>

            {/* Trust points micro-pills */}
            <div className="pt-4 border-t border-slate-200/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ru' ? 'Гос. лицензия МОН РК' : language === 'kk' ? 'ҚР ОҒМ мемлекеттік лицензиясы' : 'State License of RK'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ru' ? 'Общежитие Student Home' : language === 'kk' ? 'Student Home жатақханасы' : 'Student Home Residence'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{language === 'ru' ? 'Стажировки в банках' : language === 'kk' ? 'Банктердегі тағылымдамалар' : 'Internships in Banks'}</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Collegiate Card Showcase (NO PHOTOS) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            
            {/* Main Information Emblem Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-900/40 ring-1 ring-white/20 shrink-0">
                    <Award className="w-6 h-6 text-sky-100" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-xl tracking-tight text-white">EKEB</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-800 text-blue-200">
                        {language === 'kk' ? 'Ақтөбе' : language === 'ru' ? 'Актобе' : 'Aktobe'}
                      </span>
                    </div>
                    <span className="text-xs text-blue-200 font-medium block mt-0.5">
                      {language === 'kk' ? '2010 жылдан бері' : language === 'ru' ? 'Колледж с 2010 года' : 'College est. 2010'}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-lg shrink-0">
                  90% {language === 'ru' ? 'трудоустройство' : language === 'kk' ? 'жұмыс' : 'employed'}
                </span>
              </div>

              {/* Title of College */}
              <h2 className="text-base sm:text-lg font-bold text-white leading-snug mb-4 relative z-10">
                {language === 'ru' 
                  ? 'Евразийский высший колледж экономики, бизнеса и права' 
                  : language === 'kk'
                  ? 'Еуразиялық жоғары экономика, бизнес және құқық колледжі'
                  : 'Eurasian Higher College of Economics, Business and Law'}
              </h2>

              {/* Feature Pills Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs mb-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                  <Landmark className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-medium text-slate-200">
                    {language === 'ru' ? '8 специальностей' : language === 'kk' ? '8 мамандық' : '8 programs'}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                  <Briefcase className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-medium text-slate-200">
                    {language === 'ru' ? 'Дуальное обучение' : language === 'kk' ? 'Дуальді оқыту' : 'Dual education'}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-medium text-slate-200">
                    {language === 'ru' ? 'Гос. дипломы' : language === 'kk' ? 'Мемл. диплом' : 'State diploma'}
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-xs rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium text-slate-200">
                    {language === 'ru' ? 'Бизнес-инкубатор' : language === 'kk' ? 'Бизнес-инкубатор' : 'Incubator'}
                  </span>
                </div>
              </div>

              {/* Campus Address Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 relative z-10">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{language === 'kk' ? 'Ақтөбе қ., Маресьев к-сі, 105' : 'г. Актобе, ул. Маресьева, 105'}</span>
                </div>
                <span className="text-slate-500 font-mono text-[11px]">№ KZ38LAA00003412</span>
              </div>
            </motion.div>

            {/* Dedicated Responsive Stats Bar with hover animations */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {/* Stat 1: 2400+ Graduates */}
              <motion.div 
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FAF6EE] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-center cursor-default min-w-0"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-none">2 400+</div>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-none mt-2 whitespace-nowrap">
                  {language === 'ru' ? 'Выпускников' : language === 'kk' ? 'Түлектер' : 'Graduates'}
                </div>
              </motion.div>

              {/* Stat 2: Employment rate */}
              <motion.div 
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FAF6EE] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-center cursor-default min-w-0"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                    <Briefcase className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-none">90%</div>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-none mt-2 whitespace-nowrap">
                  {language === 'ru' ? 'Трудоустройство' : language === 'kk' ? 'Жұмыспен қамту' : 'Employment'}
                </div>
              </motion.div>

              {/* Stat 3: History & Experience */}
              <motion.div 
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="bg-[#FAF6EE] border border-amber-200/90 rounded-xl p-2.5 sm:p-3 shadow-xs flex flex-col justify-center cursor-default min-w-0"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-700 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                    <Landmark className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-none">15+ {language === 'ru' ? 'лет' : language === 'kk' ? 'жыл' : 'yrs'}</div>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-700 font-semibold leading-none mt-2 whitespace-nowrap">
                  {language === 'ru' ? 'Опыт обучения' : language === 'kk' ? 'Тәжірибе' : 'Education Exp.'}
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
