import { useState, useEffect } from "react"
import { DateTime } from "luxon"

export const useCurrentDate = () => {
    const [currentDateTime, setCurrentDateTime] = useState<DateTime>(
        DateTime.now()
    )

    useEffect(() => {
        const updateDateTime = () => setCurrentDateTime(DateTime.now())

        const intervalId = setInterval(updateDateTime, 30000)

        return () => clearInterval(intervalId)
    }, [])

    return currentDateTime
}
