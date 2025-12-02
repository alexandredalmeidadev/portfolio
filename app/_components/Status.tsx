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
        <Card className="w-full h-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
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
        <Card className="flex-1 p-4">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4">
          <p className="text-lg text-muted-foreground">Contact me</p>
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
    image: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    title: "SaaS Project Alpha",
    role: "Full-Stack Developer",
    date: "2024",
    url: "https://example.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    title: "E-Commerce Platform",
    role: "Frontend Developer",
    date: "2023",
    url: "https://example.com",
    freelance: true,
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3002/3002719.png",
    title: "Mobile App",
    role: "React Native Developer",
    date: "2023",
    url: "https://example.com",
  },
];