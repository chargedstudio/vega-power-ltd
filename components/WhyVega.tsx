import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const YOURS = [
  "Power at a fixed price, below grid",
  "Protection from wholesale spikes",
  "A visible carbon reduction on your own meter",
  "An option to buy the system later",
];

const OURS = [
  "100% of the install cost",
  "Ownership of the asset on your roof",
  "Monitoring, servicing and insurance",
  "Performance risk for 25 years",
];

export function WhyVega() {
  return (
    <section id="why" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-site px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionLabel>The model</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tightest text-paper sm:text-4xl">
              You buy electricity. Not solar panels.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-silver sm:text-lg">
              A Power Purchase Agreement keeps the hardware off your balance
              sheet. There is no system to finance, depreciate or repair. You
              pay for what the roof generates, at a rate you agree before a
              single panel goes up.
            </p>
            <p className="mt-4 text-base leading-relaxed text-silver sm:text-lg">
              It is the difference between owning a generator and simply being
              able to rely on one.
            </p>

            <div className="mt-9 inline-flex items-center gap-4 rounded-xl border border-slate-line bg-ink-800 p-4">
              <span className="text-3xl font-semibold tracking-tight text-signal-bright">
                £0
              </span>
              <span className="text-sm leading-snug text-silver">
                capital expenditure
                <br />
                to switch on
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-signal/40 bg-signal/[0.07] p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-signal-bright">
                  <span className="slat block h-3.5 w-2.5 bg-signal" />
                  What you keep
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {YOURS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-snug text-paper">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-signal-bright" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-line bg-ink-800 p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-silver">
                  <span className="slat block h-3.5 w-2.5 bg-silver/50" />
                  What we carry
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {OURS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-snug text-silver">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-silver/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
