import { Check, X, ArrowRight } from "lucide-react"
import { BiLogoPlayStore } from "react-icons/bi"

// ── Types ──────────────────────────────────────────────────────────────────
interface FeatureRow {
  label: string
  free: boolean
  pro: boolean
}

// ── Feature comparison data (mirrors the mobile paywall exactly) ───────────
const FEATURES: FeatureRow[] = [
  { label: "Text journaling",                   free: true,  pro: true  },
  { label: "Voice journaling (audio)",          free: true,  pro: true  },
  { label: "Daily prompts",                     free: true,  pro: true  },
  { label: "Streak tracking",                   free: true,  pro: true  },
  { label: "Voice transcription & translation", free: false, pro: true  },
  { label: "Search & revisit voice entries",    free: false, pro: true  },
  { label: "AI prompts & guidance",             free: false, pro: true  },
  { label: "Advanced insights & mood trends",   free: false, pro: true  },
  { label: "End-to-end encryption",             free: false, pro: true  },
  { label: "No ads",                            free: false, pro: true  },
]

const MOBILE_PLANS = [
  {
    name: "Weekly",
    price: "$2.99",
    period: "/week",
    daily: "$0.43/day",
    trial: "3-day free trial",
    savings: null,
    highlight: false,
  },
  {
    name: "Monthly",
    price: "$4.99",
    period: "/mo",
    daily: "$0.17/day",
    trial: "7-day free trial",
    savings: "MOST POPULAR",
    highlight: true,
  },
  {
    name: "Yearly",
    price: "$29.99",
    period: "/yr",
    daily: "$0.08/day",
    trial: "7-day free trial",
    savings: "SAVE 50%",
    highlight: false,
  },
]

// ── App Store / Play Store Badges ──────────────────────────────────────────
const AppStoreBadge = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <a
    href="#"
    aria-label="Download on the App Store"
    className={`inline-flex items-center gap-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors duration-200 shadow-md ${size === "md" ? "px-5 py-3" : "px-4 py-2.5"}`}
  >
    <svg viewBox="0 0 24 24" className={`shrink-0 fill-current ${size === "md" ? "w-5 h-5" : "w-4 h-4"}`} aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
    <span className="text-left leading-tight">
      <span className={`block opacity-70 font-normal ${size === "md" ? "text-[10px]" : "text-[9px]"}`}>Download on the</span>
      <span className={`block font-semibold tracking-tight ${size === "md" ? "text-sm" : "text-xs"}`}>App Store</span>
    </span>
  </a>
)

const PlayStoreBadge = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <a
    href="#"
    aria-label="Get it on Google Play"
    className={`inline-flex items-center gap-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200 shadow-md ${size === "md" ? "px-5 py-3" : "px-4 py-2.5"}`}
  >
    <BiLogoPlayStore />
    <span className="text-left leading-tight">
      <span className={`block opacity-60 font-normal ${size === "md" ? "text-[10px]" : "text-[9px]"}`}>Get it on</span>
      <span className={`block font-semibold tracking-tight ${size === "md" ? "text-sm" : "text-xs"}`}>Google Play</span>
    </span>
  </a>
)

// ── Tick / Cross cells ─────────────────────────────────────────────────────
const Tick = () => (
  <div
    className="w-6 h-6 rounded-full bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center mx-auto"
    role="img"
    aria-label="Included"
  >
    <Check size={12} strokeWidth={2.5} className="text-teal-500" />
  </div>
)

const Cross = () => (
  <div
    className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto"
    role="img"
    aria-label="Not included on this plan"
  >
    <X size={11} strokeWidth={2} className="text-slate-300 dark:text-slate-600" />
  </div>
)

// ── Section ────────────────────────────────────────────────────────────────
const PricingSection = () => (
  <section
    id="pricing"
    aria-labelledby="pricing-heading"
    className="relative py-28 bg-[#faf9f7] dark:bg-[#0c0b0a] overflow-hidden"
  >
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-linear-to-b from-rose-100/40 dark:from-rose-900/10 blur-[80px]" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 space-y-14">

      {/* ── Header ── */}
      <div className="max-w-xl mx-auto text-center space-y-4">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-pink-500 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30">
          Pricing
        </span>
        <h2
          id="pricing-heading"
          className="text-[clamp(2rem,4vw,3rem)] font-playfair font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          Free to start.{" "}
          <span className="italic text-pink-500">Pro when you&apos;re ready.</span>
        </h2>
        <p className="text-base text-slate-500 dark:text-slate-400">
          Download and journal immediately - no account or card needed to begin.
        </p>
      </div>

      {/* ── Free vs Pro comparison table ── */}
      <div
        className="rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm"
        role="table"
        aria-label="Free vs Pro feature comparison"
      >
        {/* Column headers */}
        <div
          className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] bg-slate-50 dark:bg-slate-900 px-5 py-4 border-b border-slate-100 dark:border-slate-800"
          role="row"
        >
          <div role="columnheader" />
          <div role="columnheader" className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Free</p>
          </div>
          <div role="columnheader" className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-500">Pro</p>
          </div>
        </div>

        {/* Feature rows */}
        {FEATURES.map((row, i) => (
          <div
            key={row.label}
            role="row"
            className={`grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] px-5 py-3.5 items-center ${
              i % 2 === 0 ? "bg-white dark:bg-[#0f0e0d]" : "bg-slate-50/60 dark:bg-slate-900/40"
            } ${i < FEATURES.length - 1 ? "border-b border-slate-100 dark:border-slate-800/60" : ""}`}
          >
            <p role="cell" className="text-sm text-slate-700 dark:text-slate-300">{row.label}</p>
            <div role="cell">{row.free ? <Tick /> : <Cross />}</div>
            <div role="cell">{row.pro  ? <Tick /> : <Cross />}</div>
          </div>
        ))}
      </div>

      {/* ── Pro plan pricing cards ── */}
      <div className="space-y-5">
        <div className="text-center space-y-1">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
            Pro subscription plans
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            All plans start with a free trial. Billed through the App Store or Google Play - no hidden fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {MOBILE_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 border transition-all ${
                plan.highlight
                  ? "bg-slate-900 dark:bg-slate-100 border-transparent shadow-xl shadow-slate-900/15"
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
              }`}
            >
              {/* Badge */}
              {plan.savings && (
                <span className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-3 py-0.5 rounded-full whitespace-nowrap ${
                  plan.highlight
                    ? "bg-pink-500 text-white"
                    : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                }`}>
                  {plan.savings}
                </span>
              )}

              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                plan.highlight ? "text-slate-400 dark:text-slate-500" : "text-slate-400"
              }`}>
                {plan.name}
              </p>

              <div className="flex items-end gap-1 mb-0.5">
                <span className={`text-2xl font-bold ${
                  plan.highlight ? "text-white dark:text-slate-900" : "text-slate-900 dark:text-slate-100"
                }`}>
                  {plan.price}
                </span>
                <span className={`text-xs pb-0.5 ${
                  plan.highlight ? "text-slate-400 dark:text-slate-500" : "text-slate-400"
                }`}>
                  {plan.period}
                </span>
              </div>

              <p className={`text-xs mb-3 font-medium ${
                plan.highlight
                  ? "text-teal-400 dark:text-teal-600"
                  : "text-teal-600 dark:text-teal-400"
              }`}>
                {plan.daily}
              </p>

              <div className={`text-[11px] px-2.5 py-1 rounded-full text-center font-medium ${
                plan.highlight
                  ? "bg-white/15 dark:bg-slate-800/30 text-white dark:text-slate-700"
                  : "bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400"
              }`}>
                {plan.trial}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Download CTA ── */}
      <div className="rounded-3xl bg-slate-900 dark:bg-slate-100 p-8 sm:p-10 text-center space-y-5">
        <p
          className="text-xl sm:text-2xl font-playfair font-bold text-white dark:text-slate-900 leading-snug"
        >
          Start journaling today.{" "}
          <span className="italic text-pink-400 dark:text-pink-500">Free forever, or go Pro.</span>
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Your free trial begins automatically when you choose a Pro plan inside the app.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <AppStoreBadge size="md" />
          <PlayStoreBadge size="md" />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
          <ArrowRight size={11} aria-hidden="true" />
          No credit card required to download
        </p>
      </div>

    </div>
  </section>
)

export default PricingSection
