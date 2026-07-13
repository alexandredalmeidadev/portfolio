import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
})

const SITE_URL = "https://www.alexandredalmeida.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alexandre d'ALMEIDA • Développeur Full-Stack Next.js & IA",
  description: "Développeur Full-Stack spécialisé Next.js, ASP.NET Core et IA. Je construis des SaaS performants et des solutions digitales à fort ROI pour les entrepreneurs.",
  openGraph: {
    title: "Alexandre d'ALMEIDA • Développeur Full-Stack Next.js & IA",
    description: "Développeur Full-Stack — Next.js, ASP.NET Core, IA générative. Fondateur d'OREBTECH. Basé au Bénin, disponible en remote.",
    url: SITE_URL,
    siteName: "Alexandre d'ALMEIDA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alexandre d'ALMEIDA – Développeur Full-Stack Next.js & IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandre d'ALMEIDA • Développeur Full-Stack",
    description: "SaaS, Next.js, ASP.NET Core et IA — Solutions digitales à fort ROI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    shortcut: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/icon.jpg", type: "image/jpeg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Alexandre d'ALMEIDA",
      jobTitle: "Développeur Full-Stack",
      url: SITE_URL,
      image: `${SITE_URL}/maphoto.jpg`,
      email: "alexandrepvdalmeida@gmail.com",
      sameAs: [
        "https://github.com/alexandredalmeidadev",
        "https://www.linkedin.com/in/alexandre-dalmeida-495277121/",
      ],
      knowsAbout: ["Next.js", "ASP.NET Core", "Intelligence Artificielle", "SaaS", "n8n", "React", "C#", "TypeScript"],
      description: "Développeur Full-Stack spécialisé Next.js, ASP.NET Core et IA. Fondateur d'OREBTECH, basé au Bénin.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "OREBTECH – Studio de développement SaaS & IA",
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}/#person` },
      serviceType: ["Développement Web", "Applications SaaS", "Intégration IA", "Automatisation n8n", "Infrastructure Cloud"],
      areaServed: "Worldwide",
      availableLanguage: ["Français", "English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light h-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${AnekTelugu.variable} antialiased h-full`}
      >
        <div className="relative z-10 min-h-screen bg-white">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
