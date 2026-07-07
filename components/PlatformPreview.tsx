"use client";

import { useRef, useState } from "react";
import { previews, type PreviewItem } from "@/data/previews";
import { ChatMockView, WalletMockView, ProgressMockView } from "./mocks";

function Mock({ item }: { item: PreviewItem }) {
  switch (item.mockType) {
    case "chat":
      return <ChatMockView mock={item.mock as never} />;
    case "wallet":
      return <WalletMockView mock={item.mock as never} />;
    case "progress":
      return <ProgressMockView mock={item.mock as never} />;
  }
}

export function PlatformPreview() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = previews[active];

  // Roving arrow-key navigation across the tab bar.
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + previews.length) % previews.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section className="glow-navy bg-navy py-section text-white">
      <div className="mx-auto max-w-wrap px-6 sm:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
            Platform previews
          </div>
          <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.15] tracking-tight">
            See the platforms in action
          </h2>
        </div>

        {/* Pill tab bar */}
        <div
          role="tablist"
          aria-label="Platform previews"
          onKeyDown={onKeyDown}
          className="mb-8 flex flex-wrap gap-2"
        >
          {previews.map((p, i) => {
            const selected = i === active;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${p.id}`}
                aria-selected={selected}
                aria-controls={`panel-${p.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`rounded-pill px-5 py-2.5 text-[13.5px] font-semibold transition-all ${
                  selected
                    ? "bg-gradient-to-r from-cyan to-teal text-navy"
                    : "border border-[var(--line-navy)] text-white/70 hover:text-white"
                }`}
              >
                {p.tag}
              </button>
            );
          })}
        </div>

        {/* Panel — min-height reserved to avoid layout jump on swap */}
        <div
          role="tabpanel"
          id={`panel-${item.id}`}
          aria-labelledby={`tab-${item.id}`}
          className="grid min-h-[420px] grid-cols-1 items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <h3 className="font-display text-[24px] font-semibold leading-tight text-white">
              {item.heading}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              {item.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {item.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <Mock item={item} />
        </div>
      </div>
    </section>
  );
}
