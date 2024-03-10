import { DateTime } from "luxon"
import { getMilestones } from "./getMilestones"
import { Milestone } from "../types"

function generateMilestones(n: number) {
    const milestones = []
    for (let i = 1; i < n; i++) {
        milestones.push(Math.pow(10, i))
    }
    return milestones
}

export const getDayMilestones = (startTimestamp: DateTime): Milestone[] => {
    const milestones = getMilestones(
        startTimestamp,
        "day",
        generateMilestones(7)
    )

    return milestones
}
