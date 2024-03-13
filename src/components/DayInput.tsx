import { useEffect, useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { useTranslation } from "react-i18next"

export const DayInput = ({
    year,
    month,
    onChange
}: {
    year: string,
    month: string,
    onChange: (value: string) => void
}) => {
    const [days, setDays] = useState<number[]>([])
    const [selectedDay, setSelectedDay] = useState<string | null>(null)
    const { t } = useTranslation()

    const getDaysInMonth = (year: number, month: number): number => {
        return new Date(year, month, 0).getDate()
    }

    const generateDaysArray = (year: number, month: number): number[] => {
        const numberOfDays = getDaysInMonth(year, month)
        return Array.from({ length: numberOfDays }, (_, index) => index + 1)
    }

    useEffect(() => {
        if (year && month) {
            const numericMonth = parseInt(month)
            setDays(generateDaysArray(parseInt(year), numericMonth))
        }
    }, [year, month])

    useEffect(() => {
        if (days.length > 0) {
            setSelectedDay(days[0].toString())
        }
    }, [days])

    useEffect(() => {
        if (selectedDay && onChange) {
            onChange(selectedDay)
        }
    }, [selectedDay, onChange])

    return (
        <div>
            <label
                htmlFor="dayInput"
                className="mb-2 block">
                {t("home.dayLabel")}
            </label>

            <RadioGroup
                value={selectedDay}
                onChange={setSelectedDay}>
                <div className="space-y-2">
                    {days.map((day) => (
                        <RadioGroup.Option
                            key={day}
                            value={day.toString()}
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
                                                    {day}
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
