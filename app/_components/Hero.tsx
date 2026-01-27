import { Code } from "./Code";
import { Section } from "./Section";

import { CVDownloadButton } from "./CVDownloadButton";
import Link from "next/link";
import Image from "next/image";
import { BitcoinIcon } from "./icons/BitcoinIcon";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-3 w-full flex flex-col gap-2 glass p-6 rounded-2xl">
        <h2 className="font-caption font-bold text-5xl text-primary glass-text">
          Alexandre dALMEIDA
        </h2>
        <h3 className="text-2xl font-caption glass-text">
          {/* Développeur web spécialisé en applications métiers et SaaS */}
          Développeur fullstack orienté Business & Automation (IA, SaaS, Automatisation & CRM)
        </h3>

        <p className="text-base">
          J&apos;aide les entreprises à créer des applications modernes et à 
          automatiser leurs processus pour gagner du temps et de l&apos;argent, tout en créant du contenu autour de la
          technologie et de l&apos;écosystème{" "}
          <Link href="https://facebook.com/818060218057710">
            <Code className="inline-flex items-center gap-1">
              <BitcoinIcon size={12} className="inline" />
              Bitcoin
            </Code>
          </Link>
          .{" "}
          {/* <Link href="https://facebook.com/818060218057710">
            <Code className="inline-flex items-center gap-1">
              <FacebookIcon size={12} className="inline" />
            </Code>
          </Link>
          ,{" "}
          <Link href="https://facebook.com/818060218057710">
            <Code className="inline-flex items-center gap-1">
              <FacebookIcon size={12} className="inline" />
            </Code>
          </Link> */}
          Vie au{" "}
          <Link href="https://codeline.bj">
            <Code className="inline-flex items-center gap-1">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/langfr-250px-Flag_of_Benin.svg.png"
                width={16}
                height={12}
                className="inline"
                alt="benin flag"
              />{" "}
              Bénin
            </Code>
          </Link>
        </p>

        <div className="mt-4">
          <CVDownloadButton />
        </div>
      </div>
      <div className="flex-2 max-md:m-auto ml-auto">
        <div className="relative">
          <div className="absolute inset-0 glass-glow rounded-full blur-xl opacity-50"></div>
          <Image
            src="https://avatars.githubusercontent.com/u/43719341?v=4"
            width={256}
            height={256}
            className="w-full h-auto max-w-xs max-md:w-56 rounded-full object-cover relative z-10 glass p-1 glass-hover transition-all duration-300"
            alt="alexandre picture"
          />
        </div>
      </div>
    </Section>
  );
};
