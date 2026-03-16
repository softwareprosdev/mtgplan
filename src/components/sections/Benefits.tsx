import { Card } from "@/components/ui/Card";

const benefits = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
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
    title: "Financial Security",
    description:
      "If the unexpected happens, your mortgage is covered. Your family keeps the home they love without the burden of payments.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
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
    ),
    title: "Family Protection",
    description:
      "Give your loved ones the greatest gift — a home free and clear. No matter what life throws your way, their future is secure.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-primary"
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
    ),
    title: "Fast & Easy Process",
    description:
      "No lengthy medical exams or complicated paperwork. Get approved quickly with a streamlined process designed around your busy life.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
          Why Choose Mortgage Protection Insurance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-700">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
