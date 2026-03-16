import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Mortgage Protection Insurance FAQ",
  description:
    "Answers to the most common questions about mortgage protection insurance — coverage, cost, eligibility, the application process, and more.",
  path: "/faq",
});

const faqs = [
  // Coverage
  {
    category: "Coverage",
    question: "What is mortgage protection insurance?",
    answer:
      "Mortgage protection insurance (MPI) is a type of life or disability insurance specifically designed to pay off your mortgage if you die, become disabled, or lose your job. Unlike traditional life insurance, the benefit is directed toward your home loan, ensuring your family can stay in the house. It is separate from private mortgage insurance (PMI), which protects your lender, not you.",
  },
  {
    category: "Coverage",
    question: "What does mortgage protection insurance cover?",
    answer:
      "Coverage depends on the policy you choose, but most MPI policies cover death — paying off the remaining mortgage balance if the insured passes away. Many policies also include optional riders for disability (making your monthly mortgage payments while you are unable to work) and involuntary job loss (covering payments for up to 12 months if you are laid off). Some policies also cover critical illness such as cancer or heart attack.",
  },
  {
    category: "Coverage",
    question: "Is mortgage protection insurance the same as PMI?",
    answer:
      "No. Private mortgage insurance (PMI) is required by lenders when your down payment is less than 20% of the home's value. It protects the lender if you default — not you or your family. Mortgage protection insurance (MPI) is an optional policy that you purchase to protect your family from losing the home if you die, become disabled, or lose your income. They serve completely different purposes.",
  },
  {
    category: "Coverage",
    question:
      "Can I get mortgage protection insurance with a pre-existing condition?",
    answer:
      "Often yes. Many mortgage protection insurance policies feature simplified underwriting or guaranteed acceptance options that do not require a full medical review. You may pay a slightly higher premium, and some exclusions may apply to specific pre-existing conditions, but coverage is typically available. A licensed agent can help identify the right carrier for your health situation.",
  },
  // Cost
  {
    category: "Cost",
    question: "How much does mortgage protection insurance cost?",
    answer:
      "Most homeowners pay between $20 and $70 per month for mortgage protection insurance. Your actual premium depends on your age, health, the size of your mortgage, the length of your loan term, and which coverage options you select. The best way to find your exact rate is to get a free personalized quote at mtgplan.com/quote.",
  },
  {
    category: "Cost",
    question:
      "Are mortgage protection insurance premiums tax deductible?",
    answer:
      "In most cases, mortgage protection insurance premiums are not tax deductible for personal coverage. They are considered a personal insurance expense, similar to regular life insurance premiums. However, if you are self-employed and use the policy as business insurance in limited scenarios, there may be deductibility options. Consult a tax professional for advice specific to your situation.",
  },
  // Process
  {
    category: "Process",
    question:
      "Do I need a medical exam for mortgage protection insurance?",
    answer:
      "In most cases, no medical exam is required. Many MPI policies use simplified underwriting — you answer a short health questionnaire and can be approved quickly, sometimes the same day. Guaranteed-issue policies are also available for applicants with significant health concerns, though they may come with higher premiums or a waiting period before full benefits apply.",
  },
  {
    category: "Process",
    question: "How long does it take to get approved?",
    answer:
      "Most applicants receive a decision within 24 to 72 hours after submitting their application. In many cases, approval can happen the same day. Once approved, your policy documents are delivered digitally and coverage typically begins within 30 days of your first premium payment.",
  },
  {
    category: "Process",
    question: "Can I cancel my mortgage protection insurance?",
    answer:
      "Yes. Most policies include a free-look period of 10 to 30 days after purchase during which you can cancel for a full refund of any premiums paid. After the free-look period, you can still cancel at any time — there are no cancellation penalties or fees. Your coverage simply ends at the next billing cycle.",
  },
  // Eligibility
  {
    category: "Eligibility",
    question: "Who qualifies for mortgage protection insurance?",
    answer:
      "Most homeowners with an active mortgage qualify for some form of mortgage protection insurance. Standard policies typically require applicants to be between 18 and 65 years old and have a primary mortgage on a residential property. Seniors and those with health conditions may still qualify through simplified or guaranteed-issue policies. Contact a licensed agent at (407) 486-4555 to confirm your eligibility.",
  },
  {
    category: "Eligibility",
    question:
      "Is mortgage protection insurance required by my lender?",
    answer:
      "No. Mortgage protection insurance is entirely optional and is never a requirement imposed by your lender. Your lender may require PMI (private mortgage insurance) if your down payment was less than 20%, but that is a separate product. MPI is a voluntary choice you make to protect your family.",
  },
  {
    category: "Eligibility",
    question: "What happens if I refinance my mortgage?",
    answer:
      "If you refinance, your existing mortgage protection policy may need to be updated or replaced because it is tied to the original loan. When you refinance, a new loan is created with a new balance and term. You should inform your insurance agent when you refinance so they can help you adjust your coverage to match the new loan. In some cases, a new policy will be the most cost-effective option.",
  },
];

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((f) => f.category)));
  const schemaFaqs = faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <>
      <JsonLd data={faqSchema(schemaFaqs)} />

      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq" },
            ]}
          />
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-neutral-600">
              Everything you need to know about mortgage protection insurance.
              Can&rsquo;t find your answer?{" "}
              <Link
                href="/contact"
                className="text-primary font-semibold hover:text-primary-light transition-colors"
              >
                Contact us
              </Link>
              .
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-xl font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                {category}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <details
                      key={faq.question}
                      className="bg-white border border-neutral-200 rounded-xl p-6 group"
                    >
                      <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
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
                      <p className="mt-4 text-neutral-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
              </div>
            </div>
          ))}

          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mt-10">
            <p className="font-semibold text-neutral-900 mb-2">
              Ready to See Your Rate?
            </p>
            <p className="text-neutral-700 mb-4">
              Get a free, no-obligation estimate in 60 seconds. No medical exam
              required.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors"
            >
              Get My Free Quote &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Still Have Questions?"
        subtext="Our licensed agents are available to answer your questions and help you find the right coverage for your family."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
