import { useParams } from "react-router-dom"
import { parseDate } from "../helpers"

export const useEndDate = () => {
    const { toDate } = useParams<{ toDate?: string }>()

    return toDate ? parseDate(toDate) : null
}
