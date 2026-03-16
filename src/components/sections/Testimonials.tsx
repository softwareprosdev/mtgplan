"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 justify-center" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-accent" : "text-neutral-200"}`}
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

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">
          What Our Customers Say
        </h2>

        <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8 md:p-12">
          <StarRating rating={testimonial.rating} />
          <blockquote className="mt-6 text-lg text-neutral-700 italic leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 font-bold text-neutral-900">
            {testimonial.name}
          </p>
          <p className="text-sm text-neutral-700">{testimonial.location}</p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-neutral-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <p className="mt-8 text-xs text-neutral-700 max-w-xl mx-auto">
          <em>
            Testimonials are from real customers. Individual results vary.
            Coverage availability and terms depend on your state, age, and health.
          </em>
        </p>
      </div>
    </section>
  );
}
