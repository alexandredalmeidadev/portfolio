import { LucideIcon } from "lucide-react";
import Link from "next/link";

export type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 glass p-3 rounded-xl glass-hover transition-all duration-300 hover:scale-105 group"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm glass-accent group-hover:scale-110 transition-transform duration-300">
        <props.Logo size={16} />
      </span>
      <div className="flex-1">
        <p className="text-lg font-semibold glass-text group-hover:text-primary transition-colors duration-300">{props.title}</p>
        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{props.description}</p>
      </div>
    </Link>
  );
};