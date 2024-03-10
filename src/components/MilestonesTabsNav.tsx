import * as Tabs from "@radix-ui/react-tabs"

type TabTriggerProps = {
    value: string
    children: React.ReactNode
    count?: number
}

const TabTrigger = ({ value, children, count }: TabTriggerProps) => {
    return (
        <Tabs.Trigger
            className="h-[45px] flex-1 rounded-xl flex items-center justify-center gap-2 text-[15px] leading-none select-none data-[state=active]:focus:relative data-[state=active]:bg-white outline-none cursor-default"
            value={value}
        >
            <span>{ children }</span> <span className="font-bold">{ count }</span>
        </Tabs.Trigger>
    )
}

export const MilestonesTabsNav = ({
    upcomingCount,
    reachedCount
}: {
    upcomingCount: number
    reachedCount: number
}) => {
    return (
        <div className=" fixed md:sticky bottom-0 md:top-0 z-10 w-full p-1 md:p-2">
            <Tabs.List className="bg-slate-100/70 shrink-0 flex p-1 rounded-xl backdrop-blur-sm">
                <TabTrigger
                    value="upcoming"
                    count={upcomingCount}>Upcoming</TabTrigger>
                <TabTrigger
                    value="reached"
                    count={reachedCount}>Reached</TabTrigger>
            </Tabs.List>
        </div>
    )
}
