import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  headline = "Don't Wait Until It's Too Late",
  subtext = "Thousands of families have protected their homes with MTGPlan. Get your free quote today and see how affordable coverage can be.",
  buttonText = "Get Your Free Quote",
  buttonHref = "/quote",
}: CTABannerProps) {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        {subtext && (
          <p className="text-lg text-blue-100 mb-8">{subtext}</p>
        )}
        <Button href={buttonHref} variant="primary" size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}
