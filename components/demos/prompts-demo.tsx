import { useCallback, useState } from "react"

const PROMPTS = [
  { cat: "Gratitude",  emoji: "🙏", q: "What three small things brought you unexpected joy today?" },
  { cat: "Growth",     emoji: "🌱", q: "Describe a belief you've quietly outgrown this year." },
  { cat: "Reflection", emoji: "💭", q: "What would you tell your younger self about this week?" },
  { cat: "Courage",    emoji: "🔥", q: "What's the conversation you've been avoiding and why?" },
  { cat: "Dreams",     emoji: "✨", q: "What does a perfect Tuesday look like one year from now?" },
  { cat: "Presence",   emoji: "🌿", q: "When did you last feel completely absorbed in a moment?" },
]

const PromptsDemo = () => {
  const [idx, setIdx] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [dir, setDir] = useState<1 | -1>(1)

  const go = useCallback((direction: 1 | -1) => {
    if (exiting) return
    setDir(direction)
    setExiting(true)
    setTimeout(() => {
      setIdx(i => (i + direction + PROMPTS.length) % PROMPTS.length)
      setExiting(false)
    }, 200)
  }, [exiting])

  const p = PROMPTS[idx]

  return (
    <div className="flex flex-col items-center gap-4 p-5 h-full">
      <div className="relative w-full h-44">
        {/* Ghost cards */}
        <div className="absolute inset-x-4 top-3 bottom-0 rounded-2xl bg-amber-200/50 dark:bg-amber-800/20 rotate-3 border border-amber-200/60 dark:border-amber-700/20" />
        <div className="absolute inset-x-2 top-1.5 bottom-0 rounded-2xl bg-amber-300/40 dark:bg-amber-700/20 rotate-1 border border-amber-200/40 dark:border-amber-700/20" />

        {/* Active card */}
        <div className={`absolute inset-0 rounded-2xl p-5 bg-linear-to-br from-amber-400 to-orange-500 shadow-xl shadow-amber-400/25 flex flex-col justify-between transition-all duration-200 ${
          exiting
            ? dir === 1 ? "-translate-x-6 rotate-6 opacity-0" : "translate-x-6 -rotate-6 opacity-0"
            : "translate-x-0 rotate-0 opacity-100"
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">{p.cat}</span>
            <span className="text-xl">{p.emoji}</span>
          </div>
          <p className="text-sm font-medium text-white leading-relaxed">{p.q}</p>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-white/50">{idx + 1} / {PROMPTS.length}</span>
            <div className="flex gap-1">
              {PROMPTS.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full bg-white transition-all duration-300 ${i === idx ? "w-4 opacity-100" : "w-1.5 opacity-30"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        <button onClick={() => go(-1)} className="flex-1 py-2 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors border border-slate-200 dark:border-slate-700">
          ← Previous
        </button>
        <button onClick={() => go(1)} className="flex-1 py-2 rounded-xl text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-white transition-colors shadow-sm shadow-amber-400/30">
          Next prompt →
        </button>
      </div>
    </div>
  )
}

export default PromptsDemo
