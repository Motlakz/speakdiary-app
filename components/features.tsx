"use client"

import {
  Mic, Mail, Lightbulb, Target,
  Flame, BookOpen,
} from "lucide-react"
import VoiceDemo from "./demos/voice-demo"
import LettersDemo from "./demos/letters-demo"
import PromptsDemo from "./demos/prompts-demo"
import GoalsDemo from "./demos/goals-demo"
import StreakDemo from "./demos/streak-demo"
import StoryDemo from "./demos/story-demo"


// ─────────────────────────────────────────────────────────────────────────────
// Feature registry
// ─────────────────────────────────────────────────────────────────────────────
interface FeatureDef {
  icon: typeof Mic
  title: string
  description: string
  accent: string
  bg: string
  border: string
  tag: string
  Demo: () => React.ReactElement
}

const FEATURES: FeatureDef[] = [
  {
    icon: Mic,
    title: "Voice Journaling",
    description: "Speak naturally and watch your words appear in real time. The fastest way to capture raw, unfiltered thoughts.",
    accent: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-100 dark:border-rose-800/30",
    tag: "Core",
    Demo: VoiceDemo,
  },
  {
    icon: Mail,
    title: "Future Letters",
    description: "Write letters to your future self. Seal them, set a delivery date, and rediscover who you were.",
    accent: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-100 dark:border-violet-800/30",
    tag: "Unique",
    Demo: LettersDemo,
  },
  {
    icon: Lightbulb,
    title: "Daily Prompts",
    description: "365 thoughtfully crafted prompts for self-discovery, reflection, and growth — one for every day of the year.",
    accent: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-100 dark:border-amber-800/30",
    tag: "Popular",
    Demo: PromptsDemo,
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Define what matters, break it into mileslates, and journal your way to the finish line.",
    accent: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-100 dark:border-teal-800/30",
    tag: "Productivity",
    Demo: GoalsDemo,
  },
  {
    icon: Flame,
    title: "Streak Tracking",
    description: "Build momentum with daily streaks. Watch your consistency compound into lasting habits.",
    accent: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-100 dark:border-orange-800/30",
    tag: "Habits",
    Demo: StreakDemo,
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "Reframe your day as a narrative. Turn challenges into plot twists and growth into the hero's arc.",
    accent: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-100 dark:border-sky-800/30",
    tag: "Creative",
    Demo: StoryDemo,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Feature Card
// ─────────────────────────────────────────────────────────────────────────────
const FeatureCard = ({ feature }: { feature: FeatureDef }) => {
  const { icon: Icon, title, description, accent, bg, border, tag, Demo } = feature
  return (
    <article className={`rounded-2xl border ${border} overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5`}>
      <div className={`relative ${bg} border-b ${border} min-h-[260px]`}>
        <span className={`absolute top-3 right-3 z-10 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border ${border} ${accent}`}>
          {tag}
        </span>
        <Demo />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-7 h-7 rounded-lg ${bg} border ${border} flex items-center justify-center shrink-0`}>
            <Icon size={13} className={accent} aria-hidden="true" />
          </div>
          <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-100">{title}</h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Section
// ─────────────────────────────────────────────────────────────────────────────
const MARQUEE_TAGS = [
  "voice journaling", "journal prompts for self discovery", "self-reflection journal prompts",
  "daily journal prompts", "365 daily journal prompts", "goal setting",
  "storytelling", "future letters", "streak tracking", "voice-to-text journaling",
  "manifestation journal ideas", "morning journal prompts", "personal journal prompts",
]

const FeaturesSection = () => (
  <section
    id="features"
    aria-labelledby="features-heading"
    className="relative py-28 bg-white dark:bg-[#0f0e0d] overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-[80px]" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-violet-100/30 dark:bg-violet-900/10 blur-[70px]" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">

      {/* Header */}
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-500 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-800/30">
          Features
        </span>
        <h2
          id="features-heading"
          className="text-[clamp(2rem,4vw,3rem)] font-playfair font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          Everything you need to{" "}
          <span className="italic text-violet-500">journal consistently.</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          Six features, each one interactive. Try them right here before you download.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f) => <FeatureCard key={f.title} feature={f} />)}
      </div>

      {/* CTA */}
      <div className="text-center space-y-3">
        <p className="text-sm text-slate-400 dark:text-slate-500">Many more features shipping with the app...</p>
        <button
          onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200 shadow-lg"
        >
          See pricing & download
        </button>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50" aria-hidden="true">
        <div className="flex gap-3 whitespace-nowrap" style={{ animation: "marqueeScroll 32s linear infinite" }}>
          {[...MARQUEE_TAGS, ...MARQUEE_TAGS].map((tag, i) => (
            <span key={i} className="inline-block text-xs text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/50">
              {tag}
            </span>
          ))}
        </div>
        <style>{`@keyframes marqueeScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>

    </div>
  </section>
)

export default FeaturesSection
