import React from 'react';
import { ArrowUp, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050D1A] text-slate-400 text-xs">
      {/* Upper Sedes Ribbon matching UdeSA screenshot */}
      <div className="bg-[#071324] border-t border-b border-blue-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white">Nuestras sedes:</span>{' '}
            <span>Campus Victoria · Sede Nordelta · Sede Riobamba · Sede Callao</span>{' '}
            <span className="hidden md:inline">|</span>{' '}
            <span>Tel: (54-11) 7078-0400</span>
          </div>

          <a
            href="https://www.udesa.edu.ar/la-universidad/sedes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white border border-white/30 hover:border-white hover:bg-white/10 rounded transition-colors whitespace-nowrap"
          >
            <span>Conocé las sedes</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Institutional Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Left: Data Fiscal & Legal */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            {/* Data Fiscal icon */}
            <div className="w-12 h-14 bg-white/10 rounded border border-white/20 p-1 flex flex-col items-center justify-between text-[7px] text-white shrink-0">
              <span className="font-bold">DATA</span>
              <span className="font-bold">FISCAL</span>
              <div className="w-8 h-4 bg-sky-400/40 rounded-xs" />
            </div>

            <div className="space-y-1 text-[11px] text-slate-400">
              <p className="font-semibold text-slate-200">
                UdeSA - Universidad de San Andrés
              </p>
              <p>
                Todos los derechos reservados · www.udesa.edu.ar
              </p>
              <p className="text-[10px] text-slate-500">
                Universidad con autorización definitiva. Decreto PEN 978/07
              </p>
            </div>
          </div>

          {/* Center: Brand Crest */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-12 h-12 rounded-sm bg-white/10 border border-white/20 p-1.5 flex items-center justify-center">
              <svg viewBox="0 0 40 48" className="w-full h-full fill-white" aria-hidden="true">
                <path d="M20 2L4 8v16c0 12.8 6.8 20.4 16 22 9.2-1.6 16-9.2 16-22V8L20 2zm0 6l10 3.75v12.25c0 8.5-4.5 14.5-10 16-5.5-1.5-10-7.5-10-16V11.75L20 8zm-2 7v4h4v-4h-4zm0 6v10h4V21h-4z" />
              </svg>
            </div>
            <span className="font-serif-title text-base font-semibold text-white tracking-wider">
              Universidad de San Andrés
            </span>
          </div>

          {/* Right: Social icons & CASA Community */}
          <div className="flex flex-col items-center md:items-end justify-center space-y-3">
            {/* Social Links */}
            <div className="flex items-center gap-4 text-slate-300">
              <a href="https://facebook.com/udesa" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com/udesa" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com/school/universidad-de-san-andres" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com/udesa" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://twitter.com/udesa" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>

            {/* CASA button */}
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-[11px]">Comunidad Ampliada San Andrés:</span>
              <a
                href="https://casa.udesa.edu.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"
              >
                <span>CASA</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#003087] text-white shadow-xl hover:bg-[#002566] flex items-center justify-center transition-all cursor-pointer border border-white/20"
        aria-label="Volver arriba"
        title="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
