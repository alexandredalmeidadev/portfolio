import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { NextJsLogo } from "./icons/NextjsLogo";
import { Code } from "./Code";
import { CSharpLogo } from "./icons/CSharpLogo";
import { AiLogo } from "./icons/AiLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 flex-1">
          <NextJsLogo
            size={42}
          />
          <h3 className="text-2xl font-semibold tracking-tight glass-text">
            NextJs
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>Next.js</Code>. I also use
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>

         <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 flex-1">
          <CSharpLogo
            size={42}
            className="text-primary"
          />
          <h3 className="text-2xl font-semibold tracking-tight glass-text">
            C# ASP.NET
          </h3>
          <p className="text-sm text-muted-foreground">
            Expert in <Code>C#</Code> and <Code>ASP.NET</Code> for building robust
            backend services and enterprise applications.
          </p>
        </div>


         <div className="flex flex-col gap-2 glass p-4 rounded-xl glass-hover transition-all duration-300 flex-1">
          <AiLogo size={42} className="text-primary" />
          <h3 className="text-2xl font-semibold tracking-tight glass-text">
            AI Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            J&apos;intègre l&apos;IA dans vos applications pour créer un parfait{" "}
            <u>expérience utilisateur</u> avec <Code>OpenAI API</Code> et{" "}
            <Code>LangChain</Code>.
          </p>
        </div>

      </div>
    </Section>
  );
};
