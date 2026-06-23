"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Renovation & Remodeling",
  "3D Visualization",
  "Other",
];

const budgetRanges = [
  "Under $50k",
  "$50k – $150k",
  "$150k – $500k",
  "$500k – $1M",
  "$1M+",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
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
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only for now — structured for a future API endpoint.
    // e.g. await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    console.log("Contact submission:", form);
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
        <h3 className="display mt-6 text-3xl text-charcoal">Thank you, {form.name || "friend"}.</h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          Your enquiry has reached the studio. We&apos;ll be in touch within two
          working days to arrange your consultation.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initial);
            setSubmitted(false);
          }}
          className="mt-8 text-sm font-medium text-bronze hover:text-charcoal"
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
          <label htmlFor="name" className={labelClass}>
            Full Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 555 000 0000"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type
          </label>
          <select
            id="projectType"
            required
            value={form.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={cn(fieldClass, !form.projectType && "text-muted/60")}
          >
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t} className="text-charcoal">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget Range
        </label>
        <select
          id="budget"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          className={cn(fieldClass, !form.budget && "text-muted/60")}
        >
          <option value="" disabled>
            Select a range
          </option>
          {budgetRanges.map((b) => (
            <option key={b} value={b} className="text-charcoal">
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="A few words about your space, goals, and timeline…"
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-ivory transition-colors duration-300 hover:bg-bronze"
      >
        Send Enquiry
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
