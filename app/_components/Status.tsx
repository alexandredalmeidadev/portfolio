"use client";

import { Section } from "./Section";
import { Work, WorkProps } from "./Work";
import { ContactCard } from "./ContactCard";
import { BriefcaseBusiness, MessageSquare, ArrowRight } from "lucide-react";

export const Status = () => {
  return (
    <div className="bg-zinc-50 py-32 border-y border-zinc-200">
      <Section id="experience" className="flex max-lg:flex-col items-start gap-24">
        {/* Experience Timeline */}
        <div className="flex-[3] w-full flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[hsl(var(--brand-pink))]">
              <BriefcaseBusiness size={28} />
              <span className="font-black tracking-[0.3em] uppercase text-sm">Parcours</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black font-caption tracking-tighter leading-tight">Expériences</h2>
            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl mt-2">
              Depuis 2019, je conçois des <span className="text-foreground font-bold">applications d&apos;entreprise robustes</span>. Plus de <span className="text-foreground font-bold underline decoration-[hsl(var(--brand-pink))] decoration-4">7 ans d&apos;expertise</span> terrain en architecture et développement de solutions complexes.
            </p>
          </div>
          
          <div className="relative pl-12 border-l-4 border-zinc-200 flex flex-col gap-16">
              {WORKS.map((work, index) => (
                <div key={index} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[54px] top-8 w-6 h-6 rounded-full bg-white border-4 border-[hsl(var(--brand-pink))] shadow-xl group-hover:scale-125 transition-transform"></div>
                    <Work {...work} />
                </div>
              ))}
          </div>
        </div>

        {/* Contact/Sticky Side */}
        <div className="flex-[2] w-full flex flex-col gap-12 lg:sticky lg:top-32">
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

const WORKS: WorkProps[] = [
  {
    image: "/OREBTECH.png",
    title: "OREBTECH",
    role: "Fondateur & Lead Dev",
    date: "2025 - Présent",
    url: "",
  },
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