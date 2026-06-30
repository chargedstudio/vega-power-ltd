/**
 * Vega Power logo — rebuilt as vector from the supplied mark.
 * The "V" is formed from skewed slats; the top-right slat is the signal-blue accent.
 * `variant="mark"` renders the slat mark only (for the mobile nav / favicon use).
 */
export function VegaLogo({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "mark";
  className?: string;
}) {
  const Mark = (
    <svg
      viewBox="0 0 64 60"
      role="img"
      aria-label="Vega Power"
      className="h-full w-auto"
    >
      {/* Left descending arm — three slats, top to bottom */}
      <g transform="skewX(-18)">
        <rect x="20" y="2"  width="20" height="8" rx="1.5" fill="#AEB6C4" />
        <rect x="22" y="14" width="18" height="8" rx="1.5" fill="#AEB6C4" />
        <rect x="24" y="26" width="16" height="8" rx="1.5" fill="#0E1424" />
        <rect x="26" y="38" width="14" height="8" rx="1.5" fill="#0E1424" />
      </g>
      {/* Right ascending arm — signal-blue top slat, fading silver below */}
      <g transform="skewX(18)">
        <rect x="-2"  y="2"  width="20" height="8" rx="1.5" fill="#3D6EF5" />
        <rect x="-4"  y="14" width="18" height="8" rx="1.5" fill="#AEB6C4" opacity="0.55" />
        <rect x="-6"  y="26" width="16" height="8" rx="1.5" fill="#AEB6C4" opacity="0.32" />
      </g>
    </svg>
  );

  if (variant === "mark") {
    return <span className={`inline-block ${className}`}>{Mark}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="block h-7 w-7">{Mark}</span>
      <span className="text-[1.35rem] font-semibold tracking-tightest text-paper">
        Vega<span className="text-silver"> Power</span>
      </span>
    </span>
  );
}
