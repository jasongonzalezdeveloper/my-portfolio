"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import type { ServiceItem } from "@/types";

const SERVICES: ServiceItem[] = [
  {
    id: "frontend",
    titleKey: "services.frontend_title",
    descriptionKey: "services.frontend_description",
    icon: "🖥️",
  },
  {
    id: "fullstack",
    titleKey: "services.fullstack_title",
    descriptionKey: "services.fullstack_description",
    icon: "🧩",
  },
  {
    id: "dashboards",
    titleKey: "services.dashboards_title",
    descriptionKey: "services.dashboards_description",
    icon: "📊",
  },
  {
    id: "ai",
    titleKey: "services.ai_title",
    descriptionKey: "services.ai_description",
    icon: "🤖",
  },
  {
    id: "a11y",
    titleKey: "services.a11y_title",
    descriptionKey: "services.a11y_description",
    icon: "♿",
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="services" ariaLabelledBy="services-heading">
      <h2
        id="services-heading"
        className="text-3xl sm:text-4xl font-bold text-text mb-4 text-center"
      >
        {t("services.heading")}
        <span aria-hidden="true" className="text-accent">.</span>
      </h2>
      <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">
        {t("services.subtitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {SERVICES.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>

      <div className="text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
                     bg-accent text-bg hover:bg-accent-strong transition-colors duration-200 min-h-[44px]"
        >
          {t("services.cta")}
        </a>
      </div>
    </SectionWrapper>
  );
}
