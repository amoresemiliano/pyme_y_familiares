import React, { useState } from 'react';
import { X, Building, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface UniversityBusinessModalProps {
  type: 'enterprise' | 'student';
  isOpen: boolean;
  onClose: () => void;
}

export const UniversityBusinessModal: React.FC<UniversityBusinessModalProps> = ({
  type,
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organizationOrCareer: '',
    projectDescription: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 max-h-[90vh] overflow-y-auto border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {type === 'enterprise' ? (
              <Building className="w-5 h-5 text-[#0080C9]" />
            ) : (
              <GraduationCap className="w-5 h-5 text-[#0080C9]" />
            )}
            <span className="text-xs font-bold uppercase tracking-wider text-[#003087]">
              {type === 'enterprise' ? 'Vinculación Empresarial' : 'Participación Estudiantil'}
            </span>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-xl font-serif-title font-bold text-[#003087]">
                {type === 'enterprise'
                  ? 'Presentar un desafío de mi empresa para estudiantes UdeSA'
                  : 'Participar como estudiante en proyectos con PyMEs'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {type === 'enterprise'
                  ? 'Completá los datos de tu organización para que la coordinación académica evalúe si tu caso puede integrarse en Trabajos Prácticos o Tesis de graduación.'
                  : 'Registrate para ser convocado a proyectos de consultoría aplicada, análisis de casos o pasantías en empresas vinculadas a la comunidad San Andrés.'}
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Nombre y apellido *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ej. Martín González"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email de contacto {type === 'student' ? '(institucional @udesa.edu.ar si corresponde)' : ''} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ejemplo@udesa.edu.ar o correo corporativo"
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {type === 'enterprise' ? 'Empresa y cargo' : 'Carrera y año de cursada'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organizationOrCareer}
                  onChange={(e) => setFormData({ ...formData, organizationOrCareer: e.target.value })}
                  placeholder={type === 'enterprise' ? 'Ej. Metalúrgica San Jorge SRL · Director' : 'Ej. Lic. en Administración · 4to año'}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {type === 'enterprise'
                    ? 'Breve descripción del desafío a trabajar (comercial, financiero, sucesión, IA...)'
                    : 'Áreas de interés o experiencia previa'} *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder={type === 'enterprise' ? 'Buscamos rediseñar nuestro modelo comercial B2B e incorporar herramientas de previsión...' : 'Interés en empresas familiares agropecuarias y proyectos de finanzas corporativas...'}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded transition-colors shadow-xs"
              >
                Enviar postulación
              </button>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-xl font-serif-title font-bold text-[#003087]">
              ¡Postulación recibida con éxito!
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Muchas gracias por tu interés en la articulación Universidad + Empresa de la Escuela de Negocios de UdeSA. La coordinación académica revisará los datos para el próximo ciclo de asignación.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded mt-2"
            >
              Aceptar y volver
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
