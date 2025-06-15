import clsx from "clsx"
import type { Resource } from "../types"
import { FaMinus, FaPlus } from "react-icons/fa"

type Props = {
    resource: Resource
    updateTally: (name: string, amount: number) => void
}

export default function Counter({
    resource: { className, highlightClassName, name, tally, iconComponent },
    updateTally
}: Props) {
    const Component = iconComponent

    return (
        <div className={clsx(className, "flex p-3 items-center justify-center")}>
            <div className="border-2 border-white text-white rounded-full aspect-square h-full flex items-center p-3">
                <Component title={name} size={45} />
            </div>
            <div className="flex ms-4 border-2 border-white rounded-xl">
                <div className="bg-white p-3 text-3xl text-black rounded-s-lg w-12 flex items-center justify-center">
                    {tally}
                </div>
                <div className="flex gap-1 text-4xl text-white p-1">
                    <button
                        className={clsx("p-1", highlightClassName, "disabled:opacity-50")}
                        onClick={() => updateTally(name, -1)}
                        disabled={tally === 0}
                    >
                        <FaMinus />
                    </button>
                    <button
                        className={clsx("p-1 rounded-e-lg", highlightClassName)}
                        onClick={() => updateTally(name, 1)}
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>
        </div>
    )
}