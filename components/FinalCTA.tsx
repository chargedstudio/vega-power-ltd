"use client";

import { useState } from "react";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-line bg-ink-800">
          <div className="glow pointer-events-none absolute inset-0" />
          <div className="blueprint pointer-events-none absolute inset-0 opacity-50" />

          <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:p-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tightest text-paper sm:text-4xl lg:text-5xl">
                Book a roof survey
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-silver sm:text-lg">
                One visit tells you the system size, the fixed price and the
                saving &mdash; no cost, no obligation. If the numbers do not work
                for you, you will know quickly.
              </p>

              <ul className="mt-9 space-y-4">
                {[
                  "A firm fixed price per kWh, in writing",
                  "Designed to your half-hourly consumption",
                  "Nothing to pay, at the survey or to switch on",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-silver sm:text-base">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-signal-bright" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-1 border-t border-slate-line/70 pt-7 text-sm text-silver sm:flex-row sm:items-center sm:gap-6">
                <a href="tel:+443300000000" className="font-semibold text-paper hover:text-signal-bright">
                  0330 000 0000
                </a>
                <a href="mailto:hello@vegapower.co.uk" className="hover:text-paper">
                  hello@vegapower.co.uk
                </a>
              </div>
            </div>

            {/* Form — visually complete; demo only, no backend */}
            <div className="rounded-2xl border border-slate-line bg-ink/70 p-6 backdrop-blur-sm sm:p-8">
              {sent ? (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                  <span className="slat block h-7 w-5 bg-signal" />
                  <p className="mt-5 text-lg font-semibold text-paper">
                    Thanks — we&apos;ll be in touch
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-silver">
                    A Vega engineer will call to arrange your survey, usually
                    within one working day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-4"
                >
                  <Field label="Company" name="company" placeholder="Your company" />
                  <Field label="Name" name="name" placeholder="Full name" />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    placeholder="you@company.co.uk"
                  />
                  <Field
                    label="Site postcode"
                    name="postcode"
                    placeholder="e.g. M17 1WA"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-full bg-signal px-6 py-3.5 text-base font-semibold text-paper transition hover:bg-signal-bright"
                  >
                    Request my survey
                  </button>
                  <p className="text-center text-xs text-silver-dim">
                    No cost. No obligation. We never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-silver">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-line bg-ink-700 px-4 py-3 text-sm text-paper placeholder:text-silver-dim focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
      />
    </div>
  );
}
