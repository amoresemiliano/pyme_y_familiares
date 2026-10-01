import React from 'react';
import { Briefcase, GraduationCap, ArrowRight, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface UniversityBusinessSectionProps {
  onOpenEnterpriseModal: () => void;
  onOpenStudentModal: () => void;
}

export const UniversityBusinessSection: React.FC<UniversityBusinessSectionProps> = ({
  onOpenEnterpriseModal,
  onOpenStudentModal,
}) => {
  return (
    <section id="vinculacion" className="py-20 lg:py-28 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Concept and Model */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
                Vinculación Estratégica
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
                Conectar conocimiento con desafíos reales
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              Un puente bidireccional donde las pequeñas y medianas empresas presentan dilemas operativos y estratégicos concretos, y la comunidad académica de San Andrés responde con metodología rigurosa, ideas frescas y talento joven.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0080C9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Trabajos Prácticos & Cátedras Aplicadas</h4>
                  <p className="text-xs text-slate-600">
                    Estudiantes de Administración y Negocios Digitales resuelven casos de marketing, finanzas y operaciones supervisados por docentes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0080C9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Trabajos Finales de Graduación & Tesis</h4>
                  <p className="text-xs text-slate-600">
                    Investigaciones en profundidad para planes de negocio, internacionalización, transformación tecnológica o protocolos familiares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0080C9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Pasantías y Búsquedas Profesionales</h4>
                  <p className="text-xs text-slate-600">
                    Acceso directo a la bolsa de trabajo y a jóvenes con sólida formación analítica y valores éticos.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive CTA buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenEnterpriseModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded shadow-xs transition-colors"
              >
                <Building className="w-4 h-4" />
                <span>Soy una empresa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenStudentModal}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#003087] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-[#0080C9]" />
                <span>Soy estudiante</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive comparison diagram / value exchange box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-50 to-blue-50/40 p-8 rounded-lg border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500">
                Ecosistema de Colaboración
              </span>
              <span className="text-xs font-semibold text-[#0080C9] bg-white px-2.5 py-1 rounded border border-blue-100 shadow-xs">
                Beneficio Mutuo
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* For Enterprise */}
              <div className="bg-white p-5 rounded-md border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#003087]">
                  <Briefcase className="w-5 h-5 text-[#0080C9]" />
                  <h4 className="text-sm font-bold">Qué recibe la empresa</h4>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0080C9] font-bold">·</span>
                    <span>Nuevas perspectivas estratégicas sin costo inicial de consultoría</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0080C9] font-bold">·</span>
                    <span>Análisis con marcos teóricos rigurosos validados por docentes UdeSA</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0080C9] font-bold">·</span>
                    <span>Contacto temprano con perfiles destacados para futuras contrataciones</span>
                  </li>
                </ul>
              </div>

              {/* For Students */}
              <div className="bg-white p-5 rounded-md border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#003087]">
                  <GraduationCap className="w-5 h-5 text-[#0080C9]" />
                  <h4 className="text-sm font-bold">Qué recibe el estudiante</h4>
                </div>
                <ul className="text-xs text-slate-600 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0080C9] font-bold">·</span>
                    <span>Resolución de problemáticas de negocio complejas en entornos reales</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0080C9] font-bold">·</span>
                    <span>Interacción directa con fundadores y gerentes generales de PyMEs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#0080C9] font-bold">·</span>
                    <span>Desarrollo de red de contactos profesionales antes del egreso</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-white rounded border border-blue-100 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#0080C9] shrink-0" />
              <p className="text-xs text-slate-600">
                <strong>¿Tu empresa quiere proponer un desafío para el próximo cuatrimestre?</strong> Seleccioná "Soy una empresa" para registrar la propuesta con nuestro equipo académico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
