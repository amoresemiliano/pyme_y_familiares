import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatementBanner } from './components/StatementBanner';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ChallengesSection } from './components/ChallengesSection';
import { UniversityBusinessSection } from './components/UniversityBusinessSection';
import { CasesSection } from './components/CasesSection';
import { CensusBanner } from './components/CensusBanner';
import { EventsSection } from './components/EventsSection';
import { PodcastSection } from './components/PodcastSection';
import { ContentSection } from './components/ContentSection';
import { NewsSection } from './components/NewsSection';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiChatbot } from './components/AiChatbot';
import { UniversityBusinessModal } from './components/UniversityBusinessModal';
import { ContactModal } from './components/ContactModal';
import { CensusView } from './views/CensusView';
import { ObservatoryView } from './views/ObservatoryView';
import { ProgramItem } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'censo' | 'observatorio'>('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync title and URL hash where appropriate
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: 'home' | 'censo' | 'observatorio') => {
    setCurrentView(view);
  };

  const handleExplore = () => {
    const el = document.getElementById('sobre');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenPrograms = () => {
    const el = document.getElementById('programas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEvents = () => {
    const el = document.getElementById('eventos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#003087] selection:text-white">
      {/* Institutional Top Bar Navigation */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExplore={handleExplore}
              onOpenCenso={() => setCurrentView('censo')}
              onOpenCommunity={handleOpenEvents}
            />

            {/* Statement Banner (Black/Navy full width text banner) */}
            <StatementBanner />

            {/* 2. Sobre la iniciativa */}
            <AboutSection />

            {/* 3. Nuestros ejes */}
            <PillarsSection
              onOpenPrograms={handleOpenPrograms}
              onOpenObservatory={() => setCurrentView('observatorio')}
              onOpenEvents={handleOpenEvents}
            />

            {/* 4. Programas y formación */}
            <ProgramsSection onSelectProgram={(_prog: ProgramItem) => {}} />

            {/* 5. Tres desafíos clave de la empresa familiar */}
            <ChallengesSection />

            {/* 6. Universidad + Empresa */}
            <UniversityBusinessSection
              onOpenEnterpriseModal={() => setEnterpriseModalOpen(true)}
              onOpenStudentModal={() => setStudentModalOpen(true)}
            />

            {/* 7. Casos PyME */}
            <CasesSection />

            {/* 8. Censo PyME UdeSA */}
            <CensusBanner
              onOpenCenso={() => setCurrentView('censo')}
              onOpenObservatory={() => setCurrentView('observatorio')}
            />

            {/* 9. Eventos y networking */}
            <EventsSection />

            {/* 10. Podcast / Conversaciones */}
            <PodcastSection />

            {/* 11. Ideas para empresas que hacen (Contenidos y artículos) */}
            <ContentSection />

            {/* 12. Noticias */}
            <NewsSection />

            {/* 13. Equipo */}
            <TeamSection />

            {/* 14. Partners & Colaboradores */}
            <PartnersSection />

            {/* 15. Contacto */}
            <ContactSection onOpenContactModal={() => setContactModalOpen(true)} />
          </>
        )}

        {currentView === 'censo' && (
          <CensusView
            onBackToHome={() => setCurrentView('home')}
            onOpenObservatory={() => setCurrentView('observatorio')}
          />
        )}

        {currentView === 'observatorio' && (
          <ObservatoryView
            onBackToHome={() => setCurrentView('home')}
            onOpenCenso={() => setCurrentView('censo')}
          />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive AI Chatbot for Student & Executive Inquiries */}
      <AiChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Chat Trigger Button if closed */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-20 right-6 z-40 bg-[#0080C9] hover:bg-[#0070B0] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-105 border border-white/20 cursor-pointer"
          title="Consultar al Asistente Virtual UdeSA"
          aria-label="Abrir asistente virtual"
        >
          <div className="relative">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white animate-pulse" />
          </div>
          <span className="text-xs font-semibold hidden md:inline">Consultas IA</span>
        </button>
      )}

      {/* Enterprise / Student Modals */}
      <UniversityBusinessModal
        type="enterprise"
        isOpen={enterpriseModalOpen}
        onClose={() => setEnterpriseModalOpen(false)}
      />
      <UniversityBusinessModal
        type="student"
        isOpen={studentModalOpen}
        onClose={() => setStudentModalOpen(false)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
