import { DateTime } from "luxon"
import { getMilestones } from "./getMilestones"
import { Milestone } from "../types"

const generateMilestones = () => {
    const milestones = []

    for (let i = 1; i <= 100; i++) {
        milestones.push(i)
    }

    for (let i = 105; i <= 3000; i += 5) {
        milestones.push(i)
    }

    return milestones
}

export const getYearMilestones = (startTimestamp: DateTime): Milestone[] => {
    const milestones = getMilestones(
        startTimestamp,
        "year",
        generateMilestones()
    )

    return milestones
}
