import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Eye, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Sparkles, 
  Check, 
  MessageSquare,
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
  ExternalLink,
  BookOpen,
  Inbox
} from 'lucide-react';
import { Language } from '../types';
import { COLLEGE_INFO, UI_TRANSLATIONS } from '../data/mockData';
import { CollegeModalSection } from './CollegeInfoModal';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenApplication: () => void;
  onOpenDirectorBlog: () => void;
  onOpenCollegeInfo: (section: CollegeModalSection) => void;
  onOpenTrustBox?: () => void;
  onOpenLibrary?: () => void;
  onOpenDirectionsMap?: () => void;
  a11yFontSize: 'normal' | 'large' | 'xlarge';
  onA11yFontSizeChange: (size: 'normal' | 'large' | 'xlarge') => void;
  a11yHighContrast: boolean;
  onA11yHighContrastToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenApplication,
  onOpenDirectorBlog,
  onOpenCollegeInfo,
  onOpenTrustBox,
  onOpenLibrary,
  onOpenDirectionsMap,
  a11yFontSize,
  onA11yFontSizeChange,
  a11yHighContrast,
  onA11yHighContrastToggle,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [a11yPanelOpen, setA11yPanelOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);

  const desktopNavRef = useRef<HTMLElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpenDropdown = (menuKey: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(menuKey);
  };

  const handleCloseDropdown = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // 250ms grace period so moving mouse down or across never accidentally closes the menu
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleToggleDropdown = (menuKey: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(prev => (prev === menuKey ? null : menuKey));
  };

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (desktopNavRef.current && !desktopNavRef.current.contains(target)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setActiveDropdown(null);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleGlobalClick);
    return () => {
      document.removeEventListener('mousedown', handleGlobalClick);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const t = UI_TRANSLATIONS[language];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'Русский', flag: 'RU' },
    { code: 'kk', label: 'Қазақша', flag: 'KZ' },
    { code: 'en', label: 'English', flag: 'EN' },
  ];

  const currentLangLabel = languages.find(l => l.code === language)?.flag || 'RU';

  const menuData = {
    ru: {
      about: 'О колледже',
      students: 'Студентам',
      documents: 'Документы',
      cooperation: 'Сотрудничество',
      specialties: 'Специальности',
      admission: 'Поступление',
      directorBlog: 'Блог директора',
    },
    kk: {
      about: 'Колледж туралы',
      students: 'Студенттерге',
      documents: 'Құжаттар',
      cooperation: 'Ынтымақтастық',
      specialties: 'Мамандықтар',
      admission: 'Қабылдау',
      directorBlog: 'Директор блогы',
    },
    en: {
      about: 'About College',
      students: 'Students',
      documents: 'Documents',
      cooperation: 'Partnership',
      specialties: 'Specialties',
      admission: 'Admission',
      directorBlog: "Director's Blog",
    }
  };

  const navLabels = menuData[language] || menuData.ru;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-200">
      {/* Top micro-bar with location, phone, and quick a11y */}
      <div className="bg-[#FAF7F2] border-b border-stone-200/80 py-1.5 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <span className="flex items-center gap-1.5 font-medium text-slate-700 shrink-0">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span className="font-semibold text-slate-900">{COLLEGE_INFO.city}:</span>
              <span>{language === 'kk' ? 'Маресьев к-сі, 105' : 'ул. Маресьева, 105'}</span>
            </span>
            <span className="hidden md:inline-block text-slate-300 shrink-0">•</span>
            <a 
              href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`} 
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-800 hover:text-blue-700 font-semibold transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{COLLEGE_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Director Blog Button in top bar for instant access */}
            <button
              onClick={onOpenDirectorBlog}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors cursor-pointer shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
              <span>{navLabels.directorBlog}</span>
            </button>

            {/* Accessibility button */}
            <button
              onClick={() => setA11yPanelOpen(!a11yPanelOpen)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer shrink-0 ${
                a11yHighContrast || a11yFontSize !== 'normal' 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
              }`}
              title={t.visuallyImpaired}
              aria-label={t.visuallyImpaired}
            >
              <Eye className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="hidden sm:inline">{t.visuallyImpaired}</span>
            </button>

            {/* Language switcher */}
            <div ref={langDropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-xs transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{currentLangLabel}</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full pt-1.5 w-32 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-lg shadow-lg border border-slate-200 py-1 relative before:absolute before:-top-2 before:left-0 before:right-0 before:h-2 before:content-['']">
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => {
                          onLanguageChange(item.code);
                          setLangDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs hover:bg-sky-50 flex items-center justify-between text-slate-700 font-medium cursor-pointer"
                      >
                        <span>{item.label}</span>
                        {language === item.code && <Check className="w-3.5 h-3.5 text-sky-600" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Control Panel Bar (Expandable) */}
      {a11yPanelOpen && (
        <div className="bg-amber-50/95 border-b border-amber-200 px-4 py-3 text-xs text-slate-800 shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-700" />
              <span className="font-bold text-slate-900">{t.a11yTitle || 'Настройки доступности'}:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-slate-700 font-semibold">{t.fontSize || (language === 'kk' ? 'Қаріп өлшемі' : language === 'en' ? 'Font Size' : 'Размер шрифта')}:</span>
              <button
                type="button"
                onClick={() => onA11yFontSizeChange('normal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  a11yFontSize === 'normal' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                A ({t.fontNormal || 'Обычный'})
              </button>
              <button
                type="button"
                onClick={() => onA11yFontSizeChange('large')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  a11yFontSize === 'large' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                A+ (+20%)
              </button>
              <button
                type="button"
                onClick={() => onA11yFontSizeChange('xlarge')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  a11yFontSize === 'xlarge' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                A++ (+40%)
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onA11yHighContrastToggle}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  a11yHighContrast 
                    ? 'bg-black text-white ring-2 ring-amber-400 shadow-xs' 
                    : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
                <span>{a11yHighContrast ? (t.contrastOn || 'Инверсия: ВКЛ') : (t.contrastOff || 'Инверсия: ВЫКЛ')}</span>
              </button>
              <button
                type="button"
                onClick={() => setA11yPanelOpen(false)}
                className="text-slate-500 hover:text-slate-800 p-1.5 rounded-lg hover:bg-amber-100/60 transition-colors cursor-pointer"
                aria-label={t.a11yClose || 'Закрыть панель'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-950 via-blue-800 to-sky-600 flex items-center justify-center text-white shadow-md shadow-blue-900/20 ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-sky-200" />
            </div>
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
                  EKEB
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 shrink-0">
                  {language === 'kk' ? 'Ақтөбе' : language === 'ru' ? 'Актобе' : 'Aktobe'}
                </span>
              </div>
              <span className="hidden md:block text-[11px] text-slate-500 font-medium leading-tight mt-0.5 max-w-[240px] 2xl:max-w-none truncate">
                {language === 'ru' 
                  ? 'Высший колледж цифровых технологий и бизнеса' 
                  : language === 'kk'
                  ? 'Цифрлық технологиялар және бизнес жоғары колледжі'
                  : 'College of Digital Technologies & Business'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation with Dropdowns (matching screenshots 5, 6, 7, 8) */}
          <nav ref={desktopNavRef} className="hidden xl:flex items-center gap-1.5 2xl:gap-3 text-xs font-semibold text-slate-700">
            {/* 1. Dropdown: О КОЛЛЕДЖЕ (Screenshot 5) */}
            <div 
              className="relative"
              onMouseEnter={() => handleOpenDropdown('about')}
              onMouseLeave={handleCloseDropdown}
            >
              <button 
                type="button"
                onClick={() => handleToggleDropdown('about')}
                aria-expanded={activeDropdown === 'about'}
                className={`px-2.5 py-2 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  activeDropdown === 'about'
                    ? 'text-blue-700 bg-blue-50/90 font-bold shadow-2xs'
                    : 'hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <span>{navLabels.about}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'about' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`} />
              </button>

              {activeDropdown === 'about' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleOpenDropdown('about')}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div className="relative bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200/90 py-2 text-xs before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('history');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <History className="w-3.5 h-3.5 text-blue-600" />
                      <span>История колледжа</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('staff');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Users className="w-3.5 h-3.5 text-blue-600" />
                      <span>Коллектив колледжа</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('license');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Лицензия</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('partners');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Handshake className="w-3.5 h-3.5 text-blue-600" />
                      <span>Наши партнёры</span>
                    </button>
                    <a
                      href="#contacts"
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>Контакты</span>
                    </a>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('achievements');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      <span>Достижения</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('media');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Newspaper className="w-3.5 h-3.5 text-blue-600" />
                      <span>СМИ о нас</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('tour');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Compass className="w-3.5 h-3.5 text-blue-600" />
                      <span>3D-тур по колледжу</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Dropdown: СТУДЕНТАМ (Screenshot 6) */}
            <div 
              className="relative"
              onMouseEnter={() => handleOpenDropdown('students')}
              onMouseLeave={handleCloseDropdown}
            >
              <button 
                type="button"
                onClick={() => handleToggleDropdown('students')}
                aria-expanded={activeDropdown === 'students'}
                className={`px-2.5 py-2 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  activeDropdown === 'students'
                    ? 'text-blue-700 bg-blue-50/90 font-bold shadow-2xs'
                    : 'hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <span>{navLabels.students}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'students' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`} />
              </button>

              {activeDropdown === 'students' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-76 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleOpenDropdown('students')}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div className="relative bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200/90 py-2 text-xs before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('rules');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Правила внутреннего распорядка</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('schedule');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Расписание занятий и звонков</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('exams');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Расписание консультаций и экзаменов</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('academic_plan');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>График учебного процесса</span>
                    </button>
                    <a
                      href="https://snation.kz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>АИС "College SmartNation"</span>
                      </span>
                      <span className="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">Вход</span>
                    </a>
                    {onOpenLibrary && (
                      <button
                        onClick={() => {
                          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                          setActiveDropdown(null);
                          onOpenLibrary();
                        }}
                        className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>Библиотека</span>
                      </button>
                    )}
                    {onOpenTrustBox && (
                      <button
                        onClick={() => {
                          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                          setActiveDropdown(null);
                          onOpenTrustBox();
                        }}
                        className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Inbox className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>Электронный ящик доверия</span>
                      </button>
                    )}
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('csc');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Центр обслуживания студентов</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('payment');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <CreditCard className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Оплата за обучение (Kaspi Pay)</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('employment');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Трудоустройство (90%)</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('worldskills');
                      }}
                      className="w-full text-left px-3.5 py-1.5 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Trophy className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>WorldSkills</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Dropdown: ДОКУМЕНТЫ (Screenshot 7) */}
            <div 
              className="relative"
              onMouseEnter={() => handleOpenDropdown('documents')}
              onMouseLeave={handleCloseDropdown}
            >
              <button 
                type="button"
                onClick={() => handleToggleDropdown('documents')}
                aria-expanded={activeDropdown === 'documents'}
                className={`px-2.5 py-2 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  activeDropdown === 'documents'
                    ? 'text-blue-700 bg-blue-50/90 font-bold shadow-2xs'
                    : 'hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <span>{navLabels.documents}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'documents' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`} />
              </button>

              {activeDropdown === 'documents' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleOpenDropdown('documents')}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div className="relative bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200/90 py-2 text-xs before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('regulations');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Нормативно-правовая документация</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('attestation');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Аттестация 2024</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('accreditation');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      <span>Аккредитация</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Dropdown: СОТРУДНИЧЕСТВО (Screenshot 8) */}
            <div 
              className="relative"
              onMouseEnter={() => handleOpenDropdown('cooperation')}
              onMouseLeave={handleCloseDropdown}
            >
              <button 
                type="button"
                onClick={() => handleToggleDropdown('cooperation')}
                aria-expanded={activeDropdown === 'cooperation'}
                className={`px-2.5 py-2 rounded-lg flex items-center gap-1 transition-all cursor-pointer ${
                  activeDropdown === 'cooperation'
                    ? 'text-blue-700 bg-blue-50/90 font-bold shadow-2xs'
                    : 'hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <span>{navLabels.cooperation}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === 'cooperation' ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`} />
              </button>

              {activeDropdown === 'cooperation' && (
                <div 
                  className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  onMouseEnter={() => handleOpenDropdown('cooperation')}
                  onMouseLeave={handleCloseDropdown}
                >
                  <div className="relative bg-white rounded-xl shadow-xl shadow-slate-900/10 border border-slate-200/90 py-2 text-xs before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('accreditation');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 text-blue-600" />
                      <span>Аккредитация</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('memorandums');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Handshake className="w-3.5 h-3.5 text-blue-600" />
                      <span>Меморандумы и договора</span>
                    </button>
                    <button
                      onClick={() => {
                        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                        setActiveDropdown(null);
                        onOpenCollegeInfo('projects');
                      }}
                      className="w-full text-left px-3.5 py-2 hover:bg-sky-50 text-slate-700 hover:text-blue-700 flex items-center gap-2.5 transition-colors cursor-pointer"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                      <span>Проекты и дуальное обучение</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Specialties anchor */}
            <a
              href="#specialties"
              onMouseEnter={handleCloseDropdown}
              className="px-2.5 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              {navLabels.specialties}
            </a>

            {/* Admission anchor */}
            <a
              href="#admission"
              onMouseEnter={handleCloseDropdown}
              className="px-2.5 py-2 rounded-lg hover:text-blue-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
            >
              {navLabels.admission}
            </a>

            {/* Direct Director's Blog Button in main nav */}
            <button
              onClick={onOpenDirectorBlog}
              onMouseEnter={handleCloseDropdown}
              className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs border border-blue-200"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-700" />
              <span>{navLabels.directorBlog}</span>
            </button>
          </nav>

          {/* Right actions: Desktop Apply button & Hamburger on < xl */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenApplication}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>{t.applyOnlineShort || t.applyOnline}</span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 sm:px-6 pt-3 pb-6 space-y-3 shadow-lg max-h-[80vh] overflow-y-auto">
          {/* Quick Director Blog Button in mobile menu */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDirectorBlog();
            }}
            className="w-full py-2.5 px-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-700" />
              <span>{navLabels.directorBlog}</span>
            </span>
            <span className="text-[10px] bg-amber-200 px-2 py-0.5 rounded-full font-bold">Вопрос онлайн</span>
          </button>

          {/* Accordion 1: О колледже */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileExpandedGroup(mobileExpandedGroup === 'about' ? null : 'about')}
              className="w-full px-3.5 py-2.5 bg-slate-50 text-left font-bold text-xs text-slate-800 flex items-center justify-between"
            >
              <span>{navLabels.about}</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileExpandedGroup === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedGroup === 'about' && (
              <div className="p-2 space-y-1 bg-white text-xs">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('history'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <History className="w-3.5 h-3.5 text-blue-600" />
                  <span>История колледжа</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('staff'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span>Коллектив колледжа</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('license'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Лицензия</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('partners'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <Handshake className="w-3.5 h-3.5 text-blue-600" />
                  <span>Наши партнёры</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('tour'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                  <span>3D-тур по колледжу</span>
                </button>
              </div>
            )}
          </div>

          {/* Accordion 2: Студентам */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setMobileExpandedGroup(mobileExpandedGroup === 'students' ? null : 'students')}
              className="w-full px-3.5 py-2.5 bg-slate-50 text-left font-bold text-xs text-slate-800 flex items-center justify-between"
            >
              <span>{navLabels.students}</span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileExpandedGroup === 'students' ? 'rotate-180' : ''}`} />
            </button>
            {mobileExpandedGroup === 'students' && (
              <div className="p-2 space-y-1 bg-white text-xs">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('rules'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Правила внутреннего распорядка</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('schedule'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Расписание занятий и звонков</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('csc'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>Центр обслуживания студентов (ЦОС)</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('payment'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                  <span>Оплата за обучение (Kaspi Pay)</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('employment'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>Трудоустройство</span>
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenCollegeInfo('worldskills'); }} 
                  className="w-full text-left p-2 rounded-lg hover:bg-slate-100 flex items-center gap-2"
                >
                  <Trophy className="w-3.5 h-3.5 text-blue-600" />
                  <span>WorldSkills</span>
                </button>
              </div>
            )}
          </div>

          {/* Regular mobile links */}
          <div className="space-y-1 pt-1">
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-xs text-slate-700 hover:bg-sky-50"
            >
              {navLabels.specialties}
            </a>
            <a
              href="#admission"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-xs text-slate-700 hover:bg-sky-50"
            >
              {navLabels.admission}
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg font-medium text-xs text-slate-700 hover:bg-sky-50"
            >
              Контакты
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center text-xs shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>{t.applyOnline}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
