"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  contribution?: string;
};

export const SideProject = (props: SideProjectProps) => {
  const linkContent = (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 glass p-3 rounded-xl glass-hover transition-all duration-300 hover:scale-105 group"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm glass-accent group-hover:scale-110 transition-transform duration-300">
        <props.Logo size={16} />
      </span>
      <div className="flex-1">
        <p className="text-lg font-semibold glass-text group-hover:text-primary transition-colors duration-300">
          {props.title}
        </p>
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {props.description}
        </p>
      </div>
    </Link>
  );

  // Si pas de contribution, afficher le lien direct sans tooltip
  if (!props.contribution) {
    return linkContent;
  }

  // Si contribution existe, envelopper dans un Tooltip
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          {linkContent}
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-sm p-4 bg-white dark:bg-gray-900 border-2 border-primary/20 shadow-xl"
        >
          <div className="space-y-2">
            <p className="font-semibold text-sm text-primary">Ma Contribution</p>
            <p className="text-sm text-foreground leading-relaxed">
              {props.contribution}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};