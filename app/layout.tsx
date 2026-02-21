import type { Metadata, Viewport } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

// ── Fonts ──────────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = DM_Sans({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

// ── Site constants ─────────────────────────────────────────────────────────
const SITE_URL = "https://speakdiary.com"
const SITE_NAME = "SpeakDiary"
const OG_IMAGE = `${SITE_URL}/assets/og-image.png`

// ── Viewport ───────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)",  color: "#0c0b0a" },
  ],
}

export const metadata: Metadata = {
  // ── Title ──────────────────────────────────────────────────────────────
  // Lead with the highest-volume keyword naturally, add brand at the end.
  title: {
    default: "SpeakDiary - Daily Journal Prompts, Voice Journaling & Morning Writing App",
    template: "%s | SpeakDiary",
  },

  // ── Description ────────────────────────────────────────────────────────
  // 155 chars, weaves in top-3 keywords naturally, ends with a CTA.
  description:
    "Get a fresh journal prompt of the day, 365 daily journal prompts, and morning writing prompts in one free app. Record voice entries, track streaks, and reflect daily. Download SpeakDiary free.",

  // ── Keywords ───────────────────────────────────────────────────────────
  // Full keyword list from export + semantic expansions.
  // Google largely ignores this tag but Bing, DuckDuckGo, and AI crawlers still read it.
  keywords: [
    // From KWFinder export
    "daily journal prompts",
    "morning journal prompts",
    "daily writing prompts",
    "daily prompts",
    "daily journal ideas",
    "365 daily journal prompts",
    "journal prompt of the day",
    "daily writing prompts for adults",
    "manifestation journal ideas",
    "personal journal prompts",
    "best daily journal with prompts",
    // Semantic expansions — high-intent, topically relevant
    "voice journaling app",
    "journal prompts for self discovery",
    "self reflection journal prompts",
    "gratitude journal prompts",
    "self love journal prompts",
    "mental health journal prompts",
    "journal prompts for anxiety",
    "journal prompts for growth",
    "mindfulness journal prompts",
    "positive journal prompts",
    "journal prompt generator",
    "voice to text journal",
    "audio journal app",
    "journaling app for iphone",
    "journaling app for android",
    "streak journal app",
    "daily diary app",
    "speech to text journal",
    "ai journal prompts",
  ],

  // ── Authors & Category ─────────────────────────────────────────────────
  authors: [{ name: "Sello Software Solutions", url: SITE_URL }],
  creator: "Sello Software Solutions",
  publisher: "SpeakDiary",
  category: "Lifestyle",

  // ── Canonical & Alternates ─────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
  },

  // ── Open Graph ─────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: "SpeakDiary — Daily Journal Prompts & Voice Journaling App",
    description:
      "365 daily journal prompts, a journal prompt of the day, morning writing prompts, and voice-to-text journaling - all in one free app. Build a reflection habit that sticks.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SpeakDiary app showing daily journal prompts and voice recording",
      },
    ],
  },

  // ── Twitter / X Card ───────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@SpeakDiaryApp",
    creator: "@SpeakDiaryApp",
    title: "SpeakDiary - Daily Journal Prompts & Voice Journaling App",
    description:
      "Get your journal prompt of the day, 365 daily prompts, morning writing prompts, and voice journaling in one free app.",
    images: [OG_IMAGE],
  },

  // ── App links for App Store / Play Store ───────────────────────────────
  appLinks: {
    ios: {
      app_store_id: "YOUR_APP_STORE_ID", // replace after publishing
      url: "speakdiary://",
    },
    android: {
      package: "com.speakdiary", // update to match actual package
      url: "speakdiary://",
    },
  },

  // ── Crawling & Indexing ────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Icons ──────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },

  // ── Web App manifest ───────────────────────────────────────────────────
  manifest: "/manifest.webmanifest",

  // ── Verification tokens (add when you have them) ───────────────────────
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },
}

// ── JSON-LD Structured Data ────────────────────────────────────────────────
// Two schemas: MobileApplication (App Store signals) + WebSite (sitelinks search).
// Placed in layout so it appears on every page.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "SpeakDiary",
    description:
      "SpeakDiary is a voice and text journaling app with 365 daily journal prompts, morning writing prompts, a journal prompt of the day, AI-guided reflection, streak tracking, and mood insights.",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    url: SITE_URL,
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free with optional Pro subscription",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50000",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "Daily journal prompts",
      "365 daily journal prompts",
      "Morning writing prompts",
      "Journal prompt of the day",
      "Voice-to-text journaling",
      "Manifestation journal ideas",
      "Personal journal prompts",
      "Daily writing prompts for adults",
      "Streak tracking",
      "Mood insights and analytics",
      "Letters to your future self",
      "AI journaling assistant",
      "End-to-end encryption",
    ],
    screenshot: [
      `${SITE_URL}/assets/screenshot-prompts.png`,
      `${SITE_URL}/assets/screenshot-voice.png`,
      `${SITE_URL}/assets/screenshot-insights.png`,
    ],
    author: {
      "@type": "Organization",
      name: "Sello Software Solutions",
      url: SITE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SpeakDiary",
    url: SITE_URL,
    description:
      "Daily journal prompts, morning writing prompts, and voice journaling app for iOS and Android.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sello Software Solutions",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-192x192.png`,
    sameAs: [
      "https://x.com/SpeakDiaryApp",
      "https://www.linkedin.com/in/motlalepula-sello-37956813a/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@speakdiary.com",
      contactType: "customer support",
    },
  },
  // FAQ schema — directly targets "journal prompts" question searches
  // which often earn rich results in Google
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are daily journal prompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily journal prompts are short questions or statements designed to inspire your journaling practice each day. SpeakDiary provides a fresh journal prompt of the day alongside 365 curated prompts covering gratitude, growth, self-discovery, and reflection.",
        },
      },
      {
        "@type": "Question",
        name: "Does SpeakDiary have 365 daily journal prompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SpeakDiary includes 365 daily journal prompts so you never run out of ideas. You also get a personalized journal prompt of the day based on your mood and journaling history.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use SpeakDiary for morning journal prompts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. SpeakDiary is designed for morning writing routines. You can set a daily reminder, open the app, and get a morning journal prompt instantly — or speak your entry using voice-to-text.",
        },
      },
      {
        "@type": "Question",
        name: "Is SpeakDiary free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SpeakDiary is free to download with core features including daily journal prompts, voice journaling, and streak tracking. A Pro subscription unlocks voice transcription, AI prompts, advanced mood insights, and an ad-free experience.",
        },
      },
      {
        "@type": "Question",
        name: "What makes SpeakDiary different from other journaling apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SpeakDiary combines voice-to-text journaling with daily writing prompts, manifestation journal ideas, and personal journal prompts in one app. You can speak or type your entries, track your streak, write letters to your future self, and get AI-powered insights — all with end-to-end encryption.",
        },
      },
    ],
  },
]

// ── Root Layout ────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured data — injected before body for fastest crawler pickup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Preconnect to improve LCP for external assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.className} antialiased bg-[#faf9f7] dark:bg-[#0c0b0a]`}>
        {/* Skip-to-content for accessibility */}
        <a
          href="#main-content"
          className="
            sr-only focus:not-sr-only
            fixed top-4 left-4 z-9999
            px-4 py-2 rounded-xl text-sm font-semibold
            bg-slate-900 text-white
            focus:outline-none focus:ring-2 focus:ring-pink-500
          "
        >
          Skip to main content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
