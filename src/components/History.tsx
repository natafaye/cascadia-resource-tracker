import { FaHistory } from "react-icons/fa"
import type { HistoryItem, Resource } from "../types"
import ResourceIcon from "./ResourceIcon"
import clsx from "clsx"

type Props = {
    history: HistoryItem[]
    resources: Resource[]
}

export default function History({ history, resources }: Props) {
    const historyWithResource = history.map(item => ({
        ...item,
        resource: resources.find(r => r.name === item.name)!
    }))
    return (
        <div className="bg-white p-4 flex gap-2 items-center h-14 mb-5 overflow-hidden">
            <FaHistory className="text-neutral-400 text-3xl me-1 shrink-0" />
            {historyWithResource.map(item => (
                <ResourceIcon resource={item.resource} className={clsx(
                    item.amount === 1 ? "text-green-700" : "text-red-700",
                    "text-3xl shrink-0"
                )}/>
            ))}
        </div>
    )
}