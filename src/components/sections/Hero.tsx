"use client";

import { useTranslation } from "react-i18next";
import { motion, type Transition } from "framer-motion";
import TypingAnimation from "@/components/ui/TypingAnimation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { assetPath } from "@/lib/assetPath";

const LINKEDIN_URL = "https://www.linkedin.com/in/jason-gonzalez-garcia/";
const GITHUB_URL = "https://github.com/jasongonzalezdeveloper";
const CV_URL = assetPath("/cv/Jason_Gonzalez_Garcia_Frontend_Developer_Resume.pdf");

export default function Hero() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const roles = t("hero.roles", { returnObjects: true }) as unknown as string[];

  const fadeUp = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Subtle radial highlight behind content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-3xl w-full space-y-6">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-accent text-sm font-mono font-semibold tracking-[0.2em] uppercase"
        >
          {t("hero.eyebrow")}
        </motion.p>

        {/* Heading */}
        <motion.h1
          id="hero-heading"
          {...fadeUp(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-text leading-tight"
        >
          {t("hero.greeting")}
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          {...fadeUp(0.35)}
          aria-live="polite"
          aria-atomic="true"
          className="text-xl sm:text-2xl md:text-3xl font-medium text-text-muted min-h-[2.5rem]"
        >
          <TypingAnimation roles={roles} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.5)}
          role="group"
          aria-label="Contact links"
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("hero.cta_linkedin")} — ${t("a11y.external_link")}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
                       bg-accent text-bg hover:bg-accent-strong transition-colors duration-200
                       min-h-[44px] shadow-lg shadow-accent/20"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {t("hero.cta_linkedin")}
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("hero.cta_github")} — ${t("a11y.external_link")}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
                       border border-accent/30 text-accent hover:bg-accent/10
                       transition-colors duration-200 min-h-[44px]"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            {t("hero.cta_github")}
          </a>

          <a
            href={CV_URL}
            download
            aria-label={t("hero.cta_cv")}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm
                       border border-border text-text-muted hover:text-accent hover:border-accent/30
                       transition-colors duration-200 min-h-[44px]"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t("hero.cta_cv")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          {...fadeUp(0.8)}
          href="#about"
          aria-label={t("a11y.scroll_indicator")}
          className="inline-flex flex-col items-center gap-2 pt-8 text-text-muted
                     hover:text-accent transition-colors duration-200 group"
        >
          <span className="text-xs tracking-widest uppercase font-medium">
            {t("hero.scroll_down")}
          </span>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="group-hover:translate-y-1 transition-transform duration-300"
            style={{ animation: reducedMotion ? "none" : "bounceSlow 2s ease-in-out infinite" }}
          >
            <path
              d="M10 3v14M3 10l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
