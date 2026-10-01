import React from 'react';
import { Mic, Radio, PlayCircle, Clock, Sparkles } from 'lucide-react';

export const PodcastSection: React.FC = () => {
  const topics = [
    'Sucesión y traspaso',
    'Convivencia generacional',
    'Gobierno y directorio',
    'Profesionalización',
    'Finanzas y continuidad',
    'Inteligencia Artificial en PyMEs',
  ];

  return (
    <section className="bg-[#050D1A] text-white py-20 lg:py-24 border-b border-neutral-900 relative overflow-hidden">
      {/* Background soundwave / studio vibe graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg className="w-full h-48" viewBox="0 0 1200 200" fill="none">
          <path
            d="M0 100 Q 150 20 300 100 T 600 100 T 900 100 T 1200 100"
            stroke="#0080C9"
            strokeWidth="2"
          />
          <path
            d="M0 100 Q 150 180 300 100 T 600 100 T 900 100 T 1200 100"
            stroke="#38BDF8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-semibold bg-sky-950/70 px-3.5 py-1.5 rounded-full border border-sky-800/80">
          <Radio className="w-3.5 h-3.5 animate-pulse text-sky-400" />
          <span>Podcast & Diálogos Audiovisuales · Próximamente</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-white tracking-tight leading-tight">
            Conversaciones que hacen empresa
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Una serie de encuentros francos con fundadores, sucesores, investigadores y especialistas de la Universidad de San Andrés para reflexionar sobre los dilemas que no figuran en los libros de texto: la gestión del legado, las conversaciones difíciles en familia y el coraje de innovar en contextos desafiantes.
          </p>
        </div>

        {/* Thematic capsules */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto pt-2">
          {topics.map((t, idx) => (
            <span
              key={idx}
              className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA Banner matching IA podcast layout */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-transparent border border-white/40 hover:border-white hover:bg-white/10 rounded tracking-wider uppercase transition-colors">
            <Mic className="w-4 h-4 text-sky-400" />
            <span>Ciclo en producción · Primeros episodios en 2026</span>
          </div>

          <a
            href="#contacto"
            className="text-xs text-sky-300 hover:text-white underline underline-offset-4 transition-colors"
          >
            Sugerir un tema o invitado para el podcast
          </a>
        </div>
      </div>
    </section>
  );
};
