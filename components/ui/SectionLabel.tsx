/** Small kicker label with a slat tick — used to head each section. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="slat block h-3.5 w-2.5 bg-signal" />
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-silver">
        {children}
      </span>
    </div>
  );
}
