import { ProjectData, SkillCategory, CertificateItem } from "@/types";

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "experto-fullstack-utn",
    title: "Experto Universitario en Programación Full Stack",
    issuer: "Universidad Tecnológica Nacional (UTN)",
    year: "Certificación Universitaria",
    badge: "Experto UTN",
    topics: [
      "Arquitectura de Software & Buenas Prácticas",
      "Desarrollo Frontend & Backend Integral",
      "Modelado de Datos & Conexión de Servidores",
      "Seguridad, APIs y Despliegue en la Nube"
    ],
    description:
      "Capacitación universitaria de alto nivel para diseñar, estructurar y liderar desarrollos digitales completos de inicio a fin."
  },
  {
    id: "fullstack-developer-utn",
    title: "Full Stack Developer",
    issuer: "Universidad Tecnológica Nacional (UTN)",
    year: "Especialización Técnica",
    badge: "Full Stack UTN",
    topics: [
      "Aplicaciones Web Dinámicas e Interactivas",
      "Lógica de Servidores & APIs REST",
      "Bases de Datos Relacionales y NoSQL",
      "Experiencia de Usuario y Rendimiento"
    ],
    description:
      "Formación orientada a construir productos digitales funcionales, rápidos y preparados para resolver necesidades de negocios."
  },
  {
    id: "react-js-utn",
    title: "React JS",
    issuer: "Universidad Tecnológica Nacional (UTN)",
    year: "Desarrollo Frontend",
    badge: "React UTN",
    topics: [
      "Interfaces de Usuario Reactivas y Modernas",
      "Gestión Eficiente del Estado y Datos en Vivo",
      "Componentes Reutilizables & Hooks Avanzados",
      "Navegación Fluida sin Recargas de Página"
    ],
    description:
      "Especialización en la tecnología líder para crear sitios y aplicaciones web ágiles, visualmente atractivas y fáciles de usar."
  },
  {
    id: "nodejs-utn",
    title: "NodeJS",
    issuer: "Universidad Tecnológica Nacional (UTN)",
    year: "Desarrollo Backend",
    badge: "NodeJS UTN",
    topics: [
      "Servidores Ligeros y Conexión de Datos",
      "Creación de APIs para Conectar Sistemas",
      "Gestión de Usuarios, Permisos y Seguridad",
      "Automatización de Tareas y Procesos Batch"
    ],
    description:
      "Dominio del motor backend en JavaScript para crear sistemas rápidos que procesan información de forma segura y constante."
  },
  {
    id: "angular-utn",
    title: "Angular",
    issuer: "Universidad Tecnológica Nacional (UTN)",
    year: "Desarrollo Frontend",
    badge: "Angular UTN",
    topics: [
      "Estructuras Modulares para Empresas",
      "Tipado Fuerte con TypeScript",
      "Formularios Complejos y Validaciones",
      "Servicios, Inyección de Dependencias & Routing"
    ],
    description:
      "Especialización en el framework empresarial de Google para la construcción de plataformas ordenadas, escalables y seguras."
  }
];

export const PROJECTS_DATA: Record<string, ProjectData> = {
  "vacas-locas": {
    id: "vacas-locas",
    title: "Prode",
    subtitle: "Fútbol y estadísticas EN VIVO y competencia de puntos por partidos acertados en +10 competencias.",
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
      "Fútbol y estadísticas EN VIVO y competencia de puntos por partidos acertados en +10 competencias.",
    whatItDoes:
      "Fútbol y estadísticas EN VIVO y competencia de puntos por partidos acertados en +10 competencias.",
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
      secondary: "#34d399",
      accent: "#34d399",
      glow: "rgba(16, 185, 129, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 70%)",
      badgeBg: "rgba(16, 185, 129, 0.1)",
      badgeText: "#34d399",
      tag: "PRODE"
    }
  },

  demoPilates: {
    id: "demoPilates",
    title: "Pilates Studio",
    subtitle: "Gestión de turnos, reservas (sin login, utilizado por las clientas) y estadísticas actualmente en uso por Selene Pilates.",
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
      "Gestión de turnos, reservas (sin login, utilizado por las clientas) y estadísticas actualmente en uso por Selene Pilates.",
    whatItDoes:
      "Gestión de turnos, reservas (sin login, utilizado por las clientas) y estadísticas actualmente en uso por Selene Pilates.",
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
      secondary: "#c084fc",
      accent: "#c084fc",
      glow: "rgba(168, 85, 247, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(168, 85, 247, 0.06) 0%, transparent 70%)",
      badgeBg: "rgba(168, 85, 247, 0.1)",
      badgeText: "#c084fc",
      tag: "PILATES STUDIO"
    }
  },

  tienda: {
    id: "tienda",
    title: "Aura TM",
    subtitle: "E-commerce 100% personalizado al estilo tiendanube.",
    category: "Next-Gen Headless E-Commerce",
    year: "2024 - 2026",
    role: "Frontend Architect & Interaction Designer",
    status: "Deploy Live",
    liveUrl: "https://tienda.jariel.com.ar",
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
      "E-commerce 100% personalizado al estilo tiendanube.",
    whatItDoes:
      "E-commerce 100% personalizado al estilo tiendanube.",
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
      secondary: "#e2c9a5",
      accent: "#fef3c7",
      glow: "rgba(245, 230, 211, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(245, 230, 211, 0.05) 0%, transparent 70%)",
      badgeBg: "rgba(245, 230, 211, 0.1)",
      badgeText: "#f5e6d3",
      tag: "AURA TM"
    }
  },

  "cinemark-app": {
    id: "cinemark-app",
    title: "Cinemark",
    subtitle: "Gestión diaria de entradas, stock y necesidades de la proyección. Actualmente utilizado por algunos cines de Buenos Aires.",
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
      "Gestión diaria de entradas, stock y necesidades de la proyección. Actualmente utilizado por algunos cines de Buenos Aires.",
    whatItDoes:
      "Gestión diaria de entradas, stock y necesidades de la proyección. Actualmente utilizado por algunos cines de Buenos Aires.",
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
      primary: "#ef4444",
      secondary: "#f87171",
      accent: "#f87171",
      glow: "rgba(239, 68, 68, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(239, 68, 68, 0.06) 0%, transparent 70%)",
      badgeBg: "rgba(239, 68, 68, 0.1)",
      badgeText: "#f87171",
      tag: "CINEMARK"
    }
  },

  finanzas: {
    id: "finanzas",
    title: "Finanzas",
    subtitle: "Página 100% personalizada para el área de compras de la oficina corporativa de Cinemark, automatiza y procesa excels/pdf con IA para ahorro de tiempo entre otras funciones.",
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
      "Página 100% personalizada para el área de compras de la oficina corporativa de Cinemark, automatiza y procesa excels/pdf con IA para ahorro de tiempo entre otras funciones.",
    whatItDoes:
      "Página 100% personalizada para el área de compras de la oficina corporativa de Cinemark, automatiza y procesa excels/pdf con IA para ahorro de tiempo entre otras funciones.",
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
      primary: "#3b82f6",
      secondary: "#60a5fa",
      accent: "#60a5fa",
      glow: "rgba(59, 130, 246, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
      badgeBg: "rgba(59, 130, 246, 0.1)",
      badgeText: "#60a5fa",
      tag: "FINANZAS"
    }
  },

  caronails: {
    id: "caronails",
    title: "Caro Nails",
    subtitle: "Gestión integral de turnos, clientas, insumos y facturación. Actualmente en uso por un studio de Caro Nails.",
    category: "Beauty Tech & Studio Management PWA",
    year: "2024 - 2026",
    role: "Full Stack Architect & Developer",
    status: "Producción",
    githubUrl: "https://github.com/julyrodriguez/caronails",
    techStack: [
      { name: "React 19 & TypeScript", category: "frontend" },
      { name: "Vite 6 & Tailwind CSS v4", category: "frontend" },
      { name: "Firebase Firestore (Realtime)", category: "backend" },
      { name: "Firebase Auth", category: "backend" },
      { name: "Web Push (FCM)", category: "infra" },
      { name: "Vercel Cron Reminders", category: "infra" }
    ],
    overview:
      "Aplicación web progresiva (PWA) de gestión integral de turnos, clientas, agenda y balance financiero para estudios de manicuría y estética. Diseñada con un estilo premium Deep Plum & Rose Gold.",
    whatItDoes:
      "Administración en tiempo real de turnos y agenda, historial de tratamientos por clienta, balance mensual automático (ingresos cobrados, pendientes, insumos y ganancia neta) y recordatorios automáticos por notificaciones push.",
    solutionProvided:
      "Digitalizó el 100% de la operación diaria de Studio Caro Nails, reemplazando libretas y mensajes dispersos por una plataforma ágil, con cálculo en vivo de ganancias, control de insumos y cero turnos solapados.",
    deepTechnicalData: {
      architecture:
        "PWA desarrollada con React 19, Vite y TypeScript, conectada a Firebase Firestore con listeners en tiempo real y reglas de seguridad multi-tenant por accountId.",
      algorithmsAndConcurrency:
        "Indexación de fechas y turnos mediante keys compuestas (YYYY-MM-DD y YYYY-MM) que evitan escaneos masivos en Firestore y garantizan detección instantánea de colisiones de horarios.",
      databaseAndTelemetry:
        "Colecciones optimizadas de turnos, clientas y balance mensual con agregaciones automáticas de insumos y cálculo de margen neto en tiempo real.",
      securityAndPerformance:
        "Autenticación segura con Firebase Auth, tokens VAPID para Web Push FCM y endpoints autorizados con CRON_SECRET para recordatorios programados 30 minutos antes."
    },
    challenges: [
      "Sincronización bidireccional en tiempo real de la agenda diaria para evitar solapamientos de turnos entre profesionales.",
      "Pipeline de notificaciones push Web PWA con Service Workers y Firebase Cloud Messaging programados 30 minutos antes de cada turno.",
      "Balance financiero automático que descuenta compras de insumos sobre ingresos cobrados para calcular la rentabilidad neta real de cada mes."
    ],
    keyModules: [
      {
        title: "Agenda de Turnos & Calendario Dinámico",
        description:
          "Visualización diaria y mensual con bloques de horarios, estados de pago (cobrado / pendiente) y asignación rápida de servicios."
      },
      {
        title: "Ficha & Historial de Clientas",
        description:
          "Registro de tratamientos anteriores, preferencias de diseño, tipos de uña/piel y notas específicas de cada sesión."
      },
      {
        title: "Balance Financiero & Control de Insumos",
        description:
          "Dashboard mensual con métricas en vivo de ingresos cobrados, pendientes de cobro, costos de materiales y ganancia neta."
      }
    ],
    metrics: [
      { label: "Tiempo de Asignación", value: "< 15 seg" },
      { label: "Reducción de Inasistencias", value: "-45%" },
      { label: "Disponibilidad del Sistema", value: "99.9%" },
      { label: "Sincronización de Agenda", value: "En Vivo" }
    ],
    theme: {
      primary: "#fb7185",
      secondary: "#fda4af",
      accent: "#fda4af",
      glow: "rgba(251, 113, 133, 0.12)",
      border: "rgba(255, 255, 255, 0.08)",
      bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(251, 113, 133, 0.06) 0%, transparent 70%)",
      badgeBg: "rgba(251, 113, 133, 0.1)",
      badgeText: "#fda4af",
      tag: "CARO NAILS"
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
  name: "Julian Ariel Rodriguez",
  shortName: "Julian Rodriguez",
  title: "Desarrollador Full Stack & Creador de Soluciones Digitales",
  tagline: "Creo plataformas web, tiendas online y herramientas a medida para que tu negocio funcione mejor y ahorres tiempo.",
  bio: "¡Hola! Soy Julián. Me apasiona construir soluciones digitales que resuelvan problemas reales de forma simple y confiable. Desde tiendas online rápidas donde tus clientes compran sin vueltas, hasta sistemas de turnos que reducen el ausentismo y paneles para administrar tus operaciones diarias. Mi compromiso es que la tecnología trabaje a tu favor, con un diseño limpio, veloz y fácil de usar para cualquier persona.",
  education: {
    status: "Actualmente Cursando",
    degree: "Data Science & Inteligencia Artificial",
    focus: "Formación activa en análisis de datos, modelos predictivos y herramientas de IA para ayudar a que los negocios tomen decisiones más inteligentes, automáticas y acertadas.",
    year: "En Curso"
  },
  links: {
    github: "https://github.com/julyrodriguez",
    linkedin: "https://www.linkedin.com/in/julian-ariel-rodriguez",
    portfolioRepo: "https://github.com/julyrodriguez/jariel",
    email: "rodriguez.jariel01@gmail.com"
  },
  stats: [
    { label: "Sistemas Funcionando", value: "6+" },
    { label: "Años Desarrollando", value: "4+" },
    { label: "Soluciones", value: "A Medida" },
    { label: "Experiencia", value: "Simple & Ágil" }
  ]
};
