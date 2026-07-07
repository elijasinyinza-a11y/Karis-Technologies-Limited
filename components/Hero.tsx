import { Button } from "./Button";

export function Hero() {
  return (
    <section className="glow-navy relative overflow-hidden bg-gradient-to-b from-navy to-navy-2 text-white">
      <div className="mx-auto max-w-hero px-6 py-24 text-center sm:px-8 sm:py-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-pill border border-[var(--line-navy)] bg-[var(--glass)] px-4 py-1.5 text-[12.5px] font-semibold tracking-[0.04em] text-white/75">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_var(--cyan)]" />
          Enterprise AI infrastructure for Africa
        </span>

        <h1 className="font-display text-[clamp(34px,5vw,56px)] font-bold leading-[1.08] tracking-tight">
          Building <span className="grad-text">Africa&apos;s Intelligent Infrastructure</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-[16.5px] font-medium text-white/85">
          AI. Strategy. Water. Finance — unified into scalable systems.
        </p>
        <p className="mx-auto mt-4 max-w-lg text-[15.5px] text-white/55">
          Karis Technologies builds intelligent platforms that transform how
          Africa&apos;s organisations think, operate, manage infrastructure, and
          create value.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Button href="#platforms" variant="primary">
            Explore our platforms
          </Button>
          <Button href="#login" variant="ghost">
            Request demo
          </Button>
        </div>
      </div>
    </section>
  );
}
