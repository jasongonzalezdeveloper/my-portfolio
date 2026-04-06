"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import type { ProjectItem } from "@/types";

const PROJECTS: ProjectItem[] = [
  {
    id: "math-jenga",
    titleKey: "projects.math_jenga_title",
    descriptionKey: "projects.math_jenga_description",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "i18next"],
    image: "/images/math-jenga.png",
    liveUrl: "https://jasongonzalezdeveloper.github.io/math_jenga/config",
    githubUrl: "https://github.com/jasongonzalezdeveloper/math_jenga",
    isFeatured: true,
  },
  {
    id: "therapp",
    titleKey: "projects.therapp_title",
    descriptionKey: "projects.therapp_description",
    techStack: ["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS"],
    image: "/images/therapp.png",
    liveUrl: "https://app.therapp.health/",
    isFeatured: false,
    isInProduction: true,
  },
  {
    id: "servitech",
    titleKey: "projects.servitech_title",
    descriptionKey: "projects.servitech_description",
    techStack: [
      "Next.js", "React", "TypeScript", "Redux Toolkit", "RTK Query",
      "Zod", "Tailwind CSS", "Express.js", "Prisma", "PostgreSQL",
      "Redis", "n8n", "Groq AI",
    ],
    image: "/images/servitech.png",
    isFeatured: false,
    isUnderConstruction: true,
  },
  {
    id: "negozia",
    titleKey: "projects.negozia_title",
    descriptionKey: "projects.negozia_description",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "i18next"],
    liveUrl: "https://jasongonzalezdeveloper.github.io/negozia360-poc/sale/",
    githubUrl: "https://github.com/jasongonzalezdeveloper/negozia360-poc",
    isFeatured: false,
    isPoc: true,
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const featured = PROJECTS.find((p) => p.isFeatured);
  const rest = PROJECTS.filter((p) => !p.isFeatured);

  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <h2
        id="projects-heading"
        className="text-3xl sm:text-4xl font-bold text-[#e8f0fe] mb-12 text-center"
      >
        {t("projects.heading")}
        <span aria-hidden="true" className="text-[#00d4ff]">.</span>
      </h2>

      <div className="space-y-6">
        {featured && (
          <div>
            <ProjectCard item={featured} featured />
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rest.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
