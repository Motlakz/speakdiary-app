import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
    <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
)

const PrivacyPolicy = () => (
  <main className="min-h-screen bg-[#faf9f7] dark:bg-[#0c0b0a] py-16 px-5 sm:px-8" id="main-content">
    <div className="max-w-2xl mx-auto space-y-10">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to home
      </Link>

      {/* Header */}
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30 flex items-center justify-center">
          <Shield size={18} className="text-pink-500" aria-hidden="true" />
        </div>
        <h1
          className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50"
        >
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 20, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      <div className="space-y-8">
        <Section title="1. Introduction">
          <p>
            SpeakDiary (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when
            you use our application and services.
          </p>
          <p>
            By using SpeakDiary, you agree to the collection and use of information in accordance
            with this policy. If you do not agree, please do not use our services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p><strong className="text-slate-700 dark:text-slate-300">Account data</strong> — When you register, we collect your name, email address, and a hashed password.</p>
          <p><strong className="text-slate-700 dark:text-slate-300">Journal content</strong> — Text entries, voice recordings, and any media you upload. This content is encrypted at rest.</p>
          <p><strong className="text-slate-700 dark:text-slate-300">Usage data</strong> — Anonymized analytics such as feature interactions, session duration, and crash reports to help us improve the app.</p>
          <p><strong className="text-slate-700 dark:text-slate-300">Device data</strong> — Device type, operating system, and IP address for security and fraud prevention.</p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use your data solely to provide, improve, and personalise SpeakDiary. Specifically:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>To authenticate you and maintain your account</li>
            <li>To store and retrieve your journal entries securely</li>
            <li>To generate AI-powered prompts and insights</li>
            <li>To send you important service notifications</li>
            <li>To detect and prevent fraud or abuse</li>
          </ul>
          <p>We do <strong className="text-slate-700 dark:text-slate-300">not</strong> sell, rent, or trade your personal data to third parties for marketing purposes.</p>
        </Section>

        <Section title="4. Data Storage & Security">
          <p>
            Your journal content is encrypted at rest using AES-256 and in transit using TLS 1.3.
            We use industry-standard infrastructure providers with SOC 2 compliance.
          </p>
          <p>
            Voice recordings are processed for transcription and then stored in your encrypted account.
            You may delete any recording at any time from within the app.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain your data for as long as your account is active. If you delete your account,
            we will permanently remove your data within 30 days, except where retention is required
            by law.
          </p>
        </Section>

        <Section title="6. Your Rights (GDPR / POPIA)">
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Access a copy of your personal data</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li>Restrict or object to processing</li>
            <li>Data portability — export your journal in standard formats</li>
            <li>Lodge a complaint with your supervisory authority</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:privacy@speakdiary.com" className="text-pink-500 hover:underline">
              privacy@speakdiary.com
            </a>.
          </p>
        </Section>

        <Section title="7. Third-Party Services">
          <p>We may use third-party services including:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li><strong className="text-slate-700 dark:text-slate-300">DodoPayments</strong> — Payment processing (we never store card details)</li>
            <li><strong className="text-slate-700 dark:text-slate-300">OpenAI</strong> — AI prompt generation (inputs are not used to train their models under our agreement)</li>
            <li><strong className="text-slate-700 dark:text-slate-300">Firebase / Google</strong> — Authentication and real-time database</li>
          </ul>
          <p>Each third party operates under their own privacy policy and data agreements.</p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            SpeakDiary is not directed to children under the age of 13. We do not knowingly collect
            personal information from children. If you believe a child has provided us with personal
            data, please contact us immediately.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes
            via email or an in-app notice. The &quot;Last updated&quot; date at the top reflects the most recent revision.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            Questions or concerns? Reach us at{" "}
            <a href="mailto:privacy@speakdiary.com" className="text-pink-500 hover:underline">
              privacy@speakdiary.com
            </a>.
          </p>
        </Section>
      </div>
    </div>
  </main>
)

export default PrivacyPolicy
