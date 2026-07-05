"use client";

import { LucideIcon, ArrowUpRight, BookOpen } from "lucide-react";
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
  internalUrl?: string;
  contribution?: string;
};

export const SideProject = (props: SideProjectProps) => {
  const cardContent = (
    <div className="flex flex-col gap-4 p-5 rounded-3xl bg-white border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group h-full">
      <div className="flex items-start gap-4">
        <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 shrink-0">
          <props.Logo size={24} />
        </span>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {props.title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
            {props.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-zinc-100">
        {props.internalUrl && (
          <Link
            href={props.internalUrl}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-zinc-900 text-white text-xs font-bold hover:bg-black transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <BookOpen size={12} />
            Voir la fiche
          </Link>
        )}
        <Link
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-zinc-200 text-zinc-600 text-xs font-bold hover:bg-zinc-50 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowUpRight size={12} />
          {props.internalUrl ? "Demo" : "Voir le projet"}
        </Link>
      </div>
    </div>
  );

  if (!props.contribution) {
    return <div className="h-full">{cardContent}</div>;
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer h-full">{cardContent}</div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="max-w-sm p-5 bg-white border border-primary/20 shadow-2xl rounded-2xl"
        >
          <div className="space-y-2">
            <p className="font-bold text-sm text-primary uppercase tracking-wider">Ma Contribution</p>
            <p className="text-sm text-foreground leading-relaxed font-medium">
              {props.contribution}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
