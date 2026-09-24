import React from 'react';
import { 
  CalendarCheck2, 
  Rocket, 
  Trophy, 
  Home, 
  Briefcase, 
  CheckCircle,
  Lightbulb,
  Building,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/mockData';

interface StatsAndAdvantagesProps {
  language: Language;
}

export const StatsAndAdvantages: React.FC<StatsAndAdvantagesProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];

  // The 4 key requested advantages with minimalist icons
  const keyCards = [
    {
      id: 'duration',
      title: language === 'ru' ? '3 года обучения' : language === 'kk' ? '3 жыл оқу мерзімі' : '3 Years of Study',
      subtitle: language === 'ru' ? 'Оптимальный срок для карьеры' : language === 'kk' ? 'Мансапқа арналған оңтайлы мерзім' : 'Optimal duration for your career',
      desc: language === 'ru' 
        ? 'Интенсивные практические программы на базе 9 и 11 классов. Возможность поступления в вузы на сокращенную форму.'
        : language === 'kk'
        ? '9 және 11-сыныптар негізіндегі қарқынды тәжірибелік бағдарламалар. ЖОО-ға қысқартылған түрде түсу мүмкіндігі.'
        : 'Hands-on curriculum for 9th and 11th grade graduates. Direct bridge to accelerated university degree tracks.',
      icon: CalendarCheck2,
      stat: language === 'ru' ? '3 года' : language === 'kk' ? '3 жыл' : '3 Years',
      statLabel: language === 'ru' ? 'Срок обучения' : language === 'kk' ? 'Оқу мерзімі' : 'Study Duration',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      iconBg: 'bg-gradient-to-br from-sky-600 to-blue-700 text-white ring-1 ring-sky-300/30',
    },
    {
      id: 'startup',
      title: 'Startup community & Hub',
      subtitle: language === 'ru' ? 'Запуск стартапов со студенчества' : language === 'kk' ? 'Студент кезінен стартап ашу' : 'Student startup acceleration',
      desc: language === 'ru'
        ? 'Собственное бизнес-пространство EKEB: менторы из IT и банков, грантовая поддержка, нетворкинг и инкубация проектов.'
        : language === 'kk'
        ? 'EKEB-тің жеке бизнес-кеңістігі: IT және банк саласының тәлімгерлері, гранттық қолдау, нетворкинг және жобаларды инкубациялау.'
        : 'Dedicated business innovation lab: mentors from IT and banking, seed grant backing, and venture incubator.',
      icon: Rocket,
      stat: '25+',
      statLabel: language === 'ru' ? 'Бизнес-проектов' : language === 'kk' ? 'Бизнес-жобалар' : 'Business Projects',
      badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      iconBg: 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white ring-1 ring-indigo-300/30',
    },
    {
      id: 'worldskills',
      title: 'WorldSkills',
      subtitle: language === 'ru' ? 'Международные стандарты' : language === 'kk' ? 'Халықаралық стандарттар' : 'International standards',
      desc: language === 'ru'
        ? 'Студенты колледжа занимают призовые места на региональных и национальных чемпионатах WorldSkills по бухгалтерскому учету и IT.'
        : language === 'kk'
        ? 'Колледж студенттері бухгалтерлік есеп және IT бойынша өткізілетін WorldSkills аймақтық және ұлттық чемпионаттарында жүлделі орындарға ие болады.'
        : 'EKEB students win medals at regional and national WorldSkills championships in accounting and web technology.',
      icon: Trophy,
      stat: '15+',
      statLabel: language === 'ru' ? 'Медалей WorldSkills' : language === 'kk' ? 'WorldSkills медалі' : 'WorldSkills Medals',
      badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white ring-1 ring-amber-300/30',
    },
    {
      id: 'student-home',
      title: 'EKEB STUDENT HOME',
      subtitle: language === 'ru' ? 'Современный студенческий дом в Актобе' : language === 'kk' ? 'Ақтөбедегі заманауи студенттер үйі' : 'Modern Student Residence',
      desc: language === 'ru'
        ? '2-х и 3-х местные уютные комнаты, скоростной интернет, учебные залы, тренажерный зал, кафетерий и круглосуточная охрана.'
        : language === 'kk'
        ? '2 және 3 орындық жайлы бөлмелер, жоғары жылдамдықты интернет, оқу залдары, жаттығу залы және 24/7 күзет қызметі.'
        : 'Furnished student suites, fiber Wi-Fi, quiet libraries, fitness center, cafeteria, and 24/7 security.',
      icon: Home,
      stat: '250',
      statLabel: language === 'ru' ? 'Мест для студентов' : language === 'kk' ? 'Студенттерге арналған орын' : 'Resident Beds',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white ring-1 ring-emerald-300/30',
    },
  ];

  return (
    <section id="advantages" className="py-16 bg-[#FBF9F5] border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.advantagesBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.advantagesTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2">
            {t.advantagesSubtitle}
          </p>
        </div>

        {/* 4 Beautiful Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs ${card.iconBg} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {card.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 leading-snug group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-700/90 mb-2">
                    {card.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span>{card.statLabel}</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {language === 'ru' ? 'Актуально' : language === 'kk' ? 'Өзекті' : 'Active'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Banner: 90% Employment Guarantee - Spacious, high-contrast, perfectly proportioned */}
        <div className="mt-12 bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden border border-blue-900/60">
          <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-blue-500/10 rounded-l-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 flex-1">
              
              {/* Spacious 90% Stat Display */}
              <div className="px-6 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-4 shrink-0 shadow-inner">
                <div className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight leading-none">
                  90%
                </div>
                <div className="flex flex-col text-left border-l border-white/20 pl-4">
                  <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                    {language === 'ru' ? 'Трудоустройство' : language === 'kk' ? 'Жұмыспен қамту' : 'Employment Rate'}
                  </span>
                  <span className="text-[11px] sm:text-xs text-amber-200/90 font-medium mt-0.5">
                    {language === 'ru' ? 'Выпускников колледжа EKEB' : language === 'kk' ? 'EKEB түлектері бойынша' : 'For EKEB Graduates'}
                  </span>
                </div>
              </div>

              {/* Text & Partner Network */}
              <div className="space-y-2.5 max-w-3xl">
                <h4 className="text-lg sm:text-2xl font-bold text-white leading-snug tracking-tight">
                  {language === 'ru'
                    ? 'Гарантированная практическая подготовка и карьерный старт'
                    : language === 'kk'
                    ? 'Кепілдендірілген тәжірибелік дайындық және мансаптық бастау'
                    : 'Guaranteed Professional Training & Direct Career Bridge'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'ru'
                    ? 'Колледж EKEB сотрудничает с ключевыми работодателями Актюбинской области и Казахстана: банками, финансовыми корпорациями, судами, IT-компаниями и палатой предпринимателей «Атамекен».'
                    : language === 'kk'
                    ? 'EKEB колледжі Ақтөбе облысы мен Қазақстанның жетекші жұмыс берушілерімен серіктес: банктер, қаржылық корпорациялар, соттар, IT-компаниялар және «Атамекен» кәсіпкерлер палатасы.'
                    : 'EKEB actively partners with premier employers in Aktobe region: national banks, audit agencies, commercial courts, tech startups, and the Atameken Chamber of Entrepreneurs.'}
                </p>

                {/* Partner Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {['Halyk Bank', 'Kaspi Bank', 'Банк ЦентрКредит', 'Атамекен', 'Судебные органы', 'IT-кластер'].map((partner, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[11px] text-slate-200 font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto self-stretch xl:self-center">
              <a
                href="#specialties"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                {language === 'ru' ? 'Выбрать специальность' : language === 'kk' ? 'Мамандықты таңдау' : 'Explore Specialties'}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
