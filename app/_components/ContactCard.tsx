"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string
}) => {
  const CardContent = (
    <div className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-border group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
      <div className="relative w-12 h-12">
        <Image
          src={props.image}
          alt={props.name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover border border-border"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full p-0.5 border border-border shadow-sm">
          <Image
            src={props.mediumImage}
            alt={props.name}
            width={20}
            height={20}
            className="w-full h-full rounded-full object-contain"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground font-medium">{props.description}</p>
      </div>
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );

  if (props.url) {
    return (
      <a 
        href={props.url} 
        className={cn("w-full block", props.className)} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
};