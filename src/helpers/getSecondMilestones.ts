import { DateTime } from "luxon"
import { getMilestones } from "./getMilestones"
import { Milestone } from "../types"

function generateMilestones(n: number) {
    const milestones = []
    for (let i = 5; i < n; i++) {
        milestones.push(Math.pow(10, i))
    }
    return milestones
}

export const getSecondMilestones = (startTimestamp: DateTime): Milestone[] => {
    const milestones = getMilestones(
        startTimestamp,
        "second",
        generateMilestones(12)
    )

    return milestones
}
