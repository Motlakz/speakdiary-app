import { Check, RefreshCw } from "lucide-react"
import { useState } from "react"

const DEFAULT_MILEslateS = [
  { label: "Set your intention",      done: true  },
  { label: "Write your first entry",  done: true  },
  { label: "Journal for 7 days",      done: false },
  { label: "Reflect on growth",       done: false },
  { label: "Celebrate the mileslate", done: false },
]

const GoalsDemo = () => {
  const [items, setItems] = useState(DEFAULT_MILEslateS)
  const pct = Math.round((items.filter(m => m.done).length / items.length) * 100)

  return (
    <div className="flex flex-col gap-3 p-5 h-full">
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Journal Daily — 30 days</span>
          <span className={`text-xs font-bold transition-colors duration-300 ${pct === 100 ? "text-emerald-400" : "text-teal-500"}`}>{pct}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-linear-to-r from-teal-400 to-teal-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="space-y-1.5 flex-1">
        {items.map((m, i) => (
          <button
            key={i}
            onClick={() => setItems(ms => ms.map((x, j) => j === i ? { ...x, done: !x.done } : x))}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all duration-200 border ${
              m.done
                ? "bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-800/40"
                : "bg-white dark:bg-slate-800/50 border-slate-100 dark:border-slate-700/50 hover:border-teal-200 dark:hover:border-teal-800/50"
            }`}
          >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
              m.done ? "bg-teal-500 shadow-sm shadow-teal-400/40" : "border-2 border-slate-300 dark:border-slate-600"
            }`}>
              {m.done && <Check size={11} className="text-white" strokeWidth={3} />}
            </div>
            <span className={`text-[11px] font-medium transition-all duration-200 ${
              m.done
                ? "text-teal-700 dark:text-teal-300 line-through decoration-teal-400/60"
                : "text-slate-600 dark:text-slate-300"
            }`}>
              {m.label}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => setItems(DEFAULT_MILEslateS)}
        className="text-[10px] text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 flex items-center gap-1 self-center transition-colors"
      >
        <RefreshCw size={9} /> Reset demo
      </button>
    </div>
  )
}

export default GoalsDemo
