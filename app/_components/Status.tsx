"use client";

import { Section } from "./Section";
import { Work, WorkProps } from "./Work";
import { ContactCard } from "./ContactCard";
import { BriefcaseBusiness, MessageSquare, ArrowRight, Zap } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Image from "next/image";

export const Status = () => {
  const headingRef = useScrollAnimation();
  const activeRef = useScrollAnimation<HTMLDivElement>();
  const timelineRef = useScrollAnimation<HTMLDivElement>();
  const sideRef = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="bg-zinc-50 py-32 border-y border-zinc-200">
      <Section id="experience" className="flex max-lg:flex-col items-start gap-24">

        {/* Experience Column */}
        <div className="flex-[3] w-full flex flex-col gap-16">

          {/* Heading */}
          <div ref={headingRef} className="reveal-left flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[hsl(var(--brand-pink))]">
              <BriefcaseBusiness size={28} />
              <span className="font-black tracking-[0.3em] uppercase text-sm">Parcours</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black font-caption tracking-tighter leading-tight">Expériences</h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl mt-2">
              Depuis 2019, je conçois des <span className="text-foreground font-bold">applications d&apos;entreprise robustes</span>. Plus de <span className="text-foreground font-bold">7 ans d&apos;expertise</span> terrain en architecture et développement de solutions complexes.
            </p>
          </div>

          {/* === ACTUELLEMENT === */}
          <div ref={activeRef} className="reveal-up flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                <div className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
                <span className="text-white font-black text-xs tracking-widest uppercase">Actuellement</span>
              </div>
              <span className="text-muted-foreground text-sm font-medium">2 rôles simultanés</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Studio Inpulsion */}
              <div className="group relative p-6 rounded-[2rem] bg-white border-2 border-zinc-100 hover:border-[hsl(var(--brand-purple))]/40 hover:shadow-xl hover:shadow-[hsl(var(--brand-purple))]/10 transition-all duration-500 flex flex-col gap-5">
                <div className="flex items-start gap-4 h-14">
                  <div className="w-14 h-14 rounded-2xl border border-zinc-100 bg-white p-2 flex shrink-0 items-center justify-center overflow-hidden shadow-sm">
                    <img
                      src="/studio_inpulsion_logo.png"
                      alt="Studio Inpulsion"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                       <p className="font-black text-lg text-foreground leading-none">Studio Inpulsion</p>
                       <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                         <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
                         <span className="text-[10px] font-bold text-white uppercase tracking-wider">Actif</span>
                       </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold mt-1">Jan. 2026 — Présent</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-purple))]">
                    <Zap size={14} />
                    Consultant
                  </span>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Développement d&apos;applications Web & Mobile · Full Stack JS
                  </p>
                </div>
              </div>

              {/* OREBTECH */}
              <div className="group relative p-6 rounded-[2rem] bg-white border-2 border-zinc-100 hover:border-[hsl(var(--brand-yellow))]/60 hover:shadow-xl hover:shadow-[hsl(var(--brand-yellow))]/10 transition-all duration-500 flex flex-col gap-5">
                <div className="flex items-start gap-4 h-14">
                  <div className="w-14 h-14 rounded-2xl border border-zinc-100 bg-white p-2 flex shrink-0 items-center justify-center overflow-hidden shadow-sm">
                    <img
                      src="/OREBTECH.png"
                      alt="OREBTECH"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                       <p className="font-black text-lg text-foreground leading-none">OREBTECH</p>
                       <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-100">
                         <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--brand-yellow))] animate-pulse" />
                         <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Fondateur</span>
                       </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold mt-1">2025 — Présent</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--brand-yellow))]">
                    <Zap size={14} />
                    Lead Dev & Fondateur
                  </span>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    Studio de développement de produits SaaS & IA sur mesure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === EXPÉRIENCES PASSÉES === */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-black tracking-widest uppercase text-muted-foreground/60 bg-zinc-100 px-4 py-1.5 rounded-full border border-zinc-200">Expériences passées</span>
            </div>

            <div ref={timelineRef} className="reveal-up relative pl-12 border-l-4 border-zinc-200 flex flex-col gap-12">
              {PAST_WORKS.map((work, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[54px] top-6 w-5 h-5 rounded-full bg-white border-4 border-zinc-300 shadow" />
                  <Work {...work} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact/Sticky Side */}
        <div ref={sideRef} className="reveal-fade flex-[2] w-full flex flex-col gap-12 lg:sticky lg:top-32">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-primary">
              <MessageSquare size={24} />
              <span className="font-extrabold tracking-widest uppercase text-sm">Me joindre</span>
            </div>
            <div className="flex flex-col gap-4">
              <ContactCard
                url="https://wa.me/2290196007981"
                name="WhatsApp Business"
                image="https://avatars.githubusercontent.com/u/43719341?v=4"
                mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
                description="Réponse sous 2h"
              />
              <ContactCard
                url="https://www.linkedin.com/in/alexandre-valery-dalmeida/"
                name="LinkedIn"
                image="https://avatars.githubusercontent.com/u/43719341?v=4"
                mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                description="Professional Network"
              />
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-white border border-border shadow-xl shadow-primary/5 flex flex-col gap-6 group hover:translate-y-[-4px] transition-all duration-500">
            <h3 className="text-2xl font-bold tracking-tight">Prêt à collaborer ?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Vous avez une idée de projet ou besoin d&apos;une expertise technique ? Discutons-en dès aujourd&apos;hui.
            </p>
            <a
              href="mailto:alexandredalmeidadev@gmail.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-primary text-white font-bold group-hover:bg-primary/90 transition-colors"
            >
              Envoyer un Email
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </Section>
    </div>
  );
};

const PAST_WORKS: WorkProps[] = [
  {
    image: "/CultureWebLogo.PNG",
    title: "CultureWeb",
    role: "Développeur FullStack",
    date: "2024 - 2025",
    url: "http://cultureweb.net",
    freelance: true,
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQFu-mygojbCnw/company-logo_200_200/company-logo_200_200/0/1631312905539?e=2147483647&v=beta&t=vBGlHukxFWlAzI8P5JsW9trERiOn2G-Ajt6yD96wSFU",
    title: "SimpleIT",
    role: "Développeur .NET & SQL",
    date: "2023 - 2024",
    url: "https://www.simpleit.bj",
  },
];