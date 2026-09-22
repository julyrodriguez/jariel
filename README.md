# ⚡ Julián Ariel Rodríguez — Portafolio Profesional & Tech Lead Hub

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

> **Ingeniería de Software de Misión Crítica • Arquitecturas Web Inmersivas • Sistemas de Alta Concurrencia**  
> Repositorio oficial del portafolio profesional de Julián Ariel Rodríguez ([@julyrodriguez](https://github.com/julyrodriguez)), desarrollado de punta a punta con enfoque en rendimiento nativo a 60–120 FPS, theming dinámico reactivo y sandboxes interactivos funcionales.

---

## 🧭 Tabla de Contenidos
- [1. Visión & Filosofía de Ingeniería](#1-visión--filosofía-de-ingeniería)
- [2. Stack Tecnológico & Arquitectura](#2-stack-tecnológico--arquitectura)
- [3. Proyectos en Producción Integrados](#3-proyectos-en-producción-integrados)
- [4. Especificaciones UI/UX & Theming Reactivo](#4-especificaciones-uiux--theming-reactivo)
- [5. Instalación & Ejecución Local](#5-instalación--ejecución-local)
- [6. Perfil Profesional & Credenciales](#6-perfil-profesional--credenciales)

---

## 1. Visión & Filosofía de Ingeniería

Este portafolio ha sido diseñado y construido desde cero para reflejar los más altos estándares de calidad técnica:
- **0% Placeholders / 0% Código Mock Simulado Estático:** Cada proyecto cuenta con un sandbox interactivo que ejecuta en tiempo real la lógica de negocio extraída directamente de sus bases de código originales en producción.
- **Scroll Snap Inteligente Full-Screen:** Cada viewport (`h-screen`, `snap-start`) posiciona al usuario con navegación suave controlada por rueda, teclado (`↑`, `↓`, `J`, `K`) o dock flotante.
- **Theming Dinámico & Morphing de Contexto:** Al entrar a la zona de cada proyecto, las variables CSS nativas (`--theme-primary`, `--theme-glow`, etc.) mutan automáticamente adaptando la estética al ecosistema visual de cada desarrollo.
- **Cero Dependencias Pesadas de Audio:** Sistema háptico sintetizado en tiempo real mediante la **Web Audio API** (silencioso por defecto, activable con un clic).

---

## 2. Stack Tecnológico & Arquitectura

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Server Components, Streaming SSR, compilación Turbopack de ultra alto rendimiento. |
| **Librería UI** | React 19 | Hooks modernos, arquitectura declarativa y rendimiento optimizado. |
| **Lenguaje** | TypeScript Estricto | Tipado estático de punta a punta con discriminative unions y validación en compilación. |
| **Motor de Estilos** | Tailwind CSS v4 | Variables CSS nativas para theming reactivo dinámico sin parpadeos de renderizado. |
| **Físicas y Animación** | Framer Motion & Spring Physics | Transiciones de diseño a 60–120 FPS y efectos de glow ambiental. |
| **Iconografía** | Lucide React & Custom SVG Icons | Iconos vectoriales accesibles y ligeros. |
| **Micro-interacciones** | Canvas-Confetti & Web Audio API | Feedback visual y sonoro táctil e inmersivo. |

---

## 3. Proyectos en Producción Integrados

### 🎮 1. Vacas Locas Prode (`vacas-locas`)
* **Repositorio:** [github.com/julyrodriguez/prode](https://github.com/julyrodriguez/prode)
* **Stack:** Next.js 15, React 19, Tailwind CSS v4, Firebase Auth/Firestore, REST API (`apivacas.jariel.com.ar`).
* **Lógica Destacada:** Motor de predicciones deportivas y de esports (CS2) en tiempo real, simulación determinista de tablas de posiciones (`LeagueSimulationView`), clasificación comunitaria y cálculo dinámico de puntuación ponderada.
* **Sandbox Integrado:** Simulador interactivo de partidos donde el usuario puede modificar goles reales y pronosticados, visualizando al instante el cálculo de puntos (+3 por acierto exacto, +1 por ganador) y el ranking en vivo.

### 🧘 2. Demo Pilates Studio (`demoPilates`)
* **Demo Live:** [demopilates.jariel.com.ar](https://demopilates.jariel.com.ar)
* **Repositorio:** [github.com/julyrodriguez/demoPilates](https://github.com/julyrodriguez/demoPilates)
* **Stack:** Next.js 16, React 19, Firebase, Resend/Nodemailer, LocalCache Architecture.
* **Lógica Destacada:** Sistema de autogestión de turnos de Pilates Reformer, control de capacidad por cama en vivo, cancelación autónoma mediante tokens de seguridad únicos y arquitectura híbrida LocalCache.
* **Sandbox Integrado:** Selector interactivo de turnos y disciplinas con confirmación de reserva simulada, confetti y generación del link de cancelación segura con token.

### ⚡ 3. AURA™ Headless Commerce (`tienda`)
* **Repositorio:** [github.com/julyrodriguez/tienda](https://github.com/julyrodriguez/tienda)
* **Stack:** React 18, TypeScript, Vite 6, Tailwind CSS, Framer Motion (Spring Physics).
* **Lógica Destacada:** Arquitectura desacoplada headless inspirada en marcas de diseño de vanguardia. Carrito deslizable (Slide-over Cart) con barra de progreso de envío gratis dinámica, cálculo de cuotas sin interés y checkout guiado con WhatsApp.
* **Sandbox Integrado:** Tarjeta de producto estrella 3D con cambio reactivo de variantes cromáticas (Obsidian, Silver, Cyan), cálculo de financiamiento regional y previsualización de carrito.

### 🎬 4. Cinemark Proyección & Salas Suite (`cinemark-app`)
* **Repositorio:** [github.com/julyrodriguez/cinemark-app](https://github.com/julyrodriguez/cinemark-app)
* **Stack:** React Native, Expo Router, React Native Web, Firebase Firestore, Excel Sheet Telemetry.
* **Lógica Destacada:** Plataforma de misión crítica para complejos cinematográficos multicomplejo (más de 12 salas). Mapa interactivo de butacas con diagnóstico de incidencias mecánicas (respaldo/asiento), telemetría de proyectores y horas de lámparas de xenón.
* **Sandbox Integrado:** Matriz interactiva de 40 butacas con detección de averías técnicas, selección en tiempo real, telemetría de cabina y emisión de boleto digital (Ticket Stub con código QR).

### 💼 5. Finanzas Enterprise Suite (`finanzas`)
* **Repositorio:** [github.com/julyrodriguez/finanzas](https://github.com/julyrodriguez/finanzas)
* **Stack:** Next.js 16, React 19, Firebase Firestore, SheetJS (XLSX), AI Parsing Engine.
* **Lógica Destacada:** Sistema integral de tesorería corporativa. Ciclo de vida de órdenes de compra con workflow de firma por lotes y liberación masiva en Interbanking bancario, conciliación multimoneda y monitor cambiario en vivo.
* **Sandbox Integrado:** Selector de cotizaciones de divisas (Oficial, Blue, MEP, CCL), tabla de órdenes con avance interactivo de estados (`Pendiente` → `Firmado` → `Liberado`) y generación de planilla bancaria.

---

## 4. Especificaciones UI/UX & Theming Reactivo

El portafolio implementa un observador de intersección (`IntersectionObserver`) que detecta la tarjeta central en pantalla y actualiza las propiedades del contexto:

```
[Hero]          → Obsidian base con acentos azul cielo (#38bdf8)
[Vacas Locas]   → Neón deportivo / gaming: Esmeralda (#10b981) + Violeta (#8b5cf6)
[Demo Pilates]  → Serénidad orgánica / wellness: Salvia (#14b8a6) + Lima (#84cc16)
[AURA Tienda]   → Lujo minimalista / e-commerce: Cian (#06b6d4) + Titanio
[Cinemark App]  → Contraste noir cine: Carmesí intenso (#e50914) + Dorado
[Finanzas Suite]→ Dashboard bancario sobrio: Azul marino (#38bdf8) + Esmeralda
[Credenciales]  → Blueprint técnico: Grafito profundo + Índigo
```

---

## 5. Instalación & Ejecución Local

Clona el repositorio y ejecuta el entorno de desarrollo:

```bash
# Clonar el proyecto
git clone https://github.com/julyrodriguez/jariel.git
cd jariel

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Verificación de Compilación de Producción
```bash
npm run lint
npm run build
```

---

## 6. Perfil Profesional & Credenciales

* **Nombre:** Julián Ariel Rodríguez
* **Título:** Tech Lead & Senior Full Stack Engineer
* **Formación Académica:** Tecnicatura Universitaria en Programación (Formación universitaria en estructuras de datos, algoritmos, paradigmas de programación, bases de datos relacionales y distribuidas).
* **Especializaciones:** Power BI Masterclass (DAX Avanzado, Modelado Dimensional, VertiPaq), Arquitecturas Serverless & Cloud Real-Time.
* **GitHub:** [github.com/julyrodriguez](https://github.com/julyrodriguez)
* **LinkedIn:** [linkedin.com/in/julian-ariel-rodriguez](https://www.linkedin.com/in/julian-ariel-rodriguez)
* **Email de Contacto:** [rodriguez.jariel01@gmail.com](mailto:rodriguez.jariel01@gmail.com)

---

© 2026 Julián Ariel Rodríguez. Todos los derechos reservados.
