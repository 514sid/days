import { DateTime } from "luxon"
import { getMilestones } from "./getMilestones"
import { Milestone } from "../types"

function generateMilestones(n: number) {
    const milestones = []
    for (let i = 2; i < n; i++) {
        milestones.push(Math.pow(10, i))
    }
    return milestones
}

export const getHoursMilestones = (startTimestamp: DateTime): Milestone[] => {
    const milestones = getMilestones(
        startTimestamp,
        "hour",
        generateMilestones(8)
    )

    return milestones
}
