import type { ChatMock, WalletMock, ProgressMock } from "@/data/previews";

function GlassPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-card border border-[var(--line-navy)] bg-navy-3/60 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-[var(--line-navy)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function KpiRow({ kpis }: { kpis: { label: string; value: string }[] }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2.5">
      {kpis.map((k) => (
        <div
          key={k.label}
          className="rounded-xl border border-[var(--line-navy)] bg-white/[0.03] p-3 text-center"
        >
          <div className="font-display text-lg font-bold text-cyan">{k.value}</div>
          <div className="mt-0.5 text-[10.5px] leading-tight text-white/50">
            {k.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ChatMockView({ mock }: { mock: ChatMock }) {
  return (
    <GlassPanel>
      <div className="flex flex-col gap-2.5">
        {mock.messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
              m.from === "user"
                ? "self-end bg-gradient-to-r from-cyan to-teal text-navy"
                : "self-start border border-[var(--line-navy)] bg-white/[0.04] text-white/85"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <KpiRow kpis={mock.kpis} />
    </GlassPanel>
  );
}

export function ProgressMockView({ mock }: { mock: ProgressMock }) {
  return (
    <GlassPanel>
      <div className="flex flex-col gap-3.5">
        {mock.bars.map((b) => (
          <div key={b.label}>
            <div className="mb-1.5 flex justify-between text-[12px] text-white/70">
              <span>{b.label}</span>
              <span className="font-semibold text-white">{b.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan to-teal"
                style={{ width: `${b.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <KpiRow kpis={mock.kpis} />
    </GlassPanel>
  );
}

export function WalletMockView({ mock }: { mock: WalletMock }) {
  const max = Math.max(...mock.bars.map((b) => b.pct));
  return (
    <GlassPanel>
      <div className="flex flex-col gap-2">
        {mock.rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-xl border border-[var(--line-navy)] bg-white/[0.03] px-3.5 py-2.5"
          >
            <div>
              <div className="text-[13px] font-medium text-white/85">{r.label}</div>
              <div className="text-[11px] text-white/45">{r.meta}</div>
            </div>
            <div className="font-display text-sm font-bold text-cyan">{r.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-24 items-end gap-2.5">
        {mock.bars.map((b) => (
          <div key={b.label} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-teal to-cyan"
              style={{ height: `${(b.pct / max) * 100}%` }}
            />
            <span className="text-[10.5px] text-white/45">{b.label}</span>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
