interface GetBrowserLocalesOptions {
    languageCodeOnly?: boolean;
}
  
export const getBrowserLocales = (options: GetBrowserLocalesOptions = {}): string[] => {
    const defaultOptions: GetBrowserLocalesOptions = {
        languageCodeOnly: false,
    }
  
    const opt: GetBrowserLocalesOptions = {
        ...defaultOptions,
        ...options,
    }
  
    const browserLocales: string[] = navigator.languages === undefined
        ? [navigator.language]
        : Array.from(navigator.languages)
  
    if (!browserLocales) {
        return ["en"]
    }
  
    return browserLocales.map(locale => {
        const trimmedLocale = locale.trim()
        return opt.languageCodeOnly
            ? trimmedLocale.split(/-|_/)[0]
            : trimmedLocale
    })
}
