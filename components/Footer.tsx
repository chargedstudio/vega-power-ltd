import { VegaLogo } from "./ui/VegaLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-line">
      <div className="mx-auto max-w-site px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <VegaLogo />
            <p className="mt-4 text-sm leading-relaxed text-silver-soft">
              On-site solar Power Purchase Agreements for high-consumption
              commercial sites across Great Britain.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            <a href="#how" className="text-silver hover:text-paper">How it works</a>
            <a href="#why" className="text-silver hover:text-paper">The model</a>
            <a href="#estimator" className="text-silver hover:text-paper">Estimate savings</a>
            <a href="#proof" className="text-silver hover:text-paper">Assurances</a>
            <a href="#areas" className="text-silver hover:text-paper">Where we work</a>
            <a href="#contact" className="text-silver hover:text-paper">Book a survey</a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-line/70 pt-6 text-xs text-silver-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vega Power Ltd. Registered in England &amp; Wales.</p>
          <p>Figures shown are illustrative and confirmed at survey.</p>
        </div>
      </div>
    </footer>
  );
}
