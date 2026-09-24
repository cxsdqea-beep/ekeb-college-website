import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Globe, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  Inbox, 
  Navigation,
  Lock,
  ArrowUp,
  Landmark,
  GraduationCap,
  ShieldAlert,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { COLLEGE_INFO, UI_TRANSLATIONS } from '../data/mockData';

interface FooterProps {
  language: Language;
  onOpenPrivacyPolicy: () => void;
  onOpenDirectionsMap: () => void;
  onOpenTrustBox: () => void;
  onOpenLibrary: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenPrivacyPolicy,
  onOpenDirectionsMap,
  onOpenTrustBox,
  onOpenLibrary,
}) => {
  const t = UI_TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
      {/* Top Banner / Map Action Callout Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 py-5 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 sm:mt-0">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm sm:text-base">
                {language === 'ru' 
                  ? 'Главный корпус EKEB в г. Актобе' 
                  : language === 'kk'
                  ? 'Ақтөбе қаласындағы EKEB бас ғимараты'
                  : 'EKEB Main Campus in Aktobe'}
              </div>
              <div className="text-xs text-slate-400 leading-snug mt-0.5">
                {language === 'ru'
                  ? 'ул. Маресьева, 105 • Остановка «Колледж» / «Улица Маресьева»'
                  : language === 'kk'
                  ? 'Маресьев к-сі, 105 • «Колледж» / «Маресьев көшесі» аялдамасы'
                  : '105 Maresyev St. • "College" / "Maresyev Street" stop'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto">
            {/* Direct button to open Map of Aktobe directions */}
            <button
              onClick={onOpenDirectionsMap}
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>{t.directionsMap}</span>
            </button>
            <button
              onClick={onOpenPrivacyPolicy}
              className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.privacyPolicy}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: College Info & Branding (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md ring-1 ring-white/20">
                <ShieldCheck className="w-5 h-5 text-sky-100" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">EKEB</span>
                <span className="text-[10px] ml-2 px-2 py-0.5 rounded bg-blue-900/80 text-blue-300 font-bold uppercase">
                  {language === 'kk' ? 'АҚТӨБЕ' : language === 'ru' ? 'АКТОБЕ' : 'AKTOBE'}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              {language === 'ru'
                ? 'Евразийский высший колледж экономики, бизнеса и права (EKEB).'
                : language === 'kk'
                ? 'Еуразиялық жоғары экономика, бизнес және құқық колледжі (EKEB).'
                : 'Eurasian Higher College of Economics, Business and Law (EKEB).'}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'ru'
                ? 'Инновационное образование, 90% трудоустройства выпускников, участие в движении WorldSkills, собственный бизнес-инкубатор и комфортабельный студенческий дом EKEB Student Home.'
                : language === 'kk'
                ? 'Инновациялық білім беру, түлектердің 90% жұмыспен қамтылуы, WorldSkills қозғалысына қатысу, жеке бизнес-инкубатор және жайлы EKEB Student Home студенттер үйі.'
                : 'Innovative education, 90% graduate employment rate, WorldSkills training, active business incubator, and modern EKEB Student Home residence.'}
            </p>

            <div className="text-[11px] text-slate-400 font-mono bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              {COLLEGE_INFO.license}
            </div>

            {/* Social & Official Portals */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={COLLEGE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 hover:opacity-90 flex items-center justify-center text-white transition-opacity shadow-xs"
                title="Instagram: @official.ekeb"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COLLEGE_INFO.oldSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-700 hover:bg-blue-600 flex items-center justify-center text-white transition-colors shadow-xs"
                title="Official website ekeb.edu.kz"
                aria-label="Official website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Required Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{t.footerContacts}</span>
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">{language === 'ru' ? 'Адрес:' : language === 'kk' ? 'Мекенжай:' : 'Address:'}</strong><br />
                  {language === 'kk' ? 'Ақтөбе қ., Маресьев көш., 105' : language === 'ru' ? 'г. Актобе, ул. Маресьева, 105' : 'Aktobe, 105 Maresyev St.'}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">{language === 'ru' ? 'Приемная комиссия:' : language === 'kk' ? 'Қабылдау комиссиясы:' : 'Admissions:'}</strong><br />
                  <a href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-sky-300 hover:underline font-bold text-sm">
                    {COLLEGE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong> {COLLEGE_INFO.email}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">{language === 'ru' ? 'График:' : language === 'kk' ? 'Кесте:' : 'Hours:'}</strong> {typeof COLLEGE_INFO.workingHours === 'object' ? (COLLEGE_INFO.workingHours as any)[language] : (language === 'kk' ? 'Дс - Жм: 09:00 - 18:00' : 'Пн - Пт: 09:00 - 18:00')}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: College Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>{language === 'ru' ? 'Сервисы' : language === 'kk' ? 'Сервистер' : 'Services'}</span>
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={COLLEGE_INFO.smartNationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-white transition-colors group py-1"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>SmartNation</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white" />
                </a>
              </li>

              <li>
                <button
                  onClick={onOpenTrustBox}
                  className="w-full text-left flex items-center justify-between text-slate-300 hover:text-white transition-colors group cursor-pointer py-1"
                >
                  <span className="flex items-center gap-2">
                    <Inbox className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.trustBox}</span>
                  </span>
                  <span className="text-[9px] text-amber-400 bg-amber-950/60 px-1 py-0.2 rounded border border-amber-800">
                    {language === 'ru' ? 'Анонимно' : language === 'kk' ? 'Анонимді' : 'Anon'}
                  </span>
                </button>
              </li>

              <li>
                <button
                  onClick={onOpenLibrary}
                  className="w-full text-left flex items-center justify-between text-slate-300 hover:text-white transition-colors group cursor-pointer py-1"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.library}</span>
                  </span>
                  <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-1 py-0.2 rounded border border-emerald-800">
                    {language === 'ru' ? 'Онлайн' : language === 'kk' ? 'Онлайн' : 'Online'}
                  </span>
                </button>
              </li>

              <li className="pt-1.5 border-t border-slate-800/80">
                <button
                  onClick={onOpenDirectionsMap}
                  className="w-full text-left flex items-center justify-between text-sky-400 hover:text-sky-300 transition-colors group cursor-pointer py-1"
                >
                  <span className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{t.directionsMap}</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: ПОЛЕЗНЫЕ ССЫЛКИ / Useful Resources from ekeb.edu.kz (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>{language === 'ru' ? 'Полезные ссылки' : language === 'kk' ? 'Пайдалы сілтемелер' : 'Useful Resources'}</span>
            </h4>

            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://egov.kz/cms/ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Landmark className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">
                        eGov.kz
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium leading-tight">
                        {language === 'ru' ? 'Электронное правительство' : language === 'kk' ? 'Электрондық үкімет' : 'Electronic Government'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 shrink-0 ml-2" />
                </a>
              </li>

              <li>
                <a
                  href="https://reestr24.talap.edu.kz/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        Talap.edu.kz
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium leading-tight">
                        {language === 'ru' ? 'Реестр образовательных программ' : language === 'kk' ? 'Білім беру бағдарламалары тізілімі' : 'Register of Educational Programs'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 shrink-0 ml-2" />
                </a>
              </li>

              <li>
                <a
                  href="https://cert.gov.kz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/50 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-rose-300 transition-colors">
                        KZ-CERT
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium leading-tight">
                        {language === 'ru' ? 'Служба реагирования на инциденты ИБ' : language === 'kk' ? 'Ақпараттық қауіпсіздік қызметі' : 'National Incident Response CERT'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-rose-400 shrink-0 ml-2" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.gov.kz/memleket/entities/edu?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                        Минпросвещения РК
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium leading-tight">
                        {language === 'ru' ? 'Министерство просвещения РК' : language === 'kk' ? 'ҚР Оқу-ағарту министрлігі' : 'Ministry of Education of RK'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 shrink-0 ml-2" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {language === 'ru' 
              ? 'Евразийский высший колледж экономики, бизнеса и права (EKEB). Все права защищены.' 
              : language === 'kk' 
              ? 'Еуразиялық жоғары экономика, бизнес және құқық колледжі (EKEB). Барлық құқықтар қорғалған.' 
              : 'Eurasian Higher College of Economics, Business and Law (EKEB). All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacyPolicy}
              className="text-slate-400 hover:text-slate-200 transition-colors underline cursor-pointer"
            >
              {t.privacyPolicy}
            </button>
            <button
              onClick={onOpenDirectionsMap}
              className="text-slate-400 hover:text-slate-200 transition-colors underline cursor-pointer"
            >
              {t.directionsMap}
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={language === 'ru' ? 'Наверх' : language === 'kk' ? 'Жоғарыға' : 'To top'}
              aria-label={language === 'ru' ? 'Наверх' : language === 'kk' ? 'Жоғарыға' : 'To top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
