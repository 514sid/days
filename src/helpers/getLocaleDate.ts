import { DateTime } from "luxon"
import { useLocale } from "../hooks/useLocale"

export const getLocaleDate = (date: DateTime) => {
    const { locale } = useLocale()

    return date.toLocaleString(DateTime.DATE_FULL, { locale: locale }).replace(/\s*г\./, "")
}
