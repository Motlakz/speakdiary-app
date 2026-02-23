import { ArrowLeft, Cookie } from "lucide-react";
import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
    <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
);

interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
}

const CookieTable = ({ rows }: { rows: CookieRow[] }) => (
  <div className="overflow-x-auto rounded-xl border border-slate-100 dark:border-slate-800">
    <table className="w-full text-xs">
      <thead>
        <tr className="bg-slate-50 dark:bg-slate-800/60 text-left">
          {["Name", "Provider", "Purpose", "Duration"].map((h) => (
            <th key={h} className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr
            key={`${r.name}-${i}`}
            className={`border-t border-slate-100 dark:border-slate-800 ${
              i % 2 === 1 ? "bg-slate-50/50 dark:bg-slate-800/20" : ""
            }`}
          >
            <td className="px-4 py-3 font-urbanist text-slate-700 dark:text-slate-300">{r.name}</td>
            <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{r.provider}</td>
            <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{r.purpose}</td>
            <td className="px-4 py-3 text-slate-500 dark:text-slate-400 whitespace-nowrap">{r.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CookiePolicy = () => (
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
        <div className="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-800/30 flex items-center justify-center">
          <Cookie size={18} className="text-amber-500" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold font-playfair text-slate-900 dark:text-slate-50">
          Cookie Policy
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 23, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      <div className="space-y-8">
        <Section title="1. What Are Cookies?">
          <p>
            Cookies are small text files stored on your device when you visit a website or use a web
            application. They help enable core functionality and remember certain preferences.
          </p>
        </Section>

        <Section title="2. How We Use Cookies">
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Essential cookies</strong> - Required for core functionality such as
              authentication, security, and session management. These cannot be disabled without affecting core features.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Preference cookies</strong> - Remember settings such as theme (light/dark)
              and language.
            </li>
          </ul>
          <p>
            We do <strong className="text-slate-700 dark:text-slate-300">not</strong> use advertising cookies or cross-site tracking cookies on our website.
          </p>
        </Section>

        <Section title="3. Cookies We Set">
          <CookieTable
            rows={[
              { name: "sd_session", provider: "SpeakDiary", purpose: "Authenticates your session", duration: "Session" },
              { name: "sd_theme", provider: "SpeakDiary", purpose: "Stores light/dark mode preference", duration: "1 year" },
              { name: "sd_lang", provider: "SpeakDiary", purpose: "Stores language preference", duration: "1 year" },
            ]}
          />
        </Section>

        <Section title="4. Third-Party Cookies">
          <p>
            Some cookies may be set by third-party services we use. For example, if you complete a purchase via an external checkout provider,
            that provider may set cookies needed for fraud prevention and transaction security.
          </p>
          <p className="text-xs text-slate-400">
            If you do not use checkout features on the website, third-party cookies may not be set at all.
          </p>
        </Section>

        <Section title="5. Managing Your Cookies">
          <p>
            You can control and/or delete cookies through your browser settings. Disabling essential cookies may prevent you from logging in
            and using core features.
          </p>
        </Section>

        <Section title="6. Updates to This Policy">
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </Section>

        <Section title="7. Contact">
          <p>
            Questions about cookies? Email us at{" "}
            <a href="mailto:privacy@speakdiary.com" className="text-pink-500 hover:underline">
              privacy@speakdiary.com
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  </main>
);

export default CookiePolicy;
