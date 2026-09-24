import React from 'react';
import { 
  X, 
  MapPin, 
  Navigation, 
  Bus, 
  Car, 
  Clock, 
  Phone, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { COLLEGE_INFO } from '../data/mockData';

interface DirectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: Language;
}

export const DirectionsModal: React.FC<DirectionsModalProps> = ({ isOpen, onClose, language = 'ru' }) => {
  if (!isOpen) return null;

  // Exact coordinates of EKEB college at ul. Maresyeva 105, Aktobe, Kazakhstan
  // Latitude: 50.29425, Longitude: 57.15508
  const mapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=57.1480%2C50.2895%2C57.1620%2C50.2990&layer=mapnik&marker=50.29425%2C57.15508";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs">
        {/* Backdrop click dismiss */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col z-10"
        >
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-sky-800 text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-sky-300">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg leading-tight">
                  {language === 'ru' 
                    ? 'Карта проезда: Колледж EKEB в Актобе' 
                    : language === 'kk' 
                    ? 'Жол жүру картасы: Ақтөбедегі EKEB колледжі' 
                    : 'Directions: EKEB College in Aktobe'}
                </h3>
                <p className="text-xs text-sky-100 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                  <span>{language === 'kk' ? 'Ақтөбе қ., Маресьев көш., 105' : 'г. Актобе, ул. Маресьева, 105'}</span>
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            
            {/* Interactive Map Visual Stage - centered exactly on Maresyeva 105 */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative h-64 sm:h-80 bg-slate-100">
              <iframe
                title="EKEB Location Map at Maresyeva 105, Aktobe"
                src={mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md text-xs font-bold text-slate-900 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>{language === 'kk' ? 'EKEB: Ақтөбе қ., Маресьев көш., 105' : 'EKEB: г. Актобе, ул. Маресьева, 105'}</span>
              </div>
            </div>

            {/* Transportation directions grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-sm">
                  <Bus className="w-4 h-4 text-blue-600" />
                  <span>{language === 'ru' ? 'Общественный транспорт' : language === 'kk' ? 'Қоғамдық көлік' : 'Public Transport'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'ru'
                    ? 'Остановка «Колледж» или «Улица Маресьева». Автобусные маршруты № 15, 24, 26, 40. От остановки 2 минуты пешком.'
                    : language === 'kk'
                    ? '«Колледж» немесе «Маресьев көшесі» аялдамасы. Автобус бағыттары: № 15, 24, 26, 40. Аялдамадан жаяу 2 минуттық жерде.'
                    : '"College" or "Maresyev Street" bus stop. Buses No. 15, 24, 26, 40. A 2-minute walk from the stop.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 text-sm">
                  <Car className="w-4 h-4 text-blue-600" />
                  <span>{language === 'ru' ? 'На автомобиле и парковка' : language === 'kk' ? 'Автокөлікпен және автотұрақ' : 'By Car & Parking'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'ru'
                    ? 'Удобный подъезд со стороны проспекта Абулхаир хана и улицы Маресьева. Перед главным корпусом оборудована бесплатная гостевая парковка.'
                    : language === 'kk'
                    ? 'Әбілқайыр хан даңғылы мен Маресьев көшесі жағынан ыңғайлы кіреберіс. Бас ғимарат алдында тегін қонақтар тұрағы қарастырылған.'
                    : 'Convenient access from Abulkhair Khan Avenue and Maresyev Street. Free guest parking is available in front of the main building.'}
                </p>
              </div>
            </div>

            {/* Quick External Map links to 2GIS, Yandex and Google Maps */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-slate-600">
                {language === 'ru' ? 'Телефон дежурного приемной комиссии:' : language === 'kk' ? 'Қабылдау комиссиясы кезекшісінің телефоны:' : 'Admissions officer phone:'}{' '}
                <a href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-700 hover:underline font-bold">
                  {COLLEGE_INFO.phone}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://2gis.kz/aktobe/search/%D0%9C%D0%B0%D1%80%D0%B5%D1%81%D1%8C%D0%B5%D0%B2%D0%B0%20105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all hover:shadow-sm"
                >
                  <span>2GIS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://yandex.kz/maps/?text=%D0%90%D0%BA%D1%82%D0%BE%D0%B1%D0%B5%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9C%D0%B0%D1%80%D0%B5%D1%81%D1%8C%D0%B5%D0%B2%D0%B0%20105&ll=57.15508%2C50.29425&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all hover:shadow-sm"
                >
                  <span>{language === 'kk' ? 'Яндекс.Карта' : 'Яндекс.Карты'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=50.29425,57.15508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all hover:shadow-sm"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              {language === 'ru' ? 'Закрыть карту' : language === 'kk' ? 'Картаны жабу' : 'Close map'}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
