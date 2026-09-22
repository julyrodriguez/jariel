import { ProjectData, SkillCategory } from "@/types";

export const PROJECTS_DATA: Record<string, ProjectData> = {
  "vacas-locas": {
    id: "vacas-locas",
    title: "Vacas Locas Prode",
    subtitle: "Plataforma de Predicciones Deportivas y Simulación Competitiva en Tiempo Real",
    category: "Full Stack Sports Tech & Gamification",
    year: "2024 - 2026",
    role: "Tech Lead & Full Stack Architect",
    status: "Producción",
    githubUrl: "https://github.com/julyrodriguez/prode",
    techStack: [
      { name: "Next.js 15 (App Router)", category: "frontend" },
      { name: "React 19", category: "frontend" },
      { name: "Tailwind CSS v4", category: "frontend" },
      { name: "Firebase Auth & Firestore", category: "backend" },
      { name: "REST API Microservices", category: "backend" },
      { name: "Simulation Engine", category: "backend" },
      { name: "Node.js & PM2", category: "infra" }
    ],
    overview:
      "Ecosistema web competitivo de alta concurrencia diseñado para la gestión y simulación de pronósticos en torneos deportivos de primer nivel (fútbol internacional, copas continentales y torneos de esports como CS2). Incorpora motor de resolución en tiempo real, cálculo de puntos ponderados por etapa y tablas de posiciones automatizadas.",
    challenges: [
      "Optimización de consultas concurrentes durante picos de cierre de partidos simultáneos con miles de pronósticos.",
      "Motor matemático de simulación de escenarios cruzados (LeagueSimulationView) para proyectar clasificaciones en vivo.",
      "Estructuración de microjuegos y reglas de puntuación dinámica por fases eliminatorias y penales."
    ],
    keyModules: [
      {
        title: "Live Match Simulator & Predictions Engine",
        description:
          "Algoritmo de cálculo dinámico: 3 puntos por acierto exacto, 1 punto por tendencia de ganador/empate y bonus por diferencia de gol."
      },
      {
        title: "Community Leaderboard & Avatars",
        description:
          "Clasificación comunitaria en vivo con micro-caché, avatares WebP optimizados y desglose de rachas ganadoras."
      },
      {
        title: "Mundial & Esports CS2 Engine",
        description:
          "Arquitectura modular multitorneo con soporte para fixtures complejos, fases de grupos suizas y brackets eliminatorios."
      }
    ],
    metrics: [
      { label: "Tiempo de Respuesta API", value: "< 45ms" },
      { label: "Módulos de Competencia", value: "3+ Disciplinas" },
      { label: "Precisión de Simulación", value: "100% Determinista" },
      { label: "Optimización de Assets", value: "WebP + Local CDN" }
    ],
    theme: {
      primary: "#10b981",
      secondary: "#8b5cf6",
      accent: "#34d399",
      glow: "rgba(16, 185, 129, 0.25)",
      border: "rgba(16, 185, 129, 0.4)",
      bgGradient: "radial-gradient(ellipse at 50% 20%, rgba(16, 185, 129, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, rgba(10, 15, 20, 0.95) 100%)",
      badgeBg: "rgba(16, 185, 129, 0.15)",
      badgeText: "#34d399",
      tag: "SPORTS TECH & GAMING"
    }
  },

  demoPilates: {
    id: "demoPilates",
    title: "Demo Pilates Studio",
    subtitle: "Sistema Integral de Gestión de Clases, Reservas Online y Control de Asistencia",
    category: "SaaS Wellness & Studio Management",
    year: "2024 - 2026",
    role: "Full Stack Engineer & UX Architect",
    status: "Deploy Live",
    liveUrl: "https://demopilates.jariel.com.ar",
    githubUrl: "https://github.com/julyrodriguez/demoPilates",
    techStack: [
      { name: "Next.js 16 (App Router)", category: "frontend" },
      { name: "React 19", category: "frontend" },
      { name: "Tailwind CSS v4", category: "frontend" },
      { name: "Firebase & Firestore", category: "backend" },
      { name: "Resend & Nodemailer", category: "backend" },
      { name: "LocalCache Architecture", category: "database" },
      { name: "Canvas Confetti", category: "frontend" }
    ],
    overview:
      "Plataforma completa para estudios de Pilates Reformer y centros de entrenamiento funcional. Integra portal público de autogestión de turnos para alumnos, asignación de cupos por cama/máquina en tiempo real, gestión de instructores y módulo de cancelaciones automatizadas con link único de seguridad.",
    challenges: [
      "Diseño de una arquitectura híbrida LocalCache que permite a nuevos clientes probar el sistema de forma aislada y persistente en modo demo sin corromper la base de datos de producción.",
      "Control estricto de sobrecupos con barras de capacidad reactivas y liberación instantánea de turnos cancelados a lista de espera.",
      "Flujo de confirmaciones por email y WhatsApp con links de cancelación de un solo clic con token criptográfico."
    ],
    keyModules: [
      {
        title: "Portal Público de Reservas en 3 Pasos",
        description:
          "Selector visual de disciplina (Reformer, Mat, Barre), carrusel dinámico de fechas y selección de turnos con cupos visuales."
      },
      {
        title: "Cancelación Autónoma sin Login Requerido",
        description:
          "Flujo de cancelación segura mediante token en URL que reasigna el cupo al instante sin requerir usuario y contraseña."
      },
      {
        title: "Dashboard Administrativo y Métricas",
        description:
          "Gráficos de tasa de ocupación semanal, control de asistencia por instructor y exportación de nómina de clientes."
      }
    ],
    metrics: [
      { label: "Reducción de Inasistencias", value: "-40%" },
      { label: "Tiempo de Reserva", value: "< 20 seg" },
      { label: "Disponibilidad del Sistema", value: "99.9%" },
      { label: "Sincronización LocalCache", value: "Instantánea" }
    ],
    theme: {
      primary: "#14b8a6",
      secondary: "#84cc16",
      accent: "#2dd4bf",
      glow: "rgba(20, 184, 166, 0.25)",
      border: "rgba(20, 184, 166, 0.4)",
      bgGradient: "radial-gradient(ellipse at 50% 20%, rgba(20, 184, 166, 0.15) 0%, rgba(132, 204, 22, 0.08) 45%, rgba(11, 19, 18, 0.95) 100%)",
      badgeBg: "rgba(20, 184, 166, 0.15)",
      badgeText: "#2dd4bf",
      tag: "WELLNESS & SAAS MANAGEMENT"
    }
  },

  tienda: {
    id: "tienda",
    title: "AURA™ Headless Commerce",
    subtitle: "Prototipo de Tienda Cloud de Próxima Generación de Ultra Alto Rendimiento",
    category: "Next-Gen Headless E-Commerce",
    year: "2024 - 2026",
    role: "Frontend Architect & Interaction Designer",
    status: "Deploy Live",
    githubUrl: "https://github.com/julyrodriguez/tienda",
    techStack: [
      { name: "React 18 & TypeScript", category: "frontend" },
      { name: "Vite 6 Bundler", category: "frontend" },
      { name: "Framer Motion (Spring Physics)", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Decoupled Architecture", category: "backend" },
      { name: "Headless API Spec", category: "infra" }
    ],
    overview:
      "Plataforma de comercio electrónico de vanguardia inspirada en la ingeniería y minimalismo de marcas de diseño como Teenage Engineering y Apple. Diseñada bajo el paradigma Headless Commerce con carga instantánea (0ms de transición de vista), físicas de rebote fluidas y conversión optimizada para Latinoamérica.",
    challenges: [
      "Animaciones de morphing de diseño con layoutId en filtros de categorías para una experiencia táctil a 120 FPS sin parpadeos.",
      "Algoritmo de cálculo dinámico de financiamiento regional (hasta 12 cuotas fijas) y descuentos automáticos por transferencia bancaria.",
      "Carrito deslizable inteligente (Slide-over Cart) con barra de progreso de envío gratis dinámicamente actualizada por código postal."
    ],
    keyModules: [
      {
        title: "Ambient 3D Product Showcase",
        description:
          "Hero con efecto glow ambiental reactivo al color del producto seleccionado y selector dinámico de variantes cromáticas."
      },
      {
        title: "Checkout Asistido en 3 Pasos + WhatsApp",
        description:
          "Flujo de compra guiado sin fricciones que concluye con orden formateada lista para enviar por mensajería directa o pasarela."
      },
      {
        title: "Búsqueda Rápida Omnibox (Cmd + K)",
        description:
          "Modal de búsqueda instantánea con teclado, filtro por disponibilidad de stock real y ordenamiento multidimensional."
      }
    ],
    metrics: [
      { label: "Tiempo de Carga Inicial", value: "0.2s" },
      { label: "Frame Rate de Animaciones", value: "60-120 FPS" },
      { label: "Puntaje Lighthouse UX", value: "99/100" },
      { label: "Aumento de Conversión", value: "+28% vs SSR" }
    ],
    theme: {
      primary: "#06b6d4",
      secondary: "#6366f1",
      accent: "#22d3ee",
      glow: "rgba(6, 182, 212, 0.25)",
      border: "rgba(6, 182, 212, 0.4)",
      bgGradient: "radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.15) 0%, rgba(99, 102, 241, 0.08) 45%, rgba(8, 12, 20, 0.95) 100%)",
      badgeBg: "rgba(6, 182, 212, 0.15)",
      badgeText: "#22d3ee",
      tag: "HEADLESS COMMERCE & LUXURY UI"
    }
  },

  "cinemark-app": {
    id: "cinemark-app",
    title: "Cinemark Proyección & Salas Suite",
    subtitle: "Sistema Operativo de Cabina de Proyección, Telemetría de Auditorios y Mantenimiento",
    category: "Enterprise Infrastructure & Mobile Web",
    year: "2024 - 2026",
    role: "Lead Software Engineer & Operations Tech",
    status: "Enterprise",
    githubUrl: "https://github.com/julyrodriguez/cinemark-app",
    techStack: [
      { name: "React Native & Expo Router", category: "mobile" },
      { name: "React Native Web", category: "frontend" },
      { name: "Firebase Cloud Firestore", category: "backend" },
      { name: "Node.js Cloud Functions", category: "backend" },
      { name: "Excel XML Sheet Telemetry", category: "database" },
      { name: "Print & PDF Engine", category: "infra" }
    ],
    overview:
      "Plataforma empresarial de misión crítica construida para la gestión integral de complejos cinematográficos multicomplejo (más de 12 salas por sede). Centraliza el control de salas, mapa de butacas con diagnóstico de incidencias físicas (respaldo/asiento), programación semanal de contenidos DCP y telemetría de horas útiles de lámparas xenón de proyectores.",
    challenges: [
      "Representación interactiva en tiempo real de cuadrículas de más de 300 butacas por sala con detección granular de desperfectos mecánicos.",
      "Integración de planillas semanales de programación y cruce de tiempos de créditos de películas para sincronizar encendido de luces automáticas.",
      "Telemetría predictiva del ciclo de vida de lámparas xenón de proyección digital para prevenir cortes en funciones activas."
    ],
    keyModules: [
      {
        title: "Matriz Interactiva de Butacas y Control de Salas",
        description:
          "Plano interactivo con estados de mantenimiento por nivel de gravedad (leve, medio, grave) e informe técnico instantáneo."
      },
      {
        title: "Programación de Proyección & Sincronización DCP",
        description:
          "Tablero de control de copias digitales, trailers asignados por sala y cálculo automático de tiempos de créditos."
      },
      {
        title: "Telemetría de Lámparas Xenón y Mantenimiento RMA",
        description:
          "Seguimiento de horas de uso acumuladas de lámparas de proyección con alertas de reemplazo preventivo y gestión de repuestos."
      }
    ],
    metrics: [
      { label: "Capacidad de Salas Administradas", value: "3,000+ Butacas" },
      { label: "Salas Simultáneas", value: "12 Auditorios" },
      { label: "Precisión de Encendido de Luces", value: "±1 Segundo" },
      { label: "Reducción de Incidentes Técnicos", value: "-65%" }
    ],
    theme: {
      primary: "#e50914",
      secondary: "#f59e0b",
      accent: "#f87171",
      glow: "rgba(229, 9, 20, 0.28)",
      border: "rgba(229, 9, 20, 0.4)",
      bgGradient: "radial-gradient(ellipse at 50% 20%, rgba(229, 9, 20, 0.16) 0%, rgba(245, 158, 11, 0.06) 45%, rgba(12, 10, 11, 0.95) 100%)",
      badgeBg: "rgba(229, 9, 20, 0.15)",
      badgeText: "#f87171",
      tag: "CINEMA OPERATIONS & IOT"
    }
  },

  finanzas: {
    id: "finanzas",
    title: "Finanzas Enterprise Suite",
    subtitle: "Sistema de Control de Órdenes de Compra, Interbanking y Workflow de Aprobación",
    category: "Fintech & Enterprise Operations",
    year: "2024 - 2026",
    role: "Full Stack Financial Systems Architect",
    status: "Enterprise",
    githubUrl: "https://github.com/julyrodriguez/finanzas",
    techStack: [
      { name: "Next.js 16 (App Router)", category: "frontend" },
      { name: "React 19 & TypeScript", category: "frontend" },
      { name: "Tailwind CSS v4", category: "frontend" },
      { name: "Firebase Cloud Firestore", category: "backend" },
      { name: "XLSX Engine & Automation", category: "backend" },
      { name: "AI Quote Analysis Engine", category: "backend" },
      { name: "Interbanking Batch Processing", category: "infra" }
    ],
    overview:
      "Plataforma integral de tesorería y finanzas corporativas para la gestión y trazabilidad del ciclo de vida de órdenes de compra, control presupuestario y emisión de transferencias masivas bancarias (Interbanking). Integra cotizaciones de divisas en tiempo real y módulo de análisis de cotizaciones asistido por IA.",
    challenges: [
      "Diseño de un flujo de aprobación de estados a prueba de fallas con firma electrónica de lotes (BatchSendToSign) y liberación controlada.",
      "Conversión dinámica multimoneda con ticker en vivo de tipos de cambio (Dólar Oficial, Blue, MEP, CCL, Tarjeta) para auditoría fiscal.",
      "Generación y exportación automatizada de planillas bancarias normalizadas sin margen de discrepancia contable."
    ],
    keyModules: [
      {
        title: "Flujo de Órdenes y Firma por Lotes",
        description:
          "Pipeline auditable: Borrador → Pendiente de Firma → Firmado → En Proceso de Pago → Liberado, con autorización por niveles."
      },
      {
        title: "Ticker Cambiario Multidivisa en Tiempo Real",
        description:
          "Monitor financiero con cotizaciones en vivo y cálculo automático de tipo de cambio aplicable a cada orden de pago."
      },
      {
        title: "Interbanking Automated Batching & IA Quotes",
        description:
          "Agrupamiento inteligente de pagos a proveedores y parsing asistido por inteligencia artificial para cotizaciones complejas."
      }
    ],
    metrics: [
      { label: "Volumen Gestionado Mensual", value: "+$120M ARS" },
      { label: "Aceleración de Flujo de Firma", value: "3.5x más veloz" },
      { label: "Precisión de Conciliación", value: "100.0%" },
      { label: "Tiempo de Generación Interbanking", value: "< 2 seg" }
    ],
    theme: {
      primary: "#38bdf8",
      secondary: "#10b981",
      accent: "#0ea5e9",
      glow: "rgba(56, 189, 248, 0.25)",
      border: "rgba(56, 189, 248, 0.4)",
      bgGradient: "radial-gradient(ellipse at 50% 20%, rgba(56, 189, 248, 0.15) 0%, rgba(16, 185, 129, 0.08) 45%, rgba(10, 16, 26, 0.95) 100%)",
      badgeBg: "rgba(56, 189, 248, 0.15)",
      badgeText: "#38bdf8",
      tag: "ENTERPRISE FINTECH & TREASURY"
    }
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Arquitectura Frontend & UI/UX",
    skills: [
      {
        name: "React 19 & Next.js 16 (App Router)",
        level: "Experto",
        iconName: "Layers",
        description: "Server Components, Server Actions, streaming SSR, optimización de renderizado y layouts anidados."
      },
      {
        name: "TypeScript Estricto",
        level: "Experto",
        iconName: "Code2",
        description: "Tipado estático avanzado, generics, discriminative unions y validación en tiempo de compilación."
      },
      {
        name: "Tailwind CSS v4 & Theming Reactivo",
        level: "Experto",
        iconName: "Palette",
        description: "Variables CSS nativas, arquitecturas fluidas, modo oscuro y micro-interacciones de diseño."
      },
      {
        name: "Framer Motion & Spring Physics",
        level: "Avanzado",
        iconName: "Sparkles",
        description: "Transiciones de layout complejas (layoutId), scroll triggers, morphing y animaciones a 60-120fps."
      },
      {
        name: "Mobile & React Native (Expo)",
        level: "Avanzado",
        iconName: "Smartphone",
        description: "Desarrollo cross-platform, React Native Web, telemetría móvil y aplicaciones para operaciones de campo."
      }
    ]
  },
  {
    category: "Backend, Cloud & Bases de Datos",
    skills: [
      {
        name: "Node.js & Express / Microservicios",
        level: "Experto",
        iconName: "Server",
        description: "Arquitecturas RESTful de alta concurrencia, pipelines de autenticación y procesamiento por lotes."
      },
      {
        name: "Firebase Suite (Firestore, Functions, Auth)",
        level: "Experto",
        iconName: "Flame",
        description: "Bases de datos en tiempo real, reglas de seguridad robustas, Cloud Functions e infraestructura serverless."
      },
      {
        name: "MongoDB & Modelado NoSQL",
        level: "Avanzado",
        iconName: "Database",
        description: "Agregaciones complejas, indexación eficiente, diseño de esquemas para escalabilidad y consistencia."
      },
      {
        name: "Integraciones API & Webhooks",
        level: "Avanzado",
        iconName: "Workflow",
        description: "Interbanking bancario, pasarelas de pago, sistemas de mensajería (Resend, Nodemailer, WhatsApp)."
      }
    ]
  },
  {
    category: "Infraestructura, DevOps & Domótica",
    skills: [
      {
        name: "Linux, Servidores & PM2",
        level: "Avanzado",
        iconName: "Terminal",
        description: "Administración de servidores Ubuntu/Debian, orquestación de procesos con PM2, Nginx reverse proxy y SSL."
      },
      {
        name: "Herramientas CLI & Automatización",
        level: "Avanzado",
        iconName: "Cpu",
        description: "Scripts en Bash/Node para procesamiento de datos masivos, sincronización de backups y telemetría de red."
      },
      {
        name: "Domótica & Home Assistant IoT",
        level: "Dominio",
        iconName: "Radio",
        description: "Integración de hardware, protocolos IoT, control de energía remota y automatización de entornos físicos."
      },
      {
        name: "Git & Flujos CI/CD",
        level: "Experto",
        iconName: "GitBranch",
        description: "Control de versiones profesional, branching strategies, GitHub Actions y pipelines de despliegue en Vercel."
      }
    ]
  }
];

export const PROFILE_INFO = {
  name: "Julián Ariel Rodríguez",
  shortName: "Julián Rodríguez",
  title: "Tech Lead & Senior Full Stack Engineer",
  tagline: "Especialista en arquitecturas web inmersivas, sistemas de alta concurrencia y aplicaciones empresariales de misión crítica.",
  bio: "Desarrollador Full Stack y Diseñador UI/UX con formación universitaria sólida (Tecnicatura Universitaria en Programación). Con amplia experiencia diseñando e implementando sistemas de extremo a extremo: desde motores de predicción en tiempo real y plataformas de comercio headless de ultra alto rendimiento, hasta software de control operativo para cines multicomplejo y suites de tesorería corporativa.",
  education: {
    degree: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional / Formación Académica Universitaria",
    focus: "Estructuras de Datos, Algoritmos Avanzados, Paradigmas de Programación (POO y Funcional), Bases de Datos Relacionales y NoSQL, Arquitectura de Software y Sistemas Distribuidos.",
    year: "Graduado"
  },
  links: {
    github: "https://github.com/julyrodriguez",
    linkedin: "https://www.linkedin.com/in/julian-ariel-rodriguez",
    portfolioRepo: "https://github.com/julyrodriguez/jariel",
    email: "rodriguez.jariel01@gmail.com"
  },
  stats: [
    { label: "Sistemas en Producción", value: "5+" },
    { label: "Años de Experiencia", value: "4+" },
    { label: "Stack Tecnológico", value: "Full Stack" },
    { label: "Arquitectura", value: "100% Custom" }
  ]
};
