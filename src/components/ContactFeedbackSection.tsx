import React, { useState } from 'react';
import { 
  Phone, 
  User, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Clock, 
  ShieldCheck,
  Building,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { Language } from '../types';
import { SPECIALTIES, COLLEGE_INFO, UI_TRANSLATIONS } from '../data/mockData';

interface ContactFeedbackSectionProps {
  language: Language;
}

export const ContactFeedbackSection: React.FC<ContactFeedbackSectionProps> = ({ language }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialtyId, setSpecialtyId] = useState(SPECIALTIES[0].id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const t = UI_TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage(
        language === 'ru' 
          ? 'Пожалуйста, введите ваше имя' 
          : language === 'kk' 
          ? 'Өтінеміз, аты-жөніңізді енгізіңіз' 
          : 'Please enter your name'
      );
      return;
    }
    if (!phone.trim() || phone.replace(/[^0-9]/g, '').length < 9) {
      setErrorMessage(
        language === 'ru' 
          ? 'Пожалуйста, укажите корректный номер телефона' 
          : language === 'kk' 
          ? 'Өтінеміз, дұрыс телефон нөмірін көрсетіңіз' 
          : 'Please enter a valid phone number'
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setSubmitted(false);
  };

  return (
    <section id="contacts" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#FAF8F5] via-white to-sky-50/50 rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Side: Information and Help details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{language === 'ru' ? 'Приемная комиссия EKEB' : language === 'kk' ? 'EKEB қабылдау комиссиясы' : 'EKEB Admissions Office'}</span>
              </div>

              {/* Explicit prompt title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t.formTitle}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.formSubtitle}
              </p>

              {/* Quick Info Points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/70">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {language === 'ru' ? 'Быстрый ответ менеджера' : language === 'kk' ? 'Менеджердің жылдам жауабы' : 'Prompt Advisor Response'}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {language === 'ru' ? 'Звоним в рабочее время с 09:00 до 18:00' : language === 'kk' ? 'Жұмыс уақытында 09:00-ден 18:00-ге дейін хабарласамыз' : 'We call back 09:00 - 18:00 Mon-Fri'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/70">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {language === 'ru' ? 'Бесплатная профориентация' : language === 'kk' ? 'Тегін кәсіптік бағдар' : 'Free Career Guidance'}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {language === 'ru' ? 'Поможем подобрать идеальную специальность под ваши интересы' : language === 'kk' ? 'Қызығушылығыңызға сай мамандық таңдауға көмектесеміз' : 'Helping you pick the right track for your future'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/70">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {language === 'ru' ? 'Бронирование места в Student Home' : language === 'kk' ? 'Student Home-нан орын брондау' : 'Student Home Room Reservation'}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      {language === 'ru' ? 'Информация по размещению иногородних студентов' : language === 'kk' ? 'Басқа қаладан келген студенттерді орналастыру ақпараты' : 'Housing options for out-of-town applicants'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-600 font-medium">
                {language === 'ru' ? 'Прямой телефон:' : language === 'kk' ? 'Тікелей байланыс телефоны:' : 'Direct helpline:'}{' '}
                <a href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-700 font-bold hover:underline">
                  {COLLEGE_INFO.phone}
                </a>
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                
                {submitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {language === 'ru' 
                        ? `Спасибо, ${name}! Заявка принята!` 
                        : language === 'kk'
                        ? `Рахмет, ${name}! Өтініш қабылданды!`
                        : `Thank you, ${name}! Request received!`}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      {language === 'ru'
                        ? `Специалист приемной комиссии колледжа EKEB свяжется с вами по номеру ${phone} в течение 15 минут и подробно проконсультирует по выбранной специальности.`
                        : language === 'kk'
                        ? `EKEB колледжінің қабылдау комиссиясының маманы сізбен ${phone} нөмірі бойынша 15 минут ішінде хабарласып, таңдалған мамандық бойынша толық кеңес береді.`
                        : `An admissions counselor will call ${phone} within 15 minutes to guide you on the chosen specialty.`}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="px-5 py-2 text-xs font-bold text-blue-700 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer"
                      >
                        {language === 'ru' ? 'Отправить еще одну заявку' : language === 'kk' ? 'Тағы өтініш жіберу' : 'Submit another request'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {language === 'ru' ? 'Экспресс-консультация' : language === 'kk' ? 'Жедел кеңес алу' : 'Admissions Express Callback'}
                    </h3>
                    <p className="text-xs text-slate-600 mb-4">
                      {language === 'ru'
                        ? 'Заполните 3 простых поля, чтобы получить ответы на все вопросы о поступлении'
                        : language === 'kk'
                        ? 'Оқуға түсу туралы сұрақтарыңызға жауап алу үшін 3 қарапайым жолды толтырыңыз'
                        : 'Fill out this quick form to get answers to all your enrollment questions'}
                    </p>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Field 1: Имя */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.formName} *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder={language === 'ru' ? 'Например, Азамат или Дарья' : language === 'kk' ? 'Мысалы, Азамат немесе Аружан' : 'e.g., Alex or Sarah'}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition-all bg-[#FAF8F5] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Field 2: Телефон */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.formPhone} *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+7 (___) ___-__-__"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder-slate-400 transition-all bg-[#FAF8F5] focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Field 3: Интересующая специальность */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.formSpecialty}
                      </label>
                      <div className="relative">
                        <BookOpen className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        <select
                          value={specialtyId}
                          onChange={(e) => setSpecialtyId(e.target.value)}
                          className="w-full pl-10 pr-10 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 bg-[#FAF8F5] focus:bg-white transition-all appearance-none cursor-pointer font-medium"
                        >
                          {SPECIALTIES.map((spec) => (
                            <option key={spec.id} value={spec.id}>
                              {spec.title[language]} ({spec.duration[language]})
                            </option>
                          ))}
                          <option value="not_sure">
                            {language === 'ru' 
                              ? 'Пока не определился (нужна консультация)' 
                              : language === 'kk'
                              ? 'Әлі таңдамадым (кеңес қажет)'
                              : 'Undecided (need counseling)'}
                          </option>
                        </select>
                        <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Explicit button in blue tones: «Жду звонка» */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/25 hover:shadow-blue-600/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{language === 'ru' ? 'Отправка заявки...' : language === 'kk' ? 'Өтініш жіберілуде...' : 'Submitting...'}</span>
                        </>
                      ) : (
                        <>
                          <Phone className="w-4 h-4" />
                          <span>{t.formSubmit}</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-600 text-center pt-1 leading-snug">
                      {language === 'ru'
                        ? 'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных в соответствии с законодательством РК.'
                        : language === 'kk'
                        ? 'Түймені басу арқылы сіз ҚР заңнамасына сәйкес дербес деректерді өңдеуге келісім бересіз.'
                        : 'By clicking, you consent to processing personal data under RoK legislation.'}
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
