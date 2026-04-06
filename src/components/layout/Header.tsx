"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ColorblindToggle from "./ColorblindToggle";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { labelKey: "nav.about", href: "#about" },
  { labelKey: "nav.experience", href: "#experience" },
  { labelKey: "nav.skills", href: "#skills" },
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
          ? "glass border-b border-[#00d4ff]/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#main-content"
          aria-label="Jason González, back to top"
          className="text-[#00d4ff] font-bold text-xl tracking-tight
                     hover:text-white transition-colors duration-200
                     relative group"
        >
          <span className="relative z-10">JG</span>
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all duration-300 group-hover:w-full"
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
                        ? "text-[#00d4ff]"
                        : "text-[#7a8ba8] hover:text-[#e8f0fe]"
                    }`}
                  >
                    {t(link.labelKey as NavLabelKey)}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px bg-[#00d4ff] transition-all duration-300 ${
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
          <ColorblindToggle />
          <LanguageSwitcher />

          {/* Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(true)}
            aria-label={t("a11y.open_menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-dialog"
            className="md:hidden p-2 rounded-full border border-white/10 text-[#7a8ba8]
                       hover:text-[#00d4ff] hover:border-[#00d4ff]/30 transition-colors
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
