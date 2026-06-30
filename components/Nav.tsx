"use client";

import { useEffect, useState } from "react";
import { VegaLogo } from "./ui/VegaLogo";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#why", label: "The model" },
  { href: "#estimator", label: "Estimate savings" },
  { href: "#areas", label: "Where we work" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-slate-line/70 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-site items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="shrink-0" aria-label="Vega Power home">
          <VegaLogo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-silver transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-signal-bright sm:inline-block"
          >
            Book a roof survey
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-line text-silver lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-line/70 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-all duration-300 ease-out`}
      >
        <div className="space-y-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-silver hover:bg-ink-700 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-signal px-5 py-3 text-center text-base font-semibold text-paper"
          >
            Book a roof survey
          </a>
        </div>
      </div>
    </header>
  );
}
