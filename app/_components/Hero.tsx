/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { FacebookIcon } from "./icons/FacebookIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border hover:bg-accent/50 transition-colors border-accent px-1 py-0.5 p-1 text-primary rounded-sm",
        className
      )}
      {...props}
    ></span>
  );
};

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
            , currently working at{" "}
            <Link href="">
              <Code className="inline-flex items-center gap-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/langfr-250px-Flag_of_Benin.svg.png"
                  style={{ width: 16, height: "auto" }}
                  alt="benin flag"
                />{" "}
                Codeline
              </Code>
            </Link>
          </Link>
        </p>
      </div>
      <div className="flex-2 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/43719341?v=4"
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="alexandre picture"
        />
      </div>
    </Section>
  );
};
