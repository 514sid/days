import { useParams } from "react-router-dom"
import { parseDate } from "../helpers"

export const useStartDate = () => {
    const { fromDate } = useParams<{ fromDate?: string }>()
    return parseDate(fromDate || "")
}
