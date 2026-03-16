import { createMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { financialProductSchema } from "@/lib/schema";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata = createMetadata({
  title: "Get Your Free Mortgage Protection Insurance Quote",
  description:
    "Get an instant mortgage protection insurance estimate in seconds. Enter your mortgage balance, age, and zip code to see your personalized monthly rate.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <JsonLd data={financialProductSchema()} />

      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Get a Quote", href: "/quote" },
              ]}
            />
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Get Your Free Mortgage Protection Insurance Quote
            </h1>
            <p className="text-lg text-neutral-600">
              See your estimated monthly premium in seconds — no obligation, no medical exam
              required. A licensed agent will follow up with your exact personalized rate.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
