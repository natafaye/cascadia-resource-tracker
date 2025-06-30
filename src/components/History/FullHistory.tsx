import { FaTimes } from "react-icons/fa"
import clsx from "clsx"
import ResourceIcon from "../ResourceIcon"
import type { HistoryItem, Resource } from "../../types"

type Props = {
    historyWithResources: Array<HistoryItem & { resource: Resource }>
    close: () => void
}

export default function FullHistory({ historyWithResources, close }: Props) {
    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-800 opacity-80">
            </div>
            <div className="bg-white p-4 absolute top-4 left-4 right-4 rounded-lg">
                <div className="flex justify-between">
                    <h2 className="text-2xl">Full History</h2>
                    <button className="text-2xl text-neutral-700" onClick={close}>
                        <FaTimes />
                    </button>
                </div>
                <div className="mt-3 mb-4 flex gap-2 flex-wrap">
                    {historyWithResources.map((item, index) => (
                        <ResourceIcon key={index} resource={item.resource} className={clsx(
                            item.amount === 1 ? "text-green-700" : "text-red-700",
                            "text-3xl shrink-0"
                        )} />
                    ))}
                    { historyWithResources.length === 0 && <p className="text-neutral-400">No history so far</p> }
                </div>
            </div>
        </>
    )
}