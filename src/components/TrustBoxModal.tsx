import React, { useState } from 'react';
import { X, Inbox, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { COLLEGE_INFO } from '../data/mockData';

interface TrustBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const TrustBoxModal: React.FC<TrustBoxModalProps> = ({ isOpen, onClose, language = 'ru' }) => {
  const [topic, setTopic] = useState('academic');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleClose = () => {
    setIsSent(false);
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base">
                {language === 'ru' ? 'Электронный ящик доверия EKEB' : language === 'kk' ? 'EKEB электронды сенім жәшігі' : 'EKEB Electronic Trust Box'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {language === 'ru' ? 'Конфиденциальная связь с руководством колледжа' : language === 'kk' ? 'Колледж басшылығымен құпия байланыс' : 'Confidential line to college administration'}
              </p>
            </div>
          </div>
          <button onClick={handleClose} className="p-1 text-slate-400 hover:text-white cursor-pointer" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {isSent ? (
            <div className="py-6 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">
                {language === 'ru' ? 'Ваше обращение принято' : language === 'kk' ? 'Өтінішіңіз қабылданды' : 'Your request has been received'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                {language === 'ru'
                  ? 'Сообщение направлено на прямое рассмотрение руководству колледжа EKEB с сохранением конфиденциальности.'
                  : language === 'kk'
                  ? 'Хабарлама құпиялылықты сақтай отырып, тікелей EKEB колледжінің басшылығына жолданды.'
                  : 'Your message has been directly submitted to the EKEB leadership with strict confidentiality.'}
              </p>
              <button
                onClick={handleClose}
                className="mt-2 px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold cursor-pointer"
              >
                {language === 'ru' ? 'Закрыть' : language === 'kk' ? 'Жабу' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
                <strong>{language === 'ru' ? '100% анонимно:' : language === 'kk' ? '100% анонимді:' : '100% anonymous:'}</strong>{' '}
                {language === 'ru'
                  ? 'вы можете отправить предложение, пожелание или сообщить о спорной ситуации.'
                  : language === 'kk'
                  ? 'ұсынысыңызды, тілегіңізді немесе даулы жағдайды хабарлай аласыз.'
                  : 'you can share a proposal, suggestion, or report an issue.'}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ru' ? 'Категория обращения' : language === 'kk' ? 'Өтініш санаты' : 'Inquiry category'}
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white"
                >
                  <option value="academic">
                    {language === 'ru' ? 'Качество учебного процесса и преподавания' : language === 'kk' ? 'Оқу процесі мен оқыту сапасы' : 'Academic process and teaching quality'}
                  </option>
                  <option value="dormitory">
                    {language === 'ru' ? 'Проживание в EKEB Student Home' : language === 'kk' ? 'EKEB Student Home жатақханасында тұру' : 'EKEB Student Home residence'}
                  </option>
                  <option value="suggestions">
                    {language === 'ru' ? 'Инициативы и предложения по улучшению колледжа' : language === 'kk' ? 'Колледжді дамыту бастамалары мен ұсыныстар' : 'Campus improvement initiatives'}
                  </option>
                  <option value="other">
                    {language === 'ru' ? 'Другой вопрос' : language === 'kk' ? 'Басқа сұрақ' : 'Other inquiry'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ru' ? 'Текст обращения *' : language === 'kk' ? 'Өтініш мәтіні *' : 'Message text *'}
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={language === 'ru' ? 'Опишите ситуацию или предложение...' : language === 'kk' ? 'Жағдайды немесе ұсынысыңызды сипаттаңыз...' : 'Describe your message or idea...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {language === 'ru' ? 'Отправить обращение в ящик доверия' : language === 'kk' ? 'Сенім жәшігіне өтініш жіберу' : 'Submit to trust box'}
                </span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
