"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "@/locales/en/translation.json";
import esTranslation from "@/locales/es/translation.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
