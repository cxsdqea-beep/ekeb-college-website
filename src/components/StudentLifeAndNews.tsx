import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Instagram, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Newspaper,
  Award
} from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { NEWS_ITEMS, COLLEGE_INFO, UI_TRANSLATIONS } from '../data/mockData';
import { getNewsVisualConfig } from '../utils/specialtyIcons';

interface StudentLifeAndNewsProps {
  language: Language;
  onReadArticle: (article: NewsArticle) => void;
}

export const StudentLifeAndNews: React.FC<StudentLifeAndNewsProps> = ({
  language,
  onReadArticle,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const t = UI_TRANSLATIONS[language];

  const tags = [
    { id: 'all', label: language === 'ru' ? 'Все события' : language === 'kk' ? 'Барлық жаңалықтар' : 'All Events' },
    { id: 'Спортфак', label: language === 'ru' ? 'Спортфак' : language === 'kk' ? 'Спортфак' : 'Sports Dept' },
    { id: 'Форумы', label: language === 'ru' ? 'Международные форумы' : language === 'kk' ? 'Халықаралық форумдар' : 'Global Forums' },
    { id: 'Y-PEER', label: 'Y-PEER' },
    { id: 'Student Home', label: 'Student Home' },
    { id: 'WorldSkills', label: 'WorldSkills' },
    { id: 'Инкубатор', label: language === 'ru' ? 'Бизнес-инкубатор' : language === 'kk' ? 'Бизнес-инкубатор' : 'Incubator' },
  ];

  const filteredNews = NEWS_ITEMS.filter((item) => {
    if (selectedTag === 'all') return true;
    return item.tag === selectedTag;
  });

  const formatArticleDate = (dateStr: string, lang: Language) => {
    if (lang === 'ru') return dateStr;
    const monthMapKk: Record<string, string> = {
      'января': 'қаңтар',
      'февраля': 'ақпан',
      'марта': 'наурыз',
      'апреля': 'сәуір',
      'мая': 'мамыр',
      'июня': 'маусым',
      'июля': 'шілде',
      'августа': 'тамыз',
      'сентября': 'қыркүйек',
      'октября': 'қазан',
      'ноября': 'қараша',
      'декабря': 'желтоқсан',
    };
    const monthMapEn: Record<string, string> = {
      'января': 'January',
      'февраля': 'February',
      'марта': 'March',
      'апреля': 'April',
      'мая': 'May',
      'июня': 'June',
      'июля': 'July',
      'августа': 'August',
      'сентября': 'September',
      'октября': 'October',
      'ноября': 'November',
      'декабря': 'December',
    };
    let result = dateStr;
    const targetMap = lang === 'kk' ? monthMapKk : monthMapEn;
    for (const [ruMonth, targetMonth] of Object.entries(targetMap)) {
      if (result.includes(ruMonth)) {
        result = result.replace(ruMonth, targetMonth);
        break;
      }
    }
    return result;
  };

  return (
    <section id="news" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.newsTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.newsHeading}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              {t.newsSubtitle}
            </p>
          </div>

          {/* Instagram Official Follow Button */}
          <a
            href={COLLEGE_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/20 hover:shadow-pink-500/30 transition-all duration-200 shrink-0 self-start md:self-auto cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-white shrink-0" />
            <span className="hidden sm:inline">
              {language === 'ru' ? 'Следите в Instagram:' : language === 'kk' ? 'Instagram-да біз:' : 'Follow on Instagram:'}
            </span>
            <span className="font-mono">{COLLEGE_INFO.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80 shrink-0" />
          </a>
        </div>

        {/* Filter tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-slate-700 hover:bg-slate-200/80 border border-slate-200/70'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNews.map((article) => {
            const newsVisual = getNewsVisualConfig(article.id);
            const NewsIcon = newsVisual.icon;

            return (
              <article
                key={article.id}
                onClick={() => onReadArticle(article)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* News Card Header Banner (No Photos) */}
                <div className="relative h-36 w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4 flex flex-col justify-between overflow-hidden">
                  <div className={`absolute top-0 right-0 -mr-6 -mt-6 w-28 h-28 bg-gradient-to-br ${newsVisual.glow} rounded-full blur-xl pointer-events-none`} />
                  
                  {/* Subtle watermark icon */}
                  <NewsIcon className="absolute -right-2 -bottom-2 w-24 h-24 text-white/[0.04] pointer-events-none -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-0" />

                  <div className="flex items-center justify-between relative z-10">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${newsVisual.gradient} text-white flex items-center justify-center shadow-md ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-200`}>
                      <NewsIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="flex items-center gap-1 text-slate-300 text-[11px] font-medium bg-black/40 px-2.5 py-0.5 rounded-md border border-white/10">
                      <Clock className="w-3 h-3 text-sky-400" />
                      {language === 'en' ? article.readTime.replace('мин', 'min') : article.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-1 rounded-md bg-blue-600/90 text-white text-[11px] font-bold shadow-xs">
                      {article.category[language]}
                    </span>
                  </div>
                </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-2 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-sky-700" />
                    <span>{formatArticleDate(article.date, language)}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug mb-2">
                    {article.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary[language]}
                  </p>
                </div>

                {/* Footer read link */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                  <span>{language === 'ru' ? 'Подробнее о событии' : language === 'kk' ? 'Толығырақ оқу' : 'Read full story'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          )})}
        </div>

        {/* Featured Student Life Highlight Banner (EKEB Student Home & Y-PEER) */}
        <div className="mt-10 sm:mt-12 bg-[#FAF8F5] border border-amber-300/80 rounded-2xl p-5 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/80 px-2.5 py-1 rounded-md inline-block">
              {language === 'ru' ? 'Студенческий кампус' : language === 'kk' ? 'Студенттік кампус' : 'Collegiate Campus'}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
              {language === 'ru' 
                ? 'EKEB STUDENT HOME – твой второй дом в Актобе' 
                : language === 'kk' 
                ? 'EKEB STUDENT HOME – Ақтөбедегі екінші үйіңіз' 
                : 'EKEB STUDENT HOME – Your Second Home in Aktobe'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed">
              {language === 'ru'
                ? 'Комфортное проживание для иногородних студентов со всеми удобствами: высокоскоростной Wi-Fi, современные учебные аудитории для самостоятельной подготовки, волонтерские штабы Y-PEER и спортивные площадки.'
                : language === 'kk'
                ? 'Басқа қалалардан келген студенттерге барлық жағдайы жасалған жайлы тұрғын үй: жоғары жылдамдықты Wi-Fi, өздігінен дайындалуға арналған аудиториялар, Y-PEER еріктілер штабы және спорт алаңдары.'
                : 'Comfortable dormitory life equipped with gigabit Wi-Fi, quiet academic research halls, Y-PEER civic centers, and fitness courts.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={COLLEGE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>{language === 'ru' ? 'Смотреть Stories в Instagram' : language === 'kk' ? 'Instagram-да Stories көру' : 'Watch Stories on Instagram'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
