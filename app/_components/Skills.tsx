"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { NextJsLogo } from "./icons/NextjsLogo";
import { CSharpLogo } from "./icons/CSharpLogo";
import { AiLogo } from "./icons/AiLogo";
import { Sparkles, Workflow } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export const Skills = () => {
  const headingRef = useScrollAnimation();
  const gridRef = useScrollAnimation<HTMLDivElement>();
  return (
    <div className="yellow-section bg-[hsl(var(--background))] py-20">
        <Section id="skills" className="flex flex-col gap-12">
            <div ref={headingRef} className="reveal-up flex flex-col gap-4 text-center items-center max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-[hsl(var(--brand-purple))]">
                    <Sparkles size={24} />
                    <span className="font-black tracking-[0.2em] uppercase text-xs">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black font-caption text-foreground tracking-tighter leading-tight">
                Technologies & Outils
                </h2>
                <p className="text-foreground/70 text-xl font-semibold leading-relaxed max-w-2xl">
                Une stack technique moderne pensée pour la performance et l&apos;extensibilité.
                </p>
            </div>
 
            <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS_DATA.map((skill, index) => (
                    <div 
                        key={index}
                        className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white border-2 border-black/5 hover:border-[hsl(var(--brand-purple))] hover:shadow-xl hover:shadow-black/5 transition-all duration-500" 
                    >
                        <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[hsl(var(--brand-purple))]/5 flex items-center justify-center shrink-0">
                                <skill.Icon size={28} className="md:w-8 md:h-8 text-[hsl(var(--brand-purple))]" />
                            </div>
                            <h3 className="text-lg md:text-xl font-black text-foreground tracking-tight leading-tight">
                                {skill.title}
                            </h3>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-semibold">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    </div>
  );
};

const SKILLS_DATA = [
    {
        Icon: NextJsLogo,
        title: "Next.js",
        description: "Mon framework de prédilection pour le Fullstack. Performance, SEO et expérience utilisateur exceptionnelle."
    },
    {
        Icon: CSharpLogo,
        title: "C# ASP.NET",
        description: "Expertise en développement Backend robuste pour les applications d'entreprise et services complexes."
    },
    {
        Icon: AiLogo,
        title: "Intégration IA",
        description: "Intégration poussée de GPT-4, Claude et autres LLM pour automatiser et enrichir vos applications."
    },
    {
        Icon: Workflow,
        title: "n8n / Automation",
        description: "Maîtrise de l'automatisation de workflows complexes pour connecter vos outils et gagner en productivité."
    }
];
