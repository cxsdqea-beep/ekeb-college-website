import React, { useState, useEffect } from 'react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS, UI_TRANSLATIONS } from '../data/mockData';

interface TestimonialsCarouselProps {
  language: Language;
}

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#FBF9F5] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-blue-600 fill-blue-600/20" />
            <span>{language === 'ru' ? 'Истории успеха' : language === 'kk' ? 'Табыс тарихтары' : 'Success Stories'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.testimonialsTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Carousel Card Container */}
        <div 
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: Graduate Profile Card (No Photos) */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="relative z-10">
                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-blue-900/40 mb-4">
                  {current.author.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {current.author}
                </h3>
                <p className="text-sm text-sky-200 mt-1 font-medium">
                  {current.role[language]}
                </p>
                <div className="mt-2 inline-block text-xs text-slate-300 font-mono bg-white/10 px-2.5 py-1 rounded-md">
                  {current.specialty[language]}
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-6 pt-4 border-t border-slate-800 relative z-10">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>
                    {language === 'ru' ? 'Трудоустроен после выпуска' : language === 'kk' ? 'Оқу бітірген соң жұмысқа орналасқан' : 'Employed After Graduation'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Testimonial Details */}
            <div className="md:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Rating stars and Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {typeof current.year === 'object' ? current.year[language] : current.year}
                  </span>
                </div>

                {/* Quote symbol */}
                <Quote className="w-8 h-8 text-blue-200 mb-2" />

                {/* Quote text (featuring Ilya & Vladimir notes as explicitly requested) */}
                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed italic font-normal mb-6">
                  "{current.quote[language]}"
                </p>
              </div>

              {/* Graduate signature & Carousel navigation */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight truncate">
                    {current.author}
                  </h4>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5 truncate">
                    {current.role[language]}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {current.specialty[language]}
                  </p>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Dots pagination */}
          <div className="flex items-center justify-center gap-2 py-3 bg-slate-50 border-t border-slate-100">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
