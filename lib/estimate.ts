/**
 * Simplified but defensible saving model for the demo estimator.
 * Every assumption here is illustrative and flagged in the UI. Figures are
 * deliberately conservative so they survive scrutiny from a finance buyer.
 *
 * Assumptions [A]:
 *  - Commercial flat-roof packing:           ~0.075 kWp per usable m²
 *  - UK specific yield:                       ~950 kWh per kWp / year
 *  - Daytime self-consumption on a busy site: ~85% of generation used on site
 *  - Assumed blended grid import price:        32p / kWh
 *  - Vega fixed PPA price:                     22p / kWh (~31% below grid)
 *  - Grid carbon intensity:                    0.207 kg CO2 / kWh
 */

export const GRID_RATE = 0.32;
export const VEGA_RATE = 0.22;
const KWP_PER_M2 = 0.075;
const YIELD_PER_KWP = 950;
const SELF_CONSUMPTION = 0.85;
const CO2_PER_KWH = 0.207;

export interface EstimateInput {
  roofArea: number; // usable m²
  annualSpend: number; // £ per year on grid electricity
}

export interface EstimateResult {
  kwp: number;
  generation: number; // kWh / yr
  selfConsumed: number; // kWh / yr
  annualSaving: number; // £ / yr
  pctOfBill: number; // 0..1
  termSaving: number; // £ across 25 yrs (flat, illustrative)
  co2Tonnes: number; // tonnes / yr
}

export function estimate({ roofArea, annualSpend }: EstimateInput): EstimateResult {
  const kwp = Math.round(roofArea * KWP_PER_M2);
  const generation = kwp * YIELD_PER_KWP;
  const usage = annualSpend / GRID_RATE;
  const selfConsumed = Math.min(generation * SELF_CONSUMPTION, usage);

  const annualSaving = selfConsumed * (GRID_RATE - VEGA_RATE);
  const pctOfBill = annualSpend > 0 ? Math.min(annualSaving / annualSpend, 0.95) : 0;
  const termSaving = annualSaving * 25;
  const co2Tonnes = (generation * CO2_PER_KWH) / 1000;

  return { kwp, generation, selfConsumed, annualSaving, pctOfBill, termSaving, co2Tonnes };
}

export function gbp(n: number, opts: { compact?: boolean } = {}): string {
  if (opts.compact && n >= 1_000_000)
    return "£" + (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1) + "m";
  if (opts.compact && n >= 1_000)
    return "£" + (n / 1_000).toFixed(0) + "k";
  return "£" + Math.round(n).toLocaleString("en-GB");
}
