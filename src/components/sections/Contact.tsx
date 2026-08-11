"use client";

import { useTranslation } from "react-i18next";
import SectionWrapper from "@/components/ui/SectionWrapper";

const LINKEDIN_URL = "https://www.linkedin.com/in/jason-gonzalez-garcia/";
const EMAIL = "jason.gonzalez.developer@gmail.com";
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="contact" ariaLabelledBy="contact-heading">
      <div className="max-w-lg mx-auto text-center">
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold text-text mb-4"
        >
          {t("contact.heading")}
          <span aria-hidden="true" className="text-accent">.</span>
        </h2>
        <p className="text-text-muted leading-relaxed mb-10">
          {t("contact.subtitle")}
        </p>

        {/* CTA buttons */}
        <div
          role="group"
          aria-label="Contact options"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 flex-wrap"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t("contact.linkedin_cta")}, ${t("a11y.external_link")}`}
            className="flex items-center gap-2 w-full sm:w-auto justify-center
                       px-6 py-3 rounded-full font-semibold text-sm
                       bg-accent text-bg hover:bg-accent-strong
                       transition-colors duration-200 min-h-[44px] shadow-lg shadow-accent/20"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {t("contact.linkedin_cta")}
          </a>

          <a
            href={`mailto:${EMAIL}`}
            aria-label={t("contact.email_cta")}
            className="flex items-center gap-2 w-full sm:w-auto justify-center
                       px-6 py-3 rounded-full font-semibold text-sm
                       border border-accent/30 text-accent hover:bg-accent/10
                       transition-colors duration-200 min-h-[44px]"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t("contact.email_cta")}
          </a>

          {CALENDLY_URL && (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("contact.calendly_cta")}, ${t("a11y.external_link")}`}
              className="flex items-center gap-2 w-full sm:w-auto justify-center
                         px-6 py-3 rounded-full font-semibold text-sm
                         border border-border text-text-muted hover:text-accent hover:border-accent/30
                         transition-colors duration-200 min-h-[44px]"
            >
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t("contact.calendly_cta")}
            </a>
          )}
        </div>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                        border border-success/20 bg-success/5">
          <span
            aria-hidden="true"
            className="inline-block w-2 h-2 rounded-full bg-success"
            style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
          />
          <span className="text-success text-sm font-medium">
            {t("contact.availability")}
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
}
