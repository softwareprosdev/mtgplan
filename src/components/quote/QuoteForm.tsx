"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { calculateQuote, validateQuoteInputs, type QuoteResult } from "@/lib/quote";
import { trackEvent } from "@/components/seo/Analytics";

type Step = "quote" | "result" | "lead" | "success";

export function QuoteForm() {
  const [step, setStep] = useState<Step>("quote");

  // Quote step state
  const [mortgage, setMortgage] = useState("");
  const [age, setAge] = useState("");
  const [zip, setZip] = useState("");
  const [quoteErrors, setQuoteErrors] = useState<{ mortgage?: string; age?: string; zip?: string }>({});

  // Result state
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);

  // Lead step state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadErrors, setLeadErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [submitting, setSubmitting] = useState(false);

  function handleQuoteSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mortgageNum = Number(mortgage.replace(/[^0-9]/g, ""));
    const ageNum = Number(age);
    const { valid, errors } = validateQuoteInputs(mortgageNum, ageNum, zip);

    if (!valid) {
      setQuoteErrors(errors);
      return;
    }

    setQuoteErrors({});
    const result = calculateQuote(mortgageNum, ageNum);
    setQuoteResult(result);
    setStep("result");
    trackEvent("quote_estimate_submitted");
  }

  function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();

    const errors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) errors.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address";
    if (!/^\+?[\d\s\-().]{7,}$/.test(phone)) errors.phone = "Please enter a valid phone number";

    if (Object.keys(errors).length > 0) {
      setLeadErrors(errors);
      return;
    }

    setLeadErrors({});
    setSubmitting(true);

    const mortgageNum = Number(mortgage.replace(/[^0-9]/g, ""));
    const ageNum = Number(age);

    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "quote",
        name,
        email,
        phone,
        mortgage: mortgageNum,
        age: ageNum,
        zip,
        estimateLow: quoteResult?.low,
        estimateHigh: quoteResult?.high,
      }),
    })
      .then(() => {
        trackEvent("lead_form_submitted");
        setStep("success");
      })
      .catch(() => {
        // Still show success to not block conversion
        trackEvent("lead_form_submitted");
        setStep("success");
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  if (step === "quote") {
    return (
      <form onSubmit={handleQuoteSubmit} className="space-y-5" noValidate>
        <Input
          label="Mortgage Balance"
          name="mortgage"
          type="text"
          placeholder="e.g. $250,000"
          value={mortgage}
          onChange={(e) => setMortgage(e.target.value)}
          error={quoteErrors.mortgage}
          required
        />
        <Input
          label="Your Age"
          name="age"
          type="number"
          placeholder="e.g. 42"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={quoteErrors.age}
          required
        />
        <Input
          label="Zip Code"
          name="zip"
          type="text"
          placeholder="e.g. 32801"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          error={quoteErrors.zip}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          See My Estimate &rarr;
        </button>
      </form>
    );
  }

  if (step === "result" && quoteResult) {
    return (
      <div className="space-y-6">
        <div className="text-center bg-primary/5 rounded-xl p-8">
          <p className="text-sm font-medium text-neutral-600 mb-2">Your Estimated Monthly Premium</p>
          <p className="text-4xl font-bold text-primary">
            ${quoteResult.low} &ndash; ${quoteResult.high}/mo
          </p>
        </div>
        <p className="text-sm text-neutral-500 text-center">
          This is a preliminary estimate based on your age and mortgage balance. Your actual rate may
          vary based on health, loan term, and coverage options. A licensed agent will provide your
          exact personalized rate.
        </p>
        <button
          onClick={() => setStep("lead")}
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Get My Personalized Quote &rarr;
        </button>
      </div>
    );
  }

  if (step === "lead") {
    return (
      <form onSubmit={handleLeadSubmit} className="space-y-5" noValidate>
        <Input
          label="Full Name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={leadErrors.name}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={leadErrors.email}
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="(407) 555-0123"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={leadErrors.phone}
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Get My Personalized Quote \u2192"}
        </button>
        <p className="text-xs text-neutral-500 text-center">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-primary transition-colors">
            Privacy Policy
          </a>
          . We will never sell your information.
        </p>
      </form>
    );
  }

  if (step === "success") {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">Thank You!</h3>
        <p className="text-neutral-600">
          {"We'll reach out shortly with your personalized quote."}
        </p>
      </div>
    );
  }

  return null;
}
