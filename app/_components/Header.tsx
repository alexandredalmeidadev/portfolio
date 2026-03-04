"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="py-3 px-8 rounded-full flex items-center gap-8 max-w-4xl w-full bg-zinc-950/95 backdrop-blur-xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[hsl(var(--brand-yellow))] group-hover:border-[hsl(var(--brand-pink))] transition-colors shadow-lg shadow-[hsl(var(--brand-yellow))]/20">
                    <img 
                        src="https://avatars.githubusercontent.com/u/43719341?v=4" 
                        alt="Alexandre" 
                        className="object-cover w-full h-full"
                    />
                </div>
            </Link>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <Link href="#projects" className="text-xs font-black text-zinc-400 hover:text-[hsl(var(--brand-yellow))] transition-colors tracking-[0.2em] uppercase">Projets</Link>
          <Link href="#services" className="text-xs font-black text-zinc-400 hover:text-[hsl(var(--brand-yellow))] transition-colors tracking-[0.2em] uppercase">Services</Link>
          <Link href="#contact" className="text-xs font-black text-zinc-400 hover:text-[hsl(var(--brand-yellow))] transition-colors tracking-[0.2em] uppercase">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <Link 
                href="https://github.com/alexandredalmeidadev" 
                target="_blank"
                className="text-zinc-400 hover:text-[hsl(var(--brand-pink))] transition-colors"
            >
                <GithubIcon size={20} />
            </Link>
            <Link 
                href="https://linkedin.com/in/alexandre-dalmeida-495277121/" 
                target="_blank"
                className="text-zinc-400 hover:text-[hsl(var(--brand-pink))] transition-colors"
            >
                <LinkedInIcon size={20} />
            </Link>
          </div>
          <Link 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-[hsl(var(--brand-pink))] text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[hsl(var(--brand-pink))]/20"
          >
            Parlons-en
          </Link>
        </div>
      </nav>
    </header>
  );
};
