import { ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
    <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
)

const RefundPolicy = () => (
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
        <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/30 flex items-center justify-center">
          <RefreshCw size={18} className="text-teal-500" aria-hidden="true" />
        </div>
        <h1
          className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50"
        >
          Refund Policy
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 20, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      {/* Quick summary banner */}
      <div className="rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-800/30 p-5">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-1">The short version</p>
        <p className="text-sm text-teal-600 dark:text-teal-400">
          We offer a <strong>30-day money-back guarantee</strong> on all paid plans.
          If you&apos;re not satisfied, contact us within 30 days of purchase for a full refund — no questions asked.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="1. Scope">
          <p>
            This policy applies to all paid subscriptions and one-off purchases made through SpeakDiary,
            including the Luminary monthly plan and the Voyager&apos;s Delight lifetime plan.
          </p>
        </Section>

        <Section title="2. 30-Day Money-Back Guarantee">
          <p>
            If you are dissatisfied with your purchase for any reason, you may request a full refund
            within <strong className="text-slate-700 dark:text-slate-300">30 calendar days</strong> of the
            original transaction date.
          </p>
          <p>
            Refunds will be issued to the original payment method and processed within 5–10 business days
            depending on your card issuer or bank.
          </p>
        </Section>

        <Section title="3. How to Request a Refund">
          <p>Email us at{" "}
            <a href="mailto:billing@speakdiary.com" className="text-pink-500 hover:underline">
              billing@speakdiary.com
            </a>{" "}
            with:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>The email address associated with your account</li>
            <li>Your order or transaction reference number</li>
            <li>A brief description of the issue (optional but helpful)</li>
          </ul>
          <p>We will acknowledge your request within 1 business day and process eligible refunds promptly.</p>
        </Section>

        <Section title="4. Subscriptions & Cancellations">
          <p>
            For the <strong className="text-slate-700 dark:text-slate-300">Luminary monthly plan</strong>,
            you may cancel at any time. Cancellation takes effect at the end of your current billing period —
            you will retain access until then and will not be charged again.
          </p>
          <p>
            Partial-month refunds are not issued for monthly subscriptions cancelled after the 30-day window,
            but your subscription remains active until the period ends.
          </p>
        </Section>

        <Section title="5. Non-Refundable Circumstances">
          <p>Refunds will not be issued in the following situations:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Requests made more than 30 days after purchase</li>
            <li>Accounts terminated for violation of our Terms of Service</li>
            <li>Free plan — no payment was collected</li>
          </ul>
        </Section>

        <Section title="6. Chargebacks">
          <p>
            We ask that you contact us before initiating a chargeback with your bank. Chargebacks
            result in account suspension while under review. We are always happy to resolve billing
            issues directly and promptly.
          </p>
        </Section>

        <Section title="7. Changes to This Policy">
          <p>
            We may revise this policy from time to time. Any changes will be posted on this page
            with an updated date. Continued use of paid services after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="8. Contact">
          <p>
            For any billing questions, email{" "}
            <a href="mailto:billing@speakdiary.com" className="text-pink-500 hover:underline">
              billing@speakdiary.com
            </a>.
          </p>
        </Section>
      </div>
    </div>
  </main>
)

export default RefundPolicy
