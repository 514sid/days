import { DateTime } from "luxon"
import { DiffCard } from "./DiffCard"
import { DurationUnit } from "../enums/DurationUnit"
import { useDateTimeDiff } from "../hooks/useDateTimeDiff"
import { getLocaleDate } from "../helpers/getLocaleDate"

export const DiffSection = ({ startDate, endDate }: { startDate: DateTime, endDate: DateTime }) => {

    const dateTimeDiff = useDateTimeDiff(startDate, endDate)
    
    const renderDiffCards = () => {
        const diffs = [
            { amount: dateTimeDiff.years, type: DurationUnit.Years },
            { amount: dateTimeDiff.months, type: DurationUnit.Months },
            { amount: dateTimeDiff.weeks, type: DurationUnit.Weeks },
            { amount: dateTimeDiff.days, type: DurationUnit.Days },
            { amount: dateTimeDiff.hours, type: DurationUnit.Hours },
            { amount: dateTimeDiff.minutes, type: DurationUnit.Minutes },
            { amount: dateTimeDiff.seconds, type: DurationUnit.Seconds }
        ]

        return diffs.map(({ amount, type }) => (
            <DiffCard
                key={type}
                amount={amount}
                type={type} />
        ))
    }

    return (
        <div className="sticky top-0 px-5">
            <div className="py-10 text-3xl font-bold">
                {getLocaleDate(startDate)}
            </div>
            <div className="flex flex-col gap-2">
                {renderDiffCards()}
            </div>
        </div>
    )
}
