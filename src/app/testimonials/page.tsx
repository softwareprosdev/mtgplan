import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/lib/testimonials";

export const metadata = createMetadata({
  title: "What Our Clients Say About MTGPlan",
  description:
    "Read testimonials from homeowners who have used MTGPlan to protect their families with mortgage protection insurance.",
  path: "/testimonials",
});

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-accent" : "text-neutral-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Testimonials", href: "/testimonials" },
            ]}
          />
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              What Our Clients Say
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Real stories from homeowners who chose to protect their families
              with mortgage protection insurance through MTGPlan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <Card key={t.name} className="flex flex-col gap-4">
                <StarRating rating={t.rating} />
                <blockquote className="text-neutral-700 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer>
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.location}</p>
                </footer>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-neutral-500 italic">
            Names have been changed for privacy. Results may vary.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Join Thousands of Protected Families"
        subtext="Get your free mortgage protection insurance quote today — no medical exam required."
      />
    </>
  );
}
