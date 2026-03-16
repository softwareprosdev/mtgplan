const steps = [
  {
    number: 1,
    title: "Get Your Free Quote",
    description:
      "Answer a few quick questions about your mortgage and health. No personal data sold, no commitment required.",
  },
  {
    number: 2,
    title: "Choose Your Plan",
    description:
      "Review your personalized coverage options and select the plan that fits your budget and needs.",
  },
  {
    number: 3,
    title: "You're Covered",
    description:
      "Complete your application online. Coverage can begin quickly — often with no medical exam required.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-neutral-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-5 shrink-0">
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
