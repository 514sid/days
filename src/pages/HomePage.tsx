import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DateTime } from "luxon"
import { YearInput } from "../components/YearInput"
import { useTranslation } from "react-i18next"
import { MonthInput } from "../components/MonthInput"
import { DayInput } from "../components/DayInput"

export const HomePage = () => {
    const navigate = useNavigate()
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState(new Date().getFullYear().toString())
    const { t } = useTranslation()

    const redirectToDate = () => {
        const parsedDate = DateTime.fromFormat(`${day}/${month}/${year}`, "d/M/yyyy")
        
        if (parsedDate.isValid) {
            const formattedDate = parsedDate.toFormat("ddMMyyyy")
            navigate(`/${formattedDate}`)
        }
    }

    return (
        <div className="h-screen w-full flex">
            <div className="w-full p-6 md:p-20 max-w-screen-xl flex flex-col gap-5 select-none">
                <YearInput
                    year={year}
                    onChange={setYear}
                />
                <MonthInput 
                    onChange={setMonth}
                />
                <DayInput
                    year={year}
                    month={month}
                    onChange={setDay}
                />
                <div className="w-[300px]">
                    <button
                        onClick={redirectToDate}
                        className="w-full h-12 bg-black hover:bg-black/80 text-white rounded-lg">
                        { t("Continue") }
                    </button>
                </div>
            </div>
        </div>
    )
}
