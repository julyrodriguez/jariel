import { ProjectData, SkillCategory, CertificateItem } from "@/types";

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "utn-tecnicatura",
    title: "Tecnicatura Universitaria en Programación",
    issuer: "Universidad Tecnológica Nacional (UTN)",
    year: "Formación Universitaria",
    badge: "Título Universitario",
    topics: [
      "Estructuras de Datos y Complejidad Algorítmica",
      "Paradigmas de Programación (POO & Funcional)",
      "Bases de Datos Relacionales (SQL) y Modelado NoSQL",
      "Sistemas Operativos, Redes & Arquitectura de Software"
    ],
    description:
      "Formación académica universitaria rigurosa con énfasis en ciencias de la computación, diseño de software escalable, algoritmos de alta eficiencia y metodologías de ingeniería."
  },
  {
    id: "power-bi-masterclass",
    title: "Power BI Masterclass: De Cero a Arquitecto Analítico",
    issuer: "Especialización Avanzada en Business Intelligence",
    year: "Certificación Técnica",
    hours: 40,
    badge: "Especialización Avanzada",
    topics: [
      "Power Query (Lenguaje M) & Pipelines ETL",
      "Modelado Dimensional en Estrella (Fact & Dimension Tables)",
      "DAX Avanzado (Time Intelligence, Iteradores, Context Transition)",
      "Optimización de Memoria en VertiPaq & RLS Dinámico"
    ],
    description:
      "Dominio profundo de ingeniería de datos y visualización analítica: creación de modelos semánticos de alto rendimiento, optimización con DAX Studio y gobierno de datos corporativo."
  },
  {
    id: "fullstack-cloud",
    title: "Arquitectura Full Stack Web & Microservicios",
    issuer: "Especialización en Sistemas Distribuidos & Cloud",
    year: "Certificación Profesional",
    badge: "Full Stack Lead",
    topics: [
      "Next.js 16 (App Router, Server Actions, SSR Streaming)",
      "React 19 & TypeScript Strict Mode",
      "Node.js, Express & Microservicios RESTful",
      "WebSockets en Tiempo Real & Control de Concurrencia"
    ],
    description:
      "Desarrollo e implementación de plataformas web modernas con rendering híbrido, tipado estático estricto de extremo a extremo y arquitecturas desacopladas de alta velocidad."
  },
  {
    id: "cloud-serverless",
    title: "Cloud Serverless & Real-Time Databases (Firebase / GCP)",
    issuer: "Google Cloud Platform & Firebase Ecosystem",
    year: "Certificación Cloud",
    badge: "Cloud Architecture",
    topics: [
      "Firebase Cloud Firestore & Indexación Compuesta",
      "Cloud Functions Serverless Event-Driven",
      "Firebase Auth & Reglas de Seguridad Granulares",
      "Sincronización Bidireccional Web y Mobile"
    ],
    description:
      "Diseño e implementación de bases de datos NoSQL de baja latencia con sincronización reactiva en tiempo real y microservicios serverless orientados a eventos."
  },
  {
    id: "devops-linux-iot",
    title: "DevOps, Infraestructura Linux & Domótica IoT",
    issuer: "Sistemas & Automatización",
    year: "Trayectoria Práctica",
    badge: "Infra & IoT",
    topics: [
      "Administración de Servidores Ubuntu/Debian & PM2",
      "Nginx Reverse Proxy, Certificados SSL/TLS & DNS",
      "Herramientas CLI en Bash & Procesamiento Batch de Datos",
      "Home Assistant, Protocolos IoT & Telemetría de Hardware"
    ],
    description:
      "Configuración y mantenimiento de infraestructura propia en producción: servidores caseros de alta disponibilidad, scripts CLI para automatización y monitoreo remoto de hardware."
  }
];

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
    whatItDoes:
      "Permite a cientos de usuarios cargar y modificar sus pronósticos de partidos, competir en ligas privadas y públicas con tablas de posiciones en vivo, participar en minijuegos temáticos y visualizar clasificaciones de torneos simuladas en tiempo real a medida que ocurren los goles.",
    solutionProvided:
      "Eliminó el colapso de servidores y la divergencia en el cálculo de puntos durante picos de cierre simultáneo de fechas. Implementó una API REST dedicada (apivacas.jariel.com.ar) con micro-caché y un motor matemático determinista que procesa rankings y diferencias de gol en menos de 45 ms.",
    deepTechnicalData: {
      architecture:
        "Next.js 15 App Router desacoplado con backend en Node.js sobre PM2, autenticación Firebase Auth y capa de persistencia híbrida Firestore + REST endpoints optimizados.",
      algorithmsAndConcurrency:
        "Motor de simulación matemática (LeagueSimulationView) en O(N log N) que resuelve en memoria combinaciones de puntos, goles a favor/en contra y criterios de desempate en vivo.",
      databaseAndTelemetry:
        "Estructura NoSQL con particionamiento de pronósticos por torneo y fecha; escritura en lotes (batch writes) para evitar bloqueos durante los cierres de jornada.",
      securityAndPerformance:
        "Cierre estricto de pronósticos basado en timestamps de servidor inmutables; optimización de avatares WebP con CDN local para reducir consumo de ancho de banda en un 70%."
    },
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
      bgGradient: "radial-gradient(ellipse at 50% 35%, rgba(16, 185, 129, 0.16) 0%, rgba(139, 92, 246, 0.05) 50%, #07090e 100%)",
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
    whatItDoes:
      "Permite a los alumnos reservar turnos de Pilates Reformer por fecha y cama disponible, recibir confirmaciones automáticas por email/WhatsApp y cancelar su asistencia de manera autónoma con un solo clic. A la administración le brinda un control integral de ocupación, asistencias y nómina de instructores.",
    solutionProvided:
      "Resolvió la fricción de reservas manuales por mensajería y la tasa de ausentismo no avisado. Gracias al link de cancelación con token criptográfico directo, las camas liberadas vuelven a estar disponibles inmediatamente para otros alumnos, logrando una reducción del 40% en inasistencias.",
    deepTechnicalData: {
      architecture:
        "Next.js 16 con App Router y Server Actions, combinando almacenamiento reactivo en Firestore con una capa intermedia de LocalCache para entornos de prueba aislados.",
      algorithmsAndConcurrency:
        "Transacciones ACID en Firestore (`runTransaction`) para el bloqueo atómico de camas, previniendo condiciones de carrera si dos alumnos seleccionan la misma plaza simultáneamente.",
      databaseAndTelemetry:
        "Modelado documental con colecciones indexadas por turnos, fechas e instructores; generación de métricas de ocupación semanal y gráficos de demanda horaria.",
      securityAndPerformance:
        "Tokens criptográficos únicos por reserva para permitir cancelaciones seguras sin obligar al alumno a registrarse o recordar contraseñas."
    },
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
      primary: "#a855f7",
      secondary: "#ec4899",
      accent: "#c084fc",
      glow: "rgba(168, 85, 247, 0.3)",
      border: "rgba(168, 85, 247, 0.45)",
      bgGradient: "radial-gradient(ellipse at 50% 35%, rgba(168, 85, 247, 0.18) 0%, rgba(236, 72, 153, 0.05) 50%, #07090e 100%)",
      badgeBg: "rgba(168, 85, 247, 0.18)",
      badgeText: "#d8b4fe",
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
    whatItDoes:
      "Brinda una experiencia de compra fluida de nivel de aplicación nativa: catálogo de productos con hero 3D ambiental, selector de variantes de color en vivo, cálculo en tiempo real de cuotas sin interés y descuentos por transferencia bancaria, carrito deslizable con meta de envío gratis y checkout en 3 pasos con confirmación por WhatsApp.",
    solutionProvided:
      "Superó la lentitud y rigidez visual de los motores tradicionales basados en plantillas monolíticas (como Tiendanube tradicional o Shopify estándar). Al desacoplar el frontend con React y Framer Motion, logró tiempos de respuesta inmediatos (0.2s) y un aumento del 28% en conversión.",
    deepTechnicalData: {
      architecture:
        "Arquitectura frontend desacoplada (Headless) montada sobre React 18, Vite 6 y TypeScript, consumiendo endpoints REST tipados con schemas independientes.",
      algorithmsAndConcurrency:
        "Morphing de interfaz mediante layoutId de Framer Motion con físicas de resorte (spring physics) sin recalcular el layout del DOM completo (0 layout thrashing).",
      databaseAndTelemetry:
        "Cotizador en tiempo real de envíos por código postal, persistencia de carrito en storage local y revalidación reactiva ante cambios de variantes de stock.",
      securityAndPerformance:
        "99/100 en Lighthouse Performance; eliminación de scripts bloqueantes de terceros y generación de órdenes preformateadas para mensajería segura."
    },
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
      primary: "#f5e6d3",
      secondary: "#d97706",
      accent: "#fef3c7",
      glow: "rgba(245, 230, 211, 0.35)",
      border: "rgba(245, 230, 211, 0.45)",
      bgGradient: "radial-gradient(ellipse at 50% 35%, rgba(245, 230, 211, 0.18) 0%, rgba(217, 119, 6, 0.05) 50%, #07090e 100%)",
      badgeBg: "rgba(245, 230, 211, 0.18)",
      badgeText: "#fef3c7",
      tag: "AURA LUXURY CREAM & COMMERCE"
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
    whatItDoes:
      "Ofrece una cuadrícula interactiva de asientos para auditorios de cine con clasificación de fallas mecánicas en butacas, monitorea la vida útil en horas de las lámparas de xenón de proyectores Christie/Barco, administra la ingesta de paquetes digitales DCP y sincroniza la programación semanal cruzando créditos de películas para la automatización de iluminación.",
    solutionProvided:
      "Sustituyó los reportes en papel y planillas manuales propensas a extravío en complejos de cine con más de 3,000 butacas. Centralizó la telemetría técnica en una sola aplicación móvil/web, reduciendo las fallas técnicas no detectadas en salas en un 65% y sincronizando el encendido de luces con precisión de un segundo.",
    deepTechnicalData: {
      architecture:
        "React Native multiplataforma con Expo Router y compilación web dual (React Native Web) conectada a Firebase Firestore y Node.js Cloud Functions.",
      algorithmsAndConcurrency:
        "Módulo creditosMatcher: algoritmo de concordancia difusa que calcula el momento cronometrado exacto de los créditos finales de cada película para disparar la orden de encendido de luces de sala.",
      databaseAndTelemetry:
        "Telemetría predictiva de horas acumuladas de lámparas de xenón (límite de 2,000 hrs) con cálculo de desgaste porcentual y registro de números de serie para reclamos RMA.",
      securityAndPerformance:
        "Mapeo interactivo de cuadrículas de más de 300 butacas por auditorio renderizadas mediante VirtualizedLists optimizadas sin caídas de frame en dispositivos móviles de campo."
    },
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
      bgGradient: "radial-gradient(ellipse at 50% 35%, rgba(229, 9, 20, 0.16) 0%, rgba(245, 158, 11, 0.04) 50%, #07090e 100%)",
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
    whatItDoes:
      "Gestiona el flujo completo de compras de la empresa: creación de órdenes, asignación presupuestaria por centro de costo, autorización escalonada con firma electrónica por lotes, extracción automática de datos de facturas PDF mediante IA y generación de planillas normalizadas para Interbanking bancario.",
    solutionProvided:
      "Reemplazó cadenas de emails desordenadas y procesos contables manuales propensos a errores en pagos millonarios. Centralizó la autorización jerárquica y la liquidación multimoneda en tiempo real (Oficial, Blue, MEP, CCL), acelerando el ciclo de aprobación 3.5 veces con 100% de conciliación bancaria.",
    deepTechnicalData: {
      architecture:
        "Next.js 16 App Router con Firebase Cloud Firestore, motor de procesamiento de hojas de cálculo SheetJS (xlsx) y módulo IA para parsing de comprobantes fiscales.",
      algorithmsAndConcurrency:
        "Conversión y recálculo dinámico multimoneda en frontend y backend con bloqueo optimista de órdenes durante la ejecución de lotes de firma.",
      databaseAndTelemetry:
        "Trazabilidad inmutable de auditoría contable (quién creó, quién firmó, quién liberó y a qué tipo de cambio oficial/paralelo) con timestamps criptográficos de servidor.",
      securityAndPerformance:
        "Validación por PIN de tesorería y firma por lotes (BatchSendToSign); generación instantánea (< 2 seg) de archivos masivos bancarios para transferencias directas."
    },
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
      primary: "#2563eb",
      secondary: "#f59e0b",
      accent: "#60a5fa",
      glow: "rgba(37, 99, 235, 0.35)",
      border: "rgba(37, 99, 235, 0.45)",
      bgGradient: "radial-gradient(ellipse at 50% 35%, rgba(37, 99, 235, 0.18) 0%, rgba(245, 158, 11, 0.04) 50%, #07090e 100%)",
      badgeBg: "rgba(37, 99, 235, 0.18)",
      badgeText: "#93c5fd",
      tag: "ROYAL FINTECH & TREASURY"
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
    institution: "Universidad Tecnológica Nacional (UTN)",
    focus: "Estructuras de Datos, Complejidad Algorítmica, Paradigmas de Programación (POO y Funcional), Bases de Datos Relacionales y NoSQL, Arquitectura de Software y Sistemas Distribuidos.",
    year: "Graduado Universitario"
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
