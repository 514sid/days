import { DateTime } from "luxon"
import { Milestone } from "../types"
import { MilestoneCard } from "./MilestoneCard"

export const ClosestMilestoneCard = ({
    milestone,
    endDate,
}: {
    milestone: Milestone
    endDate: DateTime
}) => {

    return (
        <div className="my-10">
            <div
                className="text-xl font-bold px-5"
            >
                Next milestone
            </div>
            <MilestoneCard
                endDate={endDate}
                milestone={milestone}
            />
        </div>
        
    )
}
