import type { Localized } from "./i18n";

export const profile = {
  name: "Guillermo Leal",
  email: "lealguille.09@gmail.com",
  github: "https://github.com/GuilleLeaal",
  linkedin: "https://www.linkedin.com/in/guillermo-leal-b4659329b/",
  cv: `${import.meta.env.BASE_URL}Guillermo_Leal_CV.pdf`,
};

export type Category = "all" | "client" | "product" | "education" | "backend";
export type Project = {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  discipline: Localized;
  description: Localized;
  highlights: Localized[];
  tags: string[];
  image?: string;
  live?: string;
  repo?: string;
};
const asset = (name: string) =>
  `${import.meta.env.BASE_URL}images/${name}.webp`;

export const projects: Project[] = [
  {
    id: "calypso",
    name: "Calypso Eventos",
    category: "client",
    discipline: {
      es: "Sitio web y sistema de reservas",
      en: "Website and booking system",
    },
    description: {
      es: "Sitio web para un salón de eventos en El Pinar. Incluye reservas, consulta de disponibilidad y un panel de administración desarrollado con React y Supabase.",
      en: "Website for an event venue in El Pinar. Includes bookings, availability and an administration panel built with React and Supabase.",
    },
    highlights: [
      {
        es: "Sitio público responsive con identidad visual, recorrido de los espacios y SEO.",
        en: "Responsive public website with visual identity, a venue tour and SEO.",
      },
      {
        es: "Gestión de reservas y disponibilidad desde un panel administrador.",
        en: "Booking and availability management through an administration panel.",
      },
      {
        es: "Desarrollo del frontend con React y Tailwind, y del backend con Supabase.",
        en: "Frontend built with React and Tailwind, and backend with Supabase.",
      },
    ],
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    image: asset("calypso"),
    live: "https://calypsoeventos.com.uy",
    repo: "https://github.com/GuilleLeaal/calypso-eventos",
  },
  {
    id: "vitta",
    name: "Vitta Group",
    category: "client",
    discipline: {
      es: "Plataforma inmobiliaria + CMS",
      en: "Real estate platform + CMS",
    },
    description: {
      es: "Plataforma inmobiliaria con Next.js y Sanity CMS. Permite administrar propiedades y publicarlas en un catálogo con fichas individuales.",
      en: "Real estate platform built with Next.js and Sanity CMS. Properties can be managed through the CMS and published in a catalog with individual listing pages.",
    },
    highlights: [
      {
        es: "Next.js con páginas dinámicas por propiedad y componentes reutilizables.",
        en: "Next.js with dynamic property pages and reusable components.",
      },
      {
        es: "Sanity CMS para administrar el catálogo sin depender de cambios de código.",
        en: "Sanity CMS to manage listings without code changes.",
      },
      {
        es: "Metadatos, sitemap y estructura orientada a SEO.",
        en: "Metadata, sitemap and an SEO-focused structure.",
      },
    ],
    tags: ["Next.js", "Sanity", "Tailwind", "SEO"],
    image: asset("vitta"),
    live: "https://vittagroup.uy",
    repo: "https://github.com/GuilleLeaal/vittagroup",
  },
  {
    id: "iconic",
    name: "Iconic Free",
    category: "product",
    discipline: {
      es: "Gestión de competencias de freestyle",
      en: "Freestyle competition management",
    },
    description: {
      es: "Aplicación para organizar competencias de freestyle. Incluye inscripciones, clasificatorias, armado de cruces, resultados y roles de organizador y jurado.",
      en: "Application for organizing freestyle competitions. Includes registrations, qualifiers, brackets, results, and organizer and judge roles.",
    },
    highlights: [
      {
        es: "Roles de organización y jurado vinculados a cada competencia.",
        en: "Organizer and judge roles scoped to each competition.",
      },
      {
        es: "Clasificatorias y cruces iniciales por sorteo, puntaje o armado manual.",
        en: "Qualifiers and initial brackets by draw, score or manual selection.",
      },
      {
        es: "Supabase Auth y políticas RLS para controlar el acceso a los datos.",
        en: "Supabase Auth and RLS policies to control data access.",
      },
    ],
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    repo: "https://github.com/GuilleLeaal/iconic-free",
  },
  {
    id: "moneyflow",
    name: "MoneyFlow",
    category: "product",
    discipline: {
      es: "Aplicación fullstack de finanzas personales",
      en: "Fullstack personal finance application",
    },
    description: {
      es: "Aplicación de finanzas personales con registro de ingresos, gastos y movimientos. Desarrollé el frontend en React y la API con Node.js, Express y MongoDB.",
      en: "Personal finance application for tracking income, expenses and transactions. I built the React frontend and the API with Node.js, Express and MongoDB.",
    },
    highlights: [
      {
        es: "Autenticación JWT y rutas protegidas.",
        en: "JWT authentication and protected routes.",
      },
      {
        es: "API REST con Express y persistencia en MongoDB.",
        en: "REST API with Express and MongoDB persistence.",
      },
      {
        es: "Dashboard con gráficos y validación de datos en frontend y backend.",
        en: "Dashboard charts and data validation on both frontend and backend.",
      },
    ],
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    image: asset("moneyflow"),
    repo: "https://github.com/GuilleLeaal/moneyflow-app",
  },
  {
    id: "pallotti",
    name: "Proyectos finales · Pallotti",
    category: "education",
    discipline: {
      es: "Galería de proyectos · Pallotti 2026",
      en: "Student project gallery · Pallotti 2026",
    },
    description: {
      es: "Galería de proyectos finales de noveno del Colegio Pallotti. Desarrollé la plataforma y la importación de entregas; los sitios expuestos fueron creados por los estudiantes.",
      en: "Gallery of ninth-grade final projects at Colegio Pallotti. I developed the platform and project import process; the displayed websites were created by the students.",
    },
    highlights: [
      {
        es: "Catálogo de entregas con búsqueda, filtros y recorrido de exposición.",
        en: "A project catalog with search, filters and an exhibition tour.",
      },
      {
        es: "Importación de HTML, CSS e imágenes sin modificar los trabajos originales.",
        en: "HTML, CSS and image imports that preserve the original work.",
      },
      {
        es: "Mi aporte: la plataforma y la integración. Los proyectos expuestos son de los estudiantes.",
        en: "My contribution: the platform and integration. The exhibited projects belong to the students.",
      },
    ],
    tags: ["React", "TypeScript", "HTML / CSS", "Educación"],
    repo: "https://github.com/GuilleLeaal/proyectos-finales-noveno",
  },
  {
    id: "perseo",
    name: "Perseo Trainers",
    category: "backend",
    discipline: {
      es: "API de gestión para entrenadores",
      en: "Management API for trainers",
    },
    description: {
      es: "Un backend modular para el dominio del entrenamiento, con modelos relacionales, validaciones y autorización sobre los recursos de cada entrenador.",
      en: "A modular backend for training management, with relational models, validation and authorization over each trainer’s resources.",
    },
    highlights: [
      {
        es: "Módulos de NestJS con controladores, servicios y guards.",
        en: "NestJS modules with controllers, services and guards.",
      },
      {
        es: "JWT y validación de pertenencia de recursos.",
        en: "JWT and resource ownership validation.",
      },
      {
        es: "PostgreSQL, Prisma, validación de DTOs y bajas lógicas.",
        en: "PostgreSQL, Prisma, DTO validation and soft deletion.",
      },
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "JWT"],
  },
  {
    id: "ritmo",
    name: "Mi Ritmo",
    category: "backend",
    discipline: {
      es: "Backend de planificación y analítica personal",
      en: "Personal planning and analytics backend",
    },
    description: {
      es: "Backend de una aplicación de planificación personal. Registra sueño, actividades, energía y fricción, y ofrece endpoints de análisis y resúmenes semanales.",
      en: "Backend for a personal planning application. Tracks sleep, activities, energy and friction, with analytics endpoints and weekly summaries.",
    },
    highlights: [
      {
        es: "Modelado de dominio con NestJS, Prisma y PostgreSQL.",
        en: "Domain modeling with NestJS, Prisma and PostgreSQL.",
      },
      {
        es: "Endpoints de analítica, mapas de calor y resúmenes semanales.",
        en: "Analytics endpoints, heatmaps and weekly insights.",
      },
      {
        es: "Lógica de planificación y validación estricta de entradas.",
        en: "Planning logic and strict input validation.",
      },
    ],
    tags: ["NestJS", "PostgreSQL", "Prisma", "Analytics"],
  },
];

export const experience = [
  {
    company: "STeP",
    period: { es: "Sep 2026 — Actualidad", en: "Sep 2026 — Present" },
    current: true,
    role: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    description: {
      es: "Desarrollo y mantenimiento de sistemas de gestión con React, TypeScript, C#/.NET y SQL Server. Integraciones, optimización de procesos y resolución de incidencias en eReg y eBalance.",
      en: "Development and maintenance of management systems with React, TypeScript, C#/.NET and SQL Server. Integrations, process optimization and issue resolution in eReg and eBalance.",
    },
    tags: ["React", "C# / .NET", "SQL Server", "APIs REST"],
  },
  {
    company: "Colegio Pallotti",
    period: { es: "2026 — Actualidad", en: "2026 — Present" },
    current: true,
    role: {
      es: "Profesor de Ciencias de la Computación",
      en: "Computer Science Teacher",
    },
    description: {
      es: "Planificación y dictado de clases de Python, HTML/CSS, algoritmos, pensamiento computacional y ciudadanía digital. Acompañamiento de proyectos y gestión de grupos.",
      en: "Planning and teaching Python, HTML/CSS, algorithms, computational thinking and digital citizenship. Student project support and classroom management.",
    },
    tags: ["Python", "HTML / CSS", "Docencia"],
  },
  {
    company: "GWeb",
    period: { es: "2025 — Actualidad", en: "2025 — Present" },
    current: true,
    role: {
      es: "Fundador & Desarrollador Fullstack",
      en: "Founder & Fullstack Developer",
    },
    description: {
      es: "Soluciones web para clientes: desde el relevamiento y la comunicación directa hasta el diseño, desarrollo y despliegue. React, Next.js, Supabase y Sanity, con foco en UX y SEO.",
      en: "Web solutions for clients: from requirements and direct communication to design, development and deployment. React, Next.js, Supabase and Sanity, with a focus on UX and SEO.",
    },
    tags: ["Producto", "Next.js", "Supabase", "UX / UI"],
  },
  {
    company: "SuiteDB · NetSuite",
    period: { es: "Sep — Nov 2024", en: "Sep — Nov 2024" },
    current: false,
    role: { es: "Desarrollador Backend", en: "Backend Developer" },
    description: {
      es: "Desarrollo backend con JavaScript en el entorno NetSuite, automatización de procesos e integración de APIs.",
      en: "Backend development with JavaScript in the NetSuite environment, process automation and API integration.",
    },
    tags: ["JavaScript", "NetSuite", "Integraciones"],
  },
];
