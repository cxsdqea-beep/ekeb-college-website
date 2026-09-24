import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Landmark, 
  History, 
  Users, 
  FileCheck, 
  Handshake, 
  MapPin, 
  Award, 
  Newspaper, 
  Compass, 
  Clock, 
  GraduationCap, 
  CreditCard, 
  Briefcase, 
  Trophy, 
  ShieldCheck, 
  FileText, 
  Calendar, 
  Building, 
  ExternalLink,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';

export type CollegeModalSection = 
  | 'history'
  | 'staff'
  | 'license'
  | 'partners'
  | 'contacts'
  | 'achievements'
  | 'media'
  | 'tour'
  | 'rules'
  | 'schedule'
  | 'exams'
  | 'academic_plan'
  | 'csc'
  | 'alumni'
  | 'payment'
  | 'employment'
  | 'worldskills'
  | 'regulations'
  | 'attestation'
  | 'accreditation'
  | 'memorandums'
  | 'projects';

interface CollegeInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSection?: CollegeModalSection;
  language: Language;
}

export const CollegeInfoModal: React.FC<CollegeInfoModalProps> = ({
  isOpen,
  onClose,
  initialSection = 'history',
  language
}) => {
  const [activeSection, setActiveSection] = useState<CollegeModalSection>(initialSection);

  // Keep active section in sync if reopened with a different initial section
  React.useEffect(() => {
    if (isOpen && initialSection) {
      setActiveSection(initialSection);
    }
  }, [isOpen, initialSection]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/90 text-white flex items-center justify-center shadow-xs">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-white leading-tight">
                Информационный центр колледжа EKEB
              </h3>
              <p className="text-xs text-slate-400">
                Европейский высший колледж цифровых технологий и предпринимательства
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body with Left Category Sidebar and Main View */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Quick Navigator Sidebar */}
          <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-3 overflow-y-auto shrink-0 space-y-4">
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1.5">
                О колледже
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('history')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'history' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <History className="w-3.5 h-3.5 shrink-0" />
                  <span>История колледжа</span>
                </button>
                <button
                  onClick={() => setActiveSection('staff')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'staff' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Users className="w-3.5 h-3.5 shrink-0" />
                  <span>Коллектив колледжа</span>
                </button>
                <button
                  onClick={() => setActiveSection('license')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'license' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Лицензия</span>
                </button>
                <button
                  onClick={() => setActiveSection('partners')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'partners' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Handshake className="w-3.5 h-3.5 shrink-0" />
                  <span>Наши партнёры</span>
                </button>
                <button
                  onClick={() => setActiveSection('tour')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'tour' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5 shrink-0" />
                  <span>3D-тур по колледжу</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1.5">
                Студентам
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('rules')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'rules' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 shrink-0" />
                  <span>Правила распорядка</span>
                </button>
                <button
                  onClick={() => setActiveSection('schedule')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'schedule' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>Расписание и звонки</span>
                </button>
                <button
                  onClick={() => setActiveSection('csc')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'csc' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                  <span>Центр обслуживания (ЦОС)</span>
                </button>
                <button
                  onClick={() => setActiveSection('payment')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'payment' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5 shrink-0" />
                  <span>Оплата за обучение</span>
                </button>
                <button
                  onClick={() => setActiveSection('employment')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'employment' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span>Трудоустройство (90%)</span>
                </button>
                <button
                  onClick={() => setActiveSection('worldskills')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'worldskills' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Trophy className="w-3.5 h-3.5 shrink-0" />
                  <span>WorldSkills Kazakhstan</span>
                </button>
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-1.5">
                Документы и партнерство
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('regulations')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'regulations' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Нормативно-правовая база</span>
                </button>
                <button
                  onClick={() => setActiveSection('attestation')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'attestation' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0" />
                  <span>Аттестация 2024</span>
                </button>
                <button
                  onClick={() => setActiveSection('accreditation')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'accreditation' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Аккредитация</span>
                </button>
                <button
                  onClick={() => setActiveSection('memorandums')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'memorandums' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Handshake className="w-3.5 h-3.5 shrink-0" />
                  <span>Меморандумы и договора</span>
                </button>
                <button
                  onClick={() => setActiveSection('projects')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    activeSection === 'projects' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 shrink-0" />
                  <span>Проекты и дуальное обучение</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Details Panel */}
          <div className="flex-1 p-5 sm:p-8 overflow-y-auto space-y-6">
            {/* SECTION 1: ИСТОРИЯ КОЛЛЕДЖА */}
            {activeSection === 'history' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <History className="w-3.5 h-3.5" />
                    <span>Летопись развития</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    История Европейского высшего колледжа (EKEB)
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    От классического экономического колледжа до ведущего европейского центра цифровых технологий и предпринимательства в Западном Казахстане.
                  </p>
                </div>

                {/* Key Milestones Timeline */}
                <div className="relative pl-6 border-l-2 border-blue-200 space-y-6">
                  {/* 2010 */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs"></div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
                      <div className="text-xs font-bold text-blue-700 mb-0.5">2010 год — Основание</div>
                      <h4 className="text-sm font-bold text-slate-900">Открытие колледжа в городе Актобе</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Колледж был открыт на базе Алматинской академии экономики и статистики (ААЭС). Первыми направлениями стали «Учет и аудит» и «Финансы», обеспечившие регион квалифицированными бухгалтерами и экономистами.
                      </p>
                    </div>
                  </div>

                  {/* 2011 */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-xs"></div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
                      <div className="text-xs font-bold text-sky-700 mb-0.5">2011 год — Расширение специальностей</div>
                      <h4 className="text-sm font-bold text-slate-900">Лицензирование IT и гуманитарных программ</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Введены специальности: «Информационные системы», «Правоведение», «Организация обслуживания гостиничных хозяйств» и «Переводческое дело». Сформирована база компьютерных классов.
                      </p>
                    </div>
                  </div>

                  {/* 2019 */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-xs"></div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
                      <div className="text-xs font-bold text-indigo-700 mb-0.5">2019 год — Новое имя</div>
                      <h4 className="text-sm font-bold text-slate-900">Актюбинский учетно-финансовый колледж им. Сагынбека Раимова</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        В честь видного финансиста и педагога колледж укрепил финансово-банковские связи с крупнейшими финансовыми институтами Казахстана.
                      </p>
                    </div>
                  </div>

                  {/* 2020 - 2021 */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-white shadow-xs"></div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
                      <div className="text-xs font-bold text-amber-700 mb-0.5">2020–2021 годы — Европейские стандарты и аккредитация</div>
                      <h4 className="text-sm font-bold text-slate-900">Европейский высший колледж экономики, статистики и права</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Успешно пройдена институциональная и специализированная аккредитация агентствами РК. С 2021–2022 учебного года колледж получил государственный образовательный заказ на бесплатное обучение (госгранты).
                      </p>
                    </div>
                  </div>

                  {/* 2026 */}
                  <div className="relative group">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-xs"></div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 shadow-xs">
                      <div className="text-xs font-bold text-emerald-700 mb-0.5">Современный этап — Цифровая трансформация</div>
                      <h4 className="text-sm font-bold text-slate-900">Европейский высший колледж цифровых технологий и предпринимательства (EKEB)</h4>
                      <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                        Фокус на передовые технологии: разработка ПО, кибербезопасность, веб-разработка, цифровой маркетинг и стартап-предпринимательство. Внедрено дуальное обучение с гарантией трудоустройства до 90%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key College Stats Banner */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                    <div className="text-xl font-extrabold text-blue-700">2 400+</div>
                    <div className="text-[11px] text-slate-600 font-medium mt-0.5">Выпускников</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                    <div className="text-xl font-extrabold text-emerald-700">90%</div>
                    <div className="text-[11px] text-slate-600 font-medium mt-0.5">Трудоустройство</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                    <div className="text-xl font-extrabold text-indigo-700">50+</div>
                    <div className="text-[11px] text-slate-600 font-medium mt-0.5">Баз практик и партнеров</div>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-center">
                    <div className="text-xl font-extrabold text-amber-700">100%</div>
                    <div className="text-[11px] text-slate-600 font-medium mt-0.5">Гос. аккредитация</div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 2: КОЛЛЕКТИВ КОЛЛЕДЖА */}
            {activeSection === 'staff' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>Педагогический состав</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Руководство и коллектив колледжа EKEB
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Преподаватели-практики, кандидаты наук, магистры и сертифицированные IT-эксперты.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-700 text-white font-bold flex items-center justify-center text-lg">
                        БД
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          Джармагамбетова Багдагуль Сансызбаевна
                        </h4>
                        <div className="text-xs text-blue-700 font-semibold">Директор колледжа</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      Руководитель высшей квалификационной категории, педагог-исследователь. Опыт в сфере ТиПО — более 20 лет.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-indigo-700 text-white font-bold flex items-center justify-center text-lg">
                        ТТ
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          Туремуратов Талгат Муканбетович
                        </h4>
                        <div className="text-xs text-indigo-700 font-semibold">Учредитель колледжа EKEB</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      Стратегическое развитие материально-технической базы, привлечение инвестиций и международных образовательных стандартов.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white font-bold flex items-center justify-center text-lg">
                        УР
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          Заместитель по учебной работе
                        </h4>
                        <div className="text-xs text-emerald-700 font-semibold">Учебно-методическая часть</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      Контроль образовательных программ, внедрение кредитно-модульной системы и платформы SmartNation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center text-lg">
                        ВР
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          Заместитель по воспитательной работе
                        </h4>
                        <div className="text-xs text-amber-700 font-semibold">Студенческое самоуправление</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                      Организация молодежных форумов, дебатного клуба, волонтерского движения и спартакиад.
                    </p>
                  </div>
                </div>

                <div className="bg-sky-50/70 border border-sky-200 rounded-xl p-4 text-xs text-slate-700 space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>Квалификационная характеристика коллектива:</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                    <li>• 100% преподавателей спецдисциплин имеют отраслевой практический стаж</li>
                    <li>• Сертификаты вендоров Microsoft, Cisco, 1C:Предприятие</li>
                    <li>• Эксперты региональных чемпионатов WorldSkills Kazakhstan</li>
                    <li>• Ежегодные курсы повышения квалификации в НЦПК «Өрлеу» и холдинге «Talap»</li>
                  </ul>
                </div>
              </div>
            )}

            {/* SECTION 3: ЛИЦЕНЗИЯ */}
            {activeSection === 'license' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Государственный статус</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Государственная лицензия и свидетельства
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Колледж ведет образовательную деятельность на основании бессрочной государственной лицензии Республики Казахстан.
                  </p>
                </div>

                <div className="bg-white border-2 border-emerald-500/30 rounded-2xl p-5 shadow-xs space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <div className="text-xs text-slate-500">Номер лицензии:</div>
                      <div className="text-base sm:text-lg font-mono font-bold text-slate-900">
                        № KZ38LAA00003412
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Бессрочная лицензия</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold text-slate-900">Орган, выдавший лицензию:</span>
                      <p className="text-slate-600 mt-0.5">
                        Департамент по обеспечению качества в сфере образования Актюбинской области Комитета по обеспечению качества в сфере просвещения РК
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900">Юридический адрес:</span>
                      <p className="text-slate-600 mt-0.5">
                        030000, Республика Казахстан, г. Актобе, район Астана, ул. Маресьева, дом 105
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Лицензированные направления подготовки:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="p-2 bg-white rounded-lg border border-slate-200">06130100 — Программное обеспечение (по видам)</div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200">06120100 — Вычислительная техника и информационные сети</div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200">04110100 — Учет и аудит</div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200">04120100 — Банковское и страховое дело</div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200">04140100 — Маркетинг (по отраслям)</div>
                    <div className="p-2 bg-white rounded-lg border border-slate-200">04210100 — Правоведение</div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 4: НАШИ ПАРТНЁРЫ */}
            {activeSection === 'partners' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <Handshake className="w-3.5 h-3.5" />
                    <span>Работодатели и базы практик</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Партнеры колледжа EKEB
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Более 50 ведущих предприятий, банков, IT-компаний и государственных органов, где наши студенты проходят дуальное обучение и трудоустраиваются.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { name: 'АО «Kaspi Bank»', desc: 'Филиал г. Актобе, IT-инфраструктура и финансовые сервисы', category: 'Банки и финансы' },
                    { name: 'АО «Halyk Bank»', desc: 'Дуальное обучение и практика студентов специальности Учет и аудит', category: 'Банки и финансы' },
                    { name: 'Палата предпринимателей «Атамекен»', desc: 'Бизнес-инкубация, стартап-проекты и содействие трудоустройству', category: 'Предпринимательство' },
                    { name: 'ТОО «Dala IT Solutions»', desc: 'Веб-разработка, мобильные приложения, стажировки для программистов', category: 'IT и разработка' },
                    { name: 'Коллегия адвокатов Актюбинской области', desc: 'Юридическая практика для студентов специальности Правоведение', category: 'Юриспруденция' },
                    { name: 'АО «Jusan Bank»', desc: 'Банковские операции, аналитика и кредитование', category: 'Банки и финансы' },
                    { name: 'IT-Park Aktobe', desc: 'Хакатон-инкубаторы, WorldSkills подготовка и менторство', category: 'Инновации' },
                    { name: 'Департамент юстиции г. Актобе', desc: 'Государственная служба и регистрационные процедуры', category: 'Госсектор' },
                    { name: 'ТОО «1C:Франчайзинг Актобе»', desc: 'Автоматизация бухучета и сертификация 1С:Специалист', category: 'IT и аудит' }
                  ].map((partner, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors shadow-xs">
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">
                        {partner.category}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{partner.name}</h4>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">{partner.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 5: 3D ТУР ПО КОЛЛЕДЖУ */}
            {activeSection === 'tour' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Виртуальная панорама</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    3D-тур по колледжу EKEB
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Интерактивное виртуальное знакомство с кампусом колледжа по адресу ул. Маресьева, 105.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-900 text-white p-5 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/30 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                        Кабинет IT и программирования
                      </span>
                      <h4 className="text-base font-bold mt-2">Компьютерный зал № 204</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Рабочие станции на Intel Core i7, широкоформатные мониторы, среда для веб-разработки, Python, C# и баз данных.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-blue-400 font-semibold gap-1">
                      <span>Панорама 360° доступна в кампусе</span>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-900 text-white p-5 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                        Медиатека и коворкинг
                      </span>
                      <h4 className="text-base font-bold mt-2">Электронная библиотека EKEB</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Зона свободной самостоятельной работы студентов с доступом к электронным базам РНТБ и электронным учебникам.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-emerald-400 font-semibold gap-1">
                      <span>Панорама 360° доступна в кампусе</span>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-900 text-white p-5 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                        Зал судебных заседаний
                      </span>
                      <h4 className="text-base font-bold mt-2">Учебный зал криминалистики и права</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Специализированная лаборатория для практических судебных инсценировок студентов правоведения.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-amber-400 font-semibold gap-1">
                      <span>Панорама 360° доступна в кампусе</span>
                    </div>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs bg-slate-900 text-white p-5 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <span className="px-2 py-0.5 rounded-md bg-rose-500/30 text-rose-300 text-[10px] font-bold uppercase tracking-wider">
                        Спортивный комплекс
                      </span>
                      <h4 className="text-base font-bold mt-2">Спортивный зал и тренажерная зона</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        Волейбольная и баскетбольная площадки, зона настольного тенниса и силовых тренажеров.
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-rose-400 font-semibold gap-1">
                      <span>Панорама 360° доступна в кампусе</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Приглашаем посетить наш колледж лично в день открытых дверей: ул. Маресьева, 105</span>
                  </div>
                  <a
                    href="tel:+77132544424"
                    className="px-3 py-1.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Записаться на визит
                  </a>
                </div>
              </div>
            )}

            {/* SECTION 6: РАСПИСАНИЕ И ЗВОНКИ */}
            {activeSection === 'schedule' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Учебный распорядок</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Расписание занятий и звонков
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Обучение в колледже организовано в 2 смены. Продолжительность одной пары занятий — 80 минут (2 академических часа по 40 минут с перерывом).
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Смена 1 */}
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                      I Смена (Утренняя)
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold text-slate-900">1 пара:</span>
                        <span className="font-mono text-slate-600">08:30 — 09:50</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold text-slate-900">2 пара:</span>
                        <span className="font-mono text-slate-600">10:00 — 11:20</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold text-slate-900">3 пара:</span>
                        <span className="font-mono text-slate-600">11:40 — 13:00 (Обед)</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="font-semibold text-slate-900">4 пара:</span>
                        <span className="font-mono text-slate-600">13:10 — 14:30</span>
                      </div>
                    </div>
                  </div>

                  {/* Смена 2 */}
                  <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                    <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                      II Смена (Дневная)
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold text-slate-900">1 пара:</span>
                        <span className="font-mono text-slate-600">14:00 — 15:20</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold text-slate-900">2 пара:</span>
                        <span className="font-mono text-slate-600">15:30 — 16:50</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="font-semibold text-slate-900">3 пара:</span>
                        <span className="font-mono text-slate-600">17:00 — 18:20</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span className="font-semibold text-slate-900">4 пара:</span>
                        <span className="font-mono text-slate-600">18:30 — 19:50</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between text-xs text-slate-800">
                  <div>
                    <div className="font-bold">Электронный журнал и расписание групп:</div>
                    <div className="text-slate-600 text-[11px] mt-0.5">
                      Персональное расписание уроков и оценки доступны в АИС "College SmartNation"
                    </div>
                  </div>
                  <a
                    href="https://snation.kz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0"
                  >
                    <span>SmartNation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* SECTION 7: ПРАВИЛА РАСПОРЯДКА */}
            {activeSection === 'rules' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Кодекс студента</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Правила внутреннего распорядка
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Соблюдение академической честности, дисциплины и взаимного уважения в Европейском высшем колледже EKEB.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                    <div className="font-bold text-slate-900">1. Посещаемость и пропускной режим</div>
                    <p className="text-slate-600 leading-relaxed">
                      Вход в здание колледжа осуществляется строго по студенческим пропускам. Студенты обязаны являться на занятия без опозданий за 10 минут до звонка.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                    <div className="font-bold text-slate-900">2. Дресс-код и внешний вид</div>
                    <p className="text-slate-600 leading-relaxed">
                      В колледже принят деловой (классический) стиль одежды. Запрещается нахождение на занятиях в спортивной одежде (кроме занятий физкультурой) и верхней одежде.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                    <div className="font-bold text-slate-900">3. Академическая честность и использование гаджетов</div>
                    <p className="text-slate-600 leading-relaxed">
                      Во время учебных занятий мобильные телефоны переводятся в беззвучный режим. Во время зачетов и экзаменов использование несанкционированных средств связи строго запрещено.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
                    <div className="font-bold text-slate-900">4. Бережное отношение к имуществу</div>
                    <p className="text-slate-600 leading-relaxed">
                      Студенты несут ответственность за сохранность учебного оборудования, компьютерной техники и библиотечного фонда колледжа.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 8: ОПЛАТА ЗА ОБУЧЕНИЕ */}
            {activeSection === 'payment' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Финансовый отдел</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Оплата за обучение и реквизиты
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Удобные способы онлайн-оплаты через мобильные приложения Kaspi.kz, Halyk Bank и банковский перевод.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-500 text-white flex items-center justify-center font-bold text-xs">
                        Kaspi
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Оплата через приложение Kaspi.kz</h4>
                        <p className="text-xs text-slate-600">Без комиссии, моментальное зачисление по ИИН студента</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-white border border-emerald-200 text-emerald-800 rounded-lg text-xs font-bold">
                      Рекомендуется
                    </span>
                  </div>

                  <div className="text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-emerald-200 space-y-1.5">
                    <div className="font-semibold text-slate-900">Инструкция по оплате:</div>
                    <ol className="list-decimal list-inside space-y-1 text-slate-600">
                      <li>Откройте приложение <strong>Kaspi.kz</strong> → Платежи</li>
                      <li>В строке поиска введите: <strong>«Европейский высший колледж»</strong> или <strong>«EKEB»</strong></li>
                      <li>Укажите <strong>ИИН студента</strong> и сумму к оплате</li>
                      <li>Подтвердите платеж (квитанция сохраняется в приложении)</li>
                    </ol>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Банковские реквизиты для юридических лиц:</div>
                  <div className="font-mono text-slate-600 space-y-1 text-[11px]">
                    <div>Наименование: Учреждение «Европейский высший колледж цифровых технологий и предпринимательства»</div>
                    <div>БИН: 100 840 011 254</div>
                    <div>Адрес: г. Актобе, район Астана, ул. Маресьева, 105</div>
                    <div>Назначение платежа: Оплата за обучение за [ФИО студента], специальность [Код]</div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 9: ЦЕНТР ОБСЛУЖИВАНИЯ СТУДЕНТОВ (ЦОС) */}
            {activeSection === 'csc' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Одно окно</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Центр обслуживания студентов (ЦОС)
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Оперативная выдача академических справок, транскриптов, документов для военкомата и консультационная помощь по принципу «одного окна».
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="font-bold text-slate-900 mb-1">Справка с места учебы (Приложение 4)</div>
                    <p className="text-slate-600">Для военкоматов (РВК), ЦОН, пособий и места работы родителей. Срок: 1 рабочий день.</p>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="font-bold text-slate-900 mb-1">Академическая справка и транскрипт</div>
                    <p className="text-slate-600">Выписка оценок с указанием кредитов и часов при переводе или восстановлении.</p>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="font-bold text-slate-900 mb-1">Оформление льготного проезда</div>
                    <p className="text-slate-600">Консультация и оформление студенческих проездных билетов на общественный транспорт.</p>
                  </div>

                  <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="font-bold text-slate-900 mb-1">Дубликаты документов</div>
                    <p className="text-slate-600">Восстановление утерянных студенческих билетов, зачетных книжек и пропусков.</p>
                  </div>
                </div>

                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl text-xs text-slate-700">
                  <span className="font-bold">График работы ЦОС:</span> Понедельник – Пятница с 09:00 до 18:00 (обед 13:00–14:00). Кабинет 102 (1 этаж).
                </div>
              </div>
            )}

            {/* SECTION 10: ТРУДОУСТРОЙСТВО */}
            {activeSection === 'employment' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Карьерный центр</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Центр карьеры и трудоустройства (90%)
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    90% наших выпускников успешно начинают трудовую деятельность в первые 3 месяца после окончания колледжа благодаря дуальной модели обучения.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                    <div className="text-2xl font-black text-emerald-800">90%</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Показатель занятости</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
                    <div className="text-2xl font-black text-blue-800">50+</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Организаций-партнеров</div>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200 text-center">
                    <div className="text-2xl font-black text-indigo-800">100%</div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">Обеспечение практикой</div>
                  </div>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-xs text-slate-700">
                  <div className="font-bold text-slate-900">Что делает карьерный центр EKEB:</div>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>• Ежегодная ярмарка вакансий с участием топ-работодателей Актюбинской области</li>
                    <li>• Составление профессионального резюме и портфолио для IT и финансовых специальностей</li>
                    <li>• Тренинги по прохождению собеседований и развитию soft-skills</li>
                    <li>• Мониторинг карьерного роста выпускников в течение первых трех лет</li>
                  </ul>
                </div>
              </div>
            )}

            {/* SECTION 11: WORLDSKILLS */}
            {activeSection === 'worldskills' && (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-2">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>Профессиональное мастерство</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Движение WorldSkills Kazakhstan
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Студенты колледжа EKEB — постоянные участники и призеры региональных и национальных чемпионатов профессионального мастерства WorldSkills.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[10px]">Компетенция</span>
                    <h4 className="font-bold text-slate-900 mt-1.5 text-sm">Веб-технологии (Web Technologies)</h4>
                    <p className="text-slate-600 mt-1">Разработка адаптивных интерфейсов, клиент-серверная архитектура, интеграция API.</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 font-bold text-[10px]">Компетенция</span>
                    <h4 className="font-bold text-slate-900 mt-1.5 text-sm">Сетевое и системное администрирование</h4>
                    <p className="text-slate-600 mt-1">Настройка маршрутизации Cisco, управление серверами Linux/Windows, безопасность.</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Компетенция</span>
                    <h4 className="font-bold text-slate-900 mt-1.5 text-sm">Бухгалтерский учет (Accounting)</h4>
                    <p className="text-slate-600 mt-1">Ведение учета в 1С:Предприятие 8.3, налоговая отчетность, финансовый анализ.</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">Компетенция</span>
                    <h4 className="font-bold text-slate-900 mt-1.5 text-sm">Предпринимательство (Entrepreneurship)</h4>
                    <p className="text-slate-600 mt-1">Защита бизнес-планов, финансовое моделирование, маркетинг и питчинг.</p>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION: НОРМАТИВНО-ПРАВОВАЯ БАЗА */}
            {activeSection === 'regulations' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Законодательство РК</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Нормативно-правовая база колледжа EKEB
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Официальные правовые акты, законы Республики Казахстан и внутренние нормативные регламенты, на основании которых строится образовательный процесс.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-[11px] font-bold text-blue-700 uppercase">Закон РК</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Закон РК «Об образовании»</h4>
                      <p className="text-xs text-slate-500 mt-1">Основополагающий закон, определяющий государственную политику в области технического и профессионального образования.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Действующий</span>
                      <a href="https://adilet.zan.kz/rus/docs/Z070000319_" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                        Изучить <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <FileCheck className="w-4 h-4 text-emerald-600" />
                        <span className="text-[11px] font-bold text-emerald-700 uppercase">Гос. регистрация</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Свидетельство о гос. регистрации и Устав</h4>
                      <p className="text-xs text-slate-500 mt-1">Регистрация в органах юстиции РК, Устав Учреждения «Европейский высший колледж экономики, статистики и права».</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> БИН: 100740003412</span>
                      <span className="text-slate-400">г. Актобе</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <ShieldCheck className="w-4 h-4 text-indigo-600" />
                        <span className="text-[11px] font-bold text-indigo-700 uppercase">Государственная лицензия</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Генеральная лицензия № KZ38LAA00003412</h4>
                      <p className="text-xs text-slate-500 mt-1">Бессрочная лицензия Министерства просвещения РК на подготовку кадров ТиПО по 8 аккредитованным специальностям.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-indigo-700 font-semibold">Бессрочная</span>
                      <button onClick={() => setActiveSection('license')} className="text-blue-600 hover:underline font-semibold cursor-pointer">
                        Смотреть лицензию →
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <BookOpen className="w-4 h-4 text-amber-600" />
                        <span className="text-[11px] font-bold text-amber-700 uppercase">Приказ МОН РК № 130</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Перечень обязательных документов педагога</h4>
                      <p className="text-xs text-slate-500 mt-1">О регламентации форм документов преподавательского состава ТиПО в цифровом образовательном пространстве.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">SmartNation / Кунделик</span>
                      <span className="text-emerald-700 font-semibold">Внедрено</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <FileText className="w-4 h-4 text-rose-600" />
                        <span className="text-[11px] font-bold text-rose-700 uppercase">Кодекс РК</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Трудовой кодекс Республики Казахстан</h4>
                      <p className="text-xs text-slate-500 mt-1">Защита прав работников образования, стандарты безопасности труда и условия профессиональной деятельности.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Соблюдение 100%</span>
                      <a href="https://adilet.zan.kz/rus/docs/K1500000414" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline flex items-center gap-1 font-semibold">
                        Әділет <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Award className="w-4 h-4 text-teal-600" />
                        <span className="text-[11px] font-bold text-teal-700 uppercase">Приказ № 79</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Программа «Цифровой портфель»</h4>
                      <p className="text-xs text-slate-500 mt-1">Стандарты формирования цифрового профиля студента, электронного журнала и мониторинга академических достижений.</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-teal-700 font-semibold">Цифровизация EKEB</span>
                      <span className="text-slate-400">Активно</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION: АТТЕСТАЦИЯ 2024 */}
            {activeSection === 'attestation' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Государственный контроль качества</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Государственная аттестация колледжа 2024 года
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Результаты плановой государственной аттестации Департаментом по обеспечению качества в сфере образования Актюбинской области.
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">Решение комиссии: КОЛЛЕДЖ АТТЕСТОВАН</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Образовательная деятельность EKEB признана полностью соответствующей требованиям ГОСО ТиПО РК.
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs shrink-0">
                    2024 — 2029 гг.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-emerald-600">100%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Соответствие стандартам ГОСО</div>
                    <p className="text-[11px] text-slate-500 mt-1">Все 8 учебных планов и программ прошли профильную экспертизу.</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-blue-600">68%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Квалификация педагогов</div>
                    <p className="text-[11px] text-slate-500 mt-1">Доля преподавателей высшей категории, магистров и экспертов отрасли.</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-indigo-600">94.8%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Удовлетворенность качеством</div>
                    <p className="text-[11px] text-slate-500 mt-1">Результаты независимого анонимного анкетирования студентов и родителей.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900">Ключевые блоки экспертной проверки:</h4>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3 text-xs">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">1</div>
                      <div>
                        <div className="font-bold text-slate-900">Учебно-методическое обеспечение</div>
                        <p className="text-slate-600 mt-0.5">Наличие актуализированных рабочих программ, цифрового контента и учебно-методических комплексов дисциплин (УМКД) на государственном и русском языках.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">2</div>
                      <div>
                        <div className="font-bold text-slate-900">Материально-техническая оснащенность</div>
                        <p className="text-slate-600 mt-0.5">Компьютерные классы с оптоволоконным интернетом, интерактивные панели, лицензионный софт (1С, Cisco Packet Tracer, IDE) и специализированные учебные аудитории.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">3</div>
                      <div>
                        <div className="font-bold text-slate-900">Организация производственной практики и трудоустройство</div>
                        <p className="text-slate-600 mt-0.5">Подтверждены договоры со 120+ профильными предприятиями, показатель занятости выпускников составил 90%.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION: АККРЕДИТАЦИЯ */}
            {activeSection === 'accreditation' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Независимый аудит качества</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Аккредитация колледжа и образовательных программ
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Европейский высший колледж цифровых технологий и предпринимательства имеет официальный статус институционально и специализированно аккредитованной организации образования.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-5 bg-white border-2 border-blue-200 rounded-2xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold rounded-md text-[10px] uppercase">
                        Институциональная аккредитация
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-base mt-1.5">
                        Свидетельство об институциональной аккредитации
                      </h4>
                      <p className="text-slate-600 mt-1">
                        Выдано независимым аккредитационным агентством, входящим в Национальный реестр Министерства просвещения РК и Европейский реестр EQAR.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 px-4 py-2.5 rounded-xl text-center shrink-0">
                      <div className="text-[11px] text-blue-700 font-bold">Срок действия</div>
                      <div className="text-sm font-extrabold text-blue-900">до 2028 года</div>
                    </div>
                  </div>

                  <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
                    <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-md text-[10px] uppercase">
                      Специализированная программная аккредитация
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-base mt-1.5">
                      100% аккредитованных образовательных программ
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Все 8 действующих специальностей колледжа успешно аккредитованы:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>04110100 Учет и аудит</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>04120100 Банковское и страховое дело</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>04120200 Оценка (по отраслям)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>04140100 Маркетинг (по отраслям)</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>04210100 Правоведение</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>06130100 Программное обеспечение</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>06120100 Вычислительная техника и сети</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>06120200 Системы информационной безопасности</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SECTION: МЕМОРАНДУМЫ И ДОГОВОРА */}
            {activeSection === 'memorandums' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold mb-2">
                    <Handshake className="w-3.5 h-3.5" />
                    <span>Сотрудничество с индустрией</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Меморандумы и договора о партнерстве
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    EKEB заключил свыше 120 соглашений о стратегическом партнерстве с финансовыми организациями, IT-компаниями, госорганами и вузами.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-blue-600" />
                      <h4 className="font-bold text-slate-900 text-sm">Банковский и финансовый сектор</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Договоры с АО «Kaspi Bank», АО «Halyk Bank», АО «Банк ЦентрКредит», АО «ForteBank». Студенты проходят стажировки в отделах кредитования, кассовых операций и финансового анализа.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-indigo-600" />
                      <h4 className="font-bold text-slate-900 text-sm">IT-индустрия и цифровые технологии</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Меморандумы с региональным IT-хабом, ТОО «DalaTech Solutions», веб-студиями и интеграторами безопасности. Реализация реальных дипломных проектов для бизнеса.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <h4 className="font-bold text-slate-900 text-sm">Юридические палаты и госорганы</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Соглашения с Коллегией адвокатов Актюбинской области, нотариальными палатами, судебными инстанциями и ЦОНами НАО «Правительство для граждан».
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                      <h4 className="font-bold text-slate-900 text-sm">Вузы-партнеры (непрерывное обучение)</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Договоры о сокращенных сроках бакалавриата (от 2 до 2.5 лет) для выпускников EKEB с АРУ им. К. Жубанова, Баишев Университетом и ААЭС.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-slate-600">Хотите заключить меморандум с колледжем EKEB?</span>
                  <a href="mailto:partner@ekeb.edu.kz" className="text-blue-700 font-bold hover:underline flex items-center gap-1">
                    Отдел партнерства: partner@ekeb.edu.kz <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* SECTION: ПРОЕКТЫ И ДУАЛЬНОЕ ОБУЧЕНИЕ */}
            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Практико-ориентированное обучение</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">
                    Проекты и система дуального обучения EKEB
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Слияние академических знаний и практического производства: студенты осваивают профессию непосредственно на рабочих местах.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-blue-600">60%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Практика в компаниях</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Опыт на предприятии</div>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-indigo-600">40%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Теория в колледже</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Базовые дисциплины</div>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-emerald-600">120+</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Баз практики</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Действующие соглашения</div>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                    <div className="text-2xl font-black text-amber-600">90%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Трудоустройство</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Офферы после практики</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900">Инновационные проекты колледжа:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                      <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-blue-600" />
                        <span>Цифровой дневник практики SmartNation</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        С 2024–2025 года весь учет посещаемости практики, выставление баллов наставниками предприятий и прикрепление отчетов переведены в платформу SmartNation.
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                      <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                        <Trophy className="w-4 h-4 text-amber-600" />
                        <span>Инкубатор студенческих IT-стартапов</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Студенческие команды разработчиков EKEB создают веб-сервисы, телеграм-боты и мобильные приложения для автоматизации малого бизнеса региона.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            <span>г. Актобе, район Астана, ул. Маресьева, 105 • Тел.: +7 (7132) 54-44-24</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </motion.div>
    </div>
  );
};
