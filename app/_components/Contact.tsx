"use client";

import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import { MessageSquare, Mail, Smartphone, Sparkles, BriefcaseBusiness } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

export const Contact = () => {
  const headingRef = useScrollAnimation();
  const cardsRef = useScrollAnimation<HTMLDivElement>();
  const benefitsRef = useScrollAnimation<HTMLDivElement>();
  return (
    <Section id="contact" className="py-32 flex flex-col items-center text-center gap-20">
      <div ref={headingRef} className="reveal-up flex flex-col gap-6 max-w-4xl">
        <div className="flex items-center justify-center gap-3 text-[hsl(var(--brand-pink))] mb-6">
          <MessageSquare size={28} />
          <span className="font-black tracking-[0.3em] uppercase text-sm">Contact</span>
        </div>
        <h2 className="text-4xl md:text-9xl font-black font-caption tracking-tighter leading-[0.8]">
          PRÊT À <span className="text-[hsl(var(--brand-purple))]">COLLABORER ?</span>
        </h2>
        <p className="text-muted-foreground text-2xl font-medium leading-relaxed">
          Transformons vos défis techniques en opportunités business.
        </p>
      </div>

      <div ref={cardsRef} className="reveal-fade grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <ContactCard
          url="https://wa.me/2290196007981"
          name="WhatsApp Business"
          image="https://avatars.githubusercontent.com/u/43719341?v=4"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"
          description="Réponse rapide pour vos projets"
          className="h-full"
        />
        <ContactCard
          url="https://www.linkedin.com/in/alexandre-dalmeida-495277121/"
          name="LinkedIn"
          image="https://avatars.githubusercontent.com/u/43719341?v=4"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="Echangeons sur votre vision"
          className="h-full"
        />
        <ContactCard
          url="mailto:alexandredalmeidadev@gmail.com"
          name="Email Professionnel"
          image="https://cdn2.downdetector.com/static/uploads/logo/gmail_logo_2Cns2We.jpeg"
          mediumImage="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
          description="alexandredalmeidadev@gmail.com"
          className="h-full"
        />
      </div>

      <div className="mt-16 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="flex flex-col gap-6 md:gap-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-[hsl(var(--brand-purple))]/10 transition-all duration-700 group cursor-default">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[hsl(var(--brand-purple))]/10 flex items-center justify-center text-[hsl(var(--brand-purple))] group-hover:scale-110 group-hover:bg-[hsl(var(--brand-purple))] group-hover:text-white transition-all duration-500">
                <Sparkles size={36} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black tracking-tight">Expertise Tech</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">Solutions robustes avec Next.js et IA générative.</p>
              </div>
           </div>

           <div className="flex flex-col gap-6 md:gap-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-[hsl(var(--brand-yellow))]/10 transition-all duration-700 group cursor-default">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[hsl(var(--brand-yellow))]/10 flex items-center justify-center text-[hsl(var(--brand-yellow))] group-hover:scale-110 group-hover:bg-[hsl(var(--brand-yellow))] group-hover:text-black transition-all duration-500">
                <BriefcaseBusiness size={36} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black tracking-tight">Focus ROI</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">Maximisez votre retour sur investissement.</p>
              </div>
           </div>

           <div className="flex flex-col gap-6 md:gap-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-[hsl(var(--brand-pink))]/10 transition-all duration-700 group cursor-default">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[hsl(var(--brand-pink))]/10 flex items-center justify-center text-[hsl(var(--brand-pink))] group-hover:scale-110 group-hover:bg-[hsl(var(--brand-pink))] group-hover:text-white transition-all duration-500">
                <MessageSquare size={36} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black tracking-tight">Transparence</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">Un suivi rigoureux à chaque étape.</p>
              </div>
           </div>

           <div className="flex flex-col gap-6 md:gap-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-zinc-100 border border-zinc-200 hover:bg-white hover:shadow-2xl hover:shadow-black/10 transition-all duration-700 group cursor-default">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-zinc-900 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500">
                <Smartphone size={36} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-black tracking-tight">Express MVP</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">Lancez votre produit en temps record.</p>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};
