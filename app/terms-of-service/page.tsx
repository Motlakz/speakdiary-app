import { ArrowLeft, FileText } from "lucide-react";
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

const TermsOfService = () => (
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
        <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800/30 flex items-center justify-center">
          <FileText size={18} className="text-sky-500" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 23, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      {/* Summary banner */}
      <div className="rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-800/30 p-5">
        <p className="text-sm font-semibold text-sky-700 dark:text-sky-300 mb-1">
          Plain-English summary
        </p>
        <p className="text-sm text-sky-600 dark:text-sky-400">
          Use SpeakDiary respectfully and legally. Your journal content belongs to you.
          We provide the service as-is, may update these terms with notice, and our liability
          is limited to the maximum extent permitted by law.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using SpeakDiary (“the Service”), you agree to be bound by these Terms
            of Service (“Terms”) and our{" "}
            <Link href="/privacy-policy" className="text-pink-500 hover:underline">
              Privacy Policy
            </Link>
            . If you do not agree, do not use the Service.
          </p>
          <p>
            These Terms form a binding legal agreement between you and Sello Software Solutions LTD (“we”, “us”, “our”),
            the operator of SpeakDiary.
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>
            You must be at least 13 years old to use SpeakDiary. If you are under 18, you represent
            that you have permission from a parent or legal guardian to use the Service and that they
            have reviewed these Terms with you.
          </p>
        </Section>

        <Section title="3. The App, Platform Stores, and Additional Terms">
          <p>
            If you download SpeakDiary from the Apple App Store or Google Play, your use may also be
            subject to the applicable platform terms and policies. Apple and Google are not parties to
            these Terms and are not responsible for the Service.
          </p>
          <p>
            If there is a conflict between these Terms and mandatory platform rules that apply to your
            purchase or use, the mandatory platform rules will govern to the extent of the conflict.
          </p>
        </Section>

        <Section title="4. Account Registration and Security">
          <p>
            You are responsible for maintaining the confidentiality of your credentials and for all
            activity under your account. Notify us immediately at{" "}
            <a
              href="mailto:support@speakdiary.com"
              className="text-pink-500 hover:underline"
            >
              support@speakdiary.com
            </a>{" "}
            if you suspect unauthorized access.
          </p>
          <p>
            You may not share your account, sell access to it, impersonate another person, or attempt
            to access accounts that are not yours.
          </p>
        </Section>

        <Section title="5. License to Use the Service">
          <p>
            Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable
            license to access and use SpeakDiary for your personal, non-commercial use (unless we
            explicitly authorize otherwise).
          </p>
          <p>
            We reserve all rights not expressly granted to you. You may not copy, modify, distribute,
            sell, lease, reverse engineer, or attempt to extract source code from the Service except
            where such restriction is prohibited by law.
          </p>
        </Section>

        <Section title="6. Your Content">
          <p>
            All journal entries, voice recordings, transcriptions, letters, and other content you create
            (“Your Content”) remain your intellectual property. We do not claim ownership of Your Content.
          </p>
          <p>
            To operate the Service, you grant us a limited, non-exclusive, worldwide, royalty-free license
            to host, store, back up, process, and display Your Content solely to provide the Service to you
            (for example: syncing, search, transcription, and generating outputs you request).
          </p>
          <p>
            <strong className="text-slate-700 dark:text-slate-300">
              AI features:
            </strong>{" "}
            If you choose to use AI features, we will process the inputs you provide to generate results.
            We do not sell Your Content, and we do not share it with third parties for their own marketing.
            We do not use Your Content to train our own models. (Third-party providers may process inputs
            under agreements intended to protect your data.)
          </p>
          <p>
            You are solely responsible for Your Content and represent that you have all rights necessary
            to submit it and that it does not violate applicable law or infringe third-party rights.
          </p>
        </Section>

        <Section title="7. Prohibited Conduct">
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Use the Service for unlawful purposes or in violation of regulations</li>
            <li>Upload or share content that is unlawful, defamatory, abusive, hateful, or harassing</li>
            <li>Attempt to bypass security, access controls, or rate limits</li>
            <li>Use bots, scrapers, or automation to access the Service without permission</li>
            <li>Interfere with or disrupt the integrity or performance of the Service</li>
            <li>Attempt unauthorized access to any account, system, or network</li>
            <li>Resell or commercialize the Service without written consent</li>
          </ul>
        </Section>

        <Section title="8. Subscriptions, Payments, Trials, and Refunds">
          <p>
            If you purchase a paid plan, you agree to pay the fees shown at checkout and any applicable taxes.
            Pricing and plan features are described on our{" "}
            <Link href="/#pricing" className="text-pink-500 hover:underline">
              Pricing page
            </Link>
            .
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Billing method:</strong>{" "}
            Depending on how you subscribe, payments are processed either through the Apple App Store / Google Play
            (in-app purchases) or via an external processor for direct/web purchases (if offered). We do not store
            full card details.
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">
              Auto-renewal & cancellation:
            </strong>{" "}
            If your subscription is auto-renewing, it will renew unless you cancel before the renewal date.
            You can cancel at any time using the method provided at purchase (for example, via your app store
            subscription settings or your account billing portal, depending on where you subscribed).
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">
              Refunds:
            </strong>{" "}
            Refunds are governed by our{" "}
            <Link href="/refund-policy" className="text-pink-500 hover:underline">
              Refund Policy
            </Link>
            . If you subscribed via an app store, refunds may also be subject to that store’s refund rules.
          </p>

          <p>
            We may change pricing or plan features from time to time. If you are an active subscriber,
            we will provide advance notice where required (for example, at least 30 days’ notice for certain changes),
            and changes will apply at your next renewal unless stated otherwise.
          </p>
        </Section>

        <Section title="9. Free Plan">
          <p>
            The SpeakDiary free plan is provided at no charge. We may modify, limit, or discontinue
            free plan features at any time. Where practical, we will provide reasonable notice in-app
            or on our website.
          </p>
        </Section>

        <Section title="10. Termination and Suspension">
          <p>
            You may stop using the Service at any time. Where available, you may delete your account
            from Settings. Account deletion and data handling are described in our{" "}
            <Link href="/privacy-policy" className="text-pink-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            We may suspend or terminate access to the Service if you materially breach these Terms,
            if we must do so for legal compliance, or if necessary to protect the security and integrity
            of the Service. Where reasonable, we will attempt to provide notice and an opportunity to resolve
            the issue.
          </p>
        </Section>

        <Section title="11. Intellectual Property">
          <p>
            The Service, including its software, design, logos, and content (excluding Your Content),
            is owned by Sello Software Solutions LTD and protected by intellectual property laws. SpeakDiary and related
            marks are our trademarks (or used with permission).
          </p>
        </Section>

        <Section title="12. Feedback">
          <p>
            If you provide feedback, suggestions, or ideas about the Service, you agree we may use them
            without restriction or compensation to you, and without any obligation of confidentiality.
          </p>
        </Section>

        <Section title="13. Third-Party Services and Links">
          <p>
            The Service may integrate with or link to third-party services. We do not control and are not
            responsible for third-party content, policies, or practices. Your use of third-party services is
            at your own risk and may be subject to their separate terms.
          </p>
        </Section>

        <Section title="14. Disclaimers">
          <p>
            The Service is provided “as is” and “as available” without warranties of any kind, express or
            implied, including fitness for a particular purpose and uninterrupted availability, to the maximum
            extent permitted by law.
          </p>
          <p>
            SpeakDiary is a journaling tool and does not provide medical, psychological, or therapeutic advice.
            It is not a substitute for professional care.
          </p>
        </Section>

        <Section title="15. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Sello Software Solutions LTD will not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of the Service.
          </p>
          <p>
            Our total aggregate liability for any claims relating to the Service will not exceed the amount you
            paid us in the 12 months preceding the claim, or USD $10 (or local equivalent), whichever is greater.
          </p>
        </Section>

        <Section title="16. Governing Law">
          <p>
            These Terms are governed by the laws of the Republic of South Africa. Any disputes will be subject
            to the jurisdiction of the courts of South Africa, except where consumer protection laws require
            otherwise.
          </p>
        </Section>

        <Section title="17. Changes to These Terms">
          <p>
            We may update these Terms from time to time. We will notify you of material changes via email
            and/or an in-app notice at least 14 days before they take effect (unless a change is required
            sooner for legal or security reasons). Continued use of the Service after the effective date
            means you accept the updated Terms.
          </p>
        </Section>

        <Section title="18. Severability and Entire Agreement">
          <p>
            If any provision of these Terms is found unenforceable, the remaining provisions will remain in
            full force and effect. These Terms, together with the Privacy Policy and any referenced policies,
            constitute the entire agreement between you and us regarding the Service.
          </p>
        </Section>

        <Section title="19. Contact">
          <p>
            For questions about these Terms, contact{" "}
            <a href="mailto:legal@speakdiary.com" className="text-pink-500 hover:underline">
              legal@speakdiary.com
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  </main>
);

export default TermsOfService;
