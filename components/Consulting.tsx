import { clarifications, practices } from "@/data/content";
import { Section } from "./Section";

export function Consulting() {
  return (
    <Section id="consulting" tone="navy" glow>
      <div className="mb-11 max-w-2xl">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
          Digital finance advisory
        </div>
        <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.15] tracking-tight text-white">
          Practical help with digital finance decisions
        </h2>
        <p className="mt-4 text-[15.5px] text-white/60">
          Our newest practice — we work with banks and enterprises thinking about
          digital assets, treasury, and compliance. We give practical advice, not
          investment pitches.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Left: "what we're not" clarifications */}
        <div className="rounded-card border border-[var(--line-navy)] bg-navy-2/70 p-6 lg:col-span-2">
          <p className="text-[14px] text-white/70">
            People sometimes assume we&apos;re a crypto company. A few
            clarifications:
          </p>
          <div className="mt-5 flex flex-col gap-4">
            {clarifications.map((c) => (
              <div key={c.not}>
                <div className="text-[14px] font-semibold text-white">{c.not}</div>
                <div className="mt-0.5 flex items-center gap-2 text-[13.5px] text-teal">
                  <span aria-hidden>→</span>
                  {c.are}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: numbered practice items */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:col-span-3">
          {practices.map((p, i) => (
            <div key={p.name} className="flex gap-3.5">
              <span className="font-display text-[13px] font-bold text-cyan/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-[14.5px] font-semibold text-white">{p.name}</div>
                <div className="mt-0.5 text-[13px] leading-snug text-white/55">
                  {p.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
