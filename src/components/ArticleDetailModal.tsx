import React from 'react';
import { X, Calendar, Clock, Sparkles, Share2 } from 'lucide-react';
import { NewsArticle, Language } from '../types';
import { getNewsVisualConfig } from '../utils/specialtyIcons';

interface ArticleDetailModalProps {
  article: NewsArticle | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen || !article) return null;

  const newsVisual = getNewsVisualConfig(article.id);
  const NewsIcon = newsVisual.icon;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Article Header Banner (No Photos) */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden shrink-0">
          <div className={`absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-gradient-to-br ${newsVisual.glow} rounded-full blur-2xl pointer-events-none`} />
          <NewsIcon className="absolute -right-6 -bottom-6 w-36 h-36 text-white/[0.04] pointer-events-none -rotate-12" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10 pt-2">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${newsVisual.gradient} text-white flex items-center justify-center shadow-md ring-1 ring-white/20 shrink-0`}>
                <NewsIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold bg-blue-600/90 text-white px-2.5 py-1 rounded-md inline-block shadow-xs">
                {article.category[language]}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
              {article.title[language]}
            </h2>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-slate-700">
          <div className="flex items-center gap-4 text-xs text-slate-600 pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-blue-600" />
              {formatArticleDate(article.date, language)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-600" />
              {language === 'en' ? article.readTime.replace('мин', 'min') : article.readTime}
            </span>
          </div>

          <div className="text-sm font-semibold text-slate-900 leading-relaxed bg-[#FAF8F5] p-4 rounded-xl border border-slate-200/80">
            {article.summary[language]}
          </div>

          <div className="text-sm text-slate-700 leading-relaxed space-y-3">
            <p>{article.content[language]}</p>
            <p className="text-slate-500 italic text-xs pt-2 border-t border-slate-100">
              {language === 'ru' 
                ? 'Колледж EKEB продолжает создавать вдохновляющую академическую и творческую среду для каждого студента. Подписывайтесь на наш официальный Instagram @official.ekeb, чтобы первыми узнавать о будущих мероприятиях и конкурсах!'
                : language === 'kk'
                ? 'EKEB колледжі әрбір студент үшін шабыттандыратын академиялық және шығармашылық орта құруды жалғастыруда. Алдағы іс-шаралар мен байқаулар туралы бірінші болып білу үшін біздің ресми Instagram @official.ekeb парақшамызға жазылыңыз!'
                : 'EKEB College continues to foster an inspiring academic and creative atmosphere for every student. Follow our official Instagram @official.ekeb to stay updated on upcoming events and competitions!'}
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold cursor-pointer"
          >
            {language === 'ru' ? 'Закрыть' : language === 'kk' ? 'Жабу' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
