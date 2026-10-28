import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { ArrowLeft, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Rate Global",
  description:
    "Learn about how Rate Global collects, uses, and safeguards information collected through our website and inquiry channels.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 28, 2026";

  return (
    <main className="min-h-screen bg-slate-50/70 py-4 sm:py-8 px-3 sm:px-6 space-y-12">
      {/* Header Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 pt-6 pb-4 overflow-hidden relative">
          <Navbar />
          <SubpageHeader
            currentLabel="Privacy Policy"
            badge="Legal & Data Protection"
            icon={Lock}
            title="Privacy Policy & Data Safeguards"
            description={`Effective Date: ${lastUpdated}. We adhere to strict data minimization, TLS 1.3 encryption, and GDPR/CCPA consumer protections.`}
          />
        </div>
      </div>

      {/* Content Island */}
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-white rounded-[32px] shadow-sm ring-1 ring-slate-900/5 p-8 sm:p-12 lg:p-14">
          <div className="mx-auto max-w-[780px] prose prose-slate text-[15px] leading-relaxed text-slate-600 space-y-8">
            <section>
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                1. Overview and Scope
              </h2>
              <p>
                Rate Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal data and respecting your privacy. This Privacy Policy details our practices concerning data collection, usage, and safeguarding when you interact with our website (<span className="text-slate-900 font-medium">rateglobal.com</span>) or submit project inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                2. Information We Collect
              </h2>
              <p>
                We only collect information that you knowingly and voluntarily provide to us when communicating or requesting service estimates:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li><strong className="text-slate-900">Contact Details:</strong> Your full name and business email address.</li>
                <li><strong className="text-slate-900">Project Details:</strong> Requested service categories, estimated budget ranges, and project descriptions submitted via our contact forms.</li>
                <li><strong className="text-slate-900">Technical Logs:</strong> Standard web server telemetry (IP address, browser type, referral URLs, access timestamps) used strictly for security monitoring and fraud prevention.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                3. Purpose of Data Processing
              </h2>
              <p>We process your information solely to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Evaluate project requirements and deliver technical proposals.</li>
                <li>Communicate directly regarding inquiries and schedule discovery sessions.</li>
                <li>Maintain the security, integrity, and performance of our web infrastructure.</li>
                <li>Comply with legal obligations and protect intellectual property rights.</li>
              </ul>
              <p className="mt-2 font-medium text-slate-900">
                We do not sell, rent, monetize, or trade your personal data to third parties under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                4. Data Security and Retention
              </h2>
              <p>
                All data transmission between your browser and our servers is secured using modern TLS 1.3 encryption. We retain inquiry information only for as long as necessary to fulfill project evaluation or comply with legal record-keeping obligations.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                5. Cookies and Tracking
              </h2>
              <p>
                Our website utilizes minimal functional cookies required for core navigation, CSRF protection, and anonymous aggregate performance diagnostics. We do not employ third-party surveillance ad trackers.
              </p>
            </section>

            <section>
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                6. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction (including GDPR and CCPA protections), you retain the right to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Request access to copies of your personal data.</li>
                <li>Request correction of inaccurate or incomplete records.</li>
                <li>Request complete erasure (&quot;right to be forgotten&quot;) of your information.</li>
                <li>Object to or restrict specific processing operations.</li>
              </ul>
            </section>

            <section className="pt-4 border-t border-slate-100">
              <h2 className="text-[20px] font-semibold text-slate-900 mb-3">
                7. Contact Our Privacy Team
              </h2>
              <p>
                If you have questions, privacy requests, or wish to exercise your rights, please reach out to us at:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-[14px]">
                <div className="font-semibold text-slate-900">Rate Global Privacy Operations</div>
                <div className="text-slate-600">Email: <a href="mailto:privacy@rateglobal.com" className="text-brand-blue hover:underline">privacy@rateglobal.com</a></div>
              </div>
            </section>

            <div className="pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-brand-blue hover:text-blue-700 transition min-h-[44px]"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Island */}
      <div className="mx-auto max-w-[1140px] pb-6">
        <Footer />
      </div>
    </main>
  );
}
