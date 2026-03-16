import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "MTGPlan privacy policy — how we collect, use, and protect your personal information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ]}
          />
        </div>
      </div>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 mb-10">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Overview
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              MTGPlan (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard the data you
              provide when using our website at mtgplan.com. By using our
              website, you agree to the practices described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Information We Collect
            </h2>
            <p className="text-neutral-700 mb-3 leading-relaxed">
              When you use our quote form or contact form, we may collect the
              following information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mortgage balance and loan details</li>
              <li>ZIP code</li>
              <li>Age (used for rate estimation)</li>
              <li>Any message or question you include in a contact form</li>
            </ul>
            <p className="text-neutral-700 mt-3 leading-relaxed">
              We also automatically collect standard technical data including
              your IP address, browser type, pages visited, and time spent on
              our site through Google Analytics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              How We Use Your Information
            </h2>
            <p className="text-neutral-700 mb-3 leading-relaxed">
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>
                Contact you about your mortgage protection insurance quote
                request
              </li>
              <li>
                Connect you with a licensed insurance agent who can provide
                personalized coverage options
              </li>
              <li>
                Send transactional email notifications (powered by Resend) such
                as confirmation of your quote submission
              </li>
              <li>
                Respond to questions or messages submitted through our contact
                form
              </li>
              <li>
                Improve our website and services using aggregated, anonymous
                analytics data
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Data Storage
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Your personal information is stored securely on our servers.
              We use industry-standard encryption and security measures to
              protect your data from unauthorized access, alteration, or
              disclosure. We retain your information only as long as necessary
              to fulfill the purposes described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Third-Party Services
            </h2>
            <p className="text-neutral-700 mb-3 leading-relaxed">
              We use a limited number of trusted third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>
                <strong>Resend</strong> — Used to send transactional email
                notifications (e.g., quote confirmation emails). Resend
                processes your email address in accordance with their own
                privacy policy.
              </li>
              <li>
                <strong>Google Analytics</strong> — Used to collect anonymous
                website usage data (page views, session duration, traffic
                sources). No personally identifiable information is shared with
                Google Analytics.
              </li>
            </ul>
            <p className="text-neutral-700 mt-3 leading-relaxed">
              We do not use any other advertising or tracking platforms beyond
              those listed above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              We Do NOT Sell Your Information
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              We do <strong>not</strong> sell, rent, or trade your personal
              information to third-party marketers, data brokers, or any other
              parties for commercial purposes. Your data is used solely to
              connect you with licensed mortgage protection insurance agents and
              to respond to your inquiries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Your Rights
            </h2>
            <p className="text-neutral-700 mb-3 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-700">
              <li>Request a copy of the personal information we hold about you</li>
              <li>
                Request that we correct inaccurate information in our records
              </li>
              <li>Request deletion of your personal data from our systems</li>
              <li>
                Opt out of future marketing communications at any time by
                contacting us
              </li>
            </ul>
            <p className="text-neutral-700 mt-3 leading-relaxed">
              To exercise any of these rights, contact us at{" "}
              <a
                href="tel:4074864555"
                className="text-primary hover:text-primary-light transition-colors"
              >
                (407) 486-4555
              </a>{" "}
              or through our{" "}
              <Link
                href="/contact"
                className="text-primary hover:text-primary-light transition-colors"
              >
                contact form
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Cookies
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Our website uses cookies primarily for analytics purposes via
              Google Analytics. These cookies collect anonymous usage data and
              do not store personally identifiable information. You can disable
              cookies in your browser settings at any time, though this may
              affect some website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">
              Contact Us
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us:
            </p>
            <ul className="mt-3 space-y-1 text-neutral-700">
              <li>
                Phone:{" "}
                <a
                  href="tel:4074864555"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  (407) 486-4555
                </a>
              </li>
              <li>Website: mtgplan.com</li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
