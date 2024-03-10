import { DateTime } from "luxon"
import { Milestone } from "../types"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { pluralizeType } from "../helpers/pluralizeType"

export const MilestoneCard = ({
    milestone,
    endDate
}: {
    milestone: Milestone,
    endDate: DateTime
}) => {
    const { date, type, amount } = milestone

    const ref = useRef<HTMLDivElement>(null)

    const isInView = useInView(ref)

    const boundingRect = ref.current?.getBoundingClientRect()
    const distanceToTop = boundingRect?.top
    const distanceToBottom = boundingRect ? window.innerHeight - boundingRect.bottom : null

    const classes = "px-5 py-10"

    const translateY = distanceToTop! < distanceToBottom! ? "translateY(-50px)" : "translateY(50px)"

    return (
        <div
            className={classes}
            ref={ref}
            style={{
                transform: isInView ? "none" : translateY,
                opacity: isInView ? 1 : 0,
                transition: "all 0.1s cubic-bezier(.26,0,0,1.16) 0.1s"
            }}
        >
            <div className="mb-2">
                {date.toRelativeCalendar({
                    base: endDate
                })}
            </div>
            <div className="flex justify-between items-center text-lg md:text-xl font-medium">
                <div>
                    {amount.toLocaleString()} {pluralizeType(type, amount)}
                </div>
                <div className="text-neutral-400">
                    {date.toLocaleString(DateTime.DATE_FULL)}
                </div>
            </div>
        </div>
    )
}
