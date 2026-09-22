import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jariel.com.ar"),
  title: "Julián Ariel Rodríguez | Tech Lead & Senior Full Stack Engineer",
  description:
    "Portafolio profesional de Julián Ariel Rodríguez. Arquitecturas web inmersivas, aplicaciones en tiempo real, plataformas empresariales y sistemas de alta concurrencia con Next.js, React 19, TypeScript, Firebase y Node.js.",
  keywords: [
    "Julián Ariel Rodríguez",
    "Tech Lead",
    "Senior Full Stack Developer",
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Framer Motion",
    "Firebase",
    "Node.js",
    "Tecnicatura Universitaria en Programación",
    "Portafolio",
    "Prode",
    "Pilates Studio",
    "Aura TM",
    "Cinemark",
    "Finanzas"
  ],
  authors: [{ name: "Julián Ariel Rodríguez", url: "https://github.com/julyrodriguez" }],
  creator: "Julián Ariel Rodríguez",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jariel.com.ar",
    siteName: "Julián Ariel Rodríguez — Portafolio Profesional",
    title: "Julián Ariel Rodríguez | Tech Lead & Senior Full Stack Engineer",
    description:
      "Diseño, arquitectura y desarrollo de sistemas de alto impacto. Explora demos interactivas y código en producción.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julián Ariel Rodríguez | Tech Lead & Senior Full Stack Engineer",
    description:
      "Diseño, arquitectura y desarrollo de sistemas de alto impacto. Explora demos interactivas y código en producción.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#07090e] text-[#f1f5f9] selection:bg-sky-500 selection:text-black">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
