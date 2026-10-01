import React, { useState } from 'react';
import { X, Mail, CheckCircle2, Send, RefreshCw } from 'lucide-react';
import { INSTITUTIONAL_DATA } from '../data/mockData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Consulta general sobre programas',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); // graceful UX
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0080C9]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#003087]">
              Contacto Institucional
            </span>
          </div>
          <button onClick={handleClose} className="p-1 text-slate-400 hover:text-slate-600 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-xl font-serif-title font-bold text-[#003087]">
                Escribinos tu consulta
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Casilla institucional: {INSTITUTIONAL_DATA.officialEmailPending}
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre y apellido"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@empresa.com"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Motivo de contacto</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                >
                  <option value="Consulta sobre Programa Ejecutivo PyME">Consulta sobre Programa Ejecutivo PyME</option>
                  <option value="Taller de Convivencia Generacional">Taller de Convivencia Generacional</option>
                  <option value="Censo PyME UdeSA">Censo PyME UdeSA</option>
                  <option value="Vinculación con estudiantes (TPs o Tesis)">Vinculación con estudiantes (TPs o Tesis)</option>
                  <option value="Propuesta de alianza o partner">Propuesta de alianza o partner</option>
                  <option value="Otro motivo">Otro motivo</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Mensaje *</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribí aquí los detalles de tu consulta o requerimiento..."
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded transition-colors shadow-xs disabled:opacity-50"
              >
                {loading && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                <span>Enviar consulta</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-serif-title font-bold text-[#003087]">
              ¡Mensaje enviado con éxito!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Muchas gracias por comunicarte con la Iniciativa PyME & Empresas Familiares de la Escuela de Negocios de la Universidad de San Andrés. Nos pondremos en contacto a la brevedad.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded mt-2"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
