import { useParams } from "react-router-dom"
import { DateTime } from "luxon"

export const DatePage = () => {
    const { timestamp } = useParams()

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

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-200 to-violet-300">
            <div className="text-center text-violet-700">
                <p>{formattedTimestamp}</p>
                <p className="text-4xl font-bold mt-5">
                    {daysDifference} days {hoursDifference.toFixed(0)} hours
                </p>
            </div>
        </div>
    )
}
