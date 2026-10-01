import React, { useState } from 'react';
import { NEWS } from '../data/mockData';
import { NewsItem } from '../types';
import { ArrowRight, ChevronRight, X, Newspaper } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showAllModal, setShowAllModal] = useState<boolean>(false);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="noticias" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Actualidad Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Noticias
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Novedades académicas, convocatorias para empresas y avances en los proyectos de la comunidad San Andrés.
          </p>
        </div>

        {/* 3 Visible Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS.map((item) => {
            const hasError = imgErrors[item.id];
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                    {!hasError ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        onError={() => handleImgError(item.id)}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-102"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-blue-50 text-[#003087]">
                        <Newspaper className="w-10 h-10 opacity-40" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-[#003087] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded shadow-xs">
                      {item.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono text-slate-400 block">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-serif-title font-bold text-[#003087] leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedNews(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003087] hover:text-[#0080C9] transition-colors"
                  >
                    <span>Más info</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* VER TODAS button matching reference style */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#003087] border border-[#003087] hover:bg-[#003087] hover:text-white rounded transition-colors shadow-xs"
          >
            <span>Ver todas</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0080C9]">
                {selectedNews.category}
              </span>
              <button
                onClick={() => setSelectedNews(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-mono block mb-1">
                {selectedNews.date}
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#003087]">
                {selectedNews.title}
              </h3>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedNews.excerpt}
            </p>

            <p className="text-xs text-slate-600 leading-relaxed">
              La iniciativa de la Escuela de Negocios de la Universidad de San Andrés continuará publicando resoluciones académicas, aperturas de cohortes de programas ejecutivos e informes del Observatorio PyME a través de este portal y del boletín informativo oficial.
            </p>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View All Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-xl font-serif-title font-bold text-[#003087]">
                Archivo de Novedades Institucionales
              </h3>
              <button
                onClick={() => setShowAllModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 divide-y divide-slate-100">
              {NEWS.map((n) => (
                <div key={n.id} className="pt-3 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[#0080C9] font-semibold">{n.category}</span>
                    <span>{n.date}</span>
                  </div>
                  <h4 className="text-base font-serif-title font-bold text-[#003087]">
                    {n.title}
                  </h4>
                  <p className="text-xs text-slate-600">{n.excerpt}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowAllModal(false)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
              >
                Cerrar archivo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
