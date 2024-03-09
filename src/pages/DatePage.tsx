import React from "react"
import { useParams } from "react-router-dom"
import { DateTime } from "luxon"

interface Milestone {
    date: DateTime
    reason: string
}

export const DatePage: React.FC = () => {
    const { timestamp } = useParams<{ timestamp?: string }>()

    if (!timestamp) {
        return <div>Timestamp is not provided.</div>
    }

    const parsedTimestamp = DateTime.fromMillis(parseInt(timestamp, 10) * 1000)

    const formattedTimestamp = parsedTimestamp.toLocaleString(
        DateTime.DATETIME_FULL
    )

    const currentDate = DateTime.now()

    const diff = currentDate.diff(parsedTimestamp, ["days", "hours", "minutes"])
    const { days, hours, minutes } = diff
    const daysDifference = days
    const hoursDifference = Math.floor(hours) + Math.floor(minutes / 60)

    const calculateNextMilestoneDate = (
        startTimestamp: DateTime,
        step: number,
        limit: number
    ): Milestone | null => {
        let nextDate = startTimestamp.plus({ days: step })
        while (nextDate.diff(startTimestamp, "days").days <= limit) {
            if (nextDate > currentDate) {
                return { date: nextDate, reason: `${step} days` }
            }
            nextDate = nextDate.plus({ days: step })
        }
        return null
    }

    const milestoneDayAmounts: number[] = [
        100, 1000, 5000, 10000, 50000, 100000,
    ]

    const milestoneDates: Milestone[] = milestoneDayAmounts
        .map((amount) =>
            calculateNextMilestoneDate(parsedTimestamp, amount, 100000)
        )
        .filter((date): date is Milestone => date !== null)

    const formattedMilestoneDates: string[] = milestoneDates.map(
        ({ date, reason }) =>
            `${date.toLocaleString(DateTime.DATETIME_FULL)} - ${reason}`
    )

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-200 to-violet-300">
            <div className="text-center text-violet-700">
                <p>{formattedTimestamp}</p>
                <p className="text-4xl font-bold mt-5">
                    {daysDifference} days {hoursDifference.toFixed(2)} hours
                </p>
            </div>
            <div className="text-center text-violet-700 mt-10">
                <ul>
                    {formattedMilestoneDates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
