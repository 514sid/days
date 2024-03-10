import { useInView } from "framer-motion"
import { DateTime } from "luxon"
import { useRef } from "react"

export const TodayCard = ({ endDate }: { endDate: DateTime }) => {
    const ref = useRef<HTMLDivElement>(null)

    const isInView = useInView(ref)

    const boundingRect = ref.current?.getBoundingClientRect()
    const distanceToTop = boundingRect?.top
    const distanceToBottom = boundingRect ? window.innerHeight - boundingRect.bottom : null
    const translateY = distanceToTop! < distanceToBottom! ? "translateY(-10px)" : "translateY(10px)"

    return (
        <p
            className="text-sm text-gray-500 my-5"
            ref={ref}
            style={{
                transform: isInView ? "none" : translateY,
                opacity: isInView ? 1 : 0,
                transition: "all 0.05s cubic-bezier(.26,0,0,1.16) 0.05s"
            }}
        >{endDate.toLocaleString(DateTime.DATE_FULL)}</p>
    )
}
