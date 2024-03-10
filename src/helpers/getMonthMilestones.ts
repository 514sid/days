import { DateTime } from "luxon"
import { getMilestones } from "./getMilestones"
import { Milestone } from "../types"

const generateMilestones = () => {
    const milestones = []

    for (let i = 1; i <= 11; i++) {
        milestones.push(i)
    }

    for (let i = 15; i <= 100; i += 5) {
        milestones.push(i)
    }

    for (let i = 200; i <= 1000; i += 100) {
        milestones.push(i)
    }

    for (let i = 2000; i <= 35000; i += 1000) {
        milestones.push(i)
    }

    return milestones
}

export const getMonthMilestones = (startTimestamp: DateTime): Milestone[] => {
    const milestones = getMilestones(
        startTimestamp,
        "month",
        generateMilestones()
    )

    return milestones
}
