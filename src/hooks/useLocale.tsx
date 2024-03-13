import React from "react"
import { LocaleContext, LocaleContextType } from "../providers/LocaleProvider"

export const useLocale = () => {
    const localeContext = React.useContext(LocaleContext)

    if (!localeContext) {
        throw new Error("LocaleContext is not available. Make sure you have wrapped your component tree with LocaleProvider.")
    }

    return localeContext as LocaleContextType
}