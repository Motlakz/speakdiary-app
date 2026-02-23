import { ArrowLeft, Shield } from "lucide-react";
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

const PrivacyPolicy = () => (
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
        <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30 flex items-center justify-center">
          <Shield size={18} className="text-pink-500" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-playfair font-bold text-slate-900 dark:text-slate-50">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400">Last updated: February 23, 2026</p>
      </div>

      <div className="h-px bg-slate-100 dark:bg-slate-800" />

      <div className="space-y-8">
        <Section title="1. Introduction">
          <p>
            SpeakDiary (“we”, “us”, or “our”) is a private journaling app that helps you capture
            thoughts through text and voice, and optionally generate AI-powered prompts and insights.
          </p>
          <p>
            <strong className="text-slate-700 dark:text-slate-300">
              Local-first by default:
            </strong>{" "}
            Your journal lives on your device unless you choose to enable cloud sync.
          </p>
          <p>
            This Privacy Policy explains what information we collect, how we use it, how we share it,
            and the choices you have. By using SpeakDiary, you agree to this policy.
          </p>
          <p>
            <strong className="text-slate-700 dark:text-slate-300">
              App Store & Google Play transparency:
            </strong>{" "}
            We aim for this policy to match what we disclose in App Store “App Privacy Details” and
            Google Play “Data safety” disclosures.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>
            We collect the minimum data needed to provide the app. Depending on your use, this may include:
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Account data</strong> - If you create
            an account, we collect your email address and basic account identifiers. If we support
            password-based login, passwords are stored using industry-standard hashing (we do not store
            plain-text passwords).
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Journal content (sensitive by nature)</strong> - Text entries,
            voice recordings, transcriptions, and any media you upload.
          </p>

          <p className="text-xs text-slate-400">
            Local-first: By default, entries are stored locally on your device. If you enable sync,
            encrypted copies of your entries are stored in the cloud to keep your devices in sync.
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Usage & diagnostics</strong> - App
            interactions (e.g., which screens you use), approximate session activity, and crash/diagnostic
            data to improve reliability and performance.
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Device & security signals</strong> - Device type,
            operating system version, language/region settings, IP address (typically short-lived), and
            security-related logs to protect accounts, prevent abuse, and maintain service integrity.
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Payment data</strong> - If you subscribe,
            payments are processed by the Apple App Store / Google Play (or another provider if offered outside the stores).
            We do not store full card numbers or sensitive payment credentials.
          </p>
        </Section>

        <Section title="3. Permissions & Device Access">
          <p>SpeakDiary may request device permissions only when needed for a feature:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Microphone</strong> - to record voice
              entries (optional).
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Photos / Media / Files</strong> - to
              attach media to entries (optional).
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Notifications</strong> - to send reminders
              or important service messages (optional; you can disable anytime in device settings).
            </li>
          </ul>
          <p>
            You can use many features without enabling optional permissions, and you can revoke permissions
            at any time from your device settings.
          </p>
        </Section>

        <Section title="4. End-to-End Encryption and Security">
          <p>
            <strong className="text-slate-700 dark:text-slate-300">
              End-to-End Encryption (E2EE):
            </strong>{" "}
            Your journal entries are encrypted on your device before they are saved. This applies to both
            local storage and cloud sync. When sync is enabled, encrypted entries are uploaded and stored
            in encrypted form.
          </p>
          <p className="text-xs text-slate-400">
            Important: “End-to-end encryption” means encryption happens on your device before upload. If you
            reset the app or lose access to your device/account credentials, you may not be able to recover
            encrypted content without your recovery method (if available).
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">Additional Pro security:</strong>{" "}
            Pro plans may include extra security features (for example, enhanced access controls, advanced
            protection settings, and other security options surfaced in-app). The exact features available may
            vary by platform and plan tier.
          </p>

          <p>
            We also use reasonable administrative, technical, and physical safeguards designed to protect your
            information from unauthorized access, alteration, disclosure, or destruction (for example: encryption
            in transit, access controls, and secure storage practices).
          </p>

          <p className="text-xs text-slate-400">
            No system can be guaranteed 100% secure. You are responsible for maintaining the confidentiality of your
            login credentials and protecting access to your device.
          </p>
        </Section>

        <Section title="5. How We Use Your Information">
          <p>We use your data to operate and improve SpeakDiary, including to:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>Create and maintain your account</li>
            <li>Store entries locally and sync them if you enable cloud sync</li>
            <li>Provide voice transcription and journaling tools you request</li>
            <li>Generate AI-powered prompts and insights (only when you use AI features)</li>
            <li>Send service-related messages (e.g., security notices, billing status, critical updates)</li>
            <li>Monitor, prevent, and investigate fraud, abuse, or security incidents</li>
            <li>Improve app reliability (e.g., crash fixes and performance improvements)</li>
          </ul>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">No selling of personal data:</strong>{" "}
            We do not sell your personal data.
          </p>

          <p>
            <strong className="text-slate-700 dark:text-slate-300">No third-party advertising tracking:</strong>{" "}
            SpeakDiary does not use your journal content to serve third-party ads, and we do not share journal
            content with advertisers.
          </p>
        </Section>

        <Section title="6. AI Features (How Your Content Is Processed)">
          <p>
            If you choose to use AI features (e.g., prompts, summaries, insights), we may process the text you provide
            (and/or a transcription of your voice entry) to generate outputs.
          </p>
          <p>
            <strong className="text-slate-700 dark:text-slate-300">What we send:</strong> Only the minimum input needed
            to generate the requested result (for example, an entry you ask to summarize).
          </p>
          <p>
            <strong className="text-slate-700 dark:text-slate-300">What we don’t do:</strong> We do not allow third-party
            AI providers to use your submitted content to advertise to you.
          </p>
          <p className="text-xs text-slate-400">
            Note: AI outputs may be inaccurate or incomplete and are provided for journaling support, not medical,
            legal, or professional advice.
          </p>
        </Section>

        <Section title="7. Sharing & Disclosure of Data">
          <p>We share data only in limited situations:</p>

          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Service providers (processors)</strong> - vendors that
              help us run the app (e.g., authentication, cloud sync infrastructure, analytics, payments, AI processing).
              They may process data on our behalf under contractual obligations.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Legal and safety</strong> - if required by law, or to
              protect users, prevent fraud/abuse, or respond to lawful requests.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Business changes</strong> - if we are involved in a merger,
              acquisition, or sale, we may transfer information as part of that transaction (we will provide notice where required).
            </li>
          </ul>

          <p>
            We do not share your journal content with third parties for their own marketing purposes.
          </p>
        </Section>

        <Section title="8. Third-Party Services We Use">
          <p>SpeakDiary may use third-party services such as:</p>
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              <strong className="text-slate-700 dark:text-slate-300">OpenAI</strong> - AI features (only when you use AI tools).
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Firebase / Google</strong> - authentication, cloud sync storage,
              and/or diagnostics depending on your app configuration and whether you enable sync.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Apple / Google (stores)</strong> - subscription billing and receipts
              when you subscribe through an app store.
            </li>
          </ul>
          <p>
            Each provider operates under their own privacy policy. We select vendors carefully and limit what we send to what’s needed.
          </p>
        </Section>

        <Section title="9. Data Retention">
          <p>
            Local entries remain on your device until you delete them.
            If you enable sync, encrypted synced data is retained in the cloud until you delete it in the app and/or delete your account,
            subject to limited backup retention.
          </p>
          <p>
            If you delete your account, we will delete or de-identify your personal data within a reasonable period (generally within 30 days),
            except where retention is required by law or necessary for security, fraud prevention, or backup integrity.
          </p>
          <p className="text-xs text-slate-400">
            Backups may persist for a limited time before being overwritten as part of routine operations.
          </p>
        </Section>

        <Section title="10. Your Choices & Controls">
          <ul className="list-disc list-inside space-y-1 pl-1">
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Local-first</strong> - You can use SpeakDiary without enabling cloud sync.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Sync control</strong> - You can enable or disable cloud sync in settings (where available).
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Export</strong> - You may request an export of your journal in a commonly used format (where available).
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Delete</strong> - You may delete entries anytime. You may also request account deletion via in-app controls (if available) or by contacting us.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">Notifications</strong> - You can disable notifications in device settings.
            </li>
            <li>
              <strong className="text-slate-700 dark:text-slate-300">AI features</strong> - You can choose not to use AI tools; journaling features remain available without AI.
            </li>
          </ul>
        </Section>

        <Section title="11. Your Rights (GDPR / POPIA)">
          <p>
            Depending on where you live, you may have rights to access, correct, delete, object to processing, restrict processing,
            and request portability of your personal data, as well as lodge a complaint with a supervisory authority.
          </p>
          <p>
            To exercise your rights, contact us at{" "}
            <a href="mailto:privacy@speakdiary.com" className="text-pink-500 hover:underline">
              privacy@speakdiary.com
            </a>
            .
          </p>
        </Section>

        <Section title="12. International Data Transfers">
          <p>
            If you enable cloud sync or use features that rely on third-party services, your information may be processed and stored in
            countries other than your own. Where required, we use appropriate safeguards for international transfers (for example,
            contractual protections).
          </p>
        </Section>

        <Section title="13. Children’s Privacy">
          <p>
            SpeakDiary is not directed to children under 13, and we do not knowingly collect personal information from children.
            If you believe a child has provided personal data, contact us and we will take appropriate steps to delete it.
          </p>
        </Section>

        <Section title="14. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If changes are significant, we will provide notice through the app
            and/or by email. The “Last updated” date reflects the latest revision.
          </p>
        </Section>

        <Section title="15. Contact Us">
          <p>
            If you have questions about privacy, data use, or deletion requests, contact us at{" "}
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

export default PrivacyPolicy;
