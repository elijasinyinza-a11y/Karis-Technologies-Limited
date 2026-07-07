import { sectors } from "@/data/content";
import { Section, SectionHeader } from "./Section";

export function SectorsStrip() {
  return (
    <Section id="sectors" tone="white">
      <SectionHeader
        kicker="Who we serve"
        title="Built for Africa's institutions"
      />
      <div className="flex flex-wrap gap-2.5">
        {sectors.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-paper px-4 py-2 text-[13.5px] font-medium text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {s}
          </span>
        ))}
      </div>
    </Section>
  );
}
