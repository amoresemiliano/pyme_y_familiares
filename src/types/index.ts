export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface StrategicPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  activities: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface ProgramItem {
  id: string;
  tag: string;
  title: string;
  duration?: string;
  modality?: string;
  description: string;
  topics: string[];
  statusLabel?: string;
  ctaText: string;
}

export interface KeyChallenge {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  iconName: string;
}

export interface CaseStudy {
  id: string;
  companyName: string;
  sector: string;
  title: string;
  description: string;
  takeaways: string[];
  isPlaceholder?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Desayunos PyME' | 'Encuentros' | 'Webinars' | 'Talleres';
  date: string;
  time: string;
  modality: 'Presencial (Campus Victoria)' | 'Presencial (Sede Riobamba)' | 'Online sincrónico';
  description: string;
  speaker: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: 'Empresas familiares' | 'Liderazgo' | 'Estrategia' | 'Finanzas' | 'Tecnología e IA';
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  isPlaceholder?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface CensoFormData {
  // Bloque 1: Perfil del estudiante / participante
  fullName: string;
  institutionalEmail: string;
  phone: string;
  programOrCareer: string;
  careerProgress: string;
  relationWithPyme: string;
  roleInPyme: string;
  weeklyHours: string;

  // Bloque 2: Identificación de la PyME
  companyName: string;
  legalEntity: string;
  websiteOrSocial: string;
  location: string;
  foundationYear: string;
  sector: string;
  productsOrServices: string;
  employeeCount: string;

  // Bloque 3: Operaciones y mercado
  commercialReach: string;
  exports: string;
  exportMarkets: string;
  internationalIntent: string;
  businessModel: string;
  operationMode: string;

  // Bloque 4: Desafíos y oportunidades UdeSA-Empresa
  mainChallenges: string[];
  interestInStudentProjects: boolean;
  interestInFinalGraduationProjects: boolean;
  interestInCaseStudies: boolean;
  interestInInternships: boolean;
  jobPostingsOpen: boolean;
  additionalComments?: string;
}
