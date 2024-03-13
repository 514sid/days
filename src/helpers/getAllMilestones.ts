import { DateTime } from "luxon"
import {
    getSecondMilestones,
    getYearMilestones,
    getDayMilestones,
    getMonthMilestones,
    getHourMilestones,
    getMinuteMilestones,
    getWeekMilestones
} from "../helpers"
import { Milestone } from "../types"

export const getAllMilestones = (startDate: DateTime) => {
    const milestones: Milestone[] = []

    const milestoneFunctions = [
        getYearMilestones,
        getMonthMilestones,
        getWeekMilestones,
        getHourMilestones,
        getMinuteMilestones,
        getDayMilestones,
        getSecondMilestones,
    ]

    milestoneFunctions.forEach(func => {
        milestones.push(...func(startDate))
    })

    const filteredMilestones = milestones.filter((a) => a.date.year < 2150)

    filteredMilestones.sort((a, b) => a.date.toMillis() - b.date.toMillis())

    return filteredMilestones
}
