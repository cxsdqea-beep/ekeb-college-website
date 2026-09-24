import React from 'react';
import { X, ShieldCheck, Lock, Check } from 'lucide-react';
import { Language } from '../types';
import { COLLEGE_INFO } from '../data/mockData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose, language = 'ru' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <h3 className="font-bold text-base sm:text-lg">
              {language === 'ru' 
                ? 'Политика конфиденциальности и обработки персональных данных' 
                : language === 'kk' 
                ? 'Құпиялық саясаты және дербес деректерді өңдеу' 
                : 'Privacy Policy & Personal Data Protection'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed">
          <p className="font-semibold text-slate-900">
            {language === 'ru'
              ? 'Настоящая Политика разработана в строгом соответствии с Законом Республики Казахстан от 21 мая 2013 года № 94-V «О персональных данных и их защите».'
              : language === 'kk'
              ? 'Осы Саясат «Дербес деректер және оларды қорғау туралы» Қазақстан Республикасының 2013 жылғы 21 мамырдағы № 94-V Заңына сәйкес әзірленген.'
              : 'This Policy has been developed in accordance with the Law of the Republic of Kazakhstan dated May 21, 2013 No. 94-V "On Personal Data and their Protection".'}
          </p>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              {language === 'ru' ? '1. Сбор и использование информации' : language === 'kk' ? '1. Ақпаратты жинау және пайдалану' : '1. Information Collection and Use'}
            </h4>
            <p>
              {language === 'ru'
                ? 'Евразийский высший колледж экономики, бизнеса и права (EKEB, г. Актобе) собирает контактные данные (ФИО, номер телефона, данные об образовании) исключительно для обработки запросов абитуриентов, консультирования по поступлению и формирования учебных дел студентов.'
                : language === 'kk'
                ? 'Еуразиялық жоғары экономика, бизнес және құқық колледжі (EKEB, Ақтөбе қ.) байланыс деректерін (ТАӘ, телефон нөмірі, білімі туралы мәліметтер) тек талапкерлердің өтініштерін өңдеу, қабылдау бойынша кеңес беру және студенттердің оқу істерін қалыптастыру үшін жинайды.'
                : 'Eurasian Higher College of Economics, Business and Law (EKEB, Aktobe) collects contact information solely for processing applicant inquiries, admissions consultations, and academic records.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              {language === 'ru' ? '2. Безопасность и хранение данных' : language === 'kk' ? '2. Деректер қауіпсіздігі және сақтау' : '2. Data Security and Storage'}
            </h4>
            <p>
              {language === 'ru'
                ? 'Колледж EKEB принимает все необходимые организационные и технические меры для защиты персональной информации от неправомерного или случайного доступа, уничтожения, изменения, блокирования или распространения третьим лицам.'
                : language === 'kk'
                ? 'EKEB колледжі дербес ақпаратты заңсыз немесе кездейсоқ қол жеткізуден, жоюдан, өзгертуден, бұғаттаудан немесе үшінші тұлғаларға таратудан қорғау үшін барлық қажетті ұйымдастырушылық және техникалық шараларды қабылдайды.'
                : 'EKEB College implements all necessary organizational and technical measures to safeguard personal data against unauthorized or accidental access, alteration, or disclosure.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              {language === 'ru' ? '3. Интеграция с АИС «College SmartNation»' : language === 'kk' ? '3. «College SmartNation» ААЖ-мен интеграция' : '3. Integration with AIS College SmartNation'}
            </h4>
            <p>
              {language === 'ru'
                ? 'Данные зачисленных студентов в установленном законодательством РК порядке передаются в национальную образовательную базу данных и автоматизированную информационную систему SmartNation.'
                : language === 'kk'
                ? 'Қабылданған студенттердің деректері ҚР заңнамасында белгіленген тәртіппен Ұлттық білім беру деректер қорына және SmartNation автоматтандырылған ақпараттық жүйесіне беріледі.'
                : 'Enrolled student data is securely transferred into the National Education Database and SmartNation Information System in compliance with Kazakhstan law.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">
              {language === 'ru' ? '4. Контакты оператора персональных данных' : language === 'kk' ? '4. Деректер операторының байланыстары' : '4. Data Controller Contacts'}
            </h4>
            <p>
              {language === 'ru' ? 'Адрес:' : language === 'kk' ? 'Мекенжай:' : 'Address:'} {language === 'kk' ? 'Ақтөбе қ., Маресьев көш., 105' : COLLEGE_INFO.address}<br />
              {language === 'ru' ? 'Телефон приемной комиссии:' : language === 'kk' ? 'Қабылдау комиссиясының телефоны:' : 'Admissions phone:'} {COLLEGE_INFO.phone}<br />
              Email: {COLLEGE_INFO.email}
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            {language === 'ru' ? 'Понятно' : language === 'kk' ? 'Түсінікті' : 'Understood'}
          </button>
        </div>

      </div>
    </div>
  );
};
