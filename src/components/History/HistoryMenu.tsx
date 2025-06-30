import type { HistoryItemGrouped } from "../../types"
import { useState } from "react"
import FullHistory from "./FullHistory"
import { createPortal } from "react-dom"
import { FaList } from "react-icons/fa"

type Props = {
    groupedHistory: HistoryItemGrouped[]
    className?: string
}
export default function HistoryMenu({ className, groupedHistory }: Props) {
    const [showFullHistory, setShowFullHistory] = useState(false)
    return (
        <>
            <button className={className} onClick={() => setShowFullHistory(true)}>
                <FaList />
            </button>
            {showFullHistory && createPortal(
                <FullHistory
                    groupedHistory={groupedHistory}
                    close={() => setShowFullHistory(false)}
                />,
                document.body
            )}
        </>
    )
}