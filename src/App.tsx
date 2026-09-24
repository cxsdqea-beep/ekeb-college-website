/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsAndAdvantages } from './components/StatsAndAdvantages';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AdmissionSteps } from './components/AdmissionSteps';
import { StudentLifeAndNews } from './components/StudentLifeAndNews';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { ContactFeedbackSection } from './components/ContactFeedbackSection';
import { Footer } from './components/Footer';

import { ApplicationModal } from './components/ApplicationModal';
import { SpecialtyDetailModal } from './components/SpecialtyDetailModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { DirectionsModal } from './components/DirectionsModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { TrustBoxModal } from './components/TrustBoxModal';
import { LibraryModal } from './components/LibraryModal';
import { DirectorBlogModal } from './components/DirectorBlogModal';
import { CollegeInfoModal, CollegeModalSection } from './components/CollegeInfoModal';

import { Language, Specialty, NewsArticle } from './types';
import { COLLEGE_INFO } from './data/mockData';
import { Phone, MessageSquare, ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ru');

  // Accessibility state
  const [a11yFontSize, setA11yFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [a11yHighContrast, setA11yHighContrast] = useState<boolean>(false);

  // Modals state
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [specialtyModalOpen, setSpecialtyModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [preselectedSpecialty, setPreselectedSpecialty] = useState<Specialty | null>(null);

  const [newsArticleModalOpen, setNewsArticleModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const [directionsMapOpen, setDirectionsMapOpen] = useState(false);
  const [trustBoxOpen, setTrustBoxOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [directorBlogOpen, setDirectorBlogOpen] = useState(false);
  const [collegeInfoOpen, setCollegeInfoOpen] = useState(false);
  const [collegeInfoSection, setCollegeInfoSection] = useState<CollegeModalSection>('history');

  // Sync root and body classes and root font size for accessibility
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('a11y-font-large', 'a11y-font-xlarge', 'a11y-contrast-high');
    document.body.classList.remove('a11y-font-large', 'a11y-font-xlarge', 'a11y-contrast-high');

    if (a11yFontSize === 'large') {
      root.classList.add('a11y-font-large');
      document.body.classList.add('a11y-font-large');
      root.style.fontSize = '120%';
    } else if (a11yFontSize === 'xlarge') {
      root.classList.add('a11y-font-xlarge');
      document.body.classList.add('a11y-font-xlarge');
      root.style.fontSize = '140%';
    } else {
      root.style.fontSize = '100%';
    }

    if (a11yHighContrast) {
      root.classList.add('a11y-contrast-high');
      document.body.classList.add('a11y-contrast-high');
    }
  }, [a11yFontSize, a11yHighContrast]);

  const handleOpenApplication = (specialty?: Specialty) => {
    if (specialty) {
      setPreselectedSpecialty(specialty);
    } else {
      setPreselectedSpecialty(null);
    }
    setApplicationModalOpen(true);
  };

  const handleSelectSpecialtyDetail = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
    setSpecialtyModalOpen(true);
  };

  const handleReadArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    setNewsArticleModalOpen(true);
  };

  const scrollToSpecialties = () => {
    const el = document.getElementById('specialties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Header (БЛОК 1) */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenApplication={() => handleOpenApplication()}
        onOpenDirectorBlog={() => setDirectorBlogOpen(true)}
        onOpenCollegeInfo={(section) => {
          setCollegeInfoSection(section);
          setCollegeInfoOpen(true);
        }}
        onOpenTrustBox={() => setTrustBoxOpen(true)}
        onOpenLibrary={() => setLibraryOpen(true)}
        onOpenDirectionsMap={() => setDirectionsMapOpen(true)}
        a11yFontSize={a11yFontSize}
        onA11yFontSizeChange={setA11yFontSize}
        a11yHighContrast={a11yHighContrast}
        onA11yHighContrastToggle={() => setA11yHighContrast(!a11yHighContrast)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section (БЛОК 2) */}
        <HeroSection
          language={language}
          onSelectSpecialtyClick={scrollToSpecialties}
          onOpenApplication={() => handleOpenApplication()}
        />

        {/* 3. Stats & Advantages (БЛОК 3) */}
        <StatsAndAdvantages language={language} />

        {/* 4. Specialties (БЛОК 4) */}
        <SpecialtiesSection
          language={language}
          onSelectSpecialty={handleSelectSpecialtyDetail}
          onApplyForSpecialty={(spec) => handleOpenApplication(spec)}
        />

        {/* 5. Admission Process (БЛОК 5) */}
        <AdmissionSteps
          language={language}
          onApplyClick={() => handleOpenApplication()}
          onChooseSpecialtyClick={scrollToSpecialties}
        />

        {/* 6. Student Life & News (БЛОК 6) */}
        <StudentLifeAndNews
          language={language}
          onReadArticle={handleReadArticle}
        />

        {/* 7. Graduate Testimonials (БЛОК 7) */}
        <TestimonialsCarousel language={language} />

        {/* 8. Feedback Form (БЛОК 8) */}
        <ContactFeedbackSection language={language} />
      </main>

      {/* 9. Footer (БЛОК 9) */}
      <Footer
        language={language}
        onOpenPrivacyPolicy={() => setPrivacyPolicyOpen(true)}
        onOpenDirectionsMap={() => setDirectionsMapOpen(true)}
        onOpenTrustBox={() => setTrustBoxOpen(true)}
        onOpenLibrary={() => setLibraryOpen(true)}
      />

      {/* Floating Call & Direct Action Widget */}
      <aside aria-label="Быстрые действия" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`tel:${COLLEGE_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group relative cursor-pointer"
          title={language === 'ru' ? `Позвонить в приемную комиссию: ${COLLEGE_INFO.phone}` : language === 'kk' ? `Қабылдау комиссиясына қоңырау шалу: ${COLLEGE_INFO.phone}` : `Call Admissions: ${COLLEGE_INFO.phone}`}
          aria-label={language === 'ru' ? 'Позвонить в колледж' : language === 'kk' ? 'Колледжге қоңырау шалу' : 'Call college'}
        >
          <Phone className="w-6 h-6" />
          <span className="hidden group-hover:flex absolute right-15 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap items-center gap-1.5">
            <span>{language === 'ru' ? 'Звонок:' : language === 'kk' ? 'Қоңырау:' : 'Call:'} {COLLEGE_INFO.phone}</span>
          </span>
        </a>
      </aside>

      {/* All Dialogs & Modals */}
      <ApplicationModal
        isOpen={applicationModalOpen}
        onClose={() => setApplicationModalOpen(false)}
        language={language}
        preselectedSpecialty={preselectedSpecialty}
      />

      <SpecialtyDetailModal
        isOpen={specialtyModalOpen}
        onClose={() => setSpecialtyModalOpen(false)}
        specialty={selectedSpecialty}
        language={language}
        onApply={(spec) => handleOpenApplication(spec)}
      />

      <PrivacyPolicyModal
        isOpen={privacyPolicyOpen}
        onClose={() => setPrivacyPolicyOpen(false)}
        language={language}
      />

      <DirectionsModal
        isOpen={directionsMapOpen}
        onClose={() => setDirectionsMapOpen(false)}
        language={language}
      />

      <ArticleDetailModal
        isOpen={newsArticleModalOpen}
        onClose={() => setNewsArticleModalOpen(false)}
        article={selectedArticle}
        language={language}
      />

      <TrustBoxModal
        isOpen={trustBoxOpen}
        onClose={() => setTrustBoxOpen(false)}
        language={language}
      />

      <LibraryModal
        isOpen={libraryOpen}
        onClose={() => setLibraryOpen(false)}
        language={language}
      />

      <DirectorBlogModal
        isOpen={directorBlogOpen}
        onClose={() => setDirectorBlogOpen(false)}
        language={language}
      />

      <CollegeInfoModal
        isOpen={collegeInfoOpen}
        onClose={() => setCollegeInfoOpen(false)}
        language={language}
        initialSection={collegeInfoSection}
        onOpenApplication={() => {
          setCollegeInfoOpen(false);
          handleOpenApplication();
        }}
        onOpenDirections={() => {
          setCollegeInfoOpen(false);
          setDirectionsMapOpen(true);
        }}
      />
    </div>
  );
}
