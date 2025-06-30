import type { HistoryItem, Resource } from "../../types";

export default function groupHistory(
    history: HistoryItem[],
    resources: Resource[]
) {
    return history
        .reduce((list, item) => {
            const last = list[list.length - 1];
            if (
                last &&
                last.name === item.name &&
                ((last.amount > 0 && item.amount > 0) ||
                    (last.amount < 0 && item.amount < 0))
            ) {
                last.count += item.amount;
            } else {
                const newListItem = {
                    ...item,
                    count: item.amount,
                };
                list.push(newListItem);
            }
            return list;
        }, [] as Array<HistoryItem & { count: number }>)
        .map((item) => ({
            ...item,
            resource: resources.find((r) => r.name === item.name)!,
        }));
}
