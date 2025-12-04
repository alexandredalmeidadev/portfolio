import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { NextJsLogo } from "./icons/NextjsLogo";
import { Code } from "./Code";
import { CSharpLogo } from "./icons/CSharpLogo";
import { AiLogo } from "./icons/AiLogo";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
          className="basis-1/3"
          url="https://facebook.com/818060218057710"
          name="@alexandre"
          image="https://avatars.githubusercontent.com/u/43719341?v=4"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/1028px-Logo_de_Facebook.png"
          description="5'000"
        />
        <ContactCard
          className="basis-1/3"
          url="https://www.linkedin.com/in/alexandre-valery-dalmeida/"
          name="@alexandre"
          image="https://avatars.githubusercontent.com/u/43719341?v=4"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="1'000"
        />
        <ContactCard
          className="basis-1/3"
          name="alexandrepvdalmeida@gmail.com"
          image="https://cdn2.downdetector.com/static/uploads/logo/gmail_logo_2Cns2We.jpeg"
          mediumImage="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
          description="Email me for any inquiries."
          url="mailto:alexandrepvdalmeida@gmail.com"
        />
      </div>
    </Section>
  );
};
