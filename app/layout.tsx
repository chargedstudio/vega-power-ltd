import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vega Power — On-site solar, fixed-price, zero capex",
  description:
    "Vega funds, builds, owns and maintains rooftop solar on your site. You buy the power it makes at a fixed price below grid — no upfront cost, no maintenance burden.",
  openGraph: {
    title: "Vega Power — Fixed-price electricity from your own roof",
    description:
      "On-site solar Power Purchase Agreements for large commercial sites. Zero upfront cost, fixed price below grid, fully owned and maintained by Vega.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Inter loaded at runtime (no build-time font fetch) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink font-sans antialiased">{children}</body>
    </html>
  );
}
