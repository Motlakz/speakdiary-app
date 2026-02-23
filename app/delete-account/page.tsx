import { ArrowLeft, UserX } from "lucide-react";
import Link from "next/link";

const updatedAt = "February 23, 2026";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
      {title}
    </h2>
    <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

export default function DeleteAccountPage() {
  return (
    <main
      className="min-h-screen bg-[#faf9f7] dark:bg-[#0c0b0a] py-16 px-5 sm:px-8"
      id="main-content"
    >
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
          <div className="w-10 h-10 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/30 flex items-center justify-center">
            <UserX size={18} className="text-slate-600 dark:text-slate-300" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50">
            SpeakDiary Account Deletion
          </h1>
          <p className="text-sm text-slate-400">Last updated: {updatedAt}</p>
        </div>

        <div className="h-px bg-slate-100 dark:bg-slate-800" />

        {/* Summary banner */}
        <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800/30 p-5">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
            Plain-English summary
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            You can delete your SpeakDiary account from the app in Settings. If you can’t access the app,
            email us from the address linked to your account. Account deletion does not automatically cancel
            App Store / Google Play subscriptions.
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. How to request deletion">
            <ol className="list-decimal list-inside space-y-1 pl-1">
              <li>Open SpeakDiary.</li>
              <li>Go to <strong className="text-slate-700 dark:text-slate-300">Settings</strong>.</li>
              <li>Select <strong className="text-slate-700 dark:text-slate-300">Delete account</strong> and confirm.</li>
            </ol>

            <p>
              If you cannot access the app, email{" "}
              <a href="mailto:privacy@speakdiary.com" className="text-pink-500 hover:underline">
                privacy@speakdiary.com
              </a>{" "}
              from the email linked to your account with subject:{" "}
              <strong className="text-slate-700 dark:text-slate-300">
                Delete My SpeakDiary Account
              </strong>
              .
            </p>
          </Section>

          <Section title="2. What data is deleted">
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>Account identifiers and app-linked account metadata.</li>
              <li>
                Cloud-synced journal data and related user-generated content associated with your account (if you enabled sync).
              </li>
              <li>Notification preferences tied to your account.</li>
            </ul>
            <p className="text-xs text-slate-400">
              Note: If you used SpeakDiary without enabling sync, entries stored only on your device are removed by uninstalling the app
              and/or clearing local app data (depending on your device and settings).
            </p>
          </Section>

          <Section title="3. What may be retained and for how long">
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>
                Limited security, fraud-prevention, and legal compliance logs may be retained for up to{" "}
                <strong className="text-slate-700 dark:text-slate-300">30 days</strong>.
              </li>
              <li>
                Encrypted infrastructure backups may persist for a short rolling period before being overwritten as part of routine operations.
              </li>
            </ul>
          </Section>

          <Section title="4. Store subscriptions">
            <p>
              Deleting your SpeakDiary account does{" "}
              <strong className="text-slate-700 dark:text-slate-300">not</strong> automatically cancel App Store / Google Play subscriptions.
              Cancel subscriptions in your store account settings to avoid future charges.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
