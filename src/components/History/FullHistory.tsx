import { FaTimes } from "react-icons/fa"
import clsx from "clsx"
import ResourceIcon from "../ResourceIcon"
import type { HistoryItemGrouped } from "../../types"
import HistoryListItem from "./HistoryListItem"

type Props = {
    groupedHistory: HistoryItemGrouped[]
    close: () => void
}

export default function FullHistory({ groupedHistory, close }: Props) {
    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-800 opacity-80">
            </div>
            <div className="bg-white p-4 absolute top-4 left-4 right-4 bottom-4 rounded-lgf flex flex-col">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Full History</h2>
                    <button className="text-2xl text-neutral-700" onClick={close}>
                        <FaTimes />
                    </button>
                </div>
                <div className="mt-3 mb-4 flex gap-2 flex-wrap overflow-y-auto">
                    {groupedHistory.map((item, index) => (
                        <HistoryListItem key={index} item={item}/>
                    ))}
                    { groupedHistory.length === 0 && <p className="text-neutral-400">No history so far</p> }
                </div>
            </div>
        </>
    )
}