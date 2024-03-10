import { DateTime } from "luxon"
import { Milestone } from "../types"
import { MilestoneCard } from "./MilestoneCard"
import * as Tabs from "@radix-ui/react-tabs"
import { MilestonesTabsNav } from "./MilestonesTabsNav"
import { ScrollToTop } from "./ScrollToTop"
import { ClosestMilestoneCard } from "./ClosestMilestoneCard"

interface TabContentProps {
    value: string
    milestones: Milestone[]
    nextMilestone?: Milestone
    endDate: DateTime
}

const TabContent = ({ value, milestones, nextMilestone, endDate }: TabContentProps) => {
    return (
        <Tabs.Content
            className="grow bg-white outline-none"
            value={value}
        >
            <div className="flex flex-col gap-2 w-full divide-y">
                {nextMilestone && (
                    <ClosestMilestoneCard
                        milestone={nextMilestone}
                        endDate={endDate}
                    />
                )}
                {milestones.map((milestone, index) => (
                    <MilestoneCard
                        key={index}
                        milestone={milestone}
                        endDate={endDate}
                    />
                ))}
            </div>
        </Tabs.Content>
    )
}

export const MilestonesSection = ({
    milestoneDates,
    endDate,
}: {
    milestoneDates: Milestone[];
    endDate: DateTime;
}) => {
    const nextMilestoneIndex = milestoneDates.findIndex(
        (milestone) => milestone.date.startOf("day") >= endDate.startOf("day")
    )

    const reachedMilestones = milestoneDates.filter(
        (_milestone, index) => index < nextMilestoneIndex
    ).reverse()
    const nextMilestone = milestoneDates.find(
        (_milestone, index) => index === nextMilestoneIndex
    )
    const upcomingMilestones = milestoneDates.filter(
        (_milestone, index) => index > nextMilestoneIndex
    )

    return (
        <Tabs.Root
            className="flex flex-col relative w-full"
            defaultValue="upcoming">
            <ScrollToTop />
            <MilestonesTabsNav
                upcomingCount={nextMilestone ? upcomingMilestones.length + 1 : upcomingMilestones.length}
                reachedCount={reachedMilestones.length}
            />
            <TabContent
                nextMilestone={nextMilestone}
                milestones={upcomingMilestones}
                endDate={endDate}
                value="upcoming"
            />
            <TabContent
                milestones={reachedMilestones}
                endDate={endDate}
                value="reached"
            />
        </Tabs.Root>
    )
}
