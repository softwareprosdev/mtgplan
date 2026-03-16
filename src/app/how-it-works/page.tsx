import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "How Mortgage Protection Insurance Works",
  description:
    "See how easy it is to get mortgage protection insurance with MTGPlan. Three simple steps: get a quote, choose your plan, and you're covered.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "How It Works", href: "/how-it-works" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Getting Protected Is Simple
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We&rsquo;ve made the process of getting mortgage protection insurance
            as easy as possible. Most families are fully covered in just a few
            days &mdash; no complicated paperwork, no medical exam required.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-md">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                  Get Your Free Quote
                </h2>
                <p className="text-neutral-700 mb-4 text-lg">
                  Start by entering a few basic details: your mortgage balance,
                  your age, and your zip code. In seconds, you&rsquo;ll see an
                  estimated monthly premium with no obligation to buy.
                </p>
                <p className="text-neutral-700 mb-6">
                  Our quote tool uses real actuarial data to give you a
                  realistic estimate. You won&rsquo;t be asked for a credit card
                  or Social Security number — just the basics to calculate your
                  rate.
                </p>
                <Button href="/quote" variant="primary" size="md">
                  Get My Free Quote
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-dashed border-primary/30 ml-8 h-8 md:h-4" />

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-md">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                  Choose Your Plan
                </h2>
                <p className="text-neutral-700 mb-4 text-lg">
                  After your quote, a licensed mortgage protection specialist
                  will reach out to walk you through your coverage options and
                  help you build a plan that fits your life.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {[
                    {
                      name: "Death Benefit",
                      desc: "Policy pays off your full remaining mortgage balance if you pass away.",
                    },
                    {
                      name: "Disability Rider",
                      desc: "Covers your monthly mortgage payments if you become unable to work.",
                    },
                    {
                      name: "Job Loss Rider",
                      desc: "Protects your payments for up to 12 months if you're involuntarily laid off.",
                    },
                  ].map((opt) => (
                    <div
                      key={opt.name}
                      className="bg-white border border-neutral-200 rounded-xl p-4"
                    >
                      <p className="font-semibold text-neutral-900 mb-1">
                        {opt.name}
                      </p>
                      <p className="text-sm text-neutral-600">{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-neutral-600 text-sm">
                  You choose exactly how much coverage you need. Add only the
                  riders that matter to your family&rsquo;s situation.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-l-2 border-dashed border-primary/30 ml-8 h-8 md:h-4" />

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-success text-white flex items-center justify-center text-2xl font-bold shadow-md">
                  ✓
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
                  You&rsquo;re Covered
                </h2>
                <p className="text-neutral-700 mb-4 text-lg">
                  After completing the short application (most are approved with
                  no medical exam), your policy activates and your family is
                  protected. You&rsquo;ll receive your policy documents
                  digitally, and coverage typically begins within 30 days.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  {[
                    "Policy documents delivered digitally",
                    "Fixed monthly premium — never changes",
                    "Coverage lasts the full term of your mortgage",
                    "Claims paid directly to your lender",
                    "Cancel any time with no penalty",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-success shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-8">
            Common Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white border border-neutral-200 rounded-xl p-6 group">
              <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between">
                Do I need to pass a medical exam?
                <svg
                  className="w-5 h-5 text-neutral-700 shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-neutral-700">
                In most cases, no medical exam is required. Many mortgage
                protection policies use simplified underwriting &mdash; you
                answer a few health questions and can be approved quickly,
                sometimes the same day. Guaranteed-issue options are also
                available for those with significant health conditions.
              </p>
            </details>

            <details className="bg-white border border-neutral-200 rounded-xl p-6 group">
              <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between">
                How long does approval take?
                <svg
                  className="w-5 h-5 text-neutral-700 shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-neutral-700">
                Most applicants receive a decision within 24 to 72 hours. In
                many cases, coverage can be approved the same day the application
                is submitted. Once approved, your policy documents are delivered
                digitally and coverage typically begins within 30 days.
              </p>
            </details>

            <details className="bg-white border border-neutral-200 rounded-xl p-6 group">
              <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between">
                Can I cancel if I change my mind?
                <svg
                  className="w-5 h-5 text-neutral-700 shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-neutral-700">
                Yes. Most mortgage protection policies include a free-look period
                (typically 30 days) during which you can cancel for a full
                refund. After that, you can cancel any time &mdash; there are no
                cancellation penalties or fees.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Get Started?"
        subtext="Get your free quote in 60 seconds and let a licensed agent build the right plan for your family."
      />
    </>
  );
}
