import { Code } from "./Code";
import { Section } from "./Section";
import { FacebookIcon } from "./icons/FacebookIcon";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-3 w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Alexandre dALMEIDA
        </h2>
        <h3 className="text-3xl font-caption">Developpeur web et createur</h3>

        <p className="text-base">
          I love creating content on{" "}
          <Link href="https://facebook.com/818060218057710">
            <Code className="inline-flex items-center gap-1">
              <FacebookIcon size={12} className="inline" />
              Facebook
            </Code>
          </Link>
          , currently working at{" "}
          <Link href="https://codeline.bj">
            <Code className="inline-flex items-center gap-1">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/langfr-250px-Flag_of_Benin.svg.png"
                width={16}
                height={12}
                className="inline"
                alt="benin flag"
              />{" "}
              Codeline
            </Code>
          </Link>
        </p>
      </div>
      <div className="flex-2 max-md:m-auto ml-auto">
        <Image
          src="https://avatars.githubusercontent.com/u/43719341?v=4"
          width={256}
          height={256}
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full object-cover"
          alt="alexandre picture"
        />
      </div>
    </Section>
  );
};
