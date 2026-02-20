import { useState } from "react"

const LETTER_TEXT =
  "Dear future me - I hope you remember how hard you worked this year. The late nights, the self-doubt, the small wins nobody else noticed. I hope you're proud. You earned it."
const DELIVERY_OPTIONS = ["6 months from now", "1 year from now", "5 years from now"]

const LettersDemo = () => {
  const [open, setOpen] = useState(false)
  const [dateIdx, setDateIdx] = useState(1)

  return (
    <div className="flex flex-col items-center gap-3 p-5 h-full">
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Seal letter" : "Open letter"}
        className="w-full text-left"
      >
        <div className={`relative w-full rounded-2xl border-2 overflow-hidden transition-all duration-500 cursor-pointer ${
          open
            ? "border-violet-300 dark:border-violet-700 shadow-lg shadow-violet-200/40 dark:shadow-violet-900/20"
            : "border-slate-200 dark:border-slate-700 hover:border-violet-200 dark:hover:border-violet-800"
        }`}>
          {/* Flap */}
          <div className={`w-full py-2 px-4 flex items-center justify-between transition-colors duration-500 ${
            open ? "bg-violet-100 dark:bg-violet-900/40" : "bg-slate-100 dark:bg-slate-800"
          }`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-500">To: Future Me</span>
            <span className="text-[10px] text-slate-400">📬 {DELIVERY_OPTIONS[dateIdx]}</span>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-white dark:bg-slate-900">
            <div className="space-y-1.5">
              {[0, 1, 2].map(i => (
                <div key={i} className={`h-px bg-violet-100 dark:bg-violet-900/40 transition-all duration-500 ${open ? "opacity-100" : i > 0 ? "opacity-0" : "opacity-40"}`} />
              ))}
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${open ? "max-h-40 opacity-100" : "max-h-6 opacity-60"}`}>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed italic">
                {open ? LETTER_TEXT : `${LETTER_TEXT.slice(0, 42)}...`}
              </p>
            </div>
            <div className={`flex justify-center transition-all duration-300 ${open ? "opacity-0 scale-75 h-0 overflow-hidden" : "opacity-100 scale-100 pt-1"}`}>
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg shadow-violet-400/30">
                <span className="text-white text-[11px] font-bold tracking-wider">SD</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Delivery date selector */}
      <div className="flex gap-1.5 flex-wrap justify-center">
        {DELIVERY_OPTIONS.map((d, i) => (
          <button
            key={d}
            onClick={() => setDateIdx(i)}
            className={`text-[10px] font-medium px-2.5 py-1 rounded-full border transition-all duration-200 ${
              dateIdx === i
                ? "bg-violet-500 text-white border-transparent shadow-sm shadow-violet-400/30"
                : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-700"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LettersDemo
