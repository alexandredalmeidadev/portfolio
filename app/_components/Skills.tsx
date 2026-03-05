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
    <div className="yellow-section bg-[hsl(var(--background))] py-32">
        <Section id="skills" className="flex flex-col gap-20">
            <div ref={headingRef} className="reveal-up flex flex-col gap-6 text-center items-center max-w-4xl mx-auto">
                <div className="flex items-center gap-3 text-[hsl(var(--brand-purple))]">
                    <Sparkles size={28} />
                    <span className="font-black tracking-[0.3em] uppercase text-sm">Expertise</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black font-caption text-foreground tracking-tighter leading-tight">
                Technologies & Outils
                </h2>
                <p className="text-foreground/70 text-2xl font-semibold leading-relaxed">
                Une stack technique moderne pensée pour la performance et l&apos;extensibilité.
                </p>
            </div>

            <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SKILLS_DATA.map((skill, index) => (
                    <div 
                        key={index}
                        className="flex flex-col gap-8 md:gap-10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border-4 border-black/5 hover:border-[hsl(var(--brand-purple))] hover:shadow-2xl hover:shadow-black/10 transition-all duration-700" 
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] bg-[hsl(var(--brand-purple))]/5 flex items-center justify-center">
                            <skill.Icon size={48} className="text-[hsl(var(--brand-purple))]" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-black text-foreground tracking-tight leading-none">
                                {skill.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                                {skill.description}
                            </p>
                        </div>
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
