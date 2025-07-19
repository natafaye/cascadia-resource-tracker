import { GiPolarBear, GiDeerHead, GiEgyptianBird, GiFox, GiPineTree, GiSalmon } from "react-icons/gi"
import type { Resource } from "./types"
import { FaCircle } from "react-icons/fa6"
import { IoPlanet } from "react-icons/io5"
import { FaRocket } from "react-icons/fa6"

export const START_RESOURCES: Resource[] = [
  {
    name: "credits",
    className: "bg-yellow-500",
    highlightClassName: "bg-yellow-400",
    iconComponent: FaCircle,
    tally: 0
  },
  {
    name: "income",
    className: "bg-green-500",
    highlightClassName: "bg-green-400",
    iconComponent: IoPlanet,
    tally: 0
  },
  {
    name: "points",
    className: "bg-blue-500",
    highlightClassName: "bg-blue-400",
    iconComponent: FaRocket,
    tally: 0
  }
]

export const CASCADIA_START_RESOURCES: Resource[] = [
  {
    name: "bear",
    className: "bg-bear",
    highlightClassName: "bg-bear-light",
    iconComponent: GiPolarBear,
    tally: 1
  },
  {
    name: "elk",
    className: "bg-elk",
    highlightClassName: "bg-elk-light",
    iconComponent: GiDeerHead,
    tally: 1
  },
  {
    name: "fox",
    className: "bg-fox",
    highlightClassName: "bg-fox-light",
    iconComponent: GiFox,
    tally: 1
  },
  {
    name: "hawk",
    className: "bg-hawk",
    highlightClassName: "bg-hawk-light",
    iconComponent: GiEgyptianBird,
    tally: 1
  },
  {
    name: "salmon",
    className: "bg-salmon",
    highlightClassName: "bg-salmon-light",
    iconComponent: GiSalmon,
    tally: 1
  },
  {
    name: "nature",
    className: "bg-nature mt-5",
    highlightClassName: "bg-nature-light",
    iconComponent: GiPineTree,
    tally: 2
  }
]