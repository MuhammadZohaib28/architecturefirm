"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Hospitality & Branding",
  "Planning",
  "Building Control",
  "CGI & Visualisation",
  "Other",
];

const budgetRanges = [
  "Under £50k",
  "£50k - £150k",
  "£150k - £500k",
  "£500k - £1M",
  "£1M+",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  location: "",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full border-b border-stone bg-transparent py-3 text-charcoal outline-none transition-colors placeholder:text-muted/60 focus:border-bronze";
const labelClass = "overline mb-2 block text-charcoal-soft";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[420px] flex-col items-start justify-center rounded-sm border border-stone bg-paper p-10"
      >
        <span className="inline-block h-3 w-3 rotate-45 bg-bronze" />
        <h3 className="display mt-6 text-3xl text-charcoal">
          Thank you, {form.name || "friend"}.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          Your enquiry has been recorded in this preview. Email the studio at
          hello@lissomarchitects.com to send your project details directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
          className="mt-8 rounded-full border border-bronze px-5 py-2.5 text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
        >
          Send another enquiry →
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="jane@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="Your phone number"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>Project Type</label>
          <select
            id="projectType"
            required
            value={form.projectType}
            onChange={(event) => update("projectType", event.target.value)}
            className={cn(fieldClass, !form.projectType && "text-muted/60")}
          >
            <option value="" disabled>Select a type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type} className="text-charcoal">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>Budget Range</label>
          <select
            id="budget"
            value={form.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={cn(fieldClass, !form.budget && "text-muted/60")}
          >
            <option value="" disabled>Select a range</option>
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget} className="text-charcoal">
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>Project Location</label>
          <input
            id="location"
            required
            value={form.location}
            onChange={(event) => update("location", event.target.value)}
            placeholder="Town, city or postcode"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your project</label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="A few words about your space, goals, and timeline..."
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-bronze hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2"
      >
        Send Enquiry
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
