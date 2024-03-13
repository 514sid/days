import { DurationLikeObject } from "luxon"
import { pluralizeType } from "../helpers/pluralizeType"

export const DiffCard = ({
    amount,
    type,
}: {
    amount: number
    type: keyof DurationLikeObject
}) => {
    if (amount < 1) {
        return null
    }

    return (
        <div className="px-2 py-1 text-xl md:text-2xl font-medium flex w-full gap-2">
            <span className="font-bold">{amount.toLocaleString()}</span> <span className="text-neutral-400">{pluralizeType(type, amount)}</span>
        </div>
    )
}
