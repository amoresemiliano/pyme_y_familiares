import React, { useState } from 'react';
import { Menu, X, Bot, ArrowRight, ChevronRight, Search } from 'lucide-react';

interface HeaderProps {
  currentView: 'home' | 'censo' | 'observatorio';
  onNavigate: (view: 'home' | 'censo' | 'observatorio') => void;
  onOpenChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, onOpenChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavClick = (view: 'home' | 'censo' | 'observatorio', hash?: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    if (hash && view === 'home') {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B1E38] text-white border-b border-blue-950/60 shadow-md">
      {/* Top zone bar matching UdeSA aesthetic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand zone: UdeSA Crest + Brand name */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label="Ir al inicio de la Iniciativa PyME & Empresas Familiares"
            >
              {/* Crest Logo */}
              <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center border border-white/20 p-1 transition-colors group-hover:bg-white/20">
                <svg viewBox="0 0 40 48" className="w-full h-full fill-white" aria-hidden="true">
                  <path d="M20 2L4 8v16c0 12.8 6.8 20.4 16 22 9.2-1.6 16-9.2 16-22V8L20 2zm0 6l10 3.75v12.25c0 8.5-4.5 14.5-10 16-5.5-1.5-10-7.5-10-16V11.75L20 8zm-2 7v4h4v-4h-4zm0 6v10h4V21h-4z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">Universidad de San Andrés</span>
                <span className="text-base sm:text-lg font-serif-title font-semibold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                  Escuela de Negocios
                </span>
              </div>
            </button>
          </div>

          {/* Navigation links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200" aria-label="Navegación principal">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 hover:text-white ${currentView === 'home' ? 'text-sky-400 font-semibold border-b-2 border-sky-400' : 'text-slate-300'}`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('home', 'ejes')}
              className="hover:text-sky-300 transition-colors py-1 text-slate-300"
            >
              Ejes
            </button>
            <button
              onClick={() => handleNavClick('home', 'programas')}
              className="hover:text-sky-300 transition-colors py-1 text-slate-300"
            >
              Programas
            </button>
            <button
              onClick={() => handleNavClick('home', 'vinculacion')}
              className="hover:text-sky-300 transition-colors py-1 text-slate-300"
            >
              Universidad + Empresa
            </button>
            <button
              onClick={() => handleNavClick('observatorio')}
              className={`transition-colors py-1 hover:text-white ${currentView === 'observatorio' ? 'text-sky-400 font-semibold border-b-2 border-sky-400' : 'text-slate-300'}`}
            >
              Observatorio
            </button>
            <button
              onClick={() => handleNavClick('censo')}
              className={`transition-colors py-1 hover:text-white ${currentView === 'censo' ? 'text-sky-400 font-semibold border-b-2 border-sky-400' : 'text-slate-300'}`}
            >
              Censo PyME
            </button>
          </nav>

          {/* Actions zone */}
          <div className="flex items-center gap-3">
            {/* Search quick button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Buscar contenidos"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* AI Assistant button */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded bg-sky-600/30 text-sky-200 border border-sky-500/40 hover:bg-sky-600/50 hover:text-white transition-all shadow-sm"
              title="Consultar al Asistente Virtual IA para alumnos y empresarios"
            >
              <Bot className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Asistente IA</span>
            </button>

            {/* CTA button */}
            <button
              onClick={() => handleNavClick('censo')}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0080C9] hover:bg-[#0070B0] rounded transition-colors shadow-sm"
            >
              <span>Participar del Censo</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded hover:bg-white/10"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Search bar drop-panel */}
        {searchOpen && (
          <div className="py-3 px-4 bg-slate-900/95 border-t border-slate-700/60 rounded-b-md">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar programas, casos, censo, eventos, directores..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1"
              >
                Cerrar
              </button>
            </div>
            {searchQuery && (
              <div className="mt-2 text-xs text-slate-400 border-t border-slate-800 pt-2">
                Tip: Podés consultar directamente con nuestro <strong className="text-sky-300 cursor-pointer" onClick={onOpenChat}>Asistente IA</strong> para una respuesta personalizada sobre {searchQuery}.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Sub-bar breadcrumb mirroring UdeSA IA & Negocios */}
      <div className="bg-[#071324] border-t border-blue-900/40 text-[11px] text-slate-400 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5">
          <button onClick={() => handleNavClick('home')} className="hover:text-slate-200">
            Inicio
          </button>
          <span>/</span>
          <a href="https://www.udesa.edu.ar/escuela-de-negocios" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200">
            Escuela de Negocios
          </a>
          <span>/</span>
          <span className="text-sky-300 font-medium">
            {currentView === 'home' && 'Iniciativa PyME & Empresas Familiares'}
            {currentView === 'censo' && 'Censo PyME UdeSA'}
            {currentView === 'observatorio' && 'Observatorio PyME'}
          </span>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1E38] border-b border-blue-900/80 px-4 py-5 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300 font-medium"
          >
            Inicio
          </button>
          <button
            onClick={() => handleNavClick('home', 'sobre')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Sobre la iniciativa
          </button>
          <button
            onClick={() => handleNavClick('home', 'ejes')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Ejes estratégicos
          </button>
          <button
            onClick={() => handleNavClick('home', 'programas')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Programas y formación
          </button>
          <button
            onClick={() => handleNavClick('home', 'desafios')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Desafíos de la empresa familiar
          </button>
          <button
            onClick={() => handleNavClick('home', 'vinculacion')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Universidad + Empresa
          </button>
          <button
            onClick={() => handleNavClick('observatorio')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Observatorio PyME
          </button>
          <button
            onClick={() => handleNavClick('censo')}
            className="block w-full text-left py-2 text-sm text-sky-400 font-semibold"
          >
            Censo PyME UdeSA
          </button>
          <button
            onClick={() => handleNavClick('home', 'contacto')}
            className="block w-full text-left py-2 text-sm text-slate-200 hover:text-sky-300"
          >
            Contacto
          </button>

          <div className="pt-3 border-t border-blue-900/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-medium rounded bg-sky-600/30 text-sky-200 border border-sky-500/40"
            >
              <Bot className="w-4 h-4 text-sky-400" />
              <span>Abrir Asistente Virtual IA</span>
            </button>
            <button
              onClick={() => handleNavClick('censo')}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold rounded bg-[#0080C9] text-white"
            >
              <span>Participar del Censo PyME</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
