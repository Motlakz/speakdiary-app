"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { FaApple } from "react-icons/fa"
import { BiLogoPlayStore } from "react-icons/bi"
import { ThemeToggle } from "./common/mode-toggle"

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const AppStoreBadge = () => (
  <Link
    href="#"
    aria-label="Download SpeakDiary on the App Store"
    className="
      inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl
      bg-slate-900 dark:bg-slate-100
      text-white dark:text-slate-900
      hover:bg-slate-700 dark:hover:bg-slate-200
      transition-colors duration-150 shadow-sm
    "
  >
    <FaApple />
    <span className="text-left leading-tight">
      <span className="block text-[9px] opacity-70 font-normal">Download on the</span>
      <span className="block text-[11px] font-semibold tracking-tight">App Store</span>
    </span>
  </Link>
)

const PlayStoreBadge = () => (
  <Link
    href="#"
    aria-label="Get SpeakDiary on Google Play"
    className="
      inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl
      bg-white dark:bg-slate-900
      text-slate-900 dark:text-white
      border border-slate-200 dark:border-slate-700
      hover:bg-slate-50 dark:hover:bg-slate-800
      transition-colors duration-150 shadow-sm
    "
  >
    <BiLogoPlayStore />
    <span className="text-left leading-tight">
      <span className="block text-[9px] opacity-60 font-normal">Get it on</span>
      <span className="block text-[11px] font-semibold tracking-tight">Google Play</span>
    </span>
  </Link>
)

// ── Nav links ──────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: "about",    label: "About"    },
  { id: "features", label: "Features" },
  { id: "pricing",  label: "Pricing"  },
]

// ── Component ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const mobileMenuRef               = useRef<HTMLDivElement>(null)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (isMenuOpen && !mobileMenuRef.current?.contains(e.target as Node)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [isMenuOpen])

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const handleNavClick = (id: string) => {
    scrollTo(id)
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* ── Desktop nav ───────────────────────────────────────────────────── */}
      <motion.nav
        aria-label="Main navigation"
        className="fixed top-5 left-0 right-0 z-50 px-4"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className={`
            flex items-center justify-between rounded-2xl px-5 py-3
            transition-all duration-300
            ${scrolled
              ? "bg-white/90 dark:bg-[#0e0e0e]/90 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-slate-200/60 dark:border-white/10"
              : "bg-white/70 dark:bg-[#0e0e0e]/60 backdrop-blur-md border border-slate-200/40 dark:border-white/5"
            }
          `}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src={"/logo.png"}
                alt="SpeakDiary logo"
                width={32}
                height={32}
                className="rounded-lg object-cover"
                priority
              />
              <span className="font-semibold text-[15px] tracking-tight text-slate-800 dark:text-slate-100">
                Speak<span className="text-pink-500">Diary</span>
              </span>
            </Link>

            {/* Center nav links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="
                    cursor-pointer px-3.5 py-1.5 rounded-xl text-sm font-medium
                    text-slate-600 dark:text-slate-400
                    hover:text-slate-900 dark:hover:text-slate-100
                    hover:bg-slate-100 dark:hover:bg-white/8
                    transition-all duration-150
                  "
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Right — download badges */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="
                md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                text-slate-600 dark:text-slate-400
                hover:bg-slate-100 dark:hover:bg-white/8
                transition-colors duration-150
              "
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="
                bg-white/95 dark:bg-[#111]/95 backdrop-blur-2xl
                rounded-2xl border border-slate-200/60 dark:border-white/10
                shadow-2xl overflow-hidden
              ">
                {/* Nav links */}
                <nav className="p-4 space-y-1">
                  {NAV_LINKS.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => handleNavClick(id)}
                      className="
                        w-full text-left flex items-center
                        px-3 py-2.5 rounded-xl text-sm font-medium
                        text-slate-700 dark:text-slate-300
                        hover:text-slate-900 dark:hover:text-slate-100
                        hover:bg-slate-100 dark:hover:bg-white/8
                        transition-colors duration-150
                      "
                    >
                      {label}
                    </button>
                  ))}
                </nav>

                {/* Download badges */}
                <div className="px-4 pb-5 pt-2 border-t border-slate-100 dark:border-white/8 space-y-3">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 px-1">
                    Download the app
                  </p>
                  <div className="flex gap-2">
                    <ThemeToggle />
                    <AppStoreBadge />
                    <PlayStoreBadge />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
