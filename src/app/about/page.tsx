import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";

export const metadata = createMetadata({
  title: "About MTGPlan — Protecting Families Nationwide",
  description:
    "MTGPlan connects homeowners with the mortgage protection insurance they need to keep their families safe. Licensed in all 50 states.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
            ]}
          />
        </div>
      </div>

      {/* Hero / Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            About MTGPlan
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            MTGPlan was built with one mission: to make mortgage protection
            insurance simple, affordable, and accessible for every American
            homeowner. We believe no family should lose their home because of an
            unexpected death, disability, or job loss.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                Getting insurance can feel overwhelming. Between confusing
                jargon, pushy salespeople, and opaque pricing, most people put
                it off until it&rsquo;s too late. We built MTGPlan to change
                that.
              </p>
              <p>
                We partner with licensed insurance carriers and agents across
                all 50 states to give homeowners instant estimates and
                straightforward comparisons. There are no hidden fees, no
                pressure tactics, and no surprises.
              </p>
              <p>
                Our licensed specialists take the time to understand your unique
                situation — your mortgage balance, your family structure, your
                budget — and then help you find coverage that actually fits.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <p className="text-5xl font-bold text-primary mb-2">50</p>
              <p className="text-neutral-700 font-medium mb-6">
                States Licensed
              </p>
              <p className="text-5xl font-bold text-primary mb-2">24h</p>
              <p className="text-neutral-700 font-medium mb-6">
                Average Approval Time
              </p>
              <p className="text-5xl font-bold text-primary mb-2">$0</p>
              <p className="text-neutral-700 font-medium">
                Cost to Get a Quote
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Why Families Trust MTGPlan
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Licensed & Regulated",
                desc: "We operate in full compliance with state insurance regulations across all 50 states. Our agents carry active licenses and are subject to ongoing continuing education requirements.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                title: "Carrier Partnerships",
                desc: "We work with multiple A-rated insurance carriers, which means you get competitive rates and the financial stability that comes with established, reputable providers.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                title: "Secure & Private",
                desc: "Your personal information is encrypted and never sold to third parties. We use it only to connect you with a licensed agent who can help with your coverage.",
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Transparency
              </h3>
              <p className="text-neutral-600">
                We show you exactly what you&rsquo;re paying for, what is
                covered, and what isn&rsquo;t — before you sign anything. No
                fine print surprises.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Simplicity
              </h3>
              <p className="text-neutral-600">
                Insurance is complicated enough. We cut through the jargon and
                make it easy to understand your options in plain language — so
                you can make an informed decision fast.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-neutral-200 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-7 h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Family First
              </h3>
              <p className="text-neutral-600">
                Every decision we make is guided by one question: does this
                genuinely help families protect their homes? If the answer
                isn&rsquo;t yes, we don&rsquo;t do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let Us Help Protect Your Family"
        subtext="Get your free mortgage protection insurance quote today. Licensed agents are ready to help."
      />
    </>
  );
}
