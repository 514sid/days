import { DateTime, DurationLikeObject } from "luxon"

export type Milestone = {
    date: DateTime
    amount: number
    type: keyof DurationLikeObject
}

export type Diff = {
    years: number
    months: number
    weeks: number
    days: number
    hours: number
    minutes: number
    seconds: number
}