import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslation from "./locales/pt.json"
import enTranslation from "./locales/en.json"

i18next
    .use(initReactI18next)
    .init({
        lng: 'pt',
        fallbackLng: 'pt',
        resources: {
            pt: {
                translation: ptTranslation
            },
            en: {
                translation: enTranslation
            }
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;