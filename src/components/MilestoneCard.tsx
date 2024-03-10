import { DateTime } from "luxon"
import { Milestone } from "../types"
import { useRef } from "react"
import { pluralizeType } from "../helpers/pluralizeType"

export const MilestoneCard = ({
    milestone,
    endDate
}: {
    milestone: Milestone,
    endDate: DateTime
}) => {
    const { date, type, amount } = milestone

    const ref = useRef<HTMLDivElement>(null)

    const classes = "px-5 py-10"

    return (
        <div
            className={classes}
            ref={ref}
        >
            <div className="mb-2">
                {date.toRelativeCalendar({
                    base: endDate
                })}
            </div>
            <div className="flex justify-between items-center text-lg md:text-xl font-medium">
                <div>
                    {amount.toLocaleString()} {pluralizeType(type, amount)}
                </div>
                <div className="text-neutral-400">
                    {date.toLocaleString(DateTime.DATE_FULL)}
                </div>
            </div>
        </div>
    )
}
