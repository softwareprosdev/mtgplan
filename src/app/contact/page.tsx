import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = createMetadata({
  title: "Contact MTGPlan",
  description:
    "Contact MTGPlan for questions about mortgage protection insurance. Call (407) 486-4555 or send a message and we'll respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="py-8 px-4 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                Get In Touch
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                Have questions about mortgage protection insurance? Our licensed
                agents are ready to help. We respond to all inquiries within 24
                hours.
              </p>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">
                      Phone / Call Us
                    </p>
                    <a
                      href="tel:4074864555"
                      className="text-primary font-semibold hover:text-primary-light transition-colors text-lg"
                    >
                      (407) 486-4555
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-success"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/14074864555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success font-semibold hover:underline transition-colors text-lg"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                {/* iMessage / SMS */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-1">
                      Text / iMessage
                    </p>
                    <a
                      href="sms:4074864555"
                      className="text-primary font-semibold hover:text-primary-light transition-colors text-lg"
                    >
                      Text Us at (407) 486-4555
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <p className="text-neutral-600 text-sm mb-2">
                  <svg
                    className="w-4 h-4 inline mr-1 text-success"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  We respond within 24 hours on business days.
                </p>
                <p className="text-neutral-500 text-sm">
                  Your information is never sold. See our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:text-primary-light transition-colors underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Right column — form */}
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
