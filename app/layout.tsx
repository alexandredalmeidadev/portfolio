import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

const AnekTelugu = Anek_Telugu({
  variable: "--font-caption",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Alexandre d\'ALMEIDA • Développeur Full-Stack",
  description: "Spécialiste SaaS, Next.js & C# ASP.NET, Créateur de solutions performantes et contenu digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${AnekTelugu.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
