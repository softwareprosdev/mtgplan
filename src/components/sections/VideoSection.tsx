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
          <iframe
            className="absolute inset-0 w-full h-full rounded-xl"
            src="https://www.youtube-nocookie.com/embed/KfaPQ4nuDX0?rel=0&vq=hd1080"
            title="See How Mortgage Protection Works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
