import { Link, Outlet } from "react-router-dom"
import { useCurrentDate } from "../hooks/useCurrentDate"
import { useStartDate } from "../hooks/useStartDate"
import { useEndDate } from "../hooks/useEndDate"
import { Milestone } from "../types"
import { DiffSection } from "../components/DiffSection"
import { MilestonesSection } from "../components/MilestonesSection"
import { getAllMilestones } from "../helpers"
import { useTranslation } from "react-i18next"

export const DatePage = () => {
    const { t } = useTranslation()
    const startDate = useStartDate()
    const endDateParam = useEndDate()
    const currentDate = useCurrentDate()

    const endDate = endDateParam ?? currentDate
    const milestoneDates: Milestone[] = getAllMilestones(startDate)

    return (
        <div className="w-full min-h-screen max-w-screen-lg mx-auto grid md:grid-cols-3">
            <div className="col-span-1 relative">
                <div className="p-5">
                    <Link
                        to="/"
                        className="text-neutral-400"
                    >
                        { t("homeLink") }
                    </Link>
                </div>
                <DiffSection
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <div className="col-span-2">
                <MilestonesSection
                    milestoneDates={milestoneDates}
                    endDate={endDate} />
            </div>
            <Outlet />
        </div>
    )
}