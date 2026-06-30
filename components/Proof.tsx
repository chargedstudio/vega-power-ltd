import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";

const ASSURANCES = [
  {
    head: "Performance guaranteed",
    body: "We model the yield, then stand behind it. If the system underperforms its guarantee, that is our shortfall to make good.",
  },
  {
    head: "Fully owned, fully insured",
    body: "The array on your roof is a Vega asset. Insurance, servicing and replacement parts sit with us for the contract life.",
  },
  {
    head: "Certified installation",
    body: "Built to MCS standards and the IET wiring regulations by accredited engineers, signed off and documented on handover.",
  },
  {
    head: "Half-hourly monitoring",
    body: "Generation and faults are watched continuously. You see live output; we see anything that needs attention before you do.",
  },
];

// Swap these for real client wordmarks once signed. Sector labels keep the
// section honest for the demo while showing the intended layout.
const SECTORS = [
  "National retail",
  "Cold storage",
  "Food production",
  "Distribution",
  "Manufacturing",
  "Leisure & sport",
];

export function Proof() {
  return (
    <section id="proof" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Why operators trust the model</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tightest text-paper sm:text-4xl">
            The risk moves to us. The certainty stays with you.
          </h2>
        </Reveal>

        {/* Assurances */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-line bg-slate-line sm:grid-cols-2">
          {ASSURANCES.map((a, i) => (
            <Reveal key={a.head} delay={i * 0.06} className="bg-ink-800 p-6 sm:p-8">
              <span className="slat block h-4 w-3 bg-signal/70" />
              <h3 className="mt-5 text-lg font-semibold text-paper">{a.head}</h3>
              <p className="mt-2 text-sm leading-relaxed text-silver">{a.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Sector / logo wall — swap-ready */}
        <Reveal delay={0.1} className="mt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-silver-soft">
            Built for high-consumption sites
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-line bg-slate-line sm:grid-cols-3 lg:grid-cols-6">
            {SECTORS.map((s) => (
              <div
                key={s}
                className="flex items-center justify-center bg-ink-800 px-3 py-7 text-center"
              >
                <span className="text-sm font-medium text-silver-soft">{s}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonial slot — sample content, replace on signing */}
        <Reveal delay={0.12} className="mt-12">
          <figure className="relative overflow-hidden rounded-2xl border border-slate-line bg-ink-700/50 p-8 sm:p-12">
            <span className="absolute right-5 top-5 rounded-full border border-slate-line px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-silver-dim">
              Sample
            </span>
            <span className="slat block h-6 w-4 bg-signal" />
            <blockquote className="mt-6 max-w-3xl text-balance text-xl font-medium leading-relaxed text-paper sm:text-2xl">
              &ldquo;We wanted the cost certainty without taking on a capital
              project or an asset to maintain. Vega carried all of it &mdash; we
              just buy the power off our own roof now, at a price we agreed up
              front.&rdquo;
            </blockquote>
            <figcaption className="mt-7 text-sm text-silver">
              <span className="font-semibold text-paper">Energy Manager</span>
              <span className="text-silver-dim"> — large-site retail operator</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
