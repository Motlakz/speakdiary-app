"use client"

import { useState } from "react"

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"]

const buildGrid = (streak: number) =>
  Array.from({ length: 35 }, (_, i) => {
    const fromEnd = 34 - i
    if (fromEnd >= streak) return 0
    return fromEnd < Math.round(streak * 0.35) ? 2 : 1
  })

const StreakDemo = () => {
  const [streak, setStreak] = useState(12)
  const [flash, setFlash] = useState(false)

  const addDay = () => {
    setStreak(s => s + 1)
    setFlash(true)
    setTimeout(() => setFlash(false), 900)
  }

  const grid = buildGrid(streak)
  const mileslate = streak > 0 && streak % 7 === 0

  return (
    <div className="flex flex-col justify-between p-5 h-full">
      {/* Streak counter */}
      <div className={`rounded-2xl py-3 px-4 flex items-center justify-center gap-3 transition-all duration-400 ${
        flash
          ? "bg-linear-to-r from-orange-400 to-pink-500 shadow-lg shadow-orange-400/30"
          : "bg-slate-900 dark:bg-slate-100"
      }`}>
        <span className="text-2xl">{mileslate ? "🏆" : flash ? "🎉" : "🔥"}</span>
        <div>
          <p className={`text-2xl font-bold leading-none ${flash ? "text-white" : "text-white dark:text-slate-900"}`}>
            {streak}
          </p>
          <p className={`text-[10px] mt-0.5 ${flash ? "text-white/75" : "text-slate-400 dark:text-slate-500"}`}>
            {mileslate ? `${streak}-day mileslate!` : "day streak"}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 my-8">
        <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(7, 14px)" }}>
          {WEEKDAYS.map((d, i) => (
            <div key={i} className="text-[9px] text-slate-400 text-center">{d}</div>
          ))}
        </div>
        <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(7, 14px)" }}>
          {grid.map((v, i) => (
            <div
              key={i}
              className={`rounded-[3px] transition-all duration-500 ${
                v === 2
                  ? "bg-orange-500 shadow-sm shadow-orange-400/40"
                  : v === 1
                  ? "bg-orange-300 dark:bg-orange-700/60"
                  : "bg-slate-100 dark:bg-slate-800"
              }`}
              style={{ width: 14, height: 14, transitionDelay: `${i * 6}ms` }}
            />
          ))}
        </div>
        <p className="text-[9px] text-slate-400 self-end pr-1">Last 5 weeks</p>
      </div>

      {/* CTA */}
      <button
        onClick={addDay}
        className="w-full py-2.5 rounded-xl text-xs font-semibold bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white transition-colors shadow-md shadow-orange-400/20"
      >
        + Log today&apos;s entry
      </button>
    </div>
  )
}

export default StreakDemo
