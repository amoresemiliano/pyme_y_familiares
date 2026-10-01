import React from 'react';
import { ArrowRight, ChevronDown, Users, BookOpen, Network } from 'lucide-react';
import { INSTITUTIONAL_DATA } from '../data/mockData';

interface HeroProps {
  onExplore: () => void;
  onOpenCenso: () => void;
  onOpenCommunity: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onOpenCenso, onOpenCommunity }) => {
  return (
    <section className="relative bg-[#071932] text-white overflow-hidden border-b border-blue-950">
      {/* Subtle blueprint / network architectural watermark overlay inspired by UdeSA IA & Negocios */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
              <circle cx="60" cy="60" r="2" fill="rgba(0,128,201,0.6)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
          {/* Subtle node connectors on the right side */}
          <g stroke="rgba(0,128,201,0.3)" strokeWidth="1" fill="none" transform="translate(700, 40)">
            <circle cx="120" cy="120" r="60" strokeDasharray="4 4" />
            <circle cx="120" cy="120" r="110" strokeDasharray="6 6" />
            <circle cx="120" cy="120" r="160" />
            <line x1="120" y1="60" x2="200" y2="30" />
            <line x1="180" y1="120" x2="260" y2="150" />
            <circle cx="200" cy="30" r="4" fill="#0080C9" />
            <circle cx="260" cy="150" r="5" fill="#38BDF8" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Title & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold bg-sky-950/50 px-3 py-1 rounded border border-sky-800/60">
              <span>Escuela de Negocios · Universidad de San Andrés</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-title font-semibold text-white tracking-tight leading-[1.12] text-balance">
              PyME & Empresas Familiares
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              {INSTITUTIONAL_DATA.heroTagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0080C9] hover:bg-[#0070B0] rounded shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <span>Conocé la iniciativa</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenCenso}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded transition-all cursor-pointer"
              >
                <span>Participar del Censo</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Description & Structural Pillars Brief */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/50 to-slate-900/60 p-6 sm:p-8 rounded-lg border border-blue-900/40 backdrop-blur-sm space-y-5">
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Propósito institucional
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {INSTITUTIONAL_DATA.heroDescription}
            </p>

            <div className="pt-4 border-t border-blue-900/60 grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded bg-white/5">
                <BookOpen className="w-4 h-4 mx-auto text-sky-400 mb-1" />
                <span className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Formación</span>
                <span className="text-[10px] text-slate-400">Ejecutiva</span>
              </div>
              <div className="p-2.5 rounded bg-white/5">
                <Users className="w-4 h-4 mx-auto text-sky-400 mb-1" />
                <span className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Vinculación</span>
                <span className="text-[10px] text-slate-400">UdeSA–Empresa</span>
              </div>
              <div className="p-2.5 rounded bg-white/5">
                <Network className="w-4 h-4 mx-auto text-sky-400 mb-1" />
                <span className="block text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Comunidad</span>
                <span className="text-[10px] text-slate-400">Networking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
