import { ArrowRight, Mic, Sparkles, Lock } from "lucide-react"
import Link from "next/link"

const PILLARS = [
  {
    icon: Mic,
    title: "Voice-first design",
    body: "Speak naturally and watch your words appear. Real-time transcription makes capturing raw thoughts effortless.",
    accent: "text-pink-500",
    bg: "bg-rose-50 dark:bg-rose-950/40",
    border: "border-rose-100 dark:border-rose-800/30",
  },
  {
    icon: Sparkles,
    title: "AI-guided reflection",
    body: "365 curated prompts, mood analytics, and personalized insights turn scattered thoughts into meaningful patterns.",
    accent: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-100 dark:border-violet-800/30",
  },
  {
    icon: Lock,
    title: "Private by default",
    body: "Your journal is yours alone. End-to-end encryption and zero-knowledge architecture keep every entry secure.",
    accent: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-100 dark:border-teal-800/30",
  },
]

function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 bg-[#faf9f7] dark:bg-[#0c0b0a] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-100/40 dark:bg-violet-900/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-rose-100/30 dark:bg-rose-900/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pink-500 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30">
            Our story
          </span>
          <h2
            className="text-[clamp(2rem,4vw,3rem)] font-playfair font-bold leading-tight text-slate-900 dark:text-slate-50 tracking-tight"
          >
            Journaling, reimagined for{" "}
            <span className="italic text-pink-500">how you actually think.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            SpeakDiary was built around a simple belief - the best journal is one you&apos;ll
            actually use. Whether you type, speak, or sketch, we meet you where you are.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {PILLARS.map(({ icon: Icon, title, body, accent, bg, border }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 border ${bg} ${border} space-y-3`}
            >
              <div className={`w-9 h-9 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                <Icon size={17} className={accent} />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900 dark:bg-slate-100 p-8 sm:p-12 text-center space-y-6 mb-12">
          <p
            className="text-xl sm:text-2xl font-playfair font-medium leading-relaxed text-white dark:text-slate-900 italic"
          >
            &quot;The act of writing is the act of discovering what you believe.&quot;
          </p>
          <span className="text-xs text-slate-400 dark:text-slate-500 tracking-wider uppercase">
            — David Hare
          </span>
          <div className="pt-2">
            <Link href="/#pricing">
              <button
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                  bg-pink-500 hover:bg-rose-600 text-white
                  transition-colors duration-200 shadow-lg shadow-pink-500/20
                "
              >
                Start your journey
                <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          {[
            { v: "200+", l: "Daily journalers" },
            { v: "365",  l: "Curated prompts" },
            { v: "4.9★", l: "Rating" },
          ].map(({ v, l }) => (
            <div key={l} className="space-y-1">
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">{v}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
