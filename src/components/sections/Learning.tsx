"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import LearningCard from "@/components/ui/LearningCard";
import type { LearningItem } from "@/types";

const LEARNING_ITEMS: LearningItem[] = [
  {
    id: "salesforce",
    titleKey: "learning.salesforce_title",
    descriptionKey: "learning.salesforce_description",
    icon: "☁️",
  },
  {
    id: "ai-agents",
    titleKey: "learning.ai_agents_title",
    descriptionKey: "learning.ai_agents_description",
    icon: "🤖",
  },
  {
    id: "n8n",
    titleKey: "learning.n8n_title",
    descriptionKey: "learning.n8n_description",
    icon: "⚙️",
  },
  {
    id: "redis",
    titleKey: "learning.redis_title",
    descriptionKey: "learning.redis_description",
    icon: "🗄️",
  },
  {
    id: "nodejs",
    titleKey: "learning.nodejs_title",
    descriptionKey: "learning.nodejs_description",
    icon: "🟢",
  },
];

export default function Learning() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="learning" ariaLabelledBy="learning-heading">
      <h2
        id="learning-heading"
        className="text-3xl sm:text-4xl font-bold text-text mb-4 text-center"
      >
        {t("learning.heading")}
        <span aria-hidden="true" className="text-accent">.</span>
      </h2>
      <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">
        {t("learning.subtitle")}
      </p>

      {/* Mobile: horizontal scroll; Desktop: grid */}
      <div
        role="region"
        aria-label={t("learning.heading")}
        tabIndex={0}
        className="flex gap-4 overflow-x-auto pb-4 scroll-snap-x
                   sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:pb-0
                   lg:grid-cols-5"
      >
        {LEARNING_ITEMS.map((item, index) => (
          <LearningCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
