import React, { useState } from 'react';
import { OBSERVATORY_CATEGORIES } from '../data/mockData';
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Download,
  Filter,
  Search,
  Sparkles,
  BarChart3,
  Building,
} from 'lucide-react';

interface ObservatoryViewProps {
  onBackToHome: () => void;
  onOpenCenso: () => void;
}

interface ResearchPaper {
  id: string;
  category: string;
  title: string;
  authors: string;
  date: string;
  abstract: string;
  status: 'Publicado' | 'En revisión' | 'Próximo release';
  fileType: string;
}

export const ObservatoryView: React.FC<ObservatoryViewProps> = ({
  onBackToHome,
  onOpenCenso,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const papers: ResearchPaper[] = [
    {
      id: 'pap-01',
      category: 'Censo PyME',
      title: 'Marco metodológico y diseño muestral del Censo PyME de la Comunidad San Andrés',
      authors: 'Observatorio PyME & Escuela de Negocios UdeSA',
      date: 'Ciclo 2026',
      abstract:
        'Fundamentos epistemológicos y técnicos para el relevamiento de variables productivas, gobernanza y brechas tecnológicas en organizaciones vinculadas a la comunidad educativa.',
      status: 'Próximo release',
      fileType: 'PDF Metodológico (1.8 MB)',
    },
    {
      id: 'pap-02',
      category: 'Empresas familiares',
      title: 'Gobernanza y profesionalización en PyMEs de capital cerrado: lecciones de la transición generacional',
      authors: 'Cátedra de Empresas Familiares · Universidad de San Andrés',
      date: 'Documento de trabajo',
      abstract:
        'Evidencia empírica sobre los factores determinantes en la continuidad de la empresa familiar argentina: protocolos de familia, separación de roles y profesionalización de directorios.',
      status: 'Publicado',
      fileType: 'Whitepaper UdeSA (2.4 MB)',
    },
    {
      id: 'pap-03',
      category: 'Tecnología e IA',
      title: 'Adopción de Inteligencia Artificial generativa en estructuras comerciales de pequeñas y medianas empresas',
      authors: 'Iniciativa Negocios & Tecnología · Escuela de Negocios',
      date: 'Informe sectorial',
      abstract:
        'Casos aplicados y barreras de implementación en la automatización de procesos de atención, marketing y analítica predictiva de demanda en el mercado local.',
      status: 'Publicado',
      fileType: 'Reporte Especial (3.1 MB)',
    },
    {
      id: 'pap-04',
      category: 'Finanzas',
      title: 'Gestión de liquidez y financiamiento no bancario en contextos de alta volatilidad macroeconómica',
      authors: 'Centro de Estudios Financieros · UdeSA',
      date: 'Investigación aplicada',
      abstract:
        'Análisis de instrumentos de capital de trabajo: pagarés bursátiles, cheques de pago diferido y financiamiento estructurado para empresas medianas en Argentina.',
      status: 'Publicado',
      fileType: 'Monografía (1.4 MB)',
    },
    {
      id: 'pap-05',
      category: 'Sucesión',
      title: 'El retiro del fundador: dinámicas afectivas, patrimoniales y operativas en el traspaso de mando',
      authors: 'Área de Liderazgo & Comportamiento Organizacional',
      date: 'Caso & Marco Conceptual',
      abstract:
        'Herramientas para acompañar la transición psicológica y societaria del líder histórico hacia funciones consultivas o presidencias no ejecutivas.',
      status: 'En revisión',
      fileType: 'Pre-print Académico (950 KB)',
    },
    {
      id: 'pap-06',
      category: 'Internacionalización',
      title: 'Competitividad exportadora en PyMEs agroindustriales y de manufactura avanzada',
      authors: 'Departamento de Economía y Negocios Globales',
      date: 'Estudio de campo',
      abstract:
        'Estrategias de inserción en mercados regionales del Mercosur y la Alianza del Pacífico sin descapitalizar la operación doméstica.',
      status: 'Próximo release',
      fileType: 'Documento de Trabajo (2.0 MB)',
    },
  ];

  const filtered = papers.filter((p) => {
    const matchesCat =
      selectedCategory === 'Todos' || p.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesQuery =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.authors.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 font-sans">
      {/* Top Banner */}
      <section className="bg-[#071932] text-white py-14 border-b border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a la portada de la iniciativa</span>
          </button>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block">
              Repositorio de Conocimiento e Investigación
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-title font-bold text-white tracking-tight">
              Observatorio PyME UdeSA
            </h1>
          </div>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Centralizamos investigaciones, censos, informes y estudios pedagógicos generados por los profesores, investigadores y cátedras de la Escuela de Negocios de la Universidad de San Andrés.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCenso}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0080C9] hover:bg-[#0070B0] rounded transition-colors"
            >
              <span>Participar del Censo PyME activo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        {/* Search and Category Filters */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palabra clave, autor o tema (ej. IA, sucesión, financiamiento)..."
              className="w-full bg-slate-50 border border-slate-300 rounded-md pl-10 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0080C9]"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            <span className="text-xs font-bold text-slate-600 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#0080C9]" />
              Filtro temático:
            </span>
            {OBSERVATORY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#003087] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Papers List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Mostrando {filtered.length} publicaciones del Observatorio</span>
            <span>Escuela de Negocios · Universidad de San Andrés</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((paper) => (
              <div
                key={paper.id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                    <span className="font-bold text-[#0080C9] uppercase tracking-wider">{paper.category}</span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        paper.status === 'Publicado'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-amber-50 text-amber-700'
                      }`}
                    >
                      {paper.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-title font-bold text-[#003087] leading-snug">
                    {paper.title}
                  </h3>

                  <div className="text-xs text-slate-500 font-medium">
                    Por {paper.authors} · <span className="font-mono">{paper.date}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    {paper.fileType}
                  </span>

                  <button
                    onClick={() => {
                      alert(`Publicación institucional: "${paper.title}". Documento disponible en biblioteca y archivo académico UdeSA.`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#003087] hover:bg-blue-50 border border-slate-200 rounded transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Acceder al documento</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contribute or Propose Research banner */}
        <div className="bg-white rounded-lg p-8 border border-slate-200 text-center space-y-3 max-w-3xl mx-auto">
          <BookOpen className="w-8 h-8 text-[#0080C9] mx-auto" />
          <h3 className="text-xl font-serif-title font-bold text-[#003087]">
            ¿Tenés datos o investigaciones sobre PyMEs argentinas?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xl mx-auto">
            El Observatorio PyME recibe propuestas de artículos, monografías y análisis de graduados, docentes e investigadores invitados para su consideración editorial y pedagógica.
          </p>
          <div className="pt-2">
            <button
              onClick={onBackToHome}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#003087] hover:bg-[#002566] rounded"
            >
              Contactar a la coordinación del Observatorio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
