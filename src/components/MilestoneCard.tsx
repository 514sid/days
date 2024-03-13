import { DateTime } from "luxon"
import { Milestone } from "../types"
import { useRef } from "react"
import { pluralizeType } from "../helpers/pluralizeType"
import { useLocale } from "../hooks/useLocale"
import { getLocaleDate } from "../helpers/getLocaleDate"

export const MilestoneCard = ({
    milestone,
    endDate
}: {
    milestone: Milestone,
    endDate: DateTime
}) => {
    const { date, type, amount } = milestone

    const { locale } = useLocale()

    const ref = useRef<HTMLDivElement>(null)

    const classes = "px-5 py-10"

    return (
        <div
            className={classes}
            ref={ref}
        >
            <div className="mb-2">
                {date.toRelativeCalendar({
                    base: endDate,
                    locale
                })}
            </div>
            <div className="flex justify-between items-center text-lg md:text-xl font-medium">
                <div>
                    {amount.toLocaleString()} {pluralizeType(type, amount)}
                </div>
                <div className="text-neutral-400">
                    {getLocaleDate(date)}
                </div>
            </div>
        </div>
    )
}
