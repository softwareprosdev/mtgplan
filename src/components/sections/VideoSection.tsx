import Script from "next/script";

export function VideoSection() {
  return (
    <section className="bg-neutral-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-10">
          See How Mortgage Protection Works
        </h2>
        <div
          className="relative w-full"
          style={{ paddingBottom: "56.25%" }}
        >
          <div
            id="container-id"
            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-neutral-200"
          />
        </div>
        <noscript>
          <p className="text-center text-neutral-700 mt-4">
            Please enable JavaScript to view the mortgage protection video.
          </p>
        </noscript>
      </div>
      <Script
        src="https://cdn.quoteandapply.io/widget.js"
        strategy="lazyOnload"
        data-strife-key="QY8KgZDZ5Bv6AfoB"
        data-strife-container-id="container-id"
      />
    </section>
  );
}
