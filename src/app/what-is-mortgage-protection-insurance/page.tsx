import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata = createMetadata({
  title: "What Is Mortgage Protection Insurance? Complete Guide (2026)",
  description:
    "Mortgage protection insurance pays off your mortgage if you die, become disabled, or lose your job. Learn how it works, what it costs, and whether you need it.",
  path: "/what-is-mortgage-protection-insurance",
});

export default function WhatIsMortgageProtectionInsurancePage() {
  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: "What Is Mortgage Protection Insurance?",
                href: "/what-is-mortgage-protection-insurance",
              },
            ]}
          />
        </div>
      </div>

      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page header */}
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              What Is Mortgage Protection Insurance? Complete Guide (2026)
            </h1>
            <p className="text-lg text-neutral-600">
              Updated March 2026 &mdash; 10 min read
            </p>
          </header>

          {/* AEO Summary Box */}
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl p-6 mb-10">
            <p className="font-semibold text-neutral-900 mb-1">Quick Answer</p>
            <p className="text-neutral-700">
              Mortgage protection insurance (MPI) is a specialized life insurance
              policy that pays off your remaining mortgage balance if you die,
              become disabled, or lose your job. Unlike standard life insurance,
              the payout goes directly toward your home loan, ensuring your
              family keeps the house. Most policies require no medical exam and
              can be approved within days.
            </p>
          </div>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="bg-neutral-100 rounded-xl p-6 mb-12"
          >
            <p className="font-semibold text-neutral-900 mb-3">
              In This Guide
            </p>
            <ol className="space-y-2 text-primary font-medium">
              <li>
                <a
                  href="#what-is-mpi"
                  className="hover:text-primary-light transition-colors"
                >
                  1. What Is Mortgage Protection Insurance?
                </a>
              </li>
              <li>
                <a
                  href="#how-does-it-work"
                  className="hover:text-primary-light transition-colors"
                >
                  2. How Does It Work?
                </a>
              </li>
              <li>
                <a
                  href="#who-needs-it"
                  className="hover:text-primary-light transition-colors"
                >
                  3. Who Needs It?
                </a>
              </li>
              <li>
                <a
                  href="#types-of-coverage"
                  className="hover:text-primary-light transition-colors"
                >
                  4. Types of Coverage
                </a>
              </li>
              <li>
                <a
                  href="#pros-and-cons"
                  className="hover:text-primary-light transition-colors"
                >
                  5. Pros and Cons
                </a>
              </li>
              <li>
                <a
                  href="#how-much-does-it-cost"
                  className="hover:text-primary-light transition-colors"
                >
                  6. How Much Does It Cost?
                </a>
              </li>
              <li>
                <a
                  href="#how-to-get-covered"
                  className="hover:text-primary-light transition-colors"
                >
                  7. How to Get Covered
                </a>
              </li>
              <li>
                <a
                  href="#related-articles"
                  className="hover:text-primary-light transition-colors"
                >
                  8. Related Articles
                </a>
              </li>
            </ol>
          </nav>

          {/* Section 1: What Is MPI */}
          <section id="what-is-mpi" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              What Is Mortgage Protection Insurance?
            </h2>
            <p className="text-neutral-700 mb-4">
              Mortgage protection insurance (MPI) is a type of life or
              disability insurance tied directly to your home loan. When you
              purchase an MPI policy, you pay monthly premiums in exchange for a
              guarantee: if a covered event occurs, the insurer pays off some or
              all of your outstanding mortgage balance. The result is that your
              family can stay in their home even if the primary earner is no
              longer able to make payments.
            </p>
            <p className="text-neutral-700 mb-6">
              MPI policies are typically offered as decreasing term policies
              (where coverage declines as your mortgage balance decreases) or
              level term policies (where coverage stays flat). Unlike traditional
              life insurance, the benefit is paid directly to your lender rather
              than to your beneficiaries.
            </p>

            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              MPI vs. PMI: What&apos;s the Difference?
            </h3>
            <p className="text-neutral-700 mb-4">
              These two types of insurance are frequently confused, but they
              protect very different parties:
            </p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900">
                      &nbsp;
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900">
                      MPI (Mortgage Protection Insurance)
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900">
                      PMI (Private Mortgage Insurance)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Protects
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      You and your family
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      The lender
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Required?
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Optional (your choice)
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Required if down payment &lt; 20%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Pays Out When
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      You die, become disabled, or lose your job
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      You default on the loan
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Who Benefits
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Your family (stays in the home)
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      The lender (recoups losses)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: How Does It Work */}
          <section id="how-does-it-work" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              How Does Mortgage Protection Insurance Work?
            </h2>
            <p className="text-neutral-700 mb-4">
              Once you purchase an MPI policy and begin paying premiums, you are
              covered for specific triggering events. Depending on the policy you
              choose, coverage may activate under one or more of these
              circumstances:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-neutral-900">Death:</strong>{" "}
                  <span className="text-neutral-700">
                    The most common trigger. If the insured homeowner dies during
                    the policy term, the insurer pays the remaining mortgage
                    balance directly to the lender, eliminating the debt
                    entirely.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-neutral-900">Disability:</strong>{" "}
                  <span className="text-neutral-700">
                    If you become disabled and can no longer work, the policy
                    makes your monthly mortgage payments for a set period
                    (typically up to 24 months) while you recover or transition.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-neutral-900">
                    Involuntary Job Loss:
                  </strong>{" "}
                  <span className="text-neutral-700">
                    Some policies include unemployment riders that cover mortgage
                    payments if you are laid off through no fault of your own,
                    typically for 6 to 12 months.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-neutral-900">
                    Critical Illness (select policies):
                  </strong>{" "}
                  <span className="text-neutral-700">
                    A growing number of MPI products include riders for serious
                    diagnoses such as cancer, heart attack, or stroke that
                    prevent you from earning income.
                  </span>
                </div>
              </li>
            </ul>
            <p className="text-neutral-700">
              The policy term is usually matched to your mortgage term (e.g., 15
              or 30 years). When the mortgage is paid off or sold, the policy
              typically ends.
            </p>
          </section>

          {/* Section 3: Who Needs It */}
          <section id="who-needs-it" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Who Needs Mortgage Protection Insurance?
            </h2>
            <p className="text-neutral-700 mb-6">
              MPI is not right for everyone, but it can be essential for certain
              homeowners. You may especially benefit if you fall into one of
              these groups:
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Single-income households",
                  detail:
                    "If one partner earns all or most of the household income, losing that income — through death, disability, or job loss — could make the mortgage immediately unaffordable. MPI closes this gap.",
                },
                {
                  label: "New homebuyers with little equity",
                  detail:
                    "Early in a mortgage, you owe close to the full purchase price. A death at this stage would leave a large balance for survivors. MPI provides protection precisely when the financial exposure is greatest.",
                },
                {
                  label: "Self-employed workers",
                  detail:
                    "Traditional disability insurance can be difficult for freelancers and business owners to qualify for. MPI often has simplified underwriting, making it an accessible safety net.",
                },
                {
                  label: "Families with children at home",
                  detail:
                    "Parents want to ensure their children have a stable home regardless of what happens. MPI ensures the house is never at risk of foreclosure during a family crisis.",
                },
                {
                  label: "Older homebuyers or those with health conditions",
                  detail:
                    "Qualifying for traditional life insurance can be challenging for those over 50 or with pre-existing conditions. Many MPI policies feature guaranteed acceptance or simplified underwriting.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-neutral-200 rounded-xl p-5"
                >
                  <p className="font-semibold text-neutral-900 mb-1">
                    {item.label}
                  </p>
                  <p className="text-neutral-700 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Types of Coverage */}
          <section id="types-of-coverage" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Types of Mortgage Protection Coverage
            </h2>
            <p className="text-neutral-700 mb-6">
              There are three primary policy structures. Understanding the
              differences helps you choose the right fit for your situation:
            </p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900">
                      How It Works
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Level Term
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Coverage amount stays the same throughout the entire
                      policy term, regardless of your remaining balance.
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Homeowners who want maximum payout flexibility for
                      survivors; those who may refinance or need funds beyond
                      the mortgage.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Decreasing Term
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Coverage amount gradually decreases over time, roughly in
                      line with your outstanding mortgage balance.
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Budget-conscious homeowners who want affordable premiums
                      and protection precisely matched to their debt.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-neutral-900">
                      Return of Premium
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      If you outlive the policy term, all premiums paid are
                      returned to you in full — essentially a &ldquo;free&rdquo;
                      policy if no claim is made.
                    </td>
                    <td className="px-4 py-3 text-neutral-700">
                      Homeowners who want peace of mind with a financial upside
                      if they never need to use the coverage.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Pros and Cons */}
          <section id="pros-and-cons" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Pros and Cons of Mortgage Protection Insurance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-success/10 border border-success/30 rounded-xl p-6">
                <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-success"
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
                  Pros
                </h3>
                <ul className="space-y-2 text-neutral-700 text-sm">
                  <li>No medical exam required for most policies</li>
                  <li>Guaranteed acceptance options available</li>
                  <li>Covers disability and job loss, not just death</li>
                  <li>Premiums stay fixed for the policy term</li>
                  <li>Fast approval — sometimes same day</li>
                  <li>Peace of mind knowing your home is protected</li>
                </ul>
              </div>
              <div className="bg-error/10 border border-error/30 rounded-xl p-6">
                <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-error"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cons
                </h3>
                <ul className="space-y-2 text-neutral-700 text-sm">
                  <li>Payout goes to lender, not directly to family</li>
                  <li>
                    Decreasing-term policies reduce coverage over time
                  </li>
                  <li>
                    Can be more expensive than term life for healthy people
                  </li>
                  <li>Coverage ends when the mortgage is paid off</li>
                  <li>Waiting periods may apply for disability/job loss</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: How Much Does It Cost */}
          <section id="how-much-does-it-cost" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              How Much Does Mortgage Protection Insurance Cost?
            </h2>
            <p className="text-neutral-700 mb-4">
              Most homeowners pay between{" "}
              <strong>$20 and $70 per month</strong> for mortgage protection
              insurance, though rates can vary significantly. The factors that
              influence your premium include:
            </p>
            <ul className="space-y-2 mb-6 text-neutral-700">
              {[
                "Your age at the time of application",
                "Your current health and any pre-existing conditions",
                "The outstanding balance on your mortgage",
                "The remaining term of your mortgage (15 vs. 30 years)",
                "The types of coverage included (death only vs. death + disability + job loss)",
                "Whether you choose a level or decreasing term policy",
                "Your gender (some carriers price based on actuarial tables)",
              ].map((factor) => (
                <li key={factor} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5">
              <p className="text-neutral-900 font-semibold mb-1">
                Get Your Exact Rate
              </p>
              <p className="text-neutral-700 mb-3">
                Rates are highly personalized. The best way to find out what
                you&apos;ll pay is to get a free, no-obligation quote tailored
                to your situation.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors"
              >
                Get My Free Quote &rarr;
              </Link>
            </div>
          </section>

          {/* Section 7: How to Get Covered */}
          <section id="how-to-get-covered" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              How to Get Covered in 4 Simple Steps
            </h2>
            <ol className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Get Your Free Quote",
                  desc: "Enter your mortgage balance, age, and zip code to see an estimated monthly premium. No obligation, no personal information required.",
                },
                {
                  step: "2",
                  title: "Speak With a Licensed Agent",
                  desc: "A licensed mortgage protection specialist will review your situation, explain your options, and recommend the right coverage level for your budget.",
                },
                {
                  step: "3",
                  title: "Choose Your Plan",
                  desc: "Select the coverage type (level term, decreasing term, or return of premium) and any riders you want, such as disability or job loss protection.",
                },
                {
                  step: "4",
                  title: "You're Covered",
                  desc: "After a brief application and underwriting process (often requiring no medical exam), your policy activates. Your family is now protected.",
                },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center shrink-0 text-lg">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-neutral-700">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 text-center">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover:bg-accent-hover transition-colors"
              >
                Start Step 1: Get Your Free Quote
              </Link>
            </div>
          </section>

          {/* Section 8: Related Articles */}
          <section id="related-articles" className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  href: "/blog/mortgage-protection-insurance-vs-life-insurance",
                  title: "Mortgage Protection Insurance vs. Life Insurance",
                  desc: "Learn the key differences and which option makes more sense for your situation.",
                },
                {
                  href: "/blog/how-much-does-mortgage-protection-insurance-cost",
                  title: "How Much Does Mortgage Protection Insurance Cost?",
                  desc: "A detailed breakdown of pricing factors and how to get the best rate.",
                },
                {
                  href: "/blog/do-you-need-mortgage-protection-insurance",
                  title: "Do You Really Need Mortgage Protection Insurance?",
                  desc: "An honest look at who benefits most — and who might not need it.",
                },
                {
                  href: "/blog/mortgage-protection-insurance-for-seniors",
                  title: "Mortgage Protection Insurance for Seniors",
                  desc: "Special considerations for homeowners over 60 applying for coverage.",
                },
                {
                  href: "/blog/mortgage-protection-insurance-denied",
                  title: "What to Do If You're Denied",
                  desc: "Steps to take if your initial application is turned down.",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block bg-white border border-neutral-200 rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
                >
                  <p className="font-semibold text-neutral-900 mb-1">
                    {article.title}
                  </p>
                  <p className="text-sm text-neutral-600">{article.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <CTABanner
        headline="Ready to Protect Your Home?"
        subtext="Get your free mortgage protection insurance quote in 60 seconds. No medical exam required."
      />
    </>
  );
}
