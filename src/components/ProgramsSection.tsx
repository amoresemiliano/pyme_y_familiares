import React, { useState } from 'react';
import { PROGRAMS } from '../data/mockData';
import { ProgramItem } from '../types';
import { Clock, MapPin, CheckCircle, ArrowRight, X } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [selectedModalProgram, setSelectedModalProgram] = useState<ProgramItem | null>(null);

  const handleProgramClick = (prog: ProgramItem) => {
    setSelectedModalProgram(prog);
    onSelectProgram(prog);
  };

  return (
    <section id="programas" className="py-20 lg:py-28 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Formación Ejecutiva & Académica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Programas y experiencias de formación
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Formatos ejecutivos inmersivos, especializaciones en gobernanza familiar y cátedras universitarias diseñadas para responder a las demandas del ecosistema productivo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col justify-between bg-white border border-slate-200 rounded-lg p-7 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                {/* Meta header unboxed */}
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                  <span className="font-semibold text-[#0080C9] uppercase tracking-wider">{prog.tag}</span>
                  <span>{prog.statusLabel}</span>
                </div>

                <h3 className="text-2xl font-serif-title font-bold text-[#003087]">
                  {prog.title}
                </h3>

                {/* Modality & Duration */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                  {prog.duration && (
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{prog.duration}</span>
                    </div>
                  )}
                  {prog.modality && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{prog.modality}</span>
                    </div>
                  )}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {prog.description}
                </p>

                {/* Topics list */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                    Ejes temáticos principales:
                  </span>
                  <ul className="space-y-1.5">
                    {prog.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0080C9] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => handleProgramClick(prog)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded transition-colors shadow-xs"
                >
                  <span>{prog.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0080C9]">
                {selectedModalProgram.tag}
              </span>
              <button
                onClick={() => setSelectedModalProgram(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-serif-title font-bold text-[#003087]">
                {selectedModalProgram.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Escuela de Negocios · Universidad de San Andrés
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedModalProgram.description}
            </p>

            <div className="space-y-3 bg-slate-50 p-4 rounded border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Contenidos y metodología
              </h4>
              <ul className="space-y-2">
                {selectedModalProgram.topics.map((top, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#0080C9] shrink-0 mt-0.5" />
                    <span>{top}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded text-xs text-blue-900">
              <strong>Estado de convocatoria:</strong> Las fechas de inicio, cronograma definitivo y aranceles se encuentran en proceso de validación oficial por la Escuela de Negocios de UdeSA.
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedModalProgram(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cerrar
              </button>
              <a
                href="#contacto"
                onClick={() => setSelectedModalProgram(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded transition-colors"
              >
                Solicitar información de la próxima edición
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
