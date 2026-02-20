import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type StoryNode = { text: string; choices?: { label: string; next: string }[] }

const STORY: Record<string, StoryNode> = {
  start:  { text: "You wake up feeling unsettled. Something from yesterday is still with you.", choices: [{ label: "Write about it", next: "write" }, { label: "Push it away", next: "push" }] },
  write:  { text: "Words pour out — messy, honest, real. You didn't realise how much you were carrying until it was on the page.", choices: [{ label: "Go deeper", next: "deeper" }, { label: "Close the journal", next: "close" }] },
  push:   { text: "By noon it's back, louder. Unfelt feelings always find their way home.", choices: [{ label: "Write now", next: "write" }] },
  deeper: { text: "You trace it back to a pattern from years ago. You see it clearly now. That's the real work.", choices: [{ label: "Start over", next: "start" }] },
  close:  { text: "Even half-full pages are enough. You close the journal and feel lighter. That's always been the point.", choices: [{ label: "Tell another story", next: "start" }] },
}

const STORY_KEYS = Object.keys(STORY)

const StoryDemo = () => {
  const [node, setNode] = useState("start")
  const [shown, setShown] = useState("")
  const [typing, setTyping] = useState(true)

  const full = STORY[node].text

  useEffect(() => {
    setShown("")
    setTyping(true)
    let i = 0
    const t = setInterval(() => {
      i++
      setShown(full.slice(0, i))
      if (i >= full.length) { clearInterval(t); setTyping(false) }
    }, 20)
    return () => clearInterval(t)
  }, [node, full])

  const choose = (next: string) => {
    if (typing) { setShown(full); setTyping(false); return }
    setNode(next)
  }

  const progress = STORY_KEYS.indexOf(node)

  return (
    <div className="flex flex-col gap-3 p-5 h-full">
      {/* Progress breadcrumb */}
      <div className="flex gap-1">
        {STORY_KEYS.map((k, i) => (
          <div key={k} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i <= progress ? "bg-sky-400" : "bg-stone-100 dark:bg-stone-800"}`} />
        ))}
      </div>

      {/* Text */}
      <div className="flex-1 rounded-2xl my-8 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-700/60 p-4 shadow-sm min-h-[80px]">
        <p className="text-[11px] text-stone-600 dark:text-stone-300 leading-relaxed">
          {shown}
          {typing && <span className="inline-block w-[2px] h-3 bg-sky-400 ml-0.5 align-middle animate-pulse" />}
        </p>
      </div>

      {/* Choices */}
      <div className="space-y-1.5">
        {STORY[node].choices?.map((c) => (
          <button
            key={c.next}
            onClick={() => choose(c.next)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[11px] font-medium text-left bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-800/30 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-950/50 transition-colors"
          >
            {c.label}
            <ChevronRight size={12} className="shrink-0 opacity-50" />
          </button>
        ))}
        {typing && <p className="text-[9px] text-center text-stone-400">tap a choice to skip typing</p>}
      </div>
    </div>
  )
}

export default StoryDemo
