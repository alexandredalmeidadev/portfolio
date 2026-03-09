"use client";

import { Section } from "./Section";
import { CVDownloadButton } from "./CVDownloadButton";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <Section className="py-24 md:py-32 flex flex-col items-center text-center gap-12 mt-2">
      <div className="flex flex-col items-center gap-8 max-w-5xl">
        <h1 className="text-4xl md:text-8xl font-black font-caption leading-[0.9] tracking-[-0.04em] text-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          CONCEVOIR DES <span className="bg-gradient-to-r from-[hsl(var(--brand-purple))] via-[hsl(var(--brand-pink))] to-[hsl(var(--brand-yellow))] bg-clip-text text-transparent italic px-2">SOLUTIONS</span> QUI COMPTENT.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
          Expert en création de <span className="text-foreground font-bold underline decoration-zinc-300 decoration-4">solutions numériques</span> (sites, applications web et mobile) boostées par l&apos;<span className="text-foreground font-bold underline decoration-zinc-300 decoration-4">Intelligence Artificielle</span>.
          <br className="hidden md:block" />
          J&apos;aide les entrepreneurs à transformer leurs idées en <span className="text-foreground font-bold underline decoration-zinc-300 decoration-4">produits digitaux</span> rentables et performants.
        </p>

        <div className="flex max-sm:flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
           <Link 
            href="#contact" 
            className="px-10 py-5 rounded-full bg-[hsl(var(--brand-purple))] text-white font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-[hsl(var(--brand-purple))]/40 flex items-center gap-3 group"
           >
            Lancer un projet
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </Link>
           <Link 
            href="#projects" 
            className="px-10 py-5 rounded-full bg-white border-2 border-zinc-100 text-foreground font-bold text-lg hover:bg-zinc-50 transition-all flex items-center gap-2 group"
           >
            Voir mes travaux
           </Link>
        </div>
      </div>

      <div className="relative mt-12 w-full max-w-6xl animate-in fade-in zoom-in duration-1000 delay-500">
        <div className="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--brand-purple))] to-[hsl(var(--brand-pink))] rounded-[3rem] blur-3xl opacity-20 -z-10 animate-pulse"></div>
        <div className="relative p-2 rounded-[3.5rem] bg-zinc-100/50 border-4 border-white shadow-2xl overflow-hidden aspect-video group">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80"
            alt="Workspace"
            fill
            unoptimized={true}
            className="object-cover rounded-[3rem] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
          />
           <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-[1.5rem] shadow-2xl border border-white/50 flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform duration-300">
             <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-xs md:text-sm font-bold text-black tracking-tight">SaaS Expert</span>
           </div>
        </div>
        <div className="absolute top-6 -right-4 md:-right-20 bg-white/90 backdrop-blur-sm p-4 rounded-[1.5rem] shadow-2xl border border-white/50 flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-default">
           <span className="text-xs md:text-sm font-bold text-black tracking-tight">AI Automation 🤖</span>
        </div>
      </div>
    </Section>
  );
};
