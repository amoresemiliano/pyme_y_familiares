import React, { useState } from 'react';
import { ARTICLES } from '../data/mockData';
import { ArticleItem } from '../types';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';

export const ContentSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('Todos');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const topics = [
    'Todos',
    'Empresas familiares',
    'Liderazgo',
    'Estrategia',
    'Finanzas',
    'Tecnología e IA',
  ];

  const filteredArticles =
    selectedTopic === 'Todos'
      ? ARTICLES
      : ARTICLES.filter((art) => art.category === selectedTopic);

  return (
    <section id="contenidos" className="py-20 lg:py-28 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Publicaciones & Conocimiento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Ideas para empresas que hacen
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Artículos de divulgación, análisis de coyuntura y reflexiones de la comunidad académica y directiva de la Universidad de San Andrés.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                selectedTopic === t
                  ? 'bg-[#003087] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-slate-200 rounded-lg p-7 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Meta unboxed */}
                <div className="flex items-center gap-2 text-xs text-slate-500 pb-2 border-b border-slate-100">
                  <span className="font-bold text-[#0080C9]">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.date}</span>
                </div>

                <h3 className="text-xl font-serif-title font-bold text-[#003087] leading-snug">
                  {art.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {art.excerpt}
                </p>

                <div className="text-xs text-slate-500 font-medium pt-1">
                  Por {art.author}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveArticle(art)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003087] hover:text-[#0080C9] transition-colors"
                >
                  <span>Leer publicación completa</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0080C9]">
                {activeArticle.category} · UdeSA
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif-title font-bold text-[#003087]">
                {activeArticle.title}
              </h3>
              <div className="text-xs text-slate-500">
                <span>{activeArticle.author}</span> · <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-800">
                {activeArticle.excerpt}
              </p>
              <p>
                En el ámbito de las empresas de capital cerrado y familiar en Argentina, los mayores desafíos de sostenibilidad no suelen originarse en la falta de demanda o en cuestiones técnicas operativas, sino en la ausencia de instancias formales de conversación estratégica entre generaciones.
              </p>
              <p>
                Los órganos de gobierno corporativo —como el Consejo de Familia y el Directorio con participación de independientes— operan como salvaguardas que permiten profesionalizar las decisiones de asignación de capital, evaluar el desempeño de la gestión con criterios objetivos y resguardar la unidad de los accionistas en momentos de alta volatilidad.
              </p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
              Documento elaborado en el marco de la Iniciativa PyME & Empresas Familiares de la Escuela de Negocios de la Universidad de San Andrés.
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
              >
                Cerrar lectura
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
