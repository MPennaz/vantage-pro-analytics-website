// src/app/(legal)/terms/page.tsx
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"

export default function TermsPage() {
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

          <Link
            href="/"
            className="text-sm text-default-300 hover:text-white transition"
          >
            ← Back to site
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold">Terms &amp; Conditions</h1>
        <p className="mt-2 text-default-200">
          Effective date: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="mt-10 space-y-8 text-default-200 leading-7">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Overview</h2>
            <p className="mt-2">
              Vantage Pro Analytics provides smart manufacturing tools, including
              dashboards and operational modules. By accessing or using this website,
              you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Beta &amp; Early Access
            </h2>
            <p className="mt-2">
              Certain features may be offered in beta or early-access form. These
              features may change, be limited, or be discontinued at any time and
              are provided “as is” without warranties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Acceptable Use</h2>
            <p className="mt-2">
              You agree not to misuse the site or services, attempt unauthorized
              access, interfere with system availability, or reverse engineer
              protected components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Intellectual Property
            </h2>
            <p className="mt-2">
              All content, software, branding, and materials are the property of
              Vantage Pro Analytics or its licensors and are protected by applicable
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Disclaimers</h2>
            <p className="mt-2">
              The site and any services are provided without warranties of any kind,
              express or implied, including implied warranties of merchantability or
              fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, Vantage Pro Analytics shall not
              be liable for indirect, incidental, special, or consequential damages
              arising from the use of the site or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Changes</h2>
            <p className="mt-2">
              These Terms may be updated periodically. Continued use of the site
              constitutes acceptance of any updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Contact</h2>
            <p className="mt-2">
              Questions or concerns can be directed to{" "}
              <span className="text-white">
                support@vantageproanalytics.com
              </span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
