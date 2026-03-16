import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, faqSchema } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTABanner } from "@/components/sections/CTABanner";
import { Testimonials } from "@/components/sections/Testimonials";
import Link from "next/link";

const homeFaqs = [
  {
    question: "What is mortgage protection insurance?",
    answer:
      "Mortgage protection insurance (MPI) is a life insurance policy specifically designed to pay off your mortgage if you pass away, become disabled, or lose your job. Unlike traditional life insurance, the benefit goes directly toward your home loan.",
  },
  {
    question: "How much does mortgage protection insurance cost?",
    answer:
      "Costs vary based on your age, health, loan amount, and term length. Many homeowners find coverage for less than $50 per month. Get a free, personalized quote to see your exact rate.",
  },
  {
    question: "Do I need a medical exam to get coverage?",
    answer:
      "In most cases, no medical exam is required. Many mortgage protection policies offer simplified underwriting, meaning you answer a few health questions and can be approved quickly — sometimes the same day.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero />

      <VideoSection />

      {/* Trust Bar */}
      <section className="bg-white border-y border-neutral-200 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
          <p className="text-lg font-semibold text-neutral-900">
            Helping Families Protect Their Homes Nationwide
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 font-semibold text-neutral-900">5.0</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
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
            <span className="font-medium">Licensed in All 50 States</span>
          </div>
        </div>
      </section>

      <Benefits />

      <HowItWorks />

      <Testimonials />

      {/* FAQ Preview */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white border border-neutral-200 rounded-xl p-6 group"
              >
                <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
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
                <p className="mt-4 text-neutral-700">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-primary font-semibold hover:text-primary-light transition-colors"
            >
              View all frequently asked questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
