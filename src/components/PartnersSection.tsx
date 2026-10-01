import React from 'react';
import { PARTNERS_LIST, COLLABORATORS_LIST } from '../data/mockData';
import { Handshake, Award, Shield } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20 lg:py-24 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Partners */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
              Alianzas Estratégicas
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#003087] tracking-tight">
              Partners
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              La iniciativa articula su labor con entidades bancarias, cámaras gremiales, compañías tecnológicas y firmas consultoras en gobernanza para potenciar el impacto en el sector productivo.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {PARTNERS_LIST.map((partner) => (
              <div
                key={partner.id}
                className="bg-white border border-slate-200 rounded-lg p-6 text-center flex flex-col items-center justify-center space-y-2 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
                  <Handshake className="w-5 h-5 text-[#0080C9]" />
                </div>
                <h3 className="text-xs font-bold text-slate-800">
                  {partner.name}
                </h3>
                <span className="text-[11px] text-slate-500">
                  {partner.type}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                  En convenio
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Nuestros colaboradores (Matching the exact styling in screenshot) */}
        <div className="bg-white rounded-lg p-8 sm:p-10 border border-slate-200 max-w-4xl mx-auto text-center space-y-6 shadow-xs">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#003087]">
              Nuestros colaboradores
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Agradecemos a los siguientes estudiantes avanzados, graduados, docentes e investigadores de la Universidad de San Andrés por su valiosa contribución al desarrollo de esta iniciativa:
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2.5">
            {COLLABORATORS_LIST.map((collab, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0080C9] shrink-0" />
                <span>{collab}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
            ¿Querés sumarte como estudiante o graduado colaborador a los proyectos de investigación y vinculación?{' '}
            <a href="#contacto" className="text-[#003087] font-semibold underline underline-offset-2 hover:text-[#0080C9]">
              Contactanos aquí
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
