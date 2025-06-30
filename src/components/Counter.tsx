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
                <button
                    className={clsx("p-1 m-1 rounded-s-lg text-white text-4xl", highlightClassName, "disabled:opacity-50")}
                    onClick={() => updateTally(name, -1)}
                    disabled={tally === 0}
                >
                    <FaMinus />
                </button>
                <div className="bg-white p-3 text-3xl text-black w-12 flex items-center justify-center">
                    {tally}
                </div>
                <button
                    className={clsx("p-1 m-1 rounded-e-lg text-white text-4xl", highlightClassName)}
                    onClick={() => updateTally(name, 1)}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}