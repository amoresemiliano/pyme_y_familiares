import React, { useState } from 'react';
import { STRATEGIC_PILLARS } from '../data/mockData';
import { Check, ArrowRight, BookOpen, Users, Network } from 'lucide-react';

interface PillarsSectionProps {
  onOpenPrograms: () => void;
  onOpenObservatory: () => void;
  onOpenEvents: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  onOpenPrograms,
  onOpenObservatory,
  onOpenEvents,
}) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="ejes" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Serif Section Title matching UdeSA style */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Estructura de Acción
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Nuestros ejes estratégicos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Organizamos nuestra propuesta en tres dimensiones complementarias que articulan formación académica, generación de conocimiento y comunidad de pares.
          </p>
        </div>

        {/* Alternated Pillars modules */}
        <div className="space-y-20 lg:space-y-28">
          {STRATEGIC_PILLARS.map((pillar, idx) => {
            const isReversed = idx % 2 !== 0;
            const hasError = imageErrors[pillar.id];

            return (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Module (Alternated) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200 bg-slate-200 aspect-[4/3] group">
                    {!hasError ? (
                      <img
                        src={pillar.imageUrl}
                        alt={pillar.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(pillar.id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-blue-50 text-center">
                        {pillar.id === 'personas' && <BookOpen className="w-14 h-14 text-[#003087]/70 mb-3" />}
                        {pillar.id === 'comunidad' && <Users className="w-14 h-14 text-[#003087]/70 mb-3" />}
                        {pillar.id === 'networking' && <Network className="w-14 h-14 text-[#003087]/70 mb-3" />}
                        <h3 className="font-serif-title font-semibold text-lg text-[#003087]">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 max-w-sm">
                          Iniciativa PyME & Empresas Familiares - Escuela de Negocios UdeSA
                        </p>
                      </div>
                    )}
                    
                    {/* Number kicker */}
                    <div className="absolute top-4 left-4 bg-[#003087] text-white px-3 py-1 text-xs font-semibold rounded shadow-xs tracking-wider">
                      Eje {pillar.number}
                    </div>
                  </div>
                </div>

                {/* Content Module (Alternated) */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {pillar.number} · Dimensión Estratégica
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#003087]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-slate-700">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Impacto y beneficios clave:
                    </span>
                    <ul className="space-y-1.5">
                      {pillar.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                          <Check className="w-4 h-4 text-[#0080C9] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activities summary */}
                  <div className="p-4 bg-white rounded border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#003087]">
                      Iniciativas y actividades:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                      {pillar.activities.map((act, aIdx) => (
                        <span key={aIdx} className="bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded text-slate-700">
                          {act}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    {pillar.id === 'personas' && (
                      <button
                        onClick={onOpenPrograms}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003087] hover:text-[#0080C9] transition-colors"
                      >
                        <span>Explorar programas de formación</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {pillar.id === 'comunidad' && (
                      <button
                        onClick={onOpenObservatory}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003087] hover:text-[#0080C9] transition-colors"
                      >
                        <span>Conocer el Observatorio PyME</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                    {pillar.id === 'networking' && (
                      <button
                        onClick={onOpenEvents}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003087] hover:text-[#0080C9] transition-colors"
                      >
                        <span>Ver agenda de eventos y comunidad</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
