"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="blueprint pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-site gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-24 lg:pt-40">
        {/* Copy */}
        <div>
          <SectionLabel>On-site solar PPA</SectionLabel>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tightest text-paper sm:text-5xl lg:text-6xl">
            Your grid bill keeps moving.
            <br />
            <span className="text-silver">Your electricity price</span>{" "}
            <span className="text-signal-bright">shouldn&apos;t.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
            Vega builds solar on your roof, owns it, and maintains it. You buy the
            power it generates at a fixed price below grid &mdash; locked for the
            life of the contract. No capital outlay. No maintenance to manage.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-full bg-signal px-7 py-3.5 text-center text-base font-semibold text-paper shadow-lg shadow-signal/25 transition hover:bg-signal-bright"
            >
              Book a roof survey
            </a>
            <a
              href="#estimator"
              className="rounded-full border border-slate-line px-7 py-3.5 text-center text-base font-semibold text-paper transition hover:border-silver-soft"
            >
              Estimate your saving
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slate-line/70 pt-7">
            {[
              ["£0", "upfront cost"],
              ["Fixed", "price per kWh"],
              ["25 yrs", "owned & maintained"],
            ].map(([stat, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
                  {stat}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-silver-soft sm:text-sm">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual — stacked price comparison built from the slat motif */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-line bg-ink-800/80 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-silver-soft">
              Cost per kWh, illustrative
            </p>

            {/* Grid price — volatile, rising bars */}
            <div className="mt-6">
              <div className="flex items-end justify-between">
                <span className="text-sm font-medium text-silver">Grid (variable)</span>
                <span className="text-sm font-semibold text-paper">~28&ndash;41p</span>
              </div>
              <div className="mt-3 flex h-24 items-end gap-1.5">
                {[42, 55, 38, 70, 60, 85, 72, 100].map((h, i) => (
                  <motion.span
                    key={i}
                    className="slat flex-1 rounded-sm bg-silver/30"
                    initial={reduce ? false : { height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.06 }}
                  />
                ))}
              </div>
            </div>

            {/* Vega price — flat, locked line */}
            <div className="mt-7">
              <div className="flex items-end justify-between">
                <span className="text-sm font-medium text-signal-bright">
                  Vega (fixed)
                </span>
                <span className="text-sm font-semibold text-paper">locked</span>
              </div>
              <div className="relative mt-3 h-12">
                <div className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2 rounded-full bg-signal/20" />
                <motion.div
                  className="absolute inset-x-0 top-1/2 h-2.5 -translate-y-1/2 origin-left rounded-full bg-gradient-to-r from-signal to-signal-bright"
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                />
                <span className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-ink bg-signal-bright" />
              </div>
            </div>

            <p className="mt-7 border-t border-slate-line/70 pt-5 text-sm leading-relaxed text-silver">
              The gap between the two lines, every year, is yours.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
