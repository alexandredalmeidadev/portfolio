"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { NextJsLogo } from "./icons/NextjsLogo";
import { Code } from "./Code";
import { CSharpLogo } from "./icons/CSharpLogo";
import { AiLogo } from "./icons/AiLogo";
import { Workflow, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const Skills = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth / 3; // Scroll by one card width
      
      let newScrollLeft;
      
      if (direction === 'left') {
        newScrollLeft = scrollLeft - scrollAmount;
        // If at start, loop to end
        if (newScrollLeft < 0) newScrollLeft = scrollWidth - clientWidth;
      } else {
        newScrollLeft = scrollLeft + scrollAmount;
        // If at end, loop to start
        if (newScrollLeft + clientWidth > scrollWidth + 10) newScrollLeft = 0;
      }

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        scroll('right');
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J&apos;adore travailler sur...
      </h2>
      <div 
        className="relative w-full px-12 md:px-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Bouton gauche */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass glass-hover p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ml-1"
          aria-label="Défiler vers la gauche"
        >
          <ChevronLeft size={24} className="text-primary group-hover:text-primary/80 transition-colors" />
        </button>

        {/* Conteneur scrollable */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        >
          <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 snap-start" style={{minWidth: 'calc((100% - 2rem) / 3)', maxWidth: 'calc((100% - 2rem) / 3)'}}>
            <NextJsLogo
              size={42}
            />
            <h3 className="text-2xl font-semibold tracking-tight glass-text">
              NextJs
            </h3>
            <p className="text-sm text-muted-foreground">
              Mon framework principal est <Code>Next.js</Code>. Je l&apos;utilise aussi bien
              pour le backend que pour le frontend.
            </p>
          </div>

          <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 snap-start" style={{minWidth: 'calc((100% - 2rem) / 3)', maxWidth: 'calc((100% - 2rem) / 3)'}}>
            <CSharpLogo
              size={42}
              className="text-primary"
            />
            <h3 className="text-2xl font-semibold tracking-tight glass-text">
              C# ASP.NET
            </h3>
            <p className="text-sm text-muted-foreground">
              Expert en <Code>C#</Code> et <Code>ASP.NET</Code> pour construire des
              services backend robustes et des applications d&apos;entreprise.
            </p>
          </div>

          <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 snap-start" style={{minWidth: 'calc((100% - 2rem) / 3)', maxWidth: 'calc((100% - 2rem) / 3)'}}>
            <AiLogo size={42} className="text-primary" />
            <h3 className="text-2xl font-semibold tracking-tight glass-text">
              Intégration IA
            </h3>
            <p className="text-sm text-muted-foreground">
              J&apos;intègre l&apos;IA dans vos applications pour créer un parfait{" "}
              <u>expérience utilisateur</u> avec <Code>OpenAI API</Code> et{" "}
              <Code>LangChain</Code>.
            </p>
          </div>

          <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 snap-start" style={{minWidth: 'calc((100% - 2rem) / 3)', maxWidth: 'calc((100% - 2rem) / 3)'}}>
            <Workflow size={42} className="text-primary" />
            <h3 className="text-2xl font-semibold tracking-tight glass-text">
              n8n
            </h3>
            <p className="text-sm text-muted-foreground">
              Automatisation de workflows avec <Code>n8n</Code> pour connecter vos applications
              et optimiser vos processus métiers.
            </p>
          </div>
        </div>

        {/* Bouton droit */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass glass-hover p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group mr-1"
          aria-label="Défiler vers la droite"
        >
          <ChevronRight size={24} className="text-primary group-hover:text-primary/80 transition-colors" />
        </button>
      </div>
    </Section>
  );
};
