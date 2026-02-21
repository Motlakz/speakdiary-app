import { ArrowLeft, Accessibility } from "lucide-react"
import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
    <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
)

const AccessibilityPage = () => (
  <main className="min-h-screen bg-[#faf9f7] dark:bg-[#0c0b0a] py-16 px-5 sm:px-8" id="main-content">
    <div className="max-w-2xl mx-auto space-y-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to home
      </Link>

      <div className="space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-violet-50 dark:bg-violet-950/40 border border-violet-100 dark:border-violet-800/30 flex items-center justify-center">
          <Accessibility size={18} className="text-violet-500" aria-hidden="true" />
        </div>
        <h1
          className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50"
        >
          Accessibility Statement
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 20, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      {/* Commitment banner */}
      <div className="rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-800/30 p-5">
        <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-1">Our commitment</p>
        <p className="text-sm text-violet-600 dark:text-violet-400">
          SpeakDiary is committed to ensuring our application is accessible to everyone, including
          people with disabilities. We strive to meet or exceed WCAG 2.1 Level AA guidelines.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="1. Conformance Status">
          <p>
            We aim to conform to the{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
            </a>. We are continuously
            working to improve conformance and address known gaps.
          </p>
        </Section>

        <Section title="2. What We've Implemented">
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Semantic HTML landmarks (<code className="font-urbanist text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">main</code>, <code className="font-urbanist text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">nav</code>, <code className="font-urbanist text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">header</code>, <code className="font-urbanist text-xs bg-slate-100 dark:bg-slate-800 px-1 rounded">footer</code>) for screen reader navigation</li>
            <li>ARIA labels on all interactive elements without visible text</li>
            <li>Keyboard-navigable interface — all actions accessible without a mouse</li>
            <li>Visible focus indicators on interactive elements</li>
            <li>Minimum contrast ratios of 4.5:1 for normal text, 3:1 for large text</li>
            <li>Responsive design that works from 320px wide screens upward</li>
            <li>Dark mode support for reduced eye strain</li>
            <li>Voice input as a first-class feature — reducing barriers to text entry</li>
            <li>Alternative text on all meaningful images</li>
            <li>Videos include captions and are not set to autoplay with sound</li>
            <li>No content flashes more than three times per second</li>
            <li>Skip-to-content link available at the top of each page</li>
          </ul>
        </Section>

        <Section title="3. Known Limitations">
          <p>
            We are aware of the following areas we are actively working to improve:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Some older audio recordings may not yet have full transcripts</li>
            <li>Complex data visualisations (mood charts) currently lack full text alternatives</li>
            <li>Some third-party embedded content may not meet our standards</li>
          </ul>
          <p>We aim to address all known limitations by Q3 2025.</p>
        </Section>

        <Section title="4. Assistive Technologies Tested">
          <p>SpeakDiary has been tested with the following assistive technologies:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>VoiceOver (iOS and macOS)</li>
            <li>TalkBack (Android)</li>
            <li>NVDA + Firefox (Windows)</li>
            <li>JAWS + Chrome (Windows)</li>
            <li>Keyboard-only navigation across all major browsers</li>
          </ul>
        </Section>

        <Section title="5. Feedback & Contact">
          <p>
            We welcome feedback on the accessibility of SpeakDiary. If you encounter any barriers or
            need content in an accessible format, please contact us:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              Email:{" "}
              <a href="mailto:accessibility@speakdiary.com" className="text-pink-500 hover:underline">
                accessibility@speakdiary.com
              </a>
            </li>
          </ul>
          <p>We aim to respond to accessibility feedback within 2 business days.</p>
        </Section>

        <Section title="6. Formal Complaints">
          <p>
            If you are not satisfied with our response, you may contact the relevant national
            accessibility authority in your country. For South Africa, this is the{" "}
            <a
              href="https://www.sahrc.org.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              South African Human Rights Commission
            </a>.
          </p>
        </Section>
      </div>
    </div>
  </main>
)

export default AccessibilityPage
