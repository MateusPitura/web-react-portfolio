import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslation from "./locales/pt.json";
import enTranslation from "./locales/en.json";
import { useGlobalStore } from "./store/globalStore";

i18next.use(initReactI18next).init({
  lng: useGlobalStore.getState().language,
  fallbackLng: "en",
  resources: {
    pt: {
      translation: ptTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
