"use client";

import { Section } from "./Section";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="dark-section bg-[hsl(var(--background))] py-20 border-t border-white/5">
            <Section className="flex max-md:flex-col items-center justify-between gap-12">
                <div className="flex flex-col gap-4 max-md:items-center">
                    <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[hsl(var(--brand-yellow))] shadow-lg shadow-[hsl(var(--brand-yellow))]/20">
                            <img 
                                src="https://avatars.githubusercontent.com/u/43719341?v=4" 
                                alt="Alexandre" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-white">
                            Alexandre d&apos;ALMEIDA
                        </span>
                    </div>
                    <p className="text-zinc-500 font-medium">© {new Date().getFullYear()} Tous droits réservés.</p>
                </div>
                <div className="flex gap-8 text-sm text-zinc-400 font-semibold">
                    <Link href="#projects" className="hover:text-white transition-colors underline-offset-4 hover:underline">Projets</Link>
                    <Link href="#services" className="hover:text-white transition-colors underline-offset-4 hover:underline">Services</Link>
                    <Link href="#contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">Contact</Link>
                </div>
            </Section>
        </footer>
    );
};