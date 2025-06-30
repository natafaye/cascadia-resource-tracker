import { useState } from "react"
import Counter from "./components/Counter"
import type { HistoryItem, Resource } from "./types"
import { START_RESOURCES } from "./startResources"
import History from "./components/History/History"

export default function App() {
  const [resources, setResources] = useState<Resource[]>(START_RESOURCES)
  const [history, setHistory] = useState<HistoryItem[]>([])

  const updateTally = (name: string, amount: number) => {
    setResources(resources.map(r => r.name !== name ? r : {
      ...r,
      tally: Math.max(r.tally + amount, 0)
    }))
    setHistory([{ name, amount }, ...history])
  }

  return (
    <div className="m-5">
      <History history={history} resources={resources}/>
      {resources.map(resource => (
        <Counter
          key={resource.name}
          resource={resource}
          updateTally={updateTally}
        />
      ))}
    </div>
  )
}