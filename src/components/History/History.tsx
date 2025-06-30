import { FaHistory } from "react-icons/fa"
import clsx from "clsx"
import HistoryMenu from "./HistoryMenu"
import HistoryListItem from "./HistoryListItem"
import groupHistory from "./groupHistory"
import type { HistoryItem, Resource } from "../../types"

type Props = {
    history: HistoryItem[]
    resources: Resource[]
}

export default function History({ history, resources }: Props) {
    const groupedHistory = groupHistory(history, resources)

    return (
        <div className="bg-white p-4 pe-2 flex items-center h-14 mb-5">
            <FaHistory className="text-neutral-400 text-3xl me-3 shrink-0" />
            <div className="flex gap-1 items-center overflow-hidden">
                {groupedHistory.map((item, index) => (
                    <HistoryListItem key={index} item={item}/>
                ))}
            </div>
            <HistoryMenu
                className={clsx(
                    "ms-auto text-neutral-600 text-2xl rounded-lg",
                    "hover:text-neutral-900 hover:bg-neutral-200 p-2"
                )}
                groupedHistory={groupedHistory}
            />
        </div>
    )
}