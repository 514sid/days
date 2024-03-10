import { DateTime, DurationLikeObject } from "luxon"
import { Milestone } from "../types"

export const getMilestones = (
    startTimestamp: DateTime,
    unit: keyof DurationLikeObject,
    milestoneAmounts: number[]
): Milestone[] => {
    const calculateNextMilestoneDate = (
        startTimestamp: DateTime,
        step: number
    ): Milestone | null => {
        const nextDate = startTimestamp.plus({ [unit]: step })
        
        if (!nextDate.isValid) {
            return null
        }

        return { date: nextDate, type: unit, amount: step }
    }

    const milestoneDates: Milestone[] = milestoneAmounts
        .map((amount) => calculateNextMilestoneDate(startTimestamp, amount))
        .filter((date): date is Milestone => date !== null)

    return milestoneDates
}
