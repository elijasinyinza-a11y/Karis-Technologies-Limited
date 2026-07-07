import type { Config } from "tailwindcss";

/**
 * Design tokens — single source of truth.
 * CSS variables live in app/globals.css; this config maps them into Tailwind
 * utilities so tokens are edited in exactly one place.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "var(--navy)",
        "navy-2": "var(--navy-2)",
        "navy-3": "var(--navy-3)",
        paper: "var(--paper)",
        cyan: "var(--cyan)",
        teal: "var(--teal)",
        blue: "var(--blue)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      borderColor: {
        "line-navy": "var(--line-navy)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        wrap: "1200px",
        hero: "760px",
      },
      spacing: {
        section: "76px",
      },
      borderRadius: {
        card: "16px",
        pill: "26px",
      },
      keyframes: {
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.22s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
