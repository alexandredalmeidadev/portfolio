"use client";

import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { FolderDot, ShoppingCart, Scale, Building2, Tractor } from "lucide-react";

export const Projects = () => {
  return (
    <Section id="projects" className="py-24 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-[hsl(var(--brand-purple))]">
          <FolderDot size={24} />
          <span className="font-extrabold tracking-[0.2em] uppercase text-sm">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black font-caption tracking-tighter">Réalisations récentes</h2>
        <p className="text-muted-foreground text-xl max-w-3xl font-medium">
          Une sélection de produits digitaux performants développés avec passion et précision.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    Logo: ShoppingCart,
    title: "GestiPro",
    description: "Solution complète de gestion : ventes, stock, caisses & factures",
    url: "https://gestipro-omega.vercel.app/",
  },
  {
    Logo: Scale,
    title: "Juridixio",
    description: "Plateforme juridique IA : documents légaux & OHADA",
    url: "https://juridixio-two.vercel.app/",
    contribution: "Refonte et intégration des flows IA avancés.",
  },
  {
    Logo: Building2,
    title: "Wotelo",
    description: "SaaS de gestion d'hôtel ou d'appartements meublés",
    url: "https://wotelo.vercel.app/",
  },
  {
    Logo: Tractor,
    title: "Goshen",
    description: "SaaS de gestion agricole automatisé",
    url: "http://alexandrepv-001-site1.rtempurl.com",
  },
];
