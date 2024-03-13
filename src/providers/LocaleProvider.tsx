import { useState, createContext, ReactNode, useEffect } from "react"
import { getBrowserLocales } from "../helpers/getBrowserLocale"
import i18next from "i18next"
import { LanguageCode } from "../types"

const availableTranslations: LanguageCode[] = [
    "en",
    "de",
    "es",
    "it",
    "pt",
    "tr",
    "ru"
]

export type LocaleContextType = {
    locale: string;
    changeLocale: (newLocale: LanguageCode) => void;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

type LocaleProviderProps = {
    children: ReactNode;
}

const getLocale = (): LanguageCode => {
    const browserLocales = getBrowserLocales({
        languageCodeOnly: true
    })

    const storedLocale = localStorage.getItem("locale")

    let defaultLocale = "en"

    if (browserLocales.length > 0 && availableTranslations.includes(browserLocales[0] as LanguageCode) && browserLocales[0] !== storedLocale) {
        defaultLocale = browserLocales[0]
        console.log(`Defaulting to "${defaultLocale}" based on the browser locale.`)
    }

    if (storedLocale && availableTranslations.includes(storedLocale as LanguageCode)) {
        defaultLocale = storedLocale
        console.log(`Locale "${storedLocale}" loaded from Local Storage.`)
    } else if (storedLocale && !availableTranslations.includes(storedLocale as LanguageCode)) {
        console.log(`Stored locale "${storedLocale}" is not available. Defaulting to "${defaultLocale}".`)
    } else if (!storedLocale) {
        console.log(`No stored locale found. Defaulting to "${defaultLocale}".`)
    }

    return defaultLocale as LanguageCode
}

export const LocaleProvider = ({ children } : LocaleProviderProps) => {
    const [locale, setLocale] = useState<LanguageCode>(getLocale())

    useEffect(() => {
        changeLanguage(locale)
    }, [locale])

    const changeLanguage = (lng: LanguageCode) => {
        i18next.changeLanguage(lng)
    }

    const changeLocale = (newLocale: LanguageCode) => {
        localStorage.setItem("locale", newLocale)
        setLocale(newLocale)
    }

    return (
        <LocaleContext.Provider value={{ locale, changeLocale }}>
            {children}
        </LocaleContext.Provider>
    )
}
