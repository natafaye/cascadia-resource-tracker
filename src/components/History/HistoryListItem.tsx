import ResourceIcon from "../ResourceIcon"
import type { HistoryItemGrouped } from "../../types"
import clsx from "clsx"

type Props = {
    item: HistoryItemGrouped
}
export default function HistoryListItem({ item }: Props) {
    return (
        <div className={clsx("flex gap-1 p-2 odd:bg-neutral-100", item.amount === 1 ? "text-green-700" : "text-red-700")}>
            <span className="text-3xl">
                {item.count > 0 && "+"}
                {item.count}
            </span>
            <ResourceIcon resource={item.resource} className={clsx(
                "text-4xl shrink-0"
            )} />
        </div>
    )
}