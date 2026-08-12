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
    id: "servitech",
    titleKey: "projects.servitech_title",
    descriptionKey: "projects.servitech_description",
    techStack: [
      "Next.js 16", "React", "TypeScript", "Redux Toolkit", "RTK Query",
      "Tailwind CSS", "Express", "Prisma", "PostgreSQL", "Redis", "OAuth2",
    ],
    image: "/images/servitech.png",
    liveUrl: "https://servitechcr.net",
    isFeatured: false,
    isInProduction: true,
  },
  {
    id: "copicentro",
    titleKey: "projects.copicentro_title",
    descriptionKey: "projects.copicentro_description",
    techStack: [
      "Next.js 14", "TypeScript", "Tailwind CSS", "Redux Toolkit", "i18next",
      "Node.js 20", "Express 5", "Prisma", "PostgreSQL", "Redis",
    ],
    image: "/images/copicentro.png",
    liveUrl: "https://copicentrocr.com",
    isFeatured: false,
    isInProduction: true,
  },
  {
    id: "sorteos-blue-horizon",
    titleKey: "projects.sorteos_blue_horizon_title",
    descriptionKey: "projects.sorteos_blue_horizon_description",
    techStack: [
      "Next.js 16", "React 19", "TypeScript", "Redux Toolkit", "Tailwind CSS",
      "Express 5", "Prisma 7", "PostgreSQL", "Cloudflare Workers",
    ],
    liveUrl: "https://lionsbeachhome.com",
    isFeatured: false,
    isInProduction: true,
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
        className="text-3xl sm:text-4xl font-bold text-text mb-12 text-center"
      >
        {t("projects.heading")}
        <span aria-hidden="true" className="text-accent">.</span>
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
