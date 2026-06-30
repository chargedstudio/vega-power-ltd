"use client";

import { useMemo, useState } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { CountUp } from "./ui/CountUp";
import { estimate, gbp, GRID_RATE, VEGA_RATE } from "@/lib/estimate";

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  display: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-silver">{label}</label>
        <span className="text-base font-semibold text-paper">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3"
        aria-label={label}
      />
    </div>
  );
}

export function SavingsEstimator() {
  const [roofArea, setRoofArea] = useState(4000);
  const [annualSpend, setAnnualSpend] = useState(420000);

  const r = useMemo(
    () => estimate({ roofArea, annualSpend }),
    [roofArea, annualSpend]
  );

  const discount = Math.round((1 - VEGA_RATE / GRID_RATE) * 100);

  return (
    <section id="estimator" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Estimate your saving</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tightest text-paper sm:text-4xl">
            Two numbers in. A working estimate out.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-silver sm:text-lg">
            Drag to match your site. This is a directional figure &mdash; a roof
            survey gives you the firm one.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid overflow-hidden rounded-2xl border border-slate-line lg:grid-cols-2">
            {/* Inputs */}
            <div className="border-b border-slate-line bg-ink-800 p-6 sm:p-9 lg:border-b-0 lg:border-r">
              <div className="space-y-9">
                <Slider
                  label="Usable roof area"
                  value={roofArea}
                  min={500}
                  max={20000}
                  step={250}
                  onChange={setRoofArea}
                  display={`${roofArea.toLocaleString("en-GB")} m²`}
                />
                <Slider
                  label="Current annual electricity spend"
                  value={annualSpend}
                  min={50000}
                  max={2000000}
                  step={10000}
                  onChange={setAnnualSpend}
                  display={gbp(annualSpend, { compact: true })}
                />
              </div>

              <div className="mt-9 grid grid-cols-2 gap-4 border-t border-slate-line/70 pt-7">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-paper">
                    <CountUp value={r.kwp} format={(n) => Math.round(n).toLocaleString("en-GB")} />
                    <span className="ml-1 text-base font-medium text-silver-soft">kWp</span>
                  </p>
                  <p className="mt-1 text-xs text-silver-soft">system on your roof</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-paper">
                    <CountUp
                      value={r.generation}
                      format={(n) => Math.round(n / 1000).toLocaleString("en-GB")}
                    />
                    <span className="ml-1 text-base font-medium text-silver-soft">MWh</span>
                  </p>
                  <p className="mt-1 text-xs text-silver-soft">generated each year</p>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="relative bg-ink-700/60 p-6 sm:p-9">
              <div className="glow pointer-events-none absolute inset-0 opacity-70" />
              <div className="relative">
                <p className="text-sm font-medium text-silver">
                  Estimated saving, year one
                </p>
                <p className="mt-2 text-5xl font-semibold tracking-tightest text-signal-bright sm:text-6xl">
                  <CountUp value={r.annualSaving} format={(n) => gbp(n)} />
                </p>

                <div className="mt-7 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-silver">Cut to your electricity bill</span>
                    <span className="font-semibold text-paper">
                      <CountUp value={r.pctOfBill * 100} format={(n) => `${Math.round(n)}%`} />
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ink-500">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-signal to-signal-bright transition-[width] duration-500"
                      style={{ width: `${Math.max(r.pctOfBill * 100, 4)}%` }}
                    />
                  </div>
                </div>

                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-slate-line/70 pt-7">
                  <div>
                    <dt className="text-xs text-silver-soft">Over a 25-year term</dt>
                    <dd className="mt-1 text-xl font-semibold text-paper">
                      <CountUp value={r.termSaving} format={(n) => gbp(n, { compact: true })} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-silver-soft">Price vs grid</dt>
                    <dd className="mt-1 text-xl font-semibold text-paper">{discount}% lower</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-silver-soft">CO₂ avoided / yr</dt>
                    <dd className="mt-1 text-xl font-semibold text-paper">
                      <CountUp value={r.co2Tonnes} format={(n) => `${Math.round(n)} t`} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-silver-soft">Upfront cost</dt>
                    <dd className="mt-1 text-xl font-semibold text-paper">£0</dd>
                  </div>
                </dl>

                <a
                  href="#contact"
                  className="mt-8 block rounded-full bg-signal px-6 py-3.5 text-center text-base font-semibold text-paper transition hover:bg-signal-bright"
                >
                  Get the firm number — book a survey
                </a>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-silver-dim">
            Illustrative only. Assumes ~{Math.round(VEGA_RATE * 100)}p/kWh fixed
            against a {Math.round(GRID_RATE * 100)}p/kWh blended grid price, ~950
            kWh/kWp annual yield and 85% on-site use. Your survey replaces every
            figure here with measured ones.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
