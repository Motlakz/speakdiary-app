import { ArrowLeft, FileText } from "lucide-react"
import Link from "next/link";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
    <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed space-y-2">{children}</div>
  </div>
)

const TermsOfService = () => (
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
        <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800/30 flex items-center justify-center">
          <FileText size={18} className="text-sky-500" aria-hidden="true" />
        </div>
        <h1
          className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50"
        >
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 20, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      {/* Summary banner */}
      <div className="rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-800/30 p-5">
        <p className="text-sm font-semibold text-sky-700 dark:text-sky-300 mb-1">Plain-English summary</p>
        <p className="text-sm text-sky-600 dark:text-sky-400">
          Use SpeakDiary respectfully and legally. Your journal content belongs to you.
          We provide the service as-is and may update these terms with notice.
          If something goes wrong, our liability is limited to what you paid us.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using SpeakDiary (&quot;the Service&quot;), you agree to be bound by these Terms of Service
            (&quot;Terms&quot;) and our{" "}
            <Link href="/privacy-policy" className="text-pink-500 hover:underline">Privacy Policy</Link>.
            If you do not agree, you must not use the Service.
          </p>
          <p>
            These Terms constitute a binding legal agreement between you and Sello Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
            the company operating SpeakDiary.
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>
            You must be at least 13 years old to use SpeakDiary. By using the Service, you represent and
            warrant that you meet this requirement. If you are under 18, you confirm that a parent or
            legal guardian has reviewed and agreed to these Terms on your behalf.
          </p>
        </Section>

        <Section title="3. Your Account">
          <p>
            You are responsible for maintaining the confidentiality of your login credentials and for all
            activity that occurs under your account. You agree to notify us immediately at{" "}
            <a href="mailto:support@speakdiary.com" className="text-pink-500 hover:underline">
              support@speakdiary.com
            </a>{" "}
            if you suspect unauthorised access.
          </p>
          <p>
            You may not share your account, sell access to it, or impersonate another person.
          </p>
        </Section>

        <Section title="4. Your Content">
          <p>
            All journal entries, voice recordings, letters, and other content you create (&quot;Your Content&quot;)
            remain your intellectual property. We claim no ownership over it.
          </p>
          <p>
            By using the Service, you grant SpeakDiary a limited, non-exclusive, royalty-free licence to
            store, process, and display Your Content solely for the purpose of providing and improving
            the Service to you. We do not use your content to train AI models or share it with third parties
            for marketing purposes.
          </p>
          <p>
            You are solely responsible for Your Content. You represent that it does not violate any
            applicable law or infringe any third-party rights.
          </p>
        </Section>

        <Section title="5. Prohibited Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Use the Service for any unlawful purpose or in violation of any regulations</li>
            <li>Upload content that is defamatory, abusive, hateful, or harassing</li>
            <li>Attempt to reverse engineer, decompile, or extract the source code of the Service</li>
            <li>Use automated bots, scrapers, or scripts to access the Service without our permission</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Attempt to gain unauthorised access to any account, system, or network</li>
            <li>Resell or commercialise any portion of the Service without written consent</li>
          </ul>
        </Section>

        <Section title="6. Subscriptions & Payments">
          <p>
            Paid plans are billed as described on our{" "}
            <Link href="/#pricing" className="text-pink-500 hover:underline">Pricing page</Link>.
            All payments are processed securely by DodoPayments. We do not store your card details.
          </p>
          <p>
            Refunds are governed by our{" "}
            <Link href="/refund-policy" className="text-pink-500 hover:underline">Refund Policy</Link>.
            We reserve the right to change pricing with 30 days&apos; notice to existing subscribers.
          </p>
        </Section>

        <Section title="7. Free Plan">
          <p>
            The Wanderlust free plan is provided at no charge. We reserve the right to modify, limit,
            or discontinue features of the free plan at any time without liability, though we will
            provide reasonable notice where possible.
          </p>
        </Section>

        <Section title="8. Termination">
          <p>
            You may delete your account at any time from the Settings page. Upon deletion, your data
            will be permanently removed within 30 days in accordance with our{" "}
            <Link href="/privacy-policy" className="text-pink-500 hover:underline">Privacy Policy</Link>.
          </p>
          <p>
            We may suspend or terminate your account immediately, without prior notice, if you breach
            these Terms. In such cases, no refund will be issued.
          </p>
        </Section>

        <Section title="9. Disclaimers">
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express
            or implied, including but not limited to fitness for a particular purpose or uninterrupted
            availability.
          </p>
          <p>
            SpeakDiary is a journaling tool and does not provide medical, psychological, or therapeutic
            advice. It is not a substitute for professional mental health care.
          </p>
        </Section>

        <Section title="10. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Sello Labs shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of the Service.
          </p>
          <p>
            Our total aggregate liability for any claims relating to the Service shall not exceed the
            amount you paid us in the 12 months preceding the claim, or USD $10, whichever is greater.
          </p>
        </Section>

        <Section title="11. Governing Law">
          <p>
            These Terms are governed by the laws of the Republic of South Africa. Any disputes shall
            be subject to the exclusive jurisdiction of the courts of South Africa, without regard to
            conflict of law principles.
          </p>
        </Section>

        <Section title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. We will notify you of material changes via
            email or an in-app notice at least 14 days before they take effect. Continued use of the
            Service after changes constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:legal@speakdiary.com" className="text-pink-500 hover:underline">
              legal@speakdiary.com
            </a>.
          </p>
        </Section>
      </div>
    </div>
  </main>
)

export default TermsOfService
