import { useState, useEffect } from "react"
import { DateTime, DurationObjectUnits } from "luxon"
import { Diff } from "../types"

const calculateDiff = (startDate: DateTime, endDate: DateTime): Diff => {
    const units: Exclude<keyof DurationObjectUnits, "quarters" | "milliseconds">[] = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"]
    const diff = {} as Diff
    
    units.forEach(unit => {
        diff[unit] = Math.floor(endDate.diff(startDate, [unit])[unit])
    })

    return diff
}

export const useDateTimeDiff = (
    startDate: DateTime,
    endDate: DateTime
): Diff => {
    const [diff, setDiff] = useState<Diff>(() =>
        calculateDiff(startDate, endDate)
    )

    useEffect(() => {
        setDiff(calculateDiff(startDate, endDate))
    }, [startDate, endDate])

    return diff
}
