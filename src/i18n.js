import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
import translationBR from "./locales/br/translation.json";
import translationNL from "./locales/NL/translation.json";

const resources = {
  en: { translation: translationEn },
  es: { translation: translationES },
  br: { translation: translationBR },
  nl: { translation: translationNL },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
