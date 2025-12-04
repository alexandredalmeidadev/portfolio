import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";
import { ContactCard } from "./ContactCard";
import {
  ALargeSmall,
  Code,
  MessageCircle,
  Rss,
  StickyNote,
  Weight,
} from "lucide-react";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-stretch gap-4">
      <div className="flex-3 w-full">
        <Card className="w-full h-full p-4 flex flex-col gap-2 glass glass-hover transition-all duration-300">
          <p className="text-lg text-muted-foreground glass-text">Projets clients & personnels.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-2 w-full h-full flex flex-col gap-4">
        <Card className="flex-1 p-4 glass glass-hover transition-all duration-300">
          <p className="text-lg text-muted-foreground glass-text">Travail</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 glass glass-hover transition-all duration-300">
          <p className="text-lg text-muted-foreground glass-text">Contact</p>
          <div className="flex flex-col gap-2">
            <ContactCard
              url="https://facebook.com/818060218057710"
              name="@alexandredalmeida"
              image="https://avatars.githubusercontent.com/u/43719341?v=4"
              mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/1028px-Logo_de_Facebook.png"
              description="5'000"
            />
            <ContactCard
              url="https://www.linkedin.com/in/alexandre-valery-dalmeida/"
              name="@alexandredalmeida"
              image="https://avatars.githubusercontent.com/u/43719341?v=4"
              mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              description="1'000"
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Codeline",
    description: "Digital agency platform",
    url: "https://codeline.bj",
  },
  {
    Logo: StickyNote,
    title: "PowerNote",
    description: "Advanced note-taking app",
    url: "https://example.com",
  },
  {
    Logo: Rss,
    title: "PowerPost",
    description: "Social media management tool",
    url: "https://example.com",
  },
  {
    Logo: MessageCircle,
    title: "ChatHub",
    description: "Real-time messaging platform",
    url: "https://example.com",
  },
  {
    Logo: Weight,
    title: "FitTracker",
    description: "Fitness tracking application",
    url: "https://example.com",
  },
  {
    Logo: ALargeSmall,
    title: "AI Writer",
    description: "AI-powered content generator",
    url: "https://example.com",
  },
];

const WORKS: WorkProps[] = [
  {
    image: "/OREBTECH.PNG",
    title: "OREBTECH",
    role: "Fondateur",
    date: "2025-Présent",
    url: "",
  },
  {
    image: "/CultureWebLogo.PNG",
    title: "CultureWeb",
    role: "Développeur web",
    date: "2024-2025",
    url: "http://cultureweb.net",
    freelance: true,
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4E0BAQFu-mygojbCnw/company-logo_200_200/company-logo_200_200/0/1631312905539?e=2147483647&v=beta&t=vBGlHukxFWlAzI8P5JsW9trERiOn2G-Ajt6yD96wSFU",
    title: "SimpleIT",
    role: "Développeur web ASP.NET",
    date: "2023-2024",
    url: "https://www.simpleit.bj",
  },
];