import { useEffect, useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { useLocale } from "../hooks/useLocale"
import { useTranslation } from "react-i18next"

interface Month {
    name: string;
    number: string;
}

export const MonthInput = ({
    onChange
}: {
    onChange: (value: string) => void
}) => {
    const [months, setMonths] = useState<Month[]>([])
    const [selected, setSelected] = useState<string | null>(null)
    const { locale } = useLocale()
    const { t } = useTranslation()

    const getLocalizedMonths = (locale: string): Month[] => {
        const months: Month[] = []
        const date = new Date()
        for (let month = 0; month < 12; month++) {
            date.setMonth(month)
            const monthName = date.toLocaleDateString(locale, { month: "long" })
            months.push({
                name: monthName.charAt(0).toUpperCase() + monthName.slice(1),
                number: month > 8 ? `${month + 1}` : `0${month + 1}`
            })
        }
        return months
    }

    useEffect(() => {
        if(locale) {
            setMonths(getLocalizedMonths(locale))
        }
    }, [locale])

    useEffect(() => {
        if(months.length > 0) {
            setSelected(months[0].number)
        }
    }, [months])

    useEffect(() => {
        if (selected && onChange) {
            onChange(selected)
        }
    }, [selected, onChange])

    return (
        <div>
            <label
                htmlFor="yearInput"
                className="mb-2 block">
                { t("home.monthLabel") }
            </label>

            <RadioGroup
                value={selected}
                onChange={setSelected}>
                <div className="space-y-2">
                    {months.map((m) => (
                        <RadioGroup.Option
                            key={m.name}
                            value={m.number}
                            className={"relative inline-flex cursor-pointer focus:outline-none"}
                        >
                            {({ checked }) => (
                                <>
                                    <div className="flex w-full items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="text-sm">
                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`text-4xl font-bold px-3 py-2 transition ${
                                                        checked ? "text-black" : "text-slate-300"
                                                    }`}
                                                >
                                                    {m.name}
                                                </RadioGroup.Label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}