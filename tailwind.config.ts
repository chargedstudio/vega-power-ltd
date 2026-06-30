import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from the Vega logo
        ink: {
          DEFAULT: "#0B0F1A", // deep navy base
          800: "#0E1424",
          700: "#11172A",
          600: "#161E33",
          500: "#1E2740",
        },
        slate: {
          line: "#222C45",
        },
        silver: {
          DEFAULT: "#AEB6C4", // logo slats / secondary text
          soft: "#8A93A6",
          dim: "#5C6679",
        },
        signal: {
          DEFAULT: "#3D6EF5", // the electric-blue slat
          bright: "#5A82F7",
          deep: "#2B53C9",
        },
        paper: "#F5F7FB",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        site: "1200px",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        flow: "flow 2.4s linear infinite",
        pulseDot: "pulseDot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
