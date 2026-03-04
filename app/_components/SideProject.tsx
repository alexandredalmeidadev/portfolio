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
      target="_blank"
      className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
    >
      <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
        <props.Logo size={24} />
      </span>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {props.title}
        </h4>
        <p className="text-sm text-muted-foreground line-clamp-1 group-hover:text-foreground/80 transition-colors duration-300">
          {props.description}
        </p>
      </div>
    </Link>
  );

  if (!props.contribution) {
    return linkContent;
  }

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer">
            {linkContent}
          </div>
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