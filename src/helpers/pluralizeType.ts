import { useTranslation } from "react-i18next"

export const pluralizeType = (type: string, amount: number) => {
    const { t } = useTranslation()

    const plural = t(type, { count: amount })
    return plural
}