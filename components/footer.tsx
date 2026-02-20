import { Linkedin, Twitter, PenTool } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-[#080706] text-slate-400">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Top strip */}
        <div className="grid sm:grid-cols-[1fr_auto_auto] gap-10 py-14 border-b border-slate-800">

          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-linear-to-br from-rose-400 to-violet-500 flex items-center justify-center">
                <PenTool size={14} className="text-white" aria-hidden="true" />
              </div>
              <span className="text-base font-bold text-white">
                Speak<span className="text-rose-400">Diary</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              A beautiful space for your thoughts, feelings, and growth - wherever you are.
            </p>
            {/* 3rd-party badges */}
            <div className="flex flex-wrap gap-3 items-center pt-1" aria-label="Featured on">
              <Link
                href="https://dang.ai/tool/ai-journaling-tool-speakdiary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Featured on dang.ai"
              >
                <Image
                  src="https://global-uploads.webflow.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png"
                  alt="SpeakDiary on dang.ai"
                  width={100}
                  height={36}
                  loading="lazy"
                  className="rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                />
              </Link>
              <a
                href="https://www.saashub.com/speakdiary?utm_source=badge&utm_campaign=badge&utm_content=speakdiary&badge_variant=color&badge_kind=approved"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Approved on SaaSHub"
              >
                <Image
                  src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1"
                  alt="SpeakDiary approved on SaaSHub"
                  width={100}
                  height={36}
                  loading="lazy"
                  className="rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://peerlist.io/tlale/project/speak-diary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SpeakDiary on Peerlist"
              >
                <Image
                  src={"/peerlist-badge.svg"}
                  alt="SpeakDiary on Peerlist"
                  width={100}
                  height={36}
                  loading="lazy"
                  className="opacity-70 hover:opacity-100 bg-white rounded-lg transition-opacity"
                />
              </a>
            </div>
          </div>

          {/* Legal links */}
          <nav aria-label="Legal">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {[
                { to: "/privacy-policy",  label: "Privacy Policy" },
                { to: "/refund-policy",   label: "Refund Policy" },
                { to: "/cookie-policy",   label: "Cookie Policy" },
                { to: "/accessibility",   label: "Accessibility" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    href={to}
                    className="text-sm hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Follow</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/motlalepula-sello-37956813a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors duration-150"
                aria-label="Follow SpeakDiary on LinkedIn"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://x.com/SpeakDiaryApp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors duration-150"
                aria-label="Follow SpeakDiary on X / Twitter"
              >
                <Twitter size={16} aria-hidden="true" />
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-slate-600">
          <p>&copy; {year} SpeakDiary. All rights reserved.</p>
          <p>
            Made with ♥ for journalers everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
