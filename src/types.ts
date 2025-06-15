import type { IconType } from "react-icons"

export type Resource = {
    name: string
    className: string
    highlightClassName: string
    iconComponent: IconType
    tally: number
}

export type HistoryItem = {
    name: string
    amount: number
}