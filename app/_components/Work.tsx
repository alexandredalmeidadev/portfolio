"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="flex items-center gap-4 group p-2 rounded-2xl transition-all duration-300"
    >
      <div className="w-12 h-12 relative rounded-xl overflow-hidden border border-border bg-white p-2">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{props.title}</p>
          {props.freelance && <Badge variant="secondary" className="text-[10px] px-1.5 py-0 rounded-full h-4">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground font-medium">{props.role}</p>
      </div>
      <p className="text-xs text-muted-foreground font-semibold bg-white/50 px-2 py-1 rounded-lg">{props.date}</p>
    </Link>
  );
};