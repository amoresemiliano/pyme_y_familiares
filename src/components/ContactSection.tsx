import React from 'react';
import { INSTITUTIONAL_DATA } from '../data/mockData';
import { Mail, ChevronRight, MessageSquareQuote } from 'lucide-react';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  return (
    <section id="contacto" className="relative bg-[#071932] text-white py-20 lg:py-24 border-b border-blue-950 overflow-hidden">
      {/* Background blueprint nodes overlay matching UdeSA screenshot */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="220" stroke="#0080C9" strokeWidth="1" strokeDasharray="6 6" fill="none" />
          <circle cx="50%" cy="50%" r="320" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-bold bg-sky-950/60 px-3 py-1 rounded border border-sky-800/80">
          <Mail className="w-3.5 h-3.5" />
          <span>Canal de Vinculación</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-white tracking-tight">
          Contacto
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {INSTITUTIONAL_DATA.contactSubtext}
        </p>

        <div className="text-xs text-sky-300 font-mono">
          Casilla oficial: <span className="bg-white/10 px-2 py-0.5 rounded">{INSTITUTIONAL_DATA.officialEmailPending}</span>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-white hover:bg-white hover:text-[#003087] rounded transition-all shadow-md cursor-pointer"
          >
            <span>Enviar mensaje directo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-[11px] text-slate-400 max-w-lg mx-auto pt-2">
          Atendemos consultas de empresarios PyME, familias en transición sucesoria, estudiantes interesados en proyectos aplicados e instituciones aliadas.
        </p>
      </div>
    </section>
  );
};
