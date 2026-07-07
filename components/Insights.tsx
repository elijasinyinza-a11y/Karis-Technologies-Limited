import Link from "next/link";
import { insights } from "@/data/content";
import { Section, SectionHeader } from "./Section";
import { Icon } from "./Icon";

export function Insights() {
  return (
    <Section id="insights" tone="paper">
      <SectionHeader
        kicker="Insights & thought leadership"
        title="Ideas. Intelligence. Impact."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {insights.map((a) => (
          <Link
            key={a.headline}
            href="#insights"
            className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]"
          >
            <div className="glow-navy flex h-36 items-center justify-center bg-gradient-to-br from-navy to-navy-3">
              <span className="text-cyan drop-shadow-[0_0_16px_rgba(46,231,255,0.5)]">
                <Icon name={a.icon} size={40} />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal">
                {a.tag}
              </span>
              <h3 className="mt-2 flex-1 font-display text-[16.5px] font-semibold leading-snug text-ink">
                {a.headline}
              </h3>
              <p className="mt-3 text-[12.5px] text-muted">
                {a.date} · {a.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
