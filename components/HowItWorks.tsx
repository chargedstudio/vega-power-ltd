import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { PpaFlowDiagram } from "./PpaFlowDiagram";

const STEPS = [
  {
    n: "01",
    title: "Survey & Design",
    body: "We assess your roof, your half-hourly consumption and your structure, then design an array sized to what you actually use on site.",
  },
  {
    n: "02",
    title: "Install",
    body: "Our engineers build and commission the system. Work is planned around your operation so there is no disruption to trading or production.",
  },
  {
    n: "03",
    title: "Supply",
    body: "From day one you draw power straight from the roof at a fixed price per kWh — agreed up front and held for the contract term.",
  },
  {
    n: "04",
    title: "Manage",
    body: "Vega monitors, services and insures the system for its full life. Output, faults and performance are ours to handle, not yours.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tightest text-paper sm:text-4xl">
            Four steps from bare roof to fixed-price power
          </h2>
          <p className="mt-4 text-base leading-relaxed text-silver sm:text-lg">
            One contract covers all of it. You sign once; we carry the build,
            the capital and the upkeep.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <PpaFlowDiagram />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-line bg-slate-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.08}
              className="group bg-ink-800 p-6 transition-colors hover:bg-ink-700"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-signal-bright">
                  {s.n}
                </span>
                <span className="slat block h-4 w-3 bg-silver/20 transition-colors group-hover:bg-signal/60" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
