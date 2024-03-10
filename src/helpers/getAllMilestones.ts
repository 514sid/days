import { DateTime } from "luxon"
import {
    getSecondMilestones,
    getYearMilestones,
    getDayMilestones,
    getMonthMilestones,
} from "../helpers"
import { Milestone } from "../types"
import { getHoursMilestones } from "./getHoursMilestones"

export const getAllMilestones = (startDate: DateTime) => {
    const milestones: Milestone[] = [
        ...getYearMilestones(startDate),
        ...getMonthMilestones(startDate),
        ...getHoursMilestones(startDate),
        ...getDayMilestones(startDate),
        ...getSecondMilestones(startDate),
    ]

    milestones.sort((a, b) => a.date.toMillis() - b.date.toMillis())

    return milestones
}
