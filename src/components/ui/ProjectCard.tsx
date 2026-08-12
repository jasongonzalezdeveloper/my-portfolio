"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import GlassCard from "./GlassCard";
import TechBadge from "./TechBadge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { assetPath } from "@/lib/assetPath";
import type { ProjectItem } from "@/types";

interface ProjectCardProps {
  item: ProjectItem;
  featured?: boolean;
}

// ── Reusable icon components ─────────────────────────────────────
function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// ── Placeholder card (no data yet) ───────────────────────────────
function PlaceholderCard({ item }: { item: ProjectItem }) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <GlassCard className="flex flex-col h-full opacity-60">
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-accent tracking-wide">
          <span
            aria-hidden="true"
            className="inline-block w-2 h-2 rounded-full bg-accent"
            style={{ animation: reducedMotion ? "none" : "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
          />
          {t("projects.in_production")}
        </span>
      </div>
      <h3 className="text-xl font-bold text-text mb-3">
        {t(item.titleKey)}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">
        {t(item.descriptionKey)}
      </p>
      <p className="mt-6 text-xs text-text-muted italic">
        {t("projects.details_soon")}
      </p>
    </GlassCard>
  );
}

// ── Under construction card (has data + image, but not fully ready) ──
function UnderConstructionCard({ item }: { item: ProjectItem }) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <GlassCard className="flex flex-col h-full relative overflow-hidden hover:border-accent/25 transition-colors duration-300">
        {/* Under construction badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-accent tracking-wide">
            <span
              aria-hidden="true"
              className="inline-block w-2 h-2 rounded-full bg-accent"
              style={{ animation: reducedMotion ? "none" : "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
            />
            {t("projects.under_construction")}
          </span>
        </div>

        {/* Image */}
        {item.image && (
          <div className="relative w-full h-44 rounded-lg overflow-hidden mb-5">
            <Image
              src={assetPath(item.image)}
              alt={t(item.titleKey)}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            {/* Subtle overlay so the glass card edge looks clean */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 60%, color-mix(in srgb, var(--bg) 60%, transparent) 100%)" }}
            />
          </div>
        )}

        <h3 className="text-xl font-bold text-text mb-2">
          {t(item.titleKey)}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
          {t(item.descriptionKey)}
        </p>

        {/* Tech badges */}
        {item.techStack.length > 0 && (
          <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-2 mb-5">
            {item.techStack.map((tech) => (
              <li key={tech}>
                <TechBadge label={tech} />
              </li>
            ))}
          </ul>
        )}

        {/* Live link — visible but clearly marked as in-progress */}
        {item.liveUrl && (
          <a
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(item.titleKey)} — ${t("a11y.external_link")}`}
            className="flex items-center gap-2 self-start px-4 py-2 rounded-full text-xs font-semibold
                       border border-accent/25 text-accent hover:bg-accent/10
                       transition-colors duration-200 min-h-[44px]"
          >
            <ExternalLinkIcon />
            {t("projects.live_demo")}
          </a>
        )}
      </GlassCard>
    </motion.div>
  );
}

// ── Featured card ────────────────────────────────────────────────
function FeaturedCard({ item }: { item: ProjectItem }) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const title = t(item.titleKey);

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <GlassCard glow className="relative overflow-hidden">
        <span
          aria-label={t("a11y.featured_badge")}
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold
                     bg-accent/15 text-accent border border-accent/20 tracking-wide"
        >
          ★ {t("projects.featured_label")}
        </span>

        {/* Header: image if provided, SVG decoration as fallback */}
        {item.image ? (
          <div className="relative w-full h-52 rounded-lg mb-6 overflow-hidden">
            <Image
              src={assetPath(item.image)}
              alt={title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 55%, color-mix(in srgb, var(--bg) 65%, transparent) 100%)" }}
            />
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="w-full h-32 rounded-lg mb-6 overflow-hidden relative border border-accent/12"
            style={{
              background: "color-mix(in srgb, var(--accent) 8%, transparent)",
            }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 128" fill="none">
              <line x1="40" y1="64" x2="160" y2="64" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="160" y1="64" x2="160" y2="32" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="160" y1="32" x2="280" y2="32" stroke="var(--accent)" strokeOpacity="0.2" strokeWidth="1.5" />
              <line x1="280" y1="32" x2="280" y2="96" stroke="var(--accent)" strokeOpacity="0.15" strokeWidth="1.5" />
              <line x1="280" y1="96" x2="360" y2="96" stroke="var(--accent)" strokeOpacity="0.15" strokeWidth="1.5" />
              <circle cx="160" cy="64" r="3" fill="var(--accent)" fillOpacity="0.35" />
              <circle cx="160" cy="32" r="3" fill="var(--accent)" fillOpacity="0.35" />
              <circle cx="280" cy="32" r="3" fill="var(--accent)" fillOpacity="0.35" />
              <circle cx="280" cy="96" r="3" fill="var(--accent)" fillOpacity="0.3" />
              <text x="180" y="70" fill="var(--accent)" fillOpacity="0.4" fontSize="11" fontFamily="monospace">{title}</text>
              <text x="182" y="85" fill="var(--text-muted)" fillOpacity="0.5" fontSize="9" fontFamily="monospace">v1.0.0</text>
            </svg>
          </div>
        )}

        <h3 className="text-2xl font-bold text-text mb-3">{title}</h3>
        <p className="text-text-muted leading-relaxed mb-6">{t(item.descriptionKey)}</p>

        <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-2 mb-6">
          {item.techStack.map((tech) => (
            <li key={tech}><TechBadge label={tech} variant="accent" /></li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.live_demo")} — ${title} — ${t("a11y.external_link")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         bg-accent text-bg hover:bg-accent-strong transition-colors duration-200 min-h-[44px]"
            >
              <ExternalLinkIcon />
              {t("projects.live_demo")}
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.view_code")} — ${title} — ${t("a11y.external_link")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         border border-accent/30 text-accent hover:bg-accent/10
                         transition-colors duration-200 min-h-[44px]"
            >
              <GitHubIcon />
              {t("projects.view_code")}
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ── Production card (live, complete) ────────────────────────────
function ProductionCard({ item }: { item: ProjectItem }) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <GlassCard className="flex flex-col h-full hover:border-accent/25 transition-colors duration-300">
        {/* In Production badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-success tracking-wide">
            <span
              aria-hidden="true"
              className="inline-block w-2 h-2 rounded-full bg-success"
              style={{ animation: reducedMotion ? "none" : "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
            />
            {t("projects.in_production")}
          </span>
        </div>

        {/* Image */}
        {item.image && (
          <div className="relative w-full h-44 rounded-lg overflow-hidden mb-5">
            <Image
              src={assetPath(item.image)}
              alt={t(item.titleKey)}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 60%, color-mix(in srgb, var(--bg) 50%, transparent) 100%)" }}
            />
          </div>
        )}

        <h3 className="text-xl font-bold text-text mb-2">
          {t(item.titleKey)}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
          {t(item.descriptionKey)}
        </p>

        {item.techStack.length > 0 && (
          <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-2 mb-5">
            {item.techStack.map((tech) => (
              <li key={tech}><TechBadge label={tech} variant="accent" /></li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-3">
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.live_demo")} — ${t(item.titleKey)} — ${t("a11y.external_link")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         bg-accent text-bg hover:bg-accent-strong transition-colors duration-200 min-h-[44px]"
            >
              <ExternalLinkIcon />
              {t("projects.live_demo")}
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.view_code")} — ${t(item.titleKey)} — ${t("a11y.external_link")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         border border-accent/30 text-accent hover:bg-accent/10
                         transition-colors duration-200 min-h-[44px]"
            >
              <GitHubIcon />
              {t("projects.view_code")}
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ── Proof of concept card ────────────────────────────────────────
function PoCCard({ item }: { item: ProjectItem }) {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <GlassCard className="flex flex-col h-full hover:border-accent/25 transition-colors duration-300">
        {/* PoC badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-accent tracking-wide">
            <span aria-hidden="true" className="text-base leading-none">⚗</span>
            {t("projects.poc_label")}
          </span>
        </div>

        {/* Image */}
        {item.image && (
          <div className="relative w-full h-44 rounded-lg overflow-hidden mb-5">
            <Image
              src={assetPath(item.image)}
              alt={t(item.titleKey)}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 60%, color-mix(in srgb, var(--bg) 50%, transparent) 100%)" }}
            />
          </div>
        )}

        <h3 className="text-xl font-bold text-text mb-2">
          {t(item.titleKey)}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
          {t(item.descriptionKey)}
        </p>

        {item.techStack.length > 0 && (
          <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-2 mb-5">
            {item.techStack.map((tech) => (
              <li key={tech}><TechBadge label={tech} /></li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-3">
          {item.liveUrl && (
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.live_demo")} — ${t(item.titleKey)} — ${t("a11y.external_link")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         bg-accent text-bg hover:bg-accent-strong transition-colors duration-200 min-h-[44px]"
            >
              <ExternalLinkIcon />
              {t("projects.live_demo")}
            </a>
          )}
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("projects.view_code")} — ${t(item.titleKey)} — ${t("a11y.external_link")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold
                         border border-accent/30 text-accent hover:bg-accent/10
                         transition-colors duration-200 min-h-[44px]"
            >
              <GitHubIcon />
              {t("projects.view_code")}
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

// ── Main export ──────────────────────────────────────────────────
export default function ProjectCard({ item, featured = false }: ProjectCardProps) {
  if (item.isPlaceholder) return <PlaceholderCard item={item} />;
  if (item.isUnderConstruction) return <UnderConstructionCard item={item} />;
  if (item.isInProduction) return <ProductionCard item={item} />;
  if (item.isPoc) return <PoCCard item={item} />;
  if (featured) return <FeaturedCard item={item} />;
  return null;
}
