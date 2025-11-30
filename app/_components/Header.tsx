import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FacebookIcon } from "./icons/FacebookIcon";
import { LinkedInIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 y-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">
          alexandredalmeida.com
        </h1>
        <div className="flex-1" />
        <ul>
          <Link
            href="https://github.com/alexandredalmeidadev"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
           <Link
            href="https://facebook.com/818060218057710"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <FacebookIcon size={12} className="text-foreground" />
          </Link>
           <Link
            href="https://www.linkedin.com/in/alexandre-valery-dalmeida/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
