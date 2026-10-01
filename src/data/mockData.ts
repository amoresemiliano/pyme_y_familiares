import {
  StrategicPillar,
  ProgramItem,
  KeyChallenge,
  CaseStudy,
  EventItem,
  ArticleItem,
  NewsItem,
  TeamMember,
} from '../types';

export const INSTITUTIONAL_DATA = {
  name: 'PyME & Empresas Familiares',
  institution: 'Universidad de San Andrés',
  school: 'Escuela de Negocios',
  heroTagline: 'Conocimiento, comunidad y herramientas para transformar empresas y construir continuidad.',
  heroDescription:
    'Un espacio de encuentro académico y empresarial dedicado a acompañar a las PyMEs y familias empresarias argentinas en sus procesos de profesionalización, crecimiento y relevo generacional.',
  heroStatement:
    'Transformar, profesionalizar, perdurar. Una iniciativa de la Escuela de Negocios de UdeSA para conectar la experiencia empresaria con el rigor académico y las nuevas generaciones.',
  aboutTitle: 'Sobre la iniciativa',
  aboutSubtitle: 'Rigor académico con impacto real en la economía productiva argentina.',
  aboutDescription:
    'La Iniciativa PyME & Empresas Familiares nace en la Escuela de Negocios de la Universidad de San Andrés con el propósito de crear un puente permanente entre el conocimiento universitario y la realidad operativa de las empresas que sostienen la producción y el empleo en Argentina. Acompañamos a dueños, fundadores, directores y miembros de segundas y terceras generaciones en el diseño de gobernanza, la gestión del talento, la innovación tecnológica y los desafíos humanos inherentes a la empresa familiar.',
  officialEmailPending: '[EMAIL INSTITUCIONAL A CONFIRMAR]',
  contactSubtext: '¿Querés participar, acercarnos un desafío empresarial o conocer más sobre la iniciativa?',
};

export const STRATEGIC_PILLARS: StrategicPillar[] = [
  {
    id: 'personas',
    number: '01',
    title: 'Desarrollo de personas en UdeSA',
    subtitle: 'Formación de líderes, sucesores y directivos con visión estratégica y humana',
    description:
      'Diseñamos trayectorias de formación ejecutiva y académica que potencian tanto a los jóvenes sucesores como a los gerentes profesionales y fundadores, brindando marcos conceptuales y herramientas prácticas para la toma de decisiones complejas.',
    benefits: [
      'Fortalecimiento de habilidades de liderazgo intergeneracional',
      'Desarrollo de competencias en finanzas, estrategia e Inteligencia Artificial',
      'Integración temprana de estudiantes con vocación empresaria',
    ],
    activities: [
      'Programa Ejecutivo PyME intensivo de 3 jornadas',
      'Seminarios de gobernanza y protocolo familiar',
      'Cursos electivos integrados para carreras de grado y posgrado',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Reunión directiva y diálogo intergeneracional en UdeSA',
  },
  {
    id: 'comunidad',
    number: '02',
    title: 'Desarrollo para la comunidad',
    subtitle: 'Conocimiento aplicado, investigaciones y herramientas abiertas al ecosistema',
    description:
      'Generamos producción intelectual rigurosa sobre el entramado PyME nacional a través del Observatorio PyME, estudios de casos de empresas locales, publicaciones y herramientas metodológicas de acceso abierto para decisores.',
    benefits: [
      'Acceso a diagnósticos y estudios empíricos del sector productivo',
      'Casos de estudio propios basados en empresas argentinas',
      'Transferencia directa de buenas prácticas de gestión y transformación digital',
    ],
    activities: [
      'Censo PyME de la comunidad UdeSA',
      'Biblioteca de casos pedagógicos e investigaciones aplicadas',
      'Ciclos de webinars y publicaciones de divulgación ejecutiva',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Equipo de investigación y análisis empresarial de UdeSA',
  },
  {
    id: 'networking',
    number: '03',
    title: 'Networking y comunidad',
    subtitle: 'Espacios de confianza para compartir dilemas reales entre pares y generaciones',
    description:
      'Facilitamos entornos seguros de intercambio entre dueños, sucesores, académicos, entidades financieras y líderes tecnológicos, propiciando vínculos de valor y alianzas estratégicas.',
    benefits: [
      'Conversaciones francas entre líderes con problemáticas compartidas',
      'Puente directo con estudiantes destacados y graduados UdeSA',
      'Articulación con cámaras empresarias, banca y organismos del ecosistema',
    ],
    activities: [
      'Desayunos temáticos y mesas redondas de decisores',
      'Encuentros de diálogo intergeneracional (fundadores y sucesores)',
      'Jornadas anuales de vinculación PyME en campus UdeSA',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Networking empresarial y encuentro de pares en Universidad de San Andrés',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-ejecutivo-pyme',
    tag: 'Formación Ejecutiva',
    title: 'Programa Ejecutivo PyME',
    duration: '3 días intensivos',
    modality: 'Presencial / Híbrido UdeSA',
    description:
      'Una experiencia ejecutiva concentrada e inmersiva para directores y socios de PyMEs, orientada a actualizar el modelo de negocio, ordenar la estructura financiera, liderar equipos y adoptar IA y tecnología.',
    topics: [
      'Estrategia competitiva y modelos de negocio',
      'Finanzas y control de gestión para decisores',
      'Liderazgo y cultura en estructuras medianas',
      'Inteligencia Artificial y productividad operativa',
    ],
    statusLabel: 'Próxima edición en preparación',
    ctaText: 'Conocer el programa',
  },
  {
    id: 'prog-empresas-familiares',
    tag: 'Especialización',
    title: 'Empresas Familiares y Gobernanza',
    duration: 'Módulos ejecutivos',
    modality: 'Campus Victoria / Sede Riobamba',
    description:
      'Enfocado en las tensiones y oportunidades estructurales de la empresa de familia: cómo crear órganos de gobierno eficaces, formalizar el protocolo y asegurar un traspaso generacional ordenado.',
    topics: [
      'Diferenciación entre Familia, Propiedad y Gestión',
      'Consejo de Familia y Directorio Profesional',
      'Planificación sucesoria y desarrollo de futuros líderes',
      'Gestión constructiva de desacuerdos familiares',
    ],
    statusLabel: 'Propuesta académica activa',
    ctaText: 'Conocer propuestas',
  },
  {
    id: 'prog-talleres',
    tag: 'Taller Inmersivo',
    title: 'Taller de Convivencia Generacional',
    duration: 'Jornada intensiva aplicada',
    modality: 'Taller experiencial cerrado',
    description:
      'Espacio diseñado para ser cursado conjuntamente por miembros de distintas generaciones de una misma organización (padres e hijos, hermanos, primos) para trabajar sobre acuerdos y expectativas reales.',
    topics: [
      'Dinámicas vinculares y comunicación efectiva',
      'Expectativas de autonomía vs. legado y control',
      'Meritocracia, remuneraciones y roles definidos',
      'Construcción de visión compartida para la década',
    ],
    statusLabel: 'Cupos limitados por empresa',
    ctaText: 'Explorar talleres',
  },
  {
    id: 'prog-electivas',
    tag: 'Academia UdeSA',
    title: 'Electivas y Contenidos de Grado y Posgrado',
    duration: 'Ciclo lectivo regular',
    modality: 'Aulas UdeSA',
    description:
      'Materias optativas, seminarios y espacios de cátedra donde estudiantes de grado y posgrado analizan la realidad y los casos específicos de las empresas familiares argentinas.',
    topics: [
      'Administración y gestión de PyMEs',
      'Dinámicas de la empresa familiar',
      'Consultoría aplicada y resolución de casos reales',
    ],
    statusLabel: 'Para estudiantes UdeSA',
    ctaText: 'Ver electivas académicas',
  },
];

export const KEY_CHALLENGES: KeyChallenge[] = [
  {
    id: 'sucesion',
    title: 'Sucesión',
    subtitle: 'Continuidad generacional vertical y transferencia del legado',
    description:
      'Planificar la transición de mando y propiedad sin poner en riesgo la solidez operativa ni la armonía familiar. Acompañamos el proceso desde la vocación de los sucesores hasta la redefinición del rol del fundador.',
    keyPoints: [
      'Elaboración del plan y tiempos de transición',
      'Desarrollo de competencias en los sucesores',
      'Diseño patrimonial y traspaso accionario ordenado',
      'Acompañamiento emocional y profesional del fundador',
    ],
    iconName: 'GitFork',
  },
  {
    id: 'convivencia',
    title: 'Convivencia',
    subtitle: 'Relaciones horizontales, gobierno de pares y acuerdos duraderos',
    description:
      'La convivencia armónica entre hermanos, primos y equipos no familiares requiere reglas claras. Diseñamos estructuras de gobierno que separan con nitidez los afectos de las decisiones de negocio.',
    keyPoints: [
      'Protocolo familiar con validez práctica real',
      'Definición de roles, salarios y meritocracia',
      'Directorio profesional con directores independientes',
      'Resolución estructurada de desacuerdos cotidianos',
    ],
    iconName: 'Users',
  },
  {
    id: 'negocio',
    title: 'Desarrollo del Negocio',
    subtitle: 'Competitividad, profesionalización, IA y escalabilidad',
    description:
      'Una empresa familiar sólo trasciende si es económica y tecnológicamente competitiva. Impulsamos la profesionalización de procesos, la digitalización y la apertura a nuevos mercados.',
    keyPoints: [
      'Actualización de la propuesta de valor y modelo comercial',
      'Transformación digital e incorporación pragmática de IA',
      'Control de gestión financiera y acceso a financiamiento',
      'Estrategia de internacionalización y nuevos canales',
    ],
    iconName: 'TrendingUp',
  },
];

export const CASES: CaseStudy[] = [
  {
    id: 'caso-01',
    companyName: '[Empresa Metalmecánica - Provincia de Buenos Aires]',
    sector: 'Industria & Manufactura',
    title: 'De fundador a segunda generación: la profesionalización del directorio',
    description:
      'Estudio en desarrollo sobre el proceso de traspaso de mando integral, incorporación de un gerente general no familiar y conformación del primer Consejo de Administración con directores externos.',
    takeaways: [
      'Separación efectiva de propiedad y dirección operativa',
      'Elaboración del protocolo familiar consensuado',
      'Preservación de la cultura fundacional con métricas de gestión modernas',
    ],
    isPlaceholder: true,
  },
  {
    id: 'caso-02',
    companyName: '[Compañía de Alimentos & Bebidas - Región Centro]',
    sector: 'Agroindustria & Consumo Masivo',
    title: 'Transformación digital y expansión internacional entre dos generaciones',
    description:
      'Cómo la tercera generación lideró la modernización tecnológica y la apertura de canales de exportación regional conservando la solvencia financiera de la familia.',
    takeaways: [
      'Adopción de herramientas de analítica e IA para previsión de demanda',
      'Incentivos alineados entre miembros activos y no activos de la familia',
      'Acceso a nuevos mercados sin comprometer el capital de trabajo',
    ],
    isPlaceholder: true,
  },
  {
    id: 'caso-03',
    companyName: '[Servicios de Logística & Distribución - AMBA]',
    sector: 'Logística & Supply Chain',
    title: 'La convivencia entre hermanos y la reorganización de áreas clave',
    description:
      'Reestructuración de responsabilidades entre tres hermanos con perfiles complementarios para eliminar duplicidades y potenciar el crecimiento del negocio.',
    takeaways: [
      'Matriz de toma de decisiones basada en mérito y formación',
      'Comité de auditoría y transparencia contable periódica',
      'Canales formales de comunicación laboral fuera del ámbito familiar',
    ],
    isPlaceholder: true,
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'ev-01',
    title: 'Desayuno PyME: Desafíos de financiamiento y capital de trabajo en el contexto actual',
    category: 'Desayunos PyME',
    date: '[FECHA A CONFIRMAR]',
    time: '08:30 a 10:30 hs',
    modality: 'Presencial (Sede Riobamba)',
    description:
      'Mesa de trabajo reducida entre directores financieros de PyMEs y especialistas de la Escuela de Negocios para analizar coberturas y optimización de flujo de caja.',
    speaker: '[ESPECIALISTA UdeSA A CONFIRMAR]',
  },
  {
    id: 'ev-02',
    title: 'Encuentro Intergeneracional: ¿Cómo convivir y liderar entre dos generaciones?',
    category: 'Encuentros',
    date: '[FECHA A CONFIRMAR]',
    time: '18:30 a 20:30 hs',
    modality: 'Presencial (Campus Victoria)',
    description:
      'Panel abierto con familias empresarias que transitaron exitosamente el cambio generacional, compartiendo aprendizajes, errores y acuerdos.',
    speaker: '[PANEL INVITADO A CONFIRMAR]',
  },
  {
    id: 'ev-03',
    title: 'Webinar: Inteligencia Artificial aplicada a la productividad comercial en PyMEs',
    category: 'Webinars',
    date: '[FECHA A CONFIRMAR]',
    time: '18:00 a 19:30 hs',
    modality: 'Online sincrónico',
    description:
      'Sesión práctica orientada a dueños y gerentes comerciales sobre casos de uso inmediatos de IA generativa para ventas, atención y análisis de clientes.',
    speaker: '[DOCENTE DE NEGOCIOS DIGITALES A CONFIRMAR]',
  },
  {
    id: 'ev-04',
    title: 'Taller: Protocolo Familiar paso a paso: de la conversación al documento vivo',
    category: 'Talleres',
    date: '[FECHA A CONFIRMAR]',
    time: '09:00 a 13:00 hs',
    modality: 'Presencial (Sede Riobamba)',
    description:
      'Taller metodológico para directivos y sucesores con guías prácticas para redactar acuerdos familiares sostenibles.',
    speaker: '[FACILITADOR UdeSA A CONFIRMAR]',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-01',
    title: 'Las 5 preguntas que todo fundador debe responder antes de planear el retiro',
    category: 'Empresas familiares',
    readTime: '6 min de lectura',
    date: 'Actualización académica',
    excerpt:
      'La transferencia del liderazgo no es un evento aislado, sino un proceso de maduración compartido que requiere acuerdos claros y preparación mutua.',
    author: 'Cátedra de Empresas Familiares - UdeSA',
  },
  {
    id: 'art-02',
    title: 'IA y PyMEs: cómo comenzar sin presupuestos corporativos millonarios',
    category: 'Tecnología e IA',
    readTime: '5 min de lectura',
    date: 'Publicación de investigación',
    excerpt:
      'Guía práctica para implementar herramientas de automatización y modelos de lenguaje en procesos comerciales y de operaciones.',
    author: 'Iniciativa Negocios & Tecnología - UdeSA',
  },
  {
    id: 'art-03',
    title: 'Gobierno corporativo en medianas empresas: ¿cuándo sumar directores independientes?',
    category: 'Liderazgo',
    readTime: '7 min de lectura',
    date: 'Estudio de campo',
    excerpt:
      'Evidencia empírica sobre cómo la mirada externa desactiva conflictos familiares y aporta visión estratégica en momentos de inflexión.',
    author: 'Escuela de Negocios - UdeSA',
  },
  {
    id: 'art-04',
    title: 'Finanzas para la continuidad: resguardar el patrimonio sin asfixiar la operación',
    category: 'Finanzas',
    readTime: '6 min de lectura',
    date: 'Documento de trabajo',
    excerpt:
      'Estrategias de liquidez, inversión en activos productivos y gestión de dividendos familiares en contextos de alta volatilidad macroeconómica.',
    author: 'Centro de Finanzas - UdeSA',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-01',
    category: 'Lanzamiento Institucional',
    title: 'La Escuela de Negocios de UdeSA consolida su iniciativa dedicada a PyMEs y Empresas Familiares',
    date: 'Comunicado oficial',
    excerpt:
      'Un espacio que articulará programas de formación ejecutiva, el Censo PyME de la comunidad San Andrés y proyectos de vinculación directa entre alumnos y empresas.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-02',
    category: 'Vinculación Universitaria',
    title: 'Convocatoria abierta para empresas: propuestas de Trabajos Prácticos y Tesis con estudiantes UdeSA',
    date: 'Ciclo lectivo 2026',
    excerpt:
      'PyMEs de todo el país pueden postular desafíos operativos y estratégicos para ser analizados por cátedras y proyectos de graduación guiados por docentes.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'news-03',
    category: 'Investigación Aplicada',
    title: 'Comienza el relevamiento del primer Censo PyME de la Comunidad San Andrés',
    date: 'Observatorio PyME',
    excerpt:
      'La encuesta busca relevar las características productivas, necesidades de talento y proyectos de innovación de las organizaciones vinculadas a graduados y alumnos.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-01',
    name: '[Director/a Académico/a a confirmar]',
    role: 'Dirección Académica',
    credentials: '[Cátedra de Empresas Familiares y PyME]',
    bio: 'Especialista en estrategia empresaria, gobierno corporativo y metodologías de profesionalización en empresas de capital cerrado y familiar.',
    isPlaceholder: true,
  },
  {
    id: 'team-02',
    name: '[Director/a Ejecutivo/a a confirmar]',
    role: 'Dirección Ejecutiva',
    credentials: '[Escuela de Negocios UdeSA]',
    bio: 'Lidera la articulación entre los programas formativos, los encuentros de networking y la relación con cámaras y empresas aliadas.',
    isPlaceholder: true,
  },
  {
    id: 'team-03',
    name: '[Coordinador/a de Vinculación a confirmar]',
    role: 'Vinculación Universidad-Empresa',
    credentials: '[Coordinación de Proyectos Aplicados]',
    bio: 'Responsable del enlace entre los desafíos presentados por las empresas y las cátedras de grado y posgrado para TPs y pasantías.',
    isPlaceholder: true,
  },
  {
    id: 'team-04',
    name: '[Investigador/a Observatorio a confirmar]',
    role: 'Observatorio PyME & Casos',
    credentials: '[Investigación y Desarrollo Pedagógico]',
    bio: 'Coordina el Censo PyME y la redacción de casos de estudio sobre empresas nacionales para uso académico y de difusión.',
    isPlaceholder: true,
  },
];

export const COLLABORATORS_LIST = [
  'Comunidad de graduados de la Escuela de Negocios UdeSA',
  'Estudiantes avanzados de Administración de Empresas y Negocios Digitales',
  'Docentes e investigadores de los Departamentos de Administración y Economía',
  'Mentores de la Red de Graduados de San Andrés',
  'Especialistas sectoriales invitados y facilitadores de protocolo familiar',
];

export const PARTNERS_LIST = [
  { id: 'p1', name: '[Entidad Bancaria & Financiera Aliada]', type: 'Banca & Crédito' },
  { id: 'p2', name: '[Cámara Empresarial PyME]', type: 'Entidad Gremial Empresaria' },
  { id: 'p3', name: '[Compañía Tecnológica Partner]', type: 'Transformación Digital & Cloud' },
  { id: 'p4', name: '[Firma de Consultoría en Gobernanza]', type: 'Gobierno Corporativo' },
];

export const OBSERVATORY_CATEGORIES = [
  'Todos',
  'Censo PyME',
  'Empresas familiares',
  'Sucesión',
  'Generaciones',
  'Talento',
  'Finanzas',
  'Tecnología e IA',
  'Internacionalización',
  'Estrategia',
];
