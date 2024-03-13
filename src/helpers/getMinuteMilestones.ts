import { DateTime } from "luxon"
import { getMilestones } from "./getMilestones"
import { Milestone } from "../types"

function generateMilestones(n: number) {
    const milestones = []
    for (let i = 3; i < n; i++) {
        milestones.push(Math.pow(10, i))
    }
    return milestones
}

export const getMinuteMilestones = (startTimestamp: DateTime): Milestone[] => {
    const milestones = getMilestones(
        startTimestamp,
        "minute",
        generateMilestones(8)
    )

    return milestones
}
