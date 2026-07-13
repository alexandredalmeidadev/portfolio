"use client";

import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { FolderDot, ShoppingCart, Scale, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export const Projects = () => {
  const headingRef = useScrollAnimation();
  const gridRef = useScrollAnimation<HTMLDivElement>();

  return (
    <Section id="projects" className="py-24 flex flex-col gap-12">
      <div ref={headingRef} className="reveal-up flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[hsl(var(--brand-purple))]">
          <FolderDot size={24} />
          <span className="font-extrabold tracking-[0.2em] uppercase text-sm">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-caption tracking-tighter">Réalisations récentes</h2>
        <p className="text-muted-foreground text-xl max-w-3xl font-medium">
          Une sélection de produits digitaux performants développés avec passion et précision.
        </p>
      </div>
      
      <div ref={gridRef} className="reveal-fade grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SIDE_PROJECTS.map((project, index) => (
            <SideProject
              key={index}
              {...project}
            />
          ))}
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    logoImage: "/logos/facuro.png",
    title: "Facuro",
    description: "microSaaS de devis & facturation pour artisans et freelances : création de devis, proforma, factures PDF & suivi clients — Next.js, Prisma, PostgreSQL",
    url: "https://facuro-web.vercel.app/",
    internalUrl: "/projects/facuro",
  },
  {
    logoImage: "/logos/kaxaya.png",
    title: "Kaxaya",
    description: "SaaS de gestion comptable pour PME : ventes, stocks, caisse, Mobile Money & bot WhatsApp intelligent — Next.js, Prisma, PostgreSQL",
    url: "https://kaxaya-web.vercel.app/",
    internalUrl: "/projects/kaxaya",
  },
  {
    Logo: Scale,
    title: "Juridixio",
    description: "Plateforme juridique IA : rédaction de documents légaux OHADA par RAG & LangChain — Next.js, OpenAI",
    url: "https://www.juridixio.com/",
    internalUrl: "/projects/juridixio",
    contribution: "Refonte complète de l'interface et intégration des flows IA avancés (RAG, agents LLM).",
  },
  {
    Logo: Building2,
    title: "Wotelo",
    description: "SaaS de gestion hôtelière multi-tenant : réservations, chambres & appartements meublés — Next.js, ASP.NET Core",
    url: "https://wotelo.vercel.app/",
    internalUrl: "/projects/wotelo",
  },
  {
    Logo: ShoppingCart,
    title: "GestiPro",
    description: "SaaS de gestion commerciale sur-mesure : ventes, stocks, caisse & facturation — Next.js, Prisma, PostgreSQL",
    url: "https://gestipro-omega.vercel.app/",
    internalUrl: "/projects/gestipro",
  },
  // Goshen désactivé temporairement : hébergement ASP.NET (rtempurl) hors service, reprise prévue en Next.js
  // {
  //   Logo: Tractor,
  //   title: "Goshen",
  //   description: "SaaS de gestion agricole automatisé : cultures, stocks & rapports — C# ASP.NET Core, n8n, automatisation des flux",
  //   url: "https://alexandrepv-001-site1.rtempurl.com",
  //   internalUrl: "/projects/goshen",
  // },
];
