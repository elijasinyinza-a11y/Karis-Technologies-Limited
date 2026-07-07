"use client";

import { stats, type Stat } from "@/data/content";
import { useCountUp, formatCount } from "@/lib/useCountUp";

function StatCounter({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="text-center">
      <div className="font-display text-[clamp(30px,4vw,44px)] font-bold tracking-tight text-white">
        {stat.prefix}
        <span ref={ref}>{formatCount(value, stat.value)}</span>
        {stat.suffix}
      </div>
      <div className="mt-1.5 text-[13.5px] text-white/55">{stat.label}</div>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="glow-navy bg-navy-2 py-section text-white">
      <div className="mx-auto grid max-w-wrap grid-cols-2 gap-y-10 px-6 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <StatCounter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
