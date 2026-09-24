import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Award,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { getAssetUrl } from '../utils/assets';

interface DirectorBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const DirectorBlogModal: React.FC<DirectorBlogModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [activeTab, setActiveTab] = useState<'welcome' | 'ask' | 'qa'>('welcome');
  const [formData, setFormData] = useState({
    fullName: '',
    status: 'applicant', // applicant, student, parent, other
    phone: '',
    email: '',
    subject: '',
    question: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.question) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          status: 'applicant',
          phone: '',
          email: '',
          subject: '',
          question: ''
        });
        setActiveTab('qa');
      }, 2500);
    }, 600);
  };

  const directorData = {
    ru: {
      title: 'Блог директора',
      name: 'Джармагамбетова Багдагуль Сансызбаевна',
      role: 'Директор Европейского высшего колледжа цифровых технологий и предпринимательства (EKEB)',
      bio: 'Руководитель высшей квалификационной категории, педагог-исследователь. Опыт работы в сфере технического и профессионального образования — более 20 лет.',
      schedule: 'Приемные часы: Каждый вторник и четверг с 15:00 до 17:00 (кабинет 201)',
      address: 'г. Актобе, район Астана, ул. Маресьева, 105',
      phone: '+7 (7132) 54-44-24',
      email: 'director@ekeb.edu.kz',
      tabs: {
        welcome: 'Обращение директора',
        ask: 'Задать вопрос директору',
        qa: 'Ответы на вопросы'
      },
      welcomeText: [
        'Добро пожаловать на страницу блога директора Европейского высшего колледжа цифровых технологий и предпринимательства!',
        'Наш колледж — это современная образовательная экосистема, ориентированная на подготовку востребованных специалистов цифровой экономики, бизнеса, финансов и юриспруденции. Мы объединяем передовые европейские стандарты дуального обучения, практико-ориентированные программы и партнерство с ведущими работодателями Республики Казахстан.',
        'Для меня крайне важна прямая, открытая связь с каждым абитуриентом, студентом, родителем и преподавателем. Блог директора создан для оперативного решения любых ваших вопросов, предложений по улучшению учебного процесса и всесторонней поддержки ваших образовательных инициатив.',
        'Вы можете отправить мне личное обращение через онлайн-форму, и вы обязательно получите исчерпывающий ответ.'
      ],
      faqs: [
        {
          q: 'Каковы условия поступления на бесплатное обучение (государственный грант)?',
          a: 'Колледж EKEB ежегодно получает государственный образовательный заказ на подготовку специалистов IT, учета, финансов и маркетинга. Поступление на грант проходит по конкурсу среднего балла аттестата. Документы принимаются через приемную комиссию колледжа и портал eGov.'
        },
        {
          q: 'Предоставляется ли студентам отсрочка от воинской службы?',
          a: 'Да. Студентам очной формы обучения предоставляется официальная отсрочка от призыва на срочную воинскую службу на весь период обучения в соответствии с законодательством РК.'
        },
        {
          q: 'Как организовано дуальное обучение и производственная практика?',
          a: 'С первого и второго курсов наши студенты закрепляются за профильными организациями: банками Kaspi, Halyk, IT-компаниями региона, юридическими палатами. До 60% учебного времени проходит на реальных рабочих местах с наставниками.'
        },
        {
          q: 'Возможен ли перевод из другого колледжа или смена специальности?',
          a: 'Перевод студентов осуществляется в период зимних и летних каникул на основании академической справки (транскрипта) при отсутствии критической разницы в учебных планах. Для консультации свяжитесь с приемной комиссией или напишите мне в форму.'
        }
      ]
    },
    kk: {
      title: 'Директор блогы',
      name: 'Джармагамбетова Бағдагүл Сансызбайқызы',
      role: 'Еуропалық цифрлық технологиялар және кәсіпкерлік жоғары колледжінің (EKEB) директоры',
      bio: 'Жоғары санатты басшы, педагог-зерттеуші. Техникалық және кәсіптік білім беру саласындағы еңбек өтілі — 20 жылдан астам.',
      schedule: 'Қабылдау уақыты: Әр сейсенбі және бейсенбі сағат 15:00-ден 17:00-ге дейін (201-кабинет)',
      address: 'Ақтөбе қ., Астана ауданы, Маресьев көш., 105',
      phone: '+7 (7132) 54-44-24',
      email: 'director@ekeb.edu.kz',
      tabs: {
        welcome: 'Директор үндеуі',
        ask: 'Директорға сұрақ қою',
        qa: 'Сұрақ-жауап'
      },
      welcomeText: [
        'Еуропалық цифрлық технологиялар және кәсіпкерлік жоғары колледжінің директоры блогына қош келдіңіздер!',
        'Біздің колледж — цифрлық экономика, бизнес, қаржы және құқықтану салалары бойынша сұранысқа ие мамандар даярлайтын заманауи білім беру кеңістігі. Біз дуальды оқытудың озық еуропалық стандарттарын, тәжірибеге бағытталған бағдарламаларды және Қазақстанның жетекші жұмыс берушілерімен ынтымақтастықты біріктіреміз.',
        'Мен үшін әрбір талапкермен, студентпен, ата-анамен және оқытушымен ашық әрі тікелей байланыста болу өте маңызды. Директор блогы сұрақтарыңыз бен ұсыныстарыңызды жедел шешу мақсатында ашылған.',
        'Сіз маған осы онлайн нысан арқылы тікелей өтініш жібере аласыз, әрбір сұраққа міндетті түрде жауап беріледі.'
      ],
      faqs: [
        {
          q: 'Мемлекеттік грант (тегін оқу) бойынша түсу шарттары қандай?',
          a: 'EKEB колледжі IT, есеп, қаржы және маркетинг мамандықтары бойынша жыл сайын мемлекеттік білім беру тапсырысын алады. Грантқа түсу аттестаттың орташа балы бойынша конкурстық негізде өтеді.'
        },
        {
          q: 'Студенттерге әскери қызметтен кейінге қалдыру беріле ме?',
          a: 'Иә. Күндізгі оқу нысанындағы студенттерге ҚР заңнамасына сәйкес оқу мерзімі аяқталғанға дейін әскери қызметтен ресми түрде кейінге қалдыру беріледі.'
        },
        {
          q: 'Дуальды білім беру қалай ұйымдастырылған?',
          a: 'Біздің студенттер өңірдегі банктерде (Kaspi, Halyk), IT-компанияларда және кәсіпорындарда тәжірибеден өтеді. Оқу уақытының 60%-ы нақты жұмыс орындарында тәлімгерлердің жетекшілігімен өткізіледі.'
        }
      ]
    },
    en: {
      title: "Director's Blog",
      name: 'Bagdagul Sansyzbayevna Djarmagambetova',
      role: 'Director of the European Higher College of Digital Technologies and Entrepreneurship (EKEB)',
      bio: 'Highest category executive, educator-researcher. Over 20 years of experience in vocational and higher technical education.',
      schedule: 'Reception hours: Every Tuesday and Thursday from 15:00 to 17:00 (Office 201)',
      address: '105 Maresyev Str., Astana district, Aktobe',
      phone: '+7 (7132) 54-44-24',
      email: 'director@ekeb.edu.kz',
      tabs: {
        welcome: "Director's Address",
        ask: 'Ask the Director',
        qa: 'Q&A'
      },
      welcomeText: [
        'Welcome to the official Blog of the Director of the European Higher College of Digital Technologies and Entrepreneurship!',
        'Our college is an innovative educational ecosystem preparing future-ready professionals in IT, digital business, finance, and applied law. We adhere to European standards of dual education and strong enterprise partnerships.',
        'Open dialogue with our applicants, students, and parents is our top priority. This blog provides a direct channel to address questions and suggestions.',
        'Please feel free to submit your inquiries directly using the form.'
      ],
      faqs: [
        {
          q: 'Are state grants available for prospective students?',
          a: 'Yes, EKEB College offers state-funded educational quotas annually for key digital specialties and economics based on GPA competition.'
        },
        {
          q: 'Is military draft deferral provided?',
          a: 'Yes, all full-time male students receive legal deferral from military draft for the entire duration of studies.'
        }
      ]
    }
  };

  const content = directorData[language] || directorData.ru;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header bar */}
        <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 text-white p-5 sm:p-6 flex items-start justify-between relative shrink-0">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border-2 border-amber-400/40 p-1 shrink-0 flex items-center justify-center shadow-lg overflow-hidden bg-slate-800">
              <img 
                src={getAssetUrl('/images/ekeb/director.jpg')}
                alt={content.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('/images/ekeb/director.jpg')) {
                    target.src = 'https://static.tildacdn.pro/tild6537-6632-4231-b630-336566363035/director.jpeg';
                  }
                }}
                className="w-full h-full object-cover object-top rounded-xl shadow-inner"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Официальный блог руководителя</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold leading-tight text-white">{content.name}</h2>
              <p className="text-xs sm:text-sm text-sky-200 mt-1 max-w-2xl leading-snug">{content.role}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick contact / reception banner */}
        <div className="bg-amber-50 border-b border-amber-200/80 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-700 shrink-0">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-semibold text-slate-900">{content.schedule}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${content.phone}`} className="flex items-center gap-1.5 hover:text-blue-700 font-medium transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{content.phone}</span>
            </a>
            <a href={`mailto:${content.email}`} className="flex items-center gap-1.5 hover:text-blue-700 font-medium transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>{content.email}</span>
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 shrink-0 gap-2">
          <button
            onClick={() => setActiveTab('welcome')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'welcome'
                ? 'border-blue-700 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {content.tabs.welcome}
          </button>
          <button
            onClick={() => setActiveTab('ask')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'ask'
                ? 'border-blue-700 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{content.tabs.ask}</span>
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'qa'
                ? 'border-blue-700 text-blue-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{content.tabs.qa}</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'welcome' && (
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start shadow-xs">
                <img 
                  src={getAssetUrl('/images/ekeb/director.jpg')}
                  alt={content.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('/images/ekeb/director.jpg')) {
                      target.src = 'https://static.tildacdn.pro/tild6537-6632-4231-b630-336566363035/director.jpeg';
                    }
                  }}
                  className="w-24 h-32 sm:w-28 sm:h-36 object-cover object-top rounded-xl shadow-md border-2 border-white shrink-0"
                />
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Руководство колледжа EKEB</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">{content.name}</h3>
                  <p className="text-xs text-blue-700 font-semibold">{content.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{content.bio}</p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-slate-700 leading-relaxed bg-white p-5 rounded-2xl border border-slate-100 shadow-xs">
                {content.welcomeText.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? 'text-base font-bold text-slate-900 leading-snug' : ''}>
                    {p}
                  </p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{content.address}</span>
                </div>
                <button
                  onClick={() => setActiveTab('ask')}
                  className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{content.tabs.ask}</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'ask' && (
            <div>
              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Ваше обращение принято!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Директор Джармагамбетова Б. С. рассмотрит ваш вопрос в ближайшее время. Ответ будет направлен на указанные контактные данные.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Ваше ФИО <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ахметов Серик Кайратович"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Кем вы являетесь?
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden bg-white"
                      >
                        <option value="applicant">Абитуриент (поступающий)</option>
                        <option value="student">Студент колледжа</option>
                        <option value="parent">Родитель / Законный представитель</option>
                        <option value="alumni">Выпускник</option>
                        <option value="other">Другое лицо</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Контактный телефон <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Электронная почта
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.kz"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Тема обращения
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Например: Поступление на грант, общежитие, дуальное обучение..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Текст вопроса или предложения <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Опишите подробно ваш вопрос директору..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[11px] text-slate-500">
                      Ответ будет зарегистрирован в электронной канцелярии колледжа
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Отправка...' : 'Отправить обращение'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {activeTab === 'qa' && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Часто задаваемые вопросы директору:
              </div>
              {content.faqs.map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div 
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full p-4 text-left bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-900 transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                          Q
                        </span>
                        {faq.q}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          A
                        </span>
                        <div>
                          <p>{faq.a}</p>
                          <div className="mt-2 text-[11px] text-slate-400 font-medium">
                            — Ответ директора Джармагамбетовой Б. С.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Официальный канал обращений граждан колледжа EKEB</span>
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
