import InteractiveDemo from "./interactive-demo"

/* ---------- App Store Badges ---------- */
const AppStoreBadge = () => (
  <a
    href="#"
    aria-label="Download on the App Store"
    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200 shadow-lg"
  >
    {/* Apple icon */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <span className="text-left leading-tight">
      <span className="block text-[10px] opacity-70 font-normal">Download on the</span>
      <span className="block text-sm font-semibold tracking-tight">App Store</span>
    </span>
  </a>
)

const PlayStoreBadge = () => (
  <a
    href="#"
    aria-label="Get it on Google Play"
    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 shadow-lg"
  >
    {/* Play icon */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-current" aria-hidden="true">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
    </svg>
    <span className="text-left leading-tight">
      <span className="block text-[10px] opacity-60 font-normal">Get it on</span>
      <span className="block text-sm font-semibold tracking-tight">Google Play</span>
    </span>
  </a>
)

/* ---------- Social Proof Pill ---------- */
const SocialProof = () => (
  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-800/40">
    <div className="flex -space-x-1.5">
      {["bg-rose-400", "bg-violet-400", "bg-amber-400", "bg-teal-400"].map((c, i) => (
        <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-rose-50 dark:border-rose-950/50`} />
      ))}
    </div>
    <span className="text-xs font-medium text-rose-700 dark:text-rose-300">
      200+ daily journalers
    </span>
  </div>
)

/* ---------- Stat Pill ---------- */
const StatPill = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center px-6 py-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-100 dark:border-white/8 backdrop-blur-sm">
    <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</span>
    <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{label}</span>
  </div>
)

/* ---------- Hero Section ---------- */
const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden bg-[#faf9f7] dark:bg-[#0c0b0a]">

      {/* ---- Ambient background ---- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large soft glow blobs */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-rose-200/30 dark:bg-rose-900/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-200/25 dark:bg-violet-900/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-amber-100/20 dark:bg-amber-900/10 blur-[80px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #78716c 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">

          {/* ======== LEFT: Copy ======== */}
          <article className="space-y-8 text-center lg:text-left">

            {/* Social proof pill */}
            <div className="flex justify-center lg:justify-start">
              <SocialProof />
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1
                className="text-[clamp(2.6rem,5vw,4rem)] font-playfair font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-slate-50"
              >
                The journal that{" "}
                <span className="italic text-rose-500">listens</span>
                <br />
                as well as it{" "}
                <span className="italic text-violet-500">reads.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                SpeakDiary combines voice recording and freeform writing into one
                beautiful, private space for your thoughts, reflections, and growth.
              </p>
            </div>

            {/* Download badges */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>

            {/* Trust line */}
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Free to download · No account required to start
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <StatPill value="4.9★" label="App Store" />
              <StatPill value="12-day" label="Avg. streak" />
              <StatPill value="2 min" label="Daily habit" />
            </div>

          </article>

          {/* ======== RIGHT: Demo ======== */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Decorative ring behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full border border-rose-200/40 dark:border-rose-800/20" />
              <div className="absolute w-104 h-104 rounded-full border border-violet-200/30 dark:border-violet-800/15" />
            </div>

            {/* Phone glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-rose-300/20 dark:bg-rose-700/15 blur-3xl rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[360px]">
              <InteractiveDemo />
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default HeroSection
