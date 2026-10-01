import React, { useState } from 'react';
import { INSTITUTIONAL_DATA } from '../data/mockData';
import { CheckCircle2, Building2, Users2, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white text-slate-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
                Propósito & Enfoque
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
                {INSTITUTIONAL_DATA.aboutTitle}
              </h2>
            </div>

            <p className="text-lg font-medium text-slate-700 leading-snug">
              {INSTITUTIONAL_DATA.aboutSubtitle}
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {INSTITUTIONAL_DATA.aboutDescription}
            </p>

            {/* Audiences & Focus Points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Building2 className="w-3.5 h-3.5 text-[#0080C9]" />
                  <span>Dueños y PyMEs</span>
                </div>
                <p className="text-xs text-slate-500">
                  Herramientas de profesionalización, finanzas y estrategia.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Users2 className="w-3.5 h-3.5 text-[#0080C9]" />
                  <span>Familias en gestión</span>
                </div>
                <p className="text-xs text-slate-500">
                  Sucesión, protocolos, directorio y convivencia de pares.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0080C9]" />
                  <span>Estudiantes UdeSA</span>
                </div>
                <p className="text-xs text-slate-500">
                  Proyectos aplicados, TPs y desafíos de empresas reales.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photo with Fallback */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 aspect-[4/3]">
              {!imageError ? (
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Diálogo intergeneracional y reunión de directorio en UdeSA"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-blue-50 text-center">
                  <Building2 className="w-16 h-16 text-[#003087]/60 mb-3" />
                  <p className="font-serif-title font-semibold text-lg text-[#003087]">
                    Iniciativa PyME & Empresas Familiares
                  </p>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    Espacio de formación, investigación y encuentro de la Escuela de Negocios de UdeSA.
                  </p>
                </div>
              )}

              {/* Quiet caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-slate-900/85 backdrop-blur-xs text-white p-3 text-xs flex items-center justify-between">
                <span className="font-medium text-slate-200">Universidad de San Andrés · Campus Victoria</span>
                <span className="text-[11px] text-sky-300">Escuela de Negocios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
