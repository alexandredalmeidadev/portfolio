import { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const SITE_URL = "https://alexandredalmeida.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = PROJECTS.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
