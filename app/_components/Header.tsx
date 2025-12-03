import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FacebookIcon } from "./icons/FacebookIcon";
import { LinkedInIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <Section className="glass rounded-b-2xl py-4 mb-4 flex items-baseline animate-in fade-in slide-in-from-top-2 duration-500">
        <h1 className="text-lg font-bold text-primary glass-text">
          alexandredalmeida.com
        </h1>
        <div className="flex-1" />
        <ul className="flex gap-2">
          <Link
            href="https://github.com/alexandredalmeidadev"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0 glass glass-hover transition-all duration-300")}
          >
            <GithubIcon size={14} className="text-foreground hover:text-primary transition-colors" />
          </Link>
           <Link
            href="https://facebook.com/818060218057710"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0 glass glass-hover transition-all duration-300")}
          >
            <FacebookIcon size={14} className="text-foreground hover:text-primary transition-colors" />
          </Link>
           <Link
            href="https://www.linkedin.com/in/alexandre-valery-dalmeida/"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0 glass glass-hover transition-all duration-300")}
          >
            <LinkedInIcon size={14} className="text-foreground hover:text-primary transition-colors" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
