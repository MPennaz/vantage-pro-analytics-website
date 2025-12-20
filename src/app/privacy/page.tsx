// src/app/(legal)/privacy/page.tsx
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-default-950/40 text-white">
      <div className="container lg:px-20 py-16 max-w-4xl mx-auto">
        {/* Header / Home link */}
        <div className="mb-10 flex flex-col items-center gap-3">
          <Link href="/" aria-label="Back to home">
            <Image
              src={logo}
              alt="Vantage Pro Analytics"
              className="h-10 w-auto opacity-90 hover:opacity-100 transition"
            />
          </Link>

          <Link href="/" className="text-sm text-default-300 hover:text-white transition">
            ← Back to site
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-2 text-default-200">
          Effective date: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="mt-10 space-y-8 text-default-200 leading-7">
          <section>
            <h2 className="text-xl font-semibold text-white">1. What we collect</h2>
            <p className="mt-2">
              We may collect basic contact information you submit (such as name, email,
              company, and related details) for beta access requests. We may also collect
              standard usage data (such as page views and device/browser information) to
              help improve site performance and reliability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. How we use it</h2>
            <p className="mt-2">
              We use the information you provide to respond to requests, communicate
              about beta access, share product updates you opt into, and maintain or
              improve the website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share information with
              trusted service providers (such as hosting, analytics, and email delivery)
              only as needed to operate and improve our services. These providers are
              expected to protect your information and use it only for the services they
              provide to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Cookies</h2>
            <p className="mt-2">
              We may use cookies or similar technologies for basic functionality and
              analytics. You can control cookie behavior through your browser settings.
              Disabling cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Data retention</h2>
            <p className="mt-2">
              We retain information only as long as needed for the purposes described in
              this policy, unless a longer retention period is required or permitted by
              law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Security</h2>
            <p className="mt-2">
              We use reasonable safeguards designed to protect information. However, no
              method of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Your choices</h2>
            <p className="mt-2">
              You can request access to or deletion of information you submitted by
              contacting{" "}
              <span className="text-white">support@vantageproanalytics.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Updates</h2>
            <p className="mt-2">
              We may update this policy from time to time. Updates will be posted on
              this page with a revised effective date.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
