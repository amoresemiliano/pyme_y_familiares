import React, { useState } from 'react';
import { CASES } from '../data/mockData';
import { CaseStudy } from '../types';
import { BookOpen, FileText, ArrowRight, X, Building, Check } from 'lucide-react';

export const CasesSection: React.FC = () => {
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  return (
    <section id="casos" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Pedagogía & Evidencia Empírica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Casos PyME
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Documentamos y sistematizamos experiencias empresarias locales para transformarlas en material de estudio aplicado, difusión de buenas prácticas y análisis riguroso para las aulas de UdeSA.
          </p>
        </div>

        {/* 3 Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-slate-200 rounded-lg p-7 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-100">
                  <span className="font-semibold text-[#0080C9] uppercase tracking-wider">{cs.sector}</span>
                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px]">
                    Caso Pedagógico
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>{cs.companyName}</span>
                </div>

                <h3 className="text-xl font-serif-title font-bold text-[#003087]">
                  {cs.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {cs.description}
                </p>

                <div className="pt-2 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Aprendizajes documentados:
                  </span>
                  {cs.takeaways.map((take, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#0080C9] shrink-0 mt-0.5" />
                      <span>{take}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalCase(cs)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#003087] hover:text-[#0080C9] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Leer síntesis del caso</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Suggest a Case banner */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#003087]">
              ¿Querés que tu empresa participe de un caso de estudio UdeSA?
            </h4>
            <p className="text-xs text-slate-600">
              Nuestro equipo docente selecciona organizaciones con desafíos de sucesión, transformación tecnológica o gobernanza para redactar casos de uso académico con fines estrictamente pedagógicos.
            </p>
          </div>
          <a
            href="#contacto"
            className="px-4 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded whitespace-nowrap"
          >
            Postular caso empresarial
          </a>
        </div>
      </div>

      {/* Case Details Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0080C9]">
                {activeModalCase.sector} · Caso UdeSA
              </span>
              <button
                onClick={() => setActiveModalCase(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <span className="text-xs font-mono text-slate-500 block mb-1">
                {activeModalCase.companyName}
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#003087]">
                {activeModalCase.title}
              </h3>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModalCase.description}
            </p>

            <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Puntos de aprendizaje para cátedras
              </h4>
              <ul className="space-y-2">
                {activeModalCase.takeaways.map((take, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#0080C9] shrink-0 mt-0.5" />
                    <span>{take}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded text-xs text-blue-900">
              <strong>Nota pedagógica:</strong> Los casos elaborados por la Escuela de Negocios de la Universidad de San Andrés se utilizan como base de discusión en programas ejecutivos y cátedras de grado, resguardando la confidencialidad de datos estratégicos cuando corresponde.
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveModalCase(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
