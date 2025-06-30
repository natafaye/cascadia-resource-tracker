import { FaEllipsis } from "react-icons/fa6"
import type { HistoryItem, Resource } from "../../types"
import { useState } from "react"
import FullHistory from "./FullHistory"
import { createPortal } from "react-dom"

type Props = {
    historyWithResources: Array<HistoryItem & { resource: Resource }>
    className?: string
}
export default function HistoryMenu({ className, historyWithResources }: Props) {
    const [showFullHistory, setShowFullHistory] = useState(false)
    return (
        <>
            <button className={className} onClick={() => setShowFullHistory(true)}>
                <FaEllipsis />
            </button>
            {showFullHistory && createPortal(
                <FullHistory
                    historyWithResources={historyWithResources}
                    close={() => setShowFullHistory(false)}
                />,
                document.body
            )}
        </>
    )
}