import { FaHistory } from "react-icons/fa"
import clsx from "clsx"
import ResourceIcon from "../ResourceIcon"
import HistoryMenu from "./HistoryMenu"
import type { HistoryItem, Resource } from "../../types"

type Props = {
    history: HistoryItem[]
    resources: Resource[]
}

export default function History({ history, resources }: Props) {
    const historyWithResources = history.map(item => ({
        ...item,
        resource: resources.find(r => r.name === item.name)!
    }))
    return (
        <div className="bg-white p-4 pe-2 flex items-center h-14 mb-5">
            <FaHistory className="text-neutral-400 text-3xl me-3 shrink-0" />
            <div className="flex gap-2 items-center overflow-hidden">
                {historyWithResources.map((item, index) => (
                    <ResourceIcon key={index} resource={item.resource} className={clsx(
                        item.amount === 1 ? "text-green-700" : "text-red-700",
                        "text-3xl shrink-0"
                    )} />
                ))}
            </div>
            <HistoryMenu
                className="ms-auto text-neutral-600 text-2xl rounded-lg hover:text-neutral-900 hover:bg-neutral-200 p-2"
                historyWithResources={historyWithResources}
            />
        </div>
    )
}