import { DateTime } from "luxon"

export const parseDate = (date: string) => {
    const day = parseInt(date.substring(0, 2))
    const month = parseInt(date.substring(2, 4))
    const year = parseInt(date.substring(4, 8))

    const localDate = DateTime.local(year, month, day)

    return localDate.startOf("day")
}
