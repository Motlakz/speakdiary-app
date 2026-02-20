import { Mic, MicOff } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

const TRANSCRIPT =
  "Today felt different. I woke early, watched the sunrise from my window, and just sat with it. No phone, no noise - just that soft amber light spreading across the city rooftops."

const VoiceDemo = () => {
  const [recording, setRecording] = useState(false)
  const [text, setText] = useState("")
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = useCallback(() => {
    if (done) { setText(""); setDone(false); indexRef.current = 0 }
    setRecording(true)
  }, [done])

  const stop = useCallback(() => {
    setRecording(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  useEffect(() => {
    if (!recording) return
    timerRef.current = setInterval(() => {
      indexRef.current += 1
      setText(TRANSCRIPT.slice(0, indexRef.current))
      if (indexRef.current >= TRANSCRIPT.length) {
        clearInterval(timerRef.current!)
        setRecording(false)
        setDone(true)
      }
    }, 36)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [recording])

  const bars = [3, 7, 10, 5, 12, 8, 4, 11, 6, 9, 5, 10, 3, 8, 12]

  return (
    <div className="flex flex-col items-center gap-4 p-5 h-full select-none">
      {/* Waveform */}
      <div className="flex items-center justify-center gap-[3px] h-12 w-full">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`w-[5px] rounded-full transition-all duration-300 ${
              recording ? "bg-rose-400" : "bg-slate-200 dark:bg-slate-700"
            }`}
            style={{
              height: recording ? `${h * 3.5}px` : "4px",
              transitionDelay: `${i * 20}ms`,
              animation: recording
                ? `voiceBar ${0.5 + (i % 5) * 0.12}s ease-in-out infinite alternate`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Mic button */}
      <button
        onPointerDown={start}
        onPointerUp={stop}
        onPointerLeave={stop}
        aria-label={recording ? "Stop recording" : "Start voice recording"}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
          recording
            ? "bg-rose-500 shadow-rose-400/40 scale-110 ring-4 ring-rose-200 dark:ring-rose-800"
            : "bg-slate-900 dark:bg-slate-100 hover:scale-105"
        }`}
      >
        {recording
          ? <MicOff size={20} className="text-white" />
          : <Mic size={20} className="text-white dark:text-slate-900" />
        }
      </button>

      {/* Transcript box */}
      <div className="w-full min-h-[72px] rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700/60 p-3 shadow-sm">
        {text ? (
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed italic">
            &ldquo;{text}
            <span className={`inline-block w-[2px] h-3 bg-rose-400 ml-0.5 align-middle ${recording ? "animate-pulse" : "opacity-0"}`} />
            {done && "\u201D"}
          </p>
        ) : (
          <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center pt-4">
            Hold mic to record
          </p>
        )}
      </div>

      <style>{`
        @keyframes voiceBar {
          from { transform: scaleY(0.5); opacity: 0.7; }
          to   { transform: scaleY(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default VoiceDemo
