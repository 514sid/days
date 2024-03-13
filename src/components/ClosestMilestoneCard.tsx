import { DateTime } from "luxon"
import { Milestone } from "../types"
import { MilestoneCard } from "./MilestoneCard"
import { useTranslation } from "react-i18next"

export const ClosestMilestoneCard = ({
    milestone,
    endDate,
}: {
    milestone: Milestone
    endDate: DateTime
}) => {
    const { t } = useTranslation()

    return (
        <div className="my-10">
            <div
                className="text-xl font-bold px-5"
            >
                { t("nextMilestone") }
            </div>
            <MilestoneCard
                endDate={endDate}
                milestone={milestone}
            />
        </div>
        
    )
}
