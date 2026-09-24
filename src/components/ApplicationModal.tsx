import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  BookOpen, 
  Home, 
  School,
  FileText,
  ChevronDown
} from 'lucide-react';
import { Specialty, Language } from '../types';
import { SPECIALTIES, COLLEGE_INFO, UI_TRANSLATIONS } from '../data/mockData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  preselectedSpecialty?: Specialty | null;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  language,
  preselectedSpecialty,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [educationBase, setEducationBase] = useState<'grade9' | 'grade11'>('grade9');
  const [specialtyId, setSpecialtyId] = useState(preselectedSpecialty ? preselectedSpecialty.id : SPECIALTIES[0].id);
  const [needsDormitory, setNeedsDormitory] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Synchronize chosen specialty when opening modal with a preselected specialty or when it changes
  useEffect(() => {
    if (isOpen) {
      if (preselectedSpecialty) {
        setSpecialtyId(preselectedSpecialty.id);
      }
      setIsSuccess(false);
    }
  }, [isOpen, preselectedSpecialty]);

  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  const selectedSpec = SPECIALTIES.find(s => s.id === specialtyId) || SPECIALTIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-sky-800 text-white p-6 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1 text-sky-200 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>{language === 'ru' ? 'Прием документов онлайн' : language === 'kk' ? 'Құжаттарды онлайн қабылдау' : 'Online Document Submission'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {language === 'ru' ? 'Подать заявку в колледж EKEB' : language === 'kk' ? 'EKEB колледжіне өтініш беру' : 'Apply to EKEB College'}
          </h2>
          <p className="text-xs text-sky-100 mt-1">
            {language === 'ru' 
              ? 'г. Актобе • Инновационное образование • 3 года обучения' 
              : language === 'kk' 
              ? 'Ақтөбе қ. • Инновациялық білім • 3 жыл оқу' 
              : 'Aktobe • Innovative Education • 3-year study programs'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {language === 'ru' ? 'Заявка успешно отправлена!' : language === 'kk' ? 'Өтініш сәтті жіберілді!' : 'Application successfully sent!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'ru' ? (
                  <>Уважаемый(-ая) <strong className="text-slate-900">{fullName}</strong>, ваша предварительная заявка на специальность <strong>«{selectedSpec.title[language]}»</strong> зарегистрирована в приемной комиссии колледжа EKEB.</>
                ) : language === 'kk' ? (
                  <>Құрметті <strong className="text-slate-900">{fullName}</strong>, сіздің <strong>«{selectedSpec.title[language]}»</strong> мамандығына алдын ала өтінішіңіз EKEB колледжінің қабылдау комиссиясында тіркелді.</>
                ) : (
                  <>Dear <strong className="text-slate-900">{fullName}</strong>, your application for <strong>"{selectedSpec.title[language]}"</strong> has been registered at the EKEB Admissions Office.</>
                )}
              </p>
              
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-left text-xs text-slate-700 space-y-2 mt-4">
                <div className="font-bold text-blue-950 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-700" />
                  {language === 'ru' ? 'Следующие шаги:' : language === 'kk' ? 'Келесі қадамдар:' : 'Next steps:'}
                </div>
                <div>
                  {language === 'ru'
                    ? `1. Наш куратор приемной комиссии позвонит вам по номеру ${phone} в течение 15-30 минут.`
                    : language === 'kk'
                    ? `1. Біздің қабылдау комиссиясының кураторы сізге ${phone} нөмірі бойынша 15-30 минутта хабарласады.`
                    : `1. Admissions officer will call ${phone} in 15-30 minutes.`}
                </div>
                <div>
                  {language === 'ru'
                    ? '2. Подготовьте аттестат, медсправку 075-У и 4 фото 3х4.'
                    : language === 'kk'
                    ? '2. Аттестат, 075-У медициналық анықтамасы мен 4 дана 3х4 фотосурет дайындаңыз.'
                    : '2. Prepare diploma/certificate, 075-U medical report, and four 3x4 photos.'}
                </div>
                {needsDormitory && (
                  <div className="text-emerald-800 font-medium">
                    {language === 'ru'
                      ? '✓ За вами предварительно закреплено место в общежитии EKEB Student Home.'
                      : language === 'kk'
                      ? '✓ Сізге EKEB Student Home студенттер үйінен орын алдын ала бекітілді.'
                      : '✓ A room at EKEB Student Home has been pre-reserved for you.'}
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                >
                  {language === 'ru' ? 'Понятно, спасибо!' : language === 'kk' ? 'Түсінікті, рахмет!' : 'Got it, thank you!'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ru' ? 'ФИО абитуриента *' : language === 'kk' ? 'Талапкердің толық аты-жөні *' : 'Applicant Full Name *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder={language === 'ru' ? 'Например, Ахметов Дамир Серикович' : language === 'kk' ? 'Мысалы, Ахметов Дамир Серікұлы' : 'e.g., Damir Akhmetov'}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'ru' ? 'Телефон абитуриента / родителя *' : language === 'kk' ? 'Талапкердің / ата-анасының телефоны *' : 'Student / Parent Phone *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+7 (700) 000-00-00"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {language === 'ru' ? 'Email (необязательно)' : language === 'kk' ? 'Email (міндетті емес)' : 'Email (optional)'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      placeholder="student@example.kz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Education Base */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ru' ? 'Базовое образование *' : language === 'kk' ? 'Негізгі білімі *' : 'Educational background *'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                    educationBase === 'grade9' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="education"
                      checked={educationBase === 'grade9'}
                      onChange={() => setEducationBase('grade9')}
                      className="text-blue-600"
                    />
                    <span>{language === 'ru' ? 'После 9 класса (3 года)' : language === 'kk' ? '9-сыныптан кейін (3 жыл)' : 'After 9th grade (3 yrs)'}</span>
                  </label>

                  <label className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors ${
                    educationBase === 'grade11' ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}>
                    <input
                      type="radio"
                      name="education"
                      checked={educationBase === 'grade11'}
                      onChange={() => setEducationBase('grade11')}
                      className="text-blue-600"
                    />
                    <span>{language === 'ru' ? 'После 11 класса (2 года)' : language === 'kk' ? '11-сыныптан кейін (2 жыл)' : 'After 11th grade (2 yrs)'}</span>
                  </label>
                </div>
              </div>

              {/* Specialty Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ru' ? 'Выбранная специальность *' : language === 'kk' ? 'Таңдалған мамандық *' : 'Chosen Specialty *'}
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600" />
                  <select
                    value={specialtyId}
                    onChange={(e) => setSpecialtyId(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white font-medium text-slate-900 shadow-xs appearance-none cursor-pointer"
                  >
                    {SPECIALTIES.map((spec) => (
                      <option key={spec.id} value={spec.id}>
                        {spec.title[language]} ({spec.code}) {spec.isDualEducation ? (language === 'kk' ? '• Дуальді' : language === 'ru' ? '• Дуальное' : '• Dual') : ''}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-700 pointer-events-none" />
                </div>
              </div>

              {/* EKEB Student Home Checkbox */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsDormitory}
                    onChange={(e) => setNeedsDormitory(e.target.checked)}
                    className="mt-0.5 rounded text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                      <Home className="w-3.5 h-3.5 text-amber-700" />
                      {language === 'ru' 
                        ? 'Нужно место в общежитии EKEB STUDENT HOME' 
                        : language === 'kk' 
                        ? 'EKEB STUDENT HOME жатақханасынан орын қажет' 
                        : 'Dormitory spot needed at EKEB STUDENT HOME'}
                    </span>
                    <p className="text-[11px] text-amber-800 leading-snug mt-0.5">
                      {language === 'ru'
                        ? 'Для иногородних абитуриентов. Бронь места в комфортабельном студенческом доме в Актобе.'
                        : language === 'kk'
                        ? 'Басқа қаладан келген талапкерлер үшін. Ақтөбедегі жайлы студенттер үйінен орын брондау.'
                        : 'For non-resident students. Reservation in a modern residence in Aktobe.'}
                    </p>
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{language === 'ru' ? 'Регистрация заявки...' : language === 'kk' ? 'Өтініш тіркелуде...' : 'Registering...'}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-sky-200" />
                    <span>{language === 'ru' ? 'Отправить заявку в EKEB' : language === 'kk' ? 'EKEB-ке өтініш жіберу' : 'Submit application to EKEB'}</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500">
          {language === 'ru' ? 'Приемная комиссия:' : language === 'kk' ? 'Қабылдау комиссиясы:' : 'Admissions:'}{' '}
          <a href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-blue-700">
            {COLLEGE_INFO.phone}
          </a>{' '}
          • {language === 'kk' ? 'Ақтөбе қ.' : language === 'ru' ? 'г. Актобе' : 'Aktobe'}
        </div>

      </div>
    </div>
  );
};
