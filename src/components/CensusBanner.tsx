import React from 'react';
import { ClipboardCheck, ArrowRight, BarChart3, Database, ShieldCheck, Sparkles } from 'lucide-react';

interface CensusBannerProps {
  onOpenCenso: () => void;
  onOpenObservatory: () => void;
}

export const CensusBanner: React.FC<CensusBannerProps> = ({ onOpenCenso, onOpenObservatory }) => {
  return (
    <section id="censo" className="py-20 lg:py-24 bg-[#071932] text-white border-b border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Text and Value */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-bold bg-sky-950/60 px-3 py-1 rounded border border-sky-800/80">
              <ClipboardCheck className="w-3.5 h-3.5" />
              <span>Relevamiento Institucional 2026</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-white tracking-tight">
                Censo PyME UdeSA
              </h2>
              <p className="text-xl text-sky-300 font-serif-title font-medium italic">
                “Conocer para conectar.”
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              La Universidad de San Andrés impulsa un relevamiento exhaustivo del ecosistema de pequeñas y medianas empresas vinculadas a su comunidad de alumnos, graduados, docentes y familias empresarias. Conocer la realidad de nuestras organizaciones es el primer paso para conectar talento académico con necesidades productivas reales.
            </p>

            {/* Objectives grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded border border-white/10">
                <BarChart3 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mapear sectores y regiones productivas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded border border-white/10">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Identificar desafíos en financiamiento e IA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded border border-white/10">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Vincular empresas con TPs y tesis UdeSA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2.5 rounded border border-white/10">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Tratamiento confidencial y académico</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenCenso}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0080C9] hover:bg-[#0070B0] rounded shadow-sm transition-all"
              >
                <span>Participar del Censo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenObservatory}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded transition-all"
              >
                <span>Conocer el Observatorio PyME</span>
              </button>
            </div>
          </div>

          {/* Right: Informational Card about the 4 blocks */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/70 to-slate-900/80 p-7 rounded-lg border border-sky-900/60 shadow-xl space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 pb-3 border-b border-white/10">
              Estructura de la encuesta (4 Bloques)
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  Bloque 01
                </span>
                <h4 className="text-xs font-semibold text-white">
                  Perfil del participante y vinculación laboral
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Carrera UdeSA, rol en la organización y carga horaria.
                </p>
              </div>

              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  Bloque 02
                </span>
                <h4 className="text-xs font-semibold text-white">
                  Identificación y perfil de la PyME
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Sector, ubicación, año de fundación y tamaño de nómina.
                </p>
              </div>

              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  Bloque 03
                </span>
                <h4 className="text-xs font-semibold text-white">
                  Operaciones, mercado y alcance
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Alcance nacional, exportaciones y modelo de negocio (B2B/B2C).
                </p>
              </div>

              <div className="p-3 rounded bg-white/5 border border-white/10">
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">
                  Bloque 04
                </span>
                <h4 className="text-xs font-semibold text-white">
                  Necesidades y oportunidades UdeSA–Empresa
                </h4>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Desafíos en finanzas, IA, talento e interés en recibir estudiantes.
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 italic">
              Tiempo estimado de respuesta: 6 a 8 minutos. Formulario anónimo o nominal según preferencia.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
