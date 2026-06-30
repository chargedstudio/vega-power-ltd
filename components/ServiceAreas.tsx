import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const REGIONS = [
  "London & South East",
  "South West",
  "Midlands",
  "East of England",
  "North West",
  "Yorkshire & Humber",
  "North East",
  "Wales",
  "Central Scotland",
];

export function ServiceAreas() {
  return (
    <section id="areas" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionLabel>Where we work</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tightest text-paper sm:text-4xl">
              Single sites and national estates, across Great Britain
            </h2>
            <p className="mt-5 text-base leading-relaxed text-silver sm:text-lg">
              If you run a large-roof site &mdash; a distribution centre, a
              factory, a superstore, a cold store &mdash; it is in scope. Multi-site
              operators can roll one agreement across the whole estate.
            </p>
            <p className="mt-4 text-sm text-silver-dim">
              Not sure your roof qualifies? Send us the address and we will tell
              you in a day.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-line bg-slate-line sm:grid-cols-3">
              {REGIONS.map((region) => (
                <div
                  key={region}
                  className="group flex items-center gap-3 bg-ink-800 px-5 py-5 transition-colors hover:bg-ink-700"
                >
                  <span className="slat block h-3 w-2.5 shrink-0 bg-signal/60 transition-colors group-hover:bg-signal" />
                  <span className="text-sm font-medium text-paper">{region}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
