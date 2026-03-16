import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Protect Your Family. Protect Your Home.
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Mortgage protection insurance ensures your family can stay in their
          home no matter what happens. Get a free, no-obligation quote in
          30 seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/quote" variant="primary" size="lg">
            Get Your Free Quote
          </Button>
          <Button
            href="/how-it-works"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
