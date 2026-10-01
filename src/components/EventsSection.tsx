import React, { useState } from 'react';
import { EVENTS } from '../data/mockData';
import { EventItem } from '../types';
import { Calendar, Clock, MapPin, ArrowRight, X, User } from 'lucide-react';

interface EventsSectionProps {
  onRegisterEvent?: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const categories = ['Todos', 'Desayunos PyME', 'Encuentros', 'Webinars', 'Talleres'];

  const filteredEvents =
    selectedCategory === 'Todos'
      ? EVENTS
      : EVENTS.filter((ev) => ev.category === selectedCategory);

  return (
    <section id="eventos" className="py-20 lg:py-28 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Agenda & Encuentros
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Eventos y comunidad
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Espacios periódicos de debate, mesas de trabajo entre pares y webinars con especialistas para conectar a familias empresarias, decisores y la comunidad universitaria.
          </p>
        </div>

        {/* Filter controls (Zero-Pill interactive segmented buttons) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#003087] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Meta unboxed */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pb-2 border-b border-slate-100">
                  <span className="font-bold text-[#0080C9] uppercase">{ev.category}</span>
                  <span className="text-slate-400 font-mono text-[10px]">{ev.date}</span>
                </div>

                <h3 className="text-lg font-serif-title font-bold text-[#003087] leading-snug">
                  {ev.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{ev.modality}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {ev.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveModalEvent(ev);
                    if (onRegisterEvent) onRegisterEvent(ev);
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-[#003087] bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded transition-colors"
                >
                  <span>Ver detalles e inscripción</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#003087] border border-[#003087] hover:bg-[#003087] hover:text-white rounded transition-colors"
          >
            <span>Recibir novedades de la agenda 2026</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0080C9]">
                {activeModalEvent.category} · Agenda UdeSA
              </span>
              <button
                onClick={() => setActiveModalEvent(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-xl font-serif-title font-bold text-[#003087]">
                {activeModalEvent.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                <span className="font-semibold text-slate-700">{activeModalEvent.date}</span>
                <span>·</span>
                <span>{activeModalEvent.time}</span>
                <span>·</span>
                <span>{activeModalEvent.modality}</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {activeModalEvent.description}
            </p>

            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded space-y-1">
              <span className="text-xs font-bold text-slate-700 block">Expositor / Facilitador:</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{activeModalEvent.speaker}</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded text-xs text-blue-900">
              <strong>Aviso de confirmación:</strong> Las fechas definitivas y la apertura del formulario de acreditación se notificarán a través de los canales institucionales de la Escuela de Negocios.
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveModalEvent(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cerrar
              </button>
              <a
                href="#contacto"
                onClick={() => setActiveModalEvent(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
              >
                Avisarme cuando abra la inscripción
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
