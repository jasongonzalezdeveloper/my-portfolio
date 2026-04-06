"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import type { ExperienceItem } from "@/types";

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "autodesk",
    company: "Autodesk",
    via: "experience.autodesk_via",
    role: "experience.autodesk_role",
    startDate: "Oct 2025",
    endDate: "Jan 2026",
    note: "experience.autodesk_note",
    bulletKeys: [
      "experience.autodesk_bullet_0",
      "experience.autodesk_bullet_1",
      "experience.autodesk_bullet_2",
      "experience.autodesk_bullet_3",
    ],
    techStack: ["React", "TypeScript", "Jest", "Cypress", "SASS", "WCAG", "Figma", "i18n"],
  },
  {
    id: "therapp",
    company: "Therapp",
    role: "experience.therapp_role",
    startDate: "Apr 2025",
    endDate: "Oct 2025",
    bulletKeys: [
      "experience.therapp_bullet_0",
      "experience.therapp_bullet_1",
      "experience.therapp_bullet_2",
    ],
    techStack: ["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Figma", "i18n"],
  },
  {
    id: "loyalty",
    company: "Loyalty Science Group",
    role: "experience.loyalty_role",
    startDate: "Feb 2021",
    endDate: "Apr 2025",
    bulletKeys: [
      "experience.loyalty_bullet_0",
      "experience.loyalty_bullet_1",
      "experience.loyalty_bullet_2",
      "experience.loyalty_bullet_3",
    ],
    techStack: ["Angular", "TypeScript", "NgRx", "RxJS", "OAuth", "SASS", "WCAG", "Figma"],
  },
  {
    id: "eprom",
    company: "Eprom",
    role: "experience.eprom_role",
    startDate: "Jan 2019",
    endDate: "Feb 2021",
    bulletKeys: [
      "experience.eprom_bullet_0",
      "experience.eprom_bullet_1",
      "experience.eprom_bullet_2",
    ],
    techStack: ["React", "Java", "Spring Boot", "Backbone.js", "REST APIs", "MySQL"],
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="experience" ariaLabelledBy="experience-heading">
      <h2
        id="experience-heading"
        className="text-3xl sm:text-4xl font-bold text-[#e8f0fe] mb-16 text-center"
      >
        {t("experience.heading")}
        <span aria-hidden="true" className="text-[#00d4ff]">.</span>
      </h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Center line — desktop only */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0
                     w-px bg-gradient-to-b from-[#00d4ff]/30 via-[#00d4ff]/15 to-transparent"
        />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
