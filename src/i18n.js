import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationEn from "./locales/en"
import translationDe from "./locales/de"
import translationEs from "./locales/es"
import translationIt from "./locales/it"
import translationPt from "./locales/pt"
import translationTr from "./locales/tr"
import translationRu from "./locales/ru"
import ICU from "i18next-icu"

const resources = {
    en: {
        translation: translationEn
    },
    de: {
        translation: translationDe
    },
    es: {
        translation: translationEs
    },
    it: {
        translation: translationIt
    },
    pt: {
        translation: translationPt
    },
    ru: {
        translation: translationRu
    },
    tr: {
        translation: translationTr
    },
}

i18n
    .use(ICU)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false,
        }
    })


export default i18n