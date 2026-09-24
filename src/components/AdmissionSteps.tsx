import React, { useState } from 'react';
import { 
  Compass, 
  FileCheck2, 
  Send, 
  Award, 
  CheckCircle2, 
  Download, 
  ArrowRight,
  HelpCircle,
  Clock,
  MapPin
} from 'lucide-react';
import { Language } from '../types';
import { ADMISSION_STEPS, COLLEGE_INFO, UI_TRANSLATIONS } from '../data/mockData';

interface AdmissionStepsProps {
  language: Language;
  onApplyClick: () => void;
  onChooseSpecialtyClick: () => void;
}

export const AdmissionSteps: React.FC<AdmissionStepsProps> = ({
  language,
  onApplyClick,
  onChooseSpecialtyClick,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showDocumentsList, setShowDocumentsList] = useState<boolean>(false);

  const t = UI_TRANSLATIONS[language];

  const stepIcons = [Compass, FileCheck2, Send, Award];

  const documentsRequired = [
    {
      title: language === 'ru'
        ? 'Аттестат об основном среднем (9 кл) или общем среднем (11 кл) образовании'
        : language === 'kk'
        ? 'Негізгі орта (9 с.) немесе жалпы орта (11 с.) білім туралы аттестат'
        : 'Certificate of basic secondary (9th gr.) or general secondary (11th gr.) education',
      note: language === 'ru' ? 'Оригинал + копия' : language === 'kk' ? 'Түпнұсқа + көшірме' : 'Original + copy',
    },
    {
      title: language === 'ru'
        ? 'Медицинская справка формы 075-У'
        : language === 'kk'
        ? '075-У нысанындағы медициналық анықтама'
        : 'Medical Certificate Form 075-U',
      note: language === 'ru' ? 'С приложенным снимком флюорографии' : language === 'kk' ? 'Флюорография суреті қоса беріледі' : 'With attached chest X-ray result',
    },
    {
      title: language === 'ru'
        ? 'Фотографии размером 3х4 см'
        : language === 'kk'
        ? '3х4 см көлеміндегі фотосуреттер'
        : 'Photos size 3x4 cm',
      note: language === 'ru' ? '4 штуки (цветные, матовые)' : language === 'kk' ? '4 дана (түрлі-түсті)' : '4 copies (color, matte)',
    },
    {
      title: language === 'ru'
        ? 'Копия удостоверения личности или свидетельства о рождении с ИИН'
        : language === 'kk'
        ? 'Жеке куәлік немесе ЖСН бар туу туралы куәліктің көшірмесі'
        : 'Copy of National ID or Birth Certificate with IIN',
      note: language === 'ru' ? '2 копии' : language === 'kk' ? '2 көшірме' : '2 copies',
    },
    {
      title: language === 'ru'
        ? 'Копия удостоверения личности одного из родителей (для несовершеннолетних)'
        : language === 'kk'
        ? 'Ата-анасының бірінің жеке куәлігінің көшірмесі (кәмелетке толмағандар үшін)'
        : 'Parent or Guardian ID copy (for underage applicants)',
      note: language === 'ru' ? 'Для заключения договора' : language === 'kk' ? 'Шарт жасасу үшін' : 'For contract agreement',
    },
  ];

  return (
    <section id="admission" className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'ru' ? 'Приемная кампания' : language === 'kk' ? 'Қабылдау науқаны' : 'Admissions 2025-2026'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.admissionProcessTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            {t.admissionProcessSubtitle}
          </p>
        </div>

        {/* 4 Steps Visual Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ADMISSION_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isCurrent = activeStep === step.number;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isCurrent
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20'
                    : 'bg-white/80 hover:bg-white border-slate-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base transition-colors ${
                      isCurrent ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                    }`}>
                      0{step.number}
                    </span>
                    <div className={`p-2 rounded-lg ${isCurrent ? 'bg-sky-50 text-blue-600' : 'text-slate-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {step.title[language]}
                  </h3>
                  <span className="text-xs font-semibold text-blue-700 block mb-3">
                    {step.subtitle[language]}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>

                {/* Bottom hint pill */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                  <span className="truncate">{step.actionHint[language]}</span>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isCurrent ? 'translate-x-1 text-blue-600' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Documents Checklist Box */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {language === 'ru' 
                    ? 'Необходимый пакет документов для поступления в EKEB' 
                    : language === 'kk'
                    ? 'EKEB колледжіне түсу үшін қажетті құжаттар топтамасы'
                    : 'Required Application Documents for EKEB'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {language === 'ru'
                  ? 'Прием документов осуществляется онлайн через портал или очно в г. Актобе, ул. Маресьева, 105'
                  : language === 'kk'
                  ? 'Құжаттарды қабылдау онлайн портал арқылы немесе Ақтөбе қ., Маресьев к-сі, 105 мекенжайында өткізіледі'
                  : 'Document submission is available online via our portal or in person at Aktobe, 105 Maresyev St.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <button
                id="btn-toggle-documents-list"
                onClick={() => setShowDocumentsList(!showDocumentsList)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors cursor-pointer text-center"
              >
                {showDocumentsList 
                  ? (language === 'ru' ? 'Свернуть список' : language === 'kk' ? 'Тізімді жию' : 'Collapse list') 
                  : (language === 'ru' ? 'Показать все 5 документов' : language === 'kk' ? 'Барлық 5 құжатты көру' : 'View all 5 documents')}
              </button>
              
              <button
                id="btn-apply-documents-section"
                onClick={onApplyClick}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer text-center"
              >
                <span>{t.btnApplyOnline || t.applyOnline || (language === 'ru' ? 'Подать заявку онлайн' : language === 'kk' ? 'Онлайн өтінім беру' : 'Apply Online')}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentsRequired.slice(0, showDocumentsList ? documentsRequired.length : 3).map((doc, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#FAF8F5] border border-slate-200/70 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{doc.title}</h4>
                  <span className="text-[11px] text-blue-700 font-medium mt-1 block">{doc.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-slate-400" />
              {language === 'ru' ? 'Приемная комиссия работает:' : language === 'kk' ? 'Қабылдау комиссиясының жұмыс уақыты:' : 'Admissions Office hours:'} {COLLEGE_INFO.workingHours}
            </span>
            <a
              href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="text-blue-700 hover:underline font-bold"
            >
              {language === 'ru' ? 'Консультация по телефону:' : language === 'kk' ? 'Телефон арқылы кеңес:' : 'Phone consultation:'} {COLLEGE_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
