import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

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

const RefundPolicy = () => (
  <main
    className="min-h-screen bg-[#faf9f7] dark:bg-[#0c0b0a] py-16 px-5 sm:px-8"
    id="main-content"
  >
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
        <h1 className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50">
          Refund Policy
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 23, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      {/* Quick summary banner */}
      <div className="rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-100 dark:border-teal-800/30 p-5">
        <p className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-1">
          The short version
        </p>
        <p className="text-sm text-teal-600 dark:text-teal-400">
          Refund eligibility depends on <strong>where you purchased</strong>. If you purchased through the
          App Store or Google Play, refunds are handled by Apple/Google under their policies. If you
          purchased directly from us (web/direct checkout), we offer a <strong>30-day refund window</strong>.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="1. Scope">
          <p>
            This policy applies to paid subscriptions and one-time purchases for SpeakDiary. SpeakDiary may
            be sold through different channels (for example: Apple App Store, Google Play, or direct web purchase).
          </p>
        </Section>

        <Section title="2. Purchases Made Through Apple App Store">
          <p>
            If you subscribed or purchased within the iOS app, your purchase is processed by Apple.{" "}
            <strong className="text-slate-700 dark:text-slate-300">
              Apple controls billing and refunds
            </strong>{" "}
            and requests must be submitted through Apple’s refund process.
          </p>
          <p className="text-xs text-slate-400">
            We cannot issue App Store refunds directly, but we’re happy to help you locate your receipt and
            provide support documentation if needed.
          </p>
        </Section>

        <Section title="3. Purchases Made Through Google Play">
          <p>
            If you subscribed or purchased within the Android app, your purchase is processed by Google Play.
            Refunds are subject to Google Play’s refund rules and processes.
          </p>
          <p className="text-xs text-slate-400">
            We cannot override Google Play refund decisions, but we can help with troubleshooting and account access.
          </p>
        </Section>

        <Section title="4. Direct Purchases (Web / External Checkout)">
          <p>
            If you purchased directly from SpeakDiary outside of the app stores, we offer a{" "}
            <strong className="text-slate-700 dark:text-slate-300">30-day refund window</strong> from the
            original transaction date, unless a different refund period was shown at checkout.
          </p>
          <p>
            Approved refunds are issued to the original payment method and may take 5-10 business days to appear,
            depending on your bank or card issuer.
          </p>
        </Section>

        <Section title="5. How to Request Help With Billing">
          <p>
            Email{" "}
            <a href="mailto:billing@speakdiary.com" className="text-pink-500 hover:underline">
              billing@speakdiary.com
            </a>{" "}
            with:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>The email address associated with your SpeakDiary account</li>
            <li>The platform you purchased on (App Store, Google Play, or direct/web)</li>
            <li>Your order/transaction reference (if available)</li>
          </ul>
          <p>
            We’ll respond promptly and help route you to the correct refund process based on your purchase channel.
          </p>
        </Section>

        <Section title="6. Cancellations">
          <p>
            You can cancel subscriptions at any time. Cancellation stops future renewals, and access continues
            until the end of the current billing period unless the store policy states otherwise.
          </p>
          <p className="text-xs text-slate-400">
            If you subscribed via an app store, manage cancellations in your Apple/Google subscription settings.
          </p>
        </Section>

        <Section title="7. Non-Refundable Circumstances (Where Allowed)">
          <p>Where allowed by the applicable platform and law, refunds may not be issued for:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Requests submitted outside the applicable refund window</li>
            <li>Accounts terminated for a serious violation of our Terms of Service</li>
            <li>Free plan usage (no payment collected)</li>
          </ul>
        </Section>

        <Section title="8. Chargebacks">
          <p>
            If you believe there is an error, please contact us before filing a chargeback. Chargebacks can
            restrict account access while the dispute is being investigated to protect users and prevent fraud.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may revise this policy from time to time. Updates will be posted here with a new “Last updated”
            date. Continued use of paid services after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="10. Contact">
          <p>
            Billing support:{" "}
            <a href="mailto:billing@speakdiary.com" className="text-pink-500 hover:underline">
              billing@speakdiary.com
            </a>
            .
          </p>
          <p>
            Terms:{" "}
            <Link href="/terms" className="text-pink-500 hover:underline">
              Terms of Service
            </Link>{" "}
            • Privacy:{" "}
            <Link href="/privacy-policy" className="text-pink-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </Section>
      </div>
    </div>
  </main>
);

export default RefundPolicy;
