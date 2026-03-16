"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/components/seo/Analytics";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "contact" }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      trackEvent("contact_form_submitted");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or call us at (407) 486-4555."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-success mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-neutral-700">
          Thank you for reaching out. A licensed agent will respond within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <Input
        label="Full Name"
        name="name"
        placeholder="Jane Smith"
        value={form.name}
        onChange={handleChange}
        required
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="jane@example.com"
        value={form.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Phone Number"
        name="phone"
        type="tel"
        placeholder="(407) 555-0123"
        value={form.phone}
        onChange={handleChange}
      />

      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-sm font-medium text-neutral-700"
        >
          Message <span className="text-error ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help you?"
          value={form.message}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-200 px-4 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light transition-colors resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-error bg-error/10 border border-error/30 rounded-lg px-4 py-3">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
