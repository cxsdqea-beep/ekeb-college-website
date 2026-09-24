import React from 'react';
import { X, BookOpen, ExternalLink, Search, FileText } from 'lucide-react';
import { Language } from '../types';
import { COLLEGE_INFO } from '../data/mockData';

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({ isOpen, onClose, language = 'ru' }) => {
  if (!isOpen) return null;

  const sampleBooks = [
    { 
      title: language === 'kk' ? 'Қазақстан Республикасындағы бухгалтерлік есеп' : 'Бухгалтерский учет в Республике Казахстан', 
      author: 'Толпаков Ж.С.', 
      category: language === 'kk' ? 'Экономика' : language === 'ru' ? 'Экономика' : 'Economics' 
    },
    { 
      title: language === 'kk' ? 'ҚР Азаматтық құқығы. Ерекше бөлім' : 'Гражданское право РК. Особенная часть', 
      author: 'Басин Ю.Г., Сулейменов М.К.', 
      category: language === 'kk' ? 'Заңтану' : language === 'ru' ? 'Юриспруденция' : 'Law' 
    },
    { 
      title: language === 'kk' ? 'Кәсіпорын мен бизнестің құнын бағалау' : 'Оценка стоимости предприятия и бизнеса', 
      author: 'Григорьев В.В.', 
      category: language === 'kk' ? 'Бағалау' : language === 'ru' ? 'Оценка' : 'Valuation' 
    },
    { 
      title: language === 'kk' ? 'Қаржы және банк ісі: заманауи кейстер' : 'Финансы и банковское дело: современные кейсы', 
      author: 'Ильясов А.А.', 
      category: language === 'kk' ? 'Банк ісі' : language === 'ru' ? 'Банковское дело' : 'Banking' 
    },
    { 
      title: language === 'kk' ? 'Бағдарламалық жүйелер мен деректер қорын әзірлеу' : 'Разработка программных систем и баз данных', 
      author: 'Кузнецов С.Д.', 
      category: 'IT' 
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">
                {language === 'ru' ? 'Электронная библиотека EKEB' : language === 'kk' ? 'EKEB электронды кітапханасы' : 'EKEB Electronic Library'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'ru' ? 'Учебные пособия, практикумы и научные издания' : language === 'kk' ? 'Оқу құралдары, практикумдар және ғылыми басылымдар' : 'Study guides, practical textbooks & publications'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white cursor-pointer" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-3 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs text-emerald-950">
            {language === 'ru'
              ? 'Студенты и преподаватели колледжа EKEB имеют круглосуточный доступ к фонду из более чем 15 000 изданий через АИС College SmartNation и цифровую базу колледжа.'
              : language === 'kk'
              ? 'EKEB колледжінің студенттері мен оқытушылары College SmartNation ААЖ және колледждің цифрлық базасы арқылы 15 000-нан астам басылым қорына тәулік бойы қол жеткізе алады.'
              : 'EKEB college students and faculty have 24/7 access to over 15,000 digital textbooks through AIS College SmartNation.'}
          </div>

          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {language === 'ru' ? 'Популярные учебные издания:' : language === 'kk' ? 'Танымал оқу басылымдары:' : 'Featured Study Publications:'}
          </h4>

          <div className="space-y-2">
            {sampleBooks.map((book, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">{book.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{book.author} • <span className="text-blue-700">{book.category}</span></div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded shrink-0">
                  {language === 'ru' ? 'Доступен' : language === 'kk' ? 'Қолжетімді' : 'Available'}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={COLLEGE_INFO.smartNationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>
                {language === 'ru'
                  ? 'Войти в электронную библиотеку через SmartNation'
                  : language === 'kk'
                  ? 'SmartNation арқылы электронды кітапханаға кіру'
                  : 'Open E-Library via SmartNation'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
