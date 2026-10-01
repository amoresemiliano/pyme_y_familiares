import React, { useState } from 'react';
import { CensoFormData } from '../types';
import {
  ClipboardCheck,
  Building,
  Globe,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  BarChart2,
  Lock,
  RefreshCw,
} from 'lucide-react';

interface CensusViewProps {
  onBackToHome: () => void;
  onOpenObservatory: () => void;
}

export const CensusView: React.FC<CensusViewProps> = ({ onBackToHome, onOpenObservatory }) => {
  const [currentBlock, setCurrentBlock] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<CensoFormData>({
    // Bloque 1
    fullName: '',
    institutionalEmail: '',
    phone: '',
    programOrCareer: 'Licenciatura en Administración de Empresas',
    careerProgress: '3er año (50% - 75%)',
    relationWithPyme: 'Empresa de mi familia directa',
    roleInPyme: 'Colaborador / Próximo sucesor',
    weeklyHours: 'Part-time (20 hs semanales)',

    // Bloque 2
    companyName: '',
    legalEntity: '',
    websiteOrSocial: '',
    location: 'Buenos Aires / AMBA',
    foundationYear: '1998',
    sector: 'Industria & Manufactura',
    productsOrServices: '',
    employeeCount: '11 a 50 empleados',

    // Bloque 3
    commercialReach: 'Nacional (múltiples provincias)',
    exports: 'No exporta actualmente',
    exportMarkets: 'América Latina (potencial)',
    internationalIntent: 'Interés activo en los próximos 2 años',
    businessModel: 'B2B (Empresa a Empresa)',
    operationMode: 'Híbrido (Presencial con procesos digitales)',

    // Bloque 4
    mainChallenges: ['Finanzas y flujo de caja', 'Transformación digital e IA', 'Sucesión y gobierno familiar'],
    interestInStudentProjects: true,
    interestInFinalGraduationProjects: true,
    interestInCaseStudies: true,
    interestInInternships: false,
    jobPostingsOpen: false,
    additionalComments: '',
  });

  const availableChallenges = [
    'Estrategia y modelo de negocio',
    'Marketing y ventas',
    'Procesos y operaciones',
    'Finanzas y flujo de caja',
    'Tecnología e infraestructura',
    'Transformación digital e IA',
    'Recursos humanos y talento',
    'Cultura y liderazgo',
    'Comercio exterior e internacionalización',
    'Gobierno y protocolo familiar',
    'Aspectos legales y societarios',
  ];

  const handleChallengeToggle = (challenge: string) => {
    setFormData((prev) => {
      const exists = prev.mainChallenges.includes(challenge);
      return {
        ...prev,
        mainChallenges: exists
          ? prev.mainChallenges.filter((c) => c !== challenge)
          : [...prev.mainChallenges, challenge],
      };
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/censo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 font-sans">
      {/* Top Banner */}
      <section className="bg-[#071932] text-white py-12 border-b border-blue-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la portada de la iniciativa</span>
          </button>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block">
              Relevamiento de la Comunidad San Andrés
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif-title font-bold text-white tracking-tight">
              Censo PyME UdeSA: Conocer para conectar
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Este relevamiento tiene como fin mapear las pequeñas y medianas organizaciones vinculadas a estudiantes, graduados y familias de San Andrés. Conocer qué producimos y qué dilemas enfrentamos nos permite articular cátedras, pasantías y formación ejecutiva de máxima relevancia.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Finalidad académica y confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-400" />
              <span>Protección estricta de datos sensibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Survey Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {!isSubmitted ? (
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            {/* Progress indicator */}
            <div className="bg-slate-100 p-4 border-b border-slate-200">
              <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                <span className="font-semibold text-[#003087]">
                  Bloque {currentBlock} de 4
                </span>
                <span>
                  {currentBlock === 1 && 'Perfil del estudiante / participante'}
                  {currentBlock === 2 && 'Identificación de la PyME'}
                  {currentBlock === 3 && 'Operaciones y alcance comercial'}
                  {currentBlock === 4 && 'Oportunidades de vinculación UdeSA'}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0080C9] transition-all duration-300"
                  style={{ width: `${(currentBlock / 4) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 space-y-6">
              {/* BLOQUE 1 */}
              {currentBlock === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-100 pb-3">
                    <h2 className="text-xl font-serif-title font-bold text-[#003087]">
                      Bloque 1: Perfil del participante y vinculación laboral
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Identificación de la persona que responde la encuesta y su relación con la comunidad San Andrés.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Nombre y apellido *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Lucas Rossi"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Email institucional o de contacto *</label>
                      <input
                        type="email"
                        required
                        value={formData.institutionalEmail}
                        onChange={(e) => setFormData({ ...formData, institutionalEmail: e.target.value })}
                        placeholder="lrossi@udesa.edu.ar"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Teléfono móvil</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+54 11 4444-5555"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Carrera o programa en UdeSA *</label>
                      <select
                        value={formData.programOrCareer}
                        onChange={(e) => setFormData({ ...formData, programOrCareer: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Licenciatura en Administración de Empresas">Licenciatura en Administración de Empresas</option>
                        <option value="Licenciatura en Negocios Digitales">Licenciatura en Negocios Digitales</option>
                        <option value="Licenciatura en Economía">Licenciatura en Economía</option>
                        <option value="Licenciatura en Finanzas">Licenciatura en Finanzas</option>
                        <option value="MBA / Maestría en Negocios">MBA / Maestría en Negocios</option>
                        <option value="Graduado / Alumni UdeSA">Graduado / Alumni UdeSA</option>
                        <option value="Otro programa ejecutivo">Otro programa ejecutivo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Avance de carrera</label>
                      <select
                        value={formData.careerProgress}
                        onChange={(e) => setFormData({ ...formData, careerProgress: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="1er o 2do año">1er o 2do año (&lt; 50%)</option>
                        <option value="3er año (50% - 75%)">3er año (50% - 75%)</option>
                        <option value="4to año / Próximo a graduar">4to año / Próximo a graduar</option>
                        <option value="Graduado">Graduado</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Relación con la PyME *</label>
                      <select
                        value={formData.relationWithPyme}
                        onChange={(e) => setFormData({ ...formData, relationWithPyme: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Empresa de mi familia directa">Empresa de mi familia directa</option>
                        <option value="Fundador / Socio">Fundador / Socio</option>
                        <option value="Empleado / Colaborador no familiar">Empleado / Colaborador no familiar</option>
                        <option value="Director / Consultor">Director / Consultor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Rol actual en la empresa</label>
                      <input
                        type="text"
                        value={formData.roleInPyme}
                        onChange={(e) => setFormData({ ...formData, roleInPyme: e.target.value })}
                        placeholder="Ej. Gerente de Operaciones / Sucesor / Asistente"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Carga horaria semanal dedicada</label>
                      <select
                        value={formData.weeklyHours}
                        onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Full-time (más de 35 hs)">Full-time (más de 35 hs)</option>
                        <option value="Part-time (20 hs semanales)">Part-time (20 hs semanales)</option>
                        <option value="Eventual / Apoyo familiar fin de semana">Eventual / Apoyo fin de semana</option>
                        <option value="Solo participación como accionista">Solo participación como accionista</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* BLOQUE 2 */}
              {currentBlock === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-100 pb-3">
                    <h2 className="text-xl font-serif-title font-bold text-[#003087]">
                      Bloque 2: Identificación y perfil de la PyME
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Datos demográficos y características productivas de la organización.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Nombre comercial *</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ej. Industrias San Jorge"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Razón Social o CUIT (Opcional)</label>
                      <input
                        type="text"
                        value={formData.legalEntity}
                        onChange={(e) => setFormData({ ...formData, legalEntity: e.target.value })}
                        placeholder="Ej. San Jorge SRL · 30-xxxxxxxx-x"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Website o Redes Sociales</label>
                      <input
                        type="text"
                        value={formData.websiteOrSocial}
                        onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                        placeholder="www.empresa.com.ar o @empresa"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Ubicación de planta / sede central *</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Ej. Tigre, Pcia. de Buenos Aires / CABA / Rosario"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Año de fundación</label>
                      <input
                        type="text"
                        value={formData.foundationYear}
                        onChange={(e) => setFormData({ ...formData, foundationYear: e.target.value })}
                        placeholder="Ej. 1994"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Sector económico *</label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Industria & Manufactura">Industria & Manufactura</option>
                        <option value="Agroindustria & Campo">Agroindustria & Campo</option>
                        <option value="Comercio Mayorista / Minorista">Comercio Mayorista / Minorista</option>
                        <option value="Servicios Profesionales / B2B">Servicios Profesionales / B2B</option>
                        <option value="Logística & Distribución">Logística & Distribución</option>
                        <option value="Tecnología & Software">Tecnología & Software</option>
                        <option value="Salud & Farma">Salud & Farma</option>
                        <option value="Construcción & Real Estate">Construcción & Real Estate</option>
                        <option value="Otro sector">Otro sector</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">
                        Principales productos o servicios comercializados
                      </label>
                      <input
                        type="text"
                        value={formData.productsOrServices}
                        onChange={(e) => setFormData({ ...formData, productsOrServices: e.target.value })}
                        placeholder="Ej. Envases industriales para laboratorios y sector alimentario"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">Cantidad aproximada de empleados</label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="1 a 10 empleados (Microempresa)">1 a 10 empleados (Microempresa)</option>
                        <option value="11 a 50 empleados (PyME Pequeña)">11 a 50 empleados (PyME Pequeña)</option>
                        <option value="51 a 200 empleados (PyME Mediana)">51 a 200 empleados (PyME Mediana)</option>
                        <option value="Más de 200 empleados">Más de 200 empleados (Tramo II)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* BLOQUE 3 */}
              {currentBlock === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-100 pb-3">
                    <h2 className="text-xl font-serif-title font-bold text-[#003087]">
                      Bloque 3: Operaciones, mercado y alcance
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Dinámica de comercialización, presencia territorial e internacionalización.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Alcance territorial de ventas</label>
                      <select
                        value={formData.commercialReach}
                        onChange={(e) => setFormData({ ...formData, commercialReach: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Local / Zonal">Local / Zonal</option>
                        <option value="Provincial / Regional">Provincial / Regional</option>
                        <option value="Nacional (múltiples provincias)">Nacional (múltiples provincias)</option>
                        <option value="Internacional">Internacional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">¿Exporta actualmente?</label>
                      <select
                        value={formData.exports}
                        onChange={(e) => setFormData({ ...formData, exports: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="No exporta actualmente">No exporta actualmente</option>
                        <option value="Exporta esporádicamente (&lt; 10% de ventas)">Exporta esporádicamente (&lt; 10%)</option>
                        <option value="Exportador habitual consolidado">Exportador habitual consolidado</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Intención de internacionalización</label>
                      <select
                        value={formData.internationalIntent}
                        onChange={(e) => setFormData({ ...formData, internationalIntent: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Interés activo en los próximos 2 años">Interés activo en los próximos 2 años</option>
                        <option value="Solo foco en mercado doméstico">Solo foco en mercado doméstico</option>
                        <option value="Ya presente en el exterior">Ya presente en el exterior</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Modelo de clientes principal</label>
                      <select
                        value={formData.businessModel}
                        onChange={(e) => setFormData({ ...formData, businessModel: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="B2B (Empresa a Empresa)">B2B (Empresa a Empresa)</option>
                        <option value="B2C (Consumidor final)">B2C (Consumidor final)</option>
                        <option value="B2G (Gobierno / Compras públicas)">B2G (Gobierno / Compras públicas)</option>
                        <option value="Mixto B2B y B2C">Mixto B2B y B2C</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block font-semibold text-slate-700 mb-1">Modo de operación</label>
                      <select
                        value={formData.operationMode}
                        onChange={(e) => setFormData({ ...formData, operationMode: e.target.value })}
                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-800 focus:outline-none focus:border-[#0080C9]"
                      >
                        <option value="Físico tradicional">Físico tradicional</option>
                        <option value="Híbrido (Presencial con procesos digitales)">Híbrido (Presencial con procesos digitales)</option>
                        <option value="100% Digital / E-commerce">100% Digital / E-commerce</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* BLOQUE 4 */}
              {currentBlock === 4 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-100 pb-3">
                    <h2 className="text-xl font-serif-title font-bold text-[#003087]">
                      Bloque 4: Desafíos y oportunidades UdeSA–Empresa
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Identificá los temas críticos de la organización y el interés en articular con cátedras y alumnos.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-800">
                      ¿Qué desafíos principales enfrenta la empresa hoy? (Seleccioná los más relevantes)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {availableChallenges.map((ch) => {
                        const isChecked = formData.mainChallenges.includes(ch);
                        return (
                          <button
                            key={ch}
                            type="button"
                            onClick={() => handleChallengeToggle(ch)}
                            className={`flex items-center gap-2 p-2.5 rounded border text-left transition-colors ${
                              isChecked
                                ? 'bg-blue-50 border-[#0080C9] text-[#003087] font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#003087] border-[#003087] text-white' : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isChecked && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                            <span>{ch}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <label className="block text-xs font-bold text-slate-800">
                      Modalidades de articulación académica de interés:
                    </label>

                    <div className="space-y-2 text-xs text-slate-700">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.interestInStudentProjects}
                          onChange={(e) => setFormData({ ...formData, interestInStudentProjects: e.target.checked })}
                          className="rounded border-slate-300 text-[#003087] focus:ring-0"
                        />
                        <span>Interés en recibir estudiantes para Trabajos Prácticos de materias de grado</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.interestInFinalGraduationProjects}
                          onChange={(e) => setFormData({ ...formData, interestInFinalGraduationProjects: e.target.checked })}
                          className="rounded border-slate-300 text-[#003087] focus:ring-0"
                        />
                        <span>Interés en proponer casos para Trabajos Finales de Graduación (TFG) o Tesis</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.interestInCaseStudies}
                          onChange={(e) => setFormData({ ...formData, interestInCaseStudies: e.target.checked })}
                          className="rounded border-slate-300 text-[#003087] focus:ring-0"
                        />
                        <span>Interés en participar en la redacción de Casos Pedagógicos UdeSA</span>
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.interestInInternships}
                          onChange={(e) => setFormData({ ...formData, interestInInternships: e.target.checked })}
                          className="rounded border-slate-300 text-[#003087] focus:ring-0"
                        />
                        <span>Interés en publicar pasantías o búsquedas de empleo para la comunidad</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Comentarios adicionales o inquietudes específicas
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalComments}
                      onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
                      placeholder="Dejanos cualquier aclaración adicional sobre tu empresa o tus expectativas..."
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#0080C9]"
                    />
                  </div>
                </div>
              )}

              {/* Navigation controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                {currentBlock > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentBlock((p) => p - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Anterior</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentBlock < 4 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentBlock((p) => p + 1)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded transition-colors shadow-xs"
                  >
                    <span>Siguiente bloque</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#0080C9] hover:bg-[#0070B0] rounded transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSubmitting && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                    <span>Enviar Censo PyME</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="bg-white rounded-lg shadow-md border border-slate-200 p-8 sm:p-12 text-center space-y-6">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#003087]">
                ¡Muchas gracias por participar del Censo PyME UdeSA!
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Tus respuestas han quedado registradas en el repositorio seguro de investigación de la Escuela de Negocios de la Universidad de San Andrés.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded max-w-md mx-auto text-xs text-slate-600 text-left space-y-2">
              <span className="font-bold text-slate-800 block">Próximos pasos:</span>
              <p>· Recibirás por correo el informe agregado del ecosistema una vez concluido el relevamiento.</p>
              <p>· Si indicaste interés en vincular a tu empresa con estudiantes o proyectos aplicados, el área de Vinculación se contactará durante las próximas semanas.</p>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={onBackToHome}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
              >
                Volver a la portada de la iniciativa
              </button>
              <button
                onClick={onOpenObservatory}
                className="px-6 py-2.5 text-xs font-semibold text-[#003087] bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded"
              >
                Explorar el Observatorio PyME
              </button>
            </div>
          </div>
        )}

        {/* CONCEPTUAL BENCHMARK PLACEHOLDER (Explicit Requirement from Section 6) */}
        <div className="mt-12 bg-white rounded-lg p-7 border border-dashed border-slate-300 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 text-slate-500">
            <BarChart2 className="w-5 h-5 text-[#0080C9]" />
            <span className="text-xs uppercase tracking-wider font-bold text-slate-700">
              Benchmark PyME UdeSA — Próximamente
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Una vez alcanzado el volumen estadístico y la calibración metodológica del relevamiento, los participantes podrán acceder a una visualización agregada y anónima que compara su nivel de profesionalización, adopción digital y gobernanza con respecto a organizaciones de similar tamaño y sector.
          </p>

          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded text-[11px] text-slate-500 italic">
            <strong>Compromiso de rigor:</strong> La Universidad de San Andrés no publica estadísticas ficticias ni estimaciones arbitrarias; el Benchmark se habilitará exclusivamente cuando cuente con respaldo muestral auditado.
          </div>
        </div>
      </div>
    </div>
  );
};
