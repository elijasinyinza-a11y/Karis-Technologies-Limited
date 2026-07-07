import type { ReactNode } from "react";

/**
 * Section — consistent vertical rhythm (~76px) and a centered 1200px container.
 * `tone` picks the surface background; content is passed as children.
 */
export function Section({
  children,
  id,
  tone = "paper",
  className = "",
  glow = false,
}: {
  children: ReactNode;
  id?: string;
  tone?: "paper" | "white" | "navy" | "navy-2";
  className?: string;
  glow?: boolean;
}) {
  const tones: Record<string, string> = {
    paper: "bg-paper text-ink",
    white: "bg-white text-ink border-t border-line",
    navy: "bg-navy text-white",
    "navy-2": "bg-navy-2 text-white",
  };
  return (
    <section
      id={id}
      className={`${tones[tone]} ${glow ? "glow-navy" : ""} py-section ${className}`}
    >
      <div className="mx-auto w-full max-w-wrap px-6 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  intro,
  center = false,
  dark = false,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-11 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {kicker && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
          {kicker}
        </div>
      )}
      <h2
        className={`font-display text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.15] tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-[15.5px] ${
            dark ? "text-white/60" : "text-muted"
          } ${center ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
