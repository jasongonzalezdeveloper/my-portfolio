"use client";

import { useTranslation } from "react-i18next";
import GlassCard from "./GlassCard";
import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  item: ServiceItem;
}

export default function ServiceCard({ item }: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <GlassCard className="h-full flex flex-col hover:border-accent/20 transition-colors duration-300">
      <span aria-hidden="true" className="text-4xl mb-4 block">
        {item.icon}
      </span>
      <h3 className="text-text font-bold mb-2 text-lg">
        {t(item.titleKey as Parameters<typeof t>[0])}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">
        {t(item.descriptionKey as Parameters<typeof t>[0])}
      </p>
    </GlassCard>
  );
}
