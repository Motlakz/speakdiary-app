/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Mic,
  MicOff,
  Keyboard,
  Home,
  PenTool,
  Lightbulb,
  Target,
  TrendingUp,
  Send,
  ChevronRight,
  Flame,
  CheckCircle,
  Circle,
} from "lucide-react"

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
type ScreenId = "home" | "journal" | "prompts" | "goals" | "insights"

/* ─────────────────────────────────────────
   Waveform (stable height, animated bars)
───────────────────────────────────────── */
const Waveform = ({ active }: { active: boolean }) => {
  const bars = [3, 5, 8, 6, 10, 7, 5, 9, 6, 4, 7, 5]
  return (
    <div className="flex items-center justify-center gap-0.5 h-8">
      {bars.map((base, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all ${active ? "bg-rose-400" : "bg-slate-300 dark:bg-slate-600"}`}
          style={{
            height: active ? `${base * 3}px` : "4px",
            animationName: active ? "barPulse" : "none",
            animationDuration: `${0.5 + (i % 5) * 0.1}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationDelay: `${i * 0.05}s`,
            transition: "height 0.3s ease",
          }}
        />
      ))}
      <style>{`
        @keyframes wave {
          from { transform: scaleY(0.6); }
          to   { transform: scaleY(1.4); }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────────────────────────────
   Progress Bar
───────────────────────────────────────── */
const ProgressBar = ({ value, color = "bg-rose-400" }: { value: number; color?: string }) => (
  <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
    <div
      className={`h-full rounded-full ${color} transition-all duration-700`}
      style={{ width: `${value}%` }}
    />
  </div>
)

/* ─────────────────────────────────────────
   HOME SCREEN
───────────────────────────────────────── */
const HomeScreen = () => (
  <div className="space-y-4">
    {/* Greeting */}
    <div>
      <p className="text-xs text-slate-400 dark:text-slate-500">Friday, March 15</p>
      <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-0.5">
        Good morning, Sarah 👋
      </h2>
    </div>

    {/* Streak card */}
    <div className="rounded-2xl bg-linear-to-br from-rose-500 to-violet-500 p-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <Flame size={16} className="text-yellow-300" />
            <span className="font-bold text-lg">12-day streak</span>
          </div>
          <p className="text-xs text-white/70 mt-0.5">You&apos;re building a great habit</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
          🏆
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1">
        {["M","T","W","T","F","S","S"].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-[9px] text-white/60">{d}</span>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              i < 5 ? "bg-white/25" : "bg-white/10"
            }`}>
              {i < 5 && <span className="text-[9px]">✓</span>}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Quick actions */}
    <div className="grid grid-cols-2 gap-2">
      <button className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30 text-left">
        <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center">
          <Mic size={13} className="text-rose-500" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">Voice</p>
          <p className="text-[10px] text-slate-400">Record now</p>
        </div>
      </button>
      <button className="flex items-center gap-2 p-3 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-800/30 text-left">
        <div className="w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
          <Keyboard size={13} className="text-violet-500" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">Write</p>
          <p className="text-[10px] text-slate-400">Free entry</p>
        </div>
      </button>
    </div>

    {/* Recent entries */}
    <div>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Recent entries</p>
      <div className="space-y-1.5">
        {[
          { date: "Today", preview: "Feeling grateful for the small moments...", mood: "😊" },
          { date: "Yesterday", preview: "Had an amazing conversation with...", mood: "✨" },
        ].map((e, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
            <span className="text-base shrink-0">{e.mood}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-slate-400">{e.date}</p>
              <p className="text-xs text-slate-700 dark:text-slate-300 truncate">{e.preview}</p>
            </div>
            <ChevronRight size={12} className="text-slate-300 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ─────────────────────────────────────────
   JOURNAL SCREEN
───────────────────────────────────────── */
const JournalScreen = () => {
  const [mode, setMode] = useState<"voice" | "text">("voice")
  const [recording, setRecording] = useState(false)

  // Auto-start recording after a beat
  useEffect(() => {
    const t = setTimeout(() => setRecording(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="space-y-3">
      {/* Mode toggle */}
      <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-0.5">
        {(["voice", "text"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-[10px] text-xs font-medium transition-all ${
              mode === m
                ? "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-sm"
                : "text-slate-500"
            }`}
          >
            {m === "voice" ? <Mic size={12} /> : <Keyboard size={12} />}
            {m === "voice" ? "Voice" : "Text"}
          </button>
        ))}
      </div>

      {mode === "voice" ? (
        <div className="space-y-3">
          {/* Recorder */}
          <div className="flex flex-col items-center gap-4 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
            <button
              onClick={() => setRecording(!recording)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                recording
                  ? "bg-rose-500 shadow-lg shadow-rose-500/30 scale-105"
                  : "bg-slate-800 dark:bg-slate-200"
              }`}
            >
              {recording
                ? <MicOff size={22} className="text-white" />
                : <Mic size={22} className="text-white dark:text-slate-800" />
              }
            </button>
            <div className="w-full px-4">
              <Waveform active={recording} />
              <p className="text-center text-[10px] text-slate-400 mt-1.5">
                {recording ? "Recording... tap to stop" : "Tap to start"}
              </p>
            </div>
          </div>

          {/* Transcript */}
          {recording && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-800/30">
              <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 italic">
                &quot;Today I woke up feeling really grateful for the beautiful sunrise. It reminded me that every day is a new beginning...&quot;
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">New Entry</p>
              <span className="text-[10px] text-slate-400">March 15</span>
            </div>
            <textarea
              readOnly
              rows={5}
              className="w-full bg-transparent text-xs text-slate-700 dark:text-slate-300 resize-none outline-none leading-relaxed placeholder-slate-300"
              value="Today was a good day. I spent time with family and felt really present in the moment. Sometimes the simple things bring the most joy..."
            />
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/50">
              <div className="flex gap-1.5 text-base">
                {["😊","🌟","💭","🌱"].map((e, i) => <span key={i}>{e}</span>)}
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-800 text-[11px] font-medium">
                <Send size={10} />
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─────────────────────────────────────────
   PROMPTS SCREEN
───────────────────────────────────────── */
const PromptsScreen = () => {
  const [current, setCurrent] = useState(0)
  const prompts = [
    { icon: "🙏", cat: "Gratitude", q: "What three small things brought you joy today?" },
    { icon: "🌱", cat: "Growth",    q: "Describe a moment you felt proud of yourself." },
    { icon: "💭", cat: "Reflect",   q: "What would you tell your younger self today?" },
    { icon: "✨", cat: "Dreams",    q: "What does your ideal day look like next year?" },
  ]

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % prompts.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Daily Prompts</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">What&apos;s on your mind?</p>
      </div>

      {/* Featured prompt - fixed height to avoid layout shift */}
      <div className="h-36 rounded-2xl bg-linear-to-br from-rose-500 to-violet-500 p-4 flex flex-col justify-between">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{prompts[current].icon}</span>
          <div>
            <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider">{prompts[current].cat}</span>
            <p className="text-xs text-white font-medium leading-relaxed mt-0.5">{prompts[current].q}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {prompts.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button className="text-[11px] text-white/80 bg-white/20 px-3 py-1 rounded-full">
            Start writing →
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "Gratitude", n: 52, color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-800/30 text-amber-600" },
          { name: "Growth",    n: 48, color: "bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-800/30 text-teal-600" },
          { name: "Reflection",n: 61, color: "bg-violet-50 dark:bg-violet-950/30 border-violet-100 dark:border-violet-800/30 text-violet-600" },
          { name: "Dreams",    n: 35, color: "bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-800/30 text-rose-500" },
        ].map((c, i) => (
          <div key={i} className={`p-3 rounded-xl border ${c.color}`}>
            <p className="text-xs font-semibold">{c.name}</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{c.n} prompts</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   GOALS SCREEN
───────────────────────────────────────── */
const GoalsScreen = () => {
  const goals = [
    { title: "Journal Daily", progress: 80, target: "30 days", current: "24 done", done: true },
    { title: "Read 10 books", progress: 30, target: "10 books", current: "3 of 10", done: false },
    { title: "Weekly reflect", progress: 75, target: "4 weeks", current: "3 of 4", done: false },
  ]

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Goals</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">Track your progress</p>
      </div>

      {/* Primary goal */}
      <div className="p-4 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs opacity-60">Current focus</p>
            <p className="font-semibold text-sm mt-0.5">Journal Daily</p>
          </div>
          <span className="text-2xl">🎯</span>
        </div>
        <ProgressBar value={80} color="bg-rose-400" />
        <div className="flex justify-between mt-2">
          <span className="text-[10px] opacity-50">24 of 30 days</span>
          <span className="text-[10px] font-bold text-rose-400">80%</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 dark:border-slate-800/20">
          {[["12", "streak"], ["25", "this month"], ["7", "left"]].map(([v, l], i) => (
            <div key={i} className="text-center">
              <p className="font-bold text-sm">{v}</p>
              <p className="text-[9px] opacity-50">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other goals */}
      <div className="space-y-2">
        {goals.slice(1).map((g, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {g.done
                  ? <CheckCircle size={13} className="text-teal-500 shrink-0" />
                  : <Circle size={13} className="text-slate-300 shrink-0" />
                }
                <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{g.title}</p>
              </div>
              <span className="text-[10px] font-semibold text-violet-500">{g.progress}%</span>
            </div>
            <ProgressBar value={g.progress} color="bg-violet-400" />
            <p className="text-[10px] text-slate-400 mt-1">{g.current}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   INSIGHTS SCREEN
───────────────────────────────────────── */
const InsightsScreen = () => {
  const moods = [
    { emoji: "😊", label: "Happy",      value: 65, color: "bg-amber-400" },
    { emoji: "😌", label: "Peaceful",   value: 45, color: "bg-teal-400" },
    { emoji: "🌟", label: "Excited",    value: 30, color: "bg-violet-400" },
    { emoji: "💭", label: "Reflective", value: 55, color: "bg-rose-400" },
  ]

  // Stable activity grid - pre-seeded so no randomness on render
  const activity = [1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0]

  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Your Insights</p>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mt-0.5">Discover your patterns</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { v: "127", l: "Entries", sub: "+15% this month", c: "text-rose-500" },
          { v: "42d", l: "Best streak", sub: "Personal best!", c: "text-violet-500" },
        ].map((s, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 text-center">
            <p className={`text-xl font-bold ${s.c}`}>{s.v}</p>
            <p className="text-[11px] text-slate-600 dark:text-slate-300">{s.l}</p>
            <p className="text-[9px] text-slate-400 mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Mood trends */}
      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 space-y-2.5">
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Mood trends</p>
        {moods.map((m, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-sm w-5">{m.emoji}</span>
            <div className="flex-1 space-y-0.5">
              <div className="flex justify-between">
                <span className="text-[10px] text-slate-600 dark:text-slate-300">{m.label}</span>
                <span className="text-[10px] text-slate-400">{m.value}%</span>
              </div>
              <ProgressBar value={m.value} color={m.color} />
            </div>
          </div>
        ))}
      </div>

      {/* Activity grid */}
      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">Writing activity</p>
        <div className="grid grid-cols-7 gap-1">
          {activity.map((a, i) => (
            <div
              key={i}
              className={`aspect-square rounded-sm ${
                a === 1 ? "bg-rose-400" : "bg-slate-200 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
        <p className="text-[9px] text-slate-400 mt-1.5">Last 5 weeks</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   NAV ITEMS config
───────────────────────────────────────── */
const NAV_ITEMS: { id: ScreenId; icon: typeof Home; label: string }[] = [
  { id: "home",    icon: Home,       label: "Home" },
  { id: "journal", icon: PenTool,    label: "Journal" },
  { id: "prompts", icon: Lightbulb,  label: "Prompts" },
  { id: "goals",   icon: Target,     label: "Goals" },
  { id: "insights",icon: TrendingUp, label: "Insights" },
]

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const InteractiveDemo = () => {
  const [screen, setScreen] = useState<ScreenId>("home")
  const [autoPlay, setAutoPlay] = useState(true)

  const cycle = useCallback(() => {
    setScreen(prev => {
      const ids = NAV_ITEMS.map(n => n.id)
      return ids[(ids.indexOf(prev) + 1) % ids.length]
    })
  }, [])

  useEffect(() => {
    if (!autoPlay) return
    const t = setInterval(cycle, 4500)
    return () => clearInterval(t)
  }, [autoPlay, cycle])

  const renderScreen = () => {
    switch (screen) {
      case "home":     return <HomeScreen />
      case "journal":  return <JournalScreen />
      case "prompts":  return <PromptsScreen />
      case "goals":    return <GoalsScreen />
      case "insights": return <InsightsScreen />
    }
  }

  return (
    <div className="w-full max-w-[340px] mx-auto select-none">
      {/* Phone shell */}
      <div className="rounded-[2.5rem] bg-slate-900 p-2 shadow-2xl shadow-slate-900/40 ring-1 ring-slate-700/50">
        <div className="rounded-[2rem] overflow-hidden bg-white dark:bg-[#111] relative">

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-slate-50 dark:bg-[#111]">
            <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 dark:bg-black rounded-full" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 rounded-sm bg-slate-700 dark:bg-slate-300 opacity-70" />
              <div className="w-3 h-1.5 rounded-sm bg-slate-700 dark:bg-slate-300 opacity-70" />
              <div className="w-4 h-1.5 rounded-sm bg-green-500" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-[#111] border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-linear-to-br from-rose-400 to-violet-500 flex items-center justify-center">
                <PenTool size={11} className="text-white" />
              </div>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                Speak<span className="text-rose-500">Diary</span>
              </span>
            </div>
            <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
              S
            </div>
          </div>

          {/* Screen content — fixed height prevents layout shifts */}
          <div className="h-[420px] overflow-y-auto overflow-x-hidden px-4 py-4 bg-white dark:bg-[#111]">
            {renderScreen()}
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around px-2 py-2 bg-white dark:bg-[#111] border-t border-slate-100 dark:border-slate-800">
            {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => { setScreen(id); setAutoPlay(false) }}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-150 ${
                  screen === id
                    ? "text-rose-500 bg-rose-50 dark:bg-rose-950/40"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-600"
                }`}
              >
                <Icon size={16} strokeWidth={screen === id ? 2.2 : 1.8} />
                <span className="text-[9px] font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-2 bg-white dark:bg-[#111]">
            <div className="w-24 h-1 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      </div>

      {/* Controls below phone */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="flex items-center gap-1.5">
          {NAV_ITEMS.map(({ id }) => (
            <button
              key={id}
              onClick={() => { setScreen(id); setAutoPlay(false) }}
              className={`rounded-full transition-all duration-300 ${
                screen === id
                  ? "w-5 h-1.5 bg-rose-500"
                  : "w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setAutoPlay(p => !p)}
          className="text-[11px] text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          {autoPlay ? "Pause demo" : "Auto-play"}
        </button>
      </div>
    </div>
  )
}

export default InteractiveDemo
