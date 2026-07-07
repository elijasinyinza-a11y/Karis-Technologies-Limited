import Link from "next/link";
import { platforms } from "@/data/platforms";
import { Section, SectionHeader } from "./Section";
import { Icon } from "./Icon";

export function PlatformsGrid() {
  return (
    <Section id="platforms" tone="paper">
      <SectionHeader
        kicker="The ecosystem"
        title="Five platforms. One vision."
        intro="Interconnected systems for intelligence, infrastructure, finance, and learning — built for the realities of African institutions."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {platforms.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className="group flex flex-col rounded-card border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-teal text-navy">
              <Icon name={p.icon} size={22} />
            </span>
            <h3 className="font-display text-[17px] font-semibold text-ink">
              {p.name}
            </h3>
            <div className="mt-0.5 text-xs font-medium uppercase tracking-wide text-teal">
              {p.domain}
            </div>
            <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">
              {p.description}
            </p>
            <span className="mt-4 text-sm font-semibold text-ink transition-colors group-hover:text-teal">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
