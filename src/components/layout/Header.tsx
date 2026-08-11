"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ColorblindToggle from "./ColorblindToggle";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { assetPath } from "@/lib/assetPath";

const CV_URL = assetPath("/cv/Jason_Gonzalez_Garcia_Frontend_Developer_Resume.pdf");

const NAV_LINKS = [
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.experience", href: "#experience" },
  { labelKey: "nav.skills", href: "#skills" },
  { labelKey: "nav.services", href: "#services" },
  { labelKey: "nav.projects", href: "#projects" },
  { labelKey: "nav.learning", href: "#learning" },
  { labelKey: "nav.contact", href: "#contact" },
] as const;

type NavLabelKey = (typeof NAV_LINKS)[number]["labelKey"];

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scroll opacity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Restore focus to hamburger when menu closes
  const handleClose = () => {
    setMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-accent/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#main-content"
          aria-label="Jason González, back to top"
          className="text-accent font-mono font-bold text-xl tracking-tight
                     hover:text-accent-strong transition-colors duration-200
                     relative group"
        >
          <span className="relative z-10">JG</span>
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
          />
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul role="list" className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`text-sm font-medium transition-colors duration-200 relative group ${
                      isActive
                        ? "text-accent"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {t(link.labelKey as NavLabelKey)}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <a
            href={CV_URL}
            download
            aria-label={t("nav.cv_download")}
            title={t("nav.cv_download")}
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border
                       border-border text-text-muted transition-colors duration-200
                       hover:text-accent hover:border-accent/30 min-h-[44px] min-w-[44px]"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <ThemeToggle />
          <ColorblindToggle />
          <LanguageSwitcher />

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(true)}
            aria-label={t("a11y.open_menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-dialog"
            className="md:hidden p-2 rounded-full border border-border text-text-muted
                       hover:text-accent hover:border-accent/30 transition-colors
                       min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2 5h16M2 10h16M2 15h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={menuOpen}
        onClose={handleClose}
        links={NAV_LINKS as unknown as { labelKey: string; href: string }[]}
      />
    </header>
  );
}
