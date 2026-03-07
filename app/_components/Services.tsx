"use client";

import { Section } from "./Section";
import { Smartphone, Layout, Server, Sparkles, Laptop, Workflow, BrainCircuit, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const SERVICES = [
  {
    title: "Applications Web & SaaS",
    description: "Conception et développement d'applications sur-mesure performantes avec Next.js et React pour booster votre activité.",
    icon: Layout,
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Automatisation & n8n",
    description: "Économisez des heures de travail en automatisant vos processus répétitifs avec n8n et des intégrations intelligentes.",
    icon: Smartphone,
    color: "bg-[hsl(var(--brand-pink))]/10 text-[hsl(var(--brand-pink))]",
  },
  {
    title: "Intégration d'IA",
    description: "Intégrez la puissance de l'Intelligence Artificielle (OpenAI) dans vos outils pour offrir une expérience utilisateur unique.",
    icon: Sparkles,
    color: "bg-[hsl(var(--brand-yellow))]/10 text-[hsl(var(--brand-yellow))]",
  },
  {
    title: "Infrastructures Cloud",
    description: "Déploiement et optimisation de vos architectures pour garantir scalabilité, sécurité et performance maximale.",
    icon: Server,
    color: "bg-[hsl(var(--brand-purple))]/10 text-[hsl(var(--brand-purple))]",
  },
];

export const Services = () => {
  const headingRef = useScrollAnimation();
  const cardsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="bg-zinc-50 py-32 border-y border-zinc-200">
        <Section id="services" className="flex flex-col gap-20">
        <div ref={headingRef} className="reveal-up grid grid-cols-1 lg:grid-cols-12 items-end gap-12">
            <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex items-center gap-3 text-[hsl(var(--brand-purple))]">
                    <Sparkles size={28} />
                    <span className="font-black tracking-[0.3em] uppercase text-sm">Solutions</span>
                </div>
                <h2 className="text-4xl md:text-8xl font-black font-caption tracking-tighter text-foreground leading-[0.9]">
                    MES <span className="text-[hsl(var(--brand-purple))] opacity-90">SERVICES.</span>
                </h2>
            </div>
            <div className="lg:col-span-4 pb-4">
                <p className="text-muted-foreground text-xl font-medium leading-relaxed">
                    De la conception à la mise en production, je vous accompagne dans chaque étape technique de votre croissance.
                </p>
            </div>
        </div>
        
        <div ref={cardsRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white border-2 border-zinc-100 hover:border-[hsl(var(--brand-purple))]/40 hover:shadow-xl hover:shadow-[hsl(var(--brand-purple))]/10 transition-all duration-500 flex flex-col gap-6"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
