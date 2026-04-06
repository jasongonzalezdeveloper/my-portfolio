"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import type { SkillCategory } from "@/types";

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    labelKey: "skills.frontend",
    skills: [
      "React", "Next.js", "Angular", "Backbase", "TypeScript", "JavaScript (ES6+)",
      "Tailwind CSS", "SCSS", "Redux", "Zustand", "Framer Motion",
      "i18next", "WCAG 2.1 AA",
    ],
  },
  {
    id: "backend",
    labelKey: "skills.backend",
    skills: [
      "Node.js", "Java (Spring Boot)", "REST APIs", "OAuth 2.0",
      "PostgreSQL", "MySQL", "SQL Server",
    ],
  },
  {
    id: "devops",
    labelKey: "skills.devops",
    skills: [
      "Git", "GitHub Actions", "Azure DevOps", "Docker",
      "AWS S3", "AWS CloudFront",
    ],
  },
  {
    id: "testing",
    labelKey: "skills.testing",
    skills: ["Jest", "Cypress", "Selenium"],
  },
  {
    id: "tools",
    labelKey: "skills.tools",
    skills: ["Figma", "VS Code", "GitHub Copilot", "Claude AI", "Agile / Scrum"],
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="skills" ariaLabelledBy="skills-heading">
      <h2
        id="skills-heading"
        className="text-3xl sm:text-4xl font-bold text-[#e8f0fe] mb-12 text-center"
      >
        {t("skills.heading")}
        <span aria-hidden="true" className="text-[#00d4ff]">.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <GlassCard key={category.id} className="hover:border-[#00d4ff]/20 transition-colors duration-300">
            <h3 className="text-[#00d4ff] text-xs font-semibold tracking-widest uppercase mb-4">
              {t(category.labelKey as Parameters<typeof t>[0])}
            </h3>
            <ul role="list" className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <TechBadge label={skill} />
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
