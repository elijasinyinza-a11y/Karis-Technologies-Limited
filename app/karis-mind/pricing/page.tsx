"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import {
  tiers,
  compareRows,
  journey,
  faqs,
  type PricingTier,
  type TierAccent,
} from "@/data/mindPricing";

/* ── small inline glyphs (project has no icon lib for check/dash) ── */
function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12.5 10 17 19 7" />
    </svg>
  );
}
function Dash({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={14}
      height={14}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M6 12h12" />
    </svg>
  );
}

/* accent → text colour token for tier labels / journey tags */
const accentText: Record<TierAccent, string> = {
  neutral: "text-muted",
  cyan: "text-blue",
  teal: "text-teal",
};

/* accent → explicit pill styling (bg + text), all inside the cyan/teal palette */
const accentPill: Record<TierAccent, string> = {
  neutral: "bg-paper text-muted",
  cyan: "bg-blue/10 text-blue",
  teal: "bg-teal/10 text-teal",
};

/* journey tags sit on a dark navy surface — lighter fills for contrast */
const accentPillDark: Record<TierAccent, string> = {
  neutral: "bg-white/10 text-white/70",
  cyan: "bg-blue/20 text-blue",
  teal: "bg-teal/15 text-teal",
};

function PriceBlock({ tier, annual }: { tier: PricingTier; annual: boolean }) {
  const { price } = tier;

  if (price.free) {
    return (
      <div className="mb-7">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-[2.5rem] font-extrabold leading-none tracking-tight text-ink">
            Free
          </span>
        </div>
        <div className="mt-1.5 text-[12px] text-muted">{price.subMonthly}</div>
      </div>
    );
  }

  const amount = annual ? price.annualMonthly : price.monthly;
  const sub = annual ? price.subAnnual ?? price.subMonthly : price.subMonthly;

  return (
    <div className="mb-7">
      <div className="flex items-baseline gap-1">
        <span className="mt-1 font-display text-[1.1rem] font-bold text-muted">$</span>
        <span className="font-display text-[3rem] font-extrabold leading-none tracking-tight text-ink">
          {amount}
        </span>
        <span className="self-end pb-1.5 text-[0.8rem] text-muted">/month</span>
      </div>
      <div className="mt-1.5 text-[12px] text-muted">{sub}</div>
      {annual && price.annualNote && (
        <div className="mt-2 inline-block rounded-[6px] bg-teal/10 px-2.5 py-1 text-[11px] font-semibold text-teal">
          {price.annualNote}
        </div>
      )}
    </div>
  );
}

function TierCard({ tier, annual }: { tier: PricingTier; annual: boolean }) {
  const featured = tier.featured;

  return (
    <div
      className={[
        "relative flex flex-col rounded-card border bg-white p-7 transition-all duration-200",
        featured
          ? "border-2 border-teal shadow-[0_0_0_6px_rgba(23,214,188,0.08)] lg:scale-[1.02] hover:-translate-y-1 lg:hover:-translate-y-0.5"
          : "border-line hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]",
      ].join(" ")}
    >
      {tier.badge && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-[10px] bg-gradient-to-r from-cyan to-teal px-4 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-navy">
          {tier.badge}
        </span>
      )}

      <div className={`mb-4 ${featured ? "mt-3" : ""}`}>
        <span
          className={`inline-flex items-center gap-1.5 rounded-[6px] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.09em] ${accentPill[tier.accent]}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {tier.label}
        </span>
      </div>

      <h3 className="font-display text-[1.35rem] font-extrabold tracking-tight text-ink">
        {tier.name}
      </h3>
      <p className="mb-7 mt-1.5 text-[0.82rem] leading-relaxed text-muted">
        {tier.tagline}
      </p>

      <PriceBlock tier={tier} annual={annual} />

      <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.09em] text-muted">
        What&apos;s included
      </div>
      <div className="mb-6 flex flex-wrap gap-1.5">
        {tier.modules.map((m) => (
          <span
            key={m.label}
            className={[
              "flex items-center gap-1.5 rounded-[6px] border px-2.5 py-1 text-[11px] font-semibold",
              m.state === "on"
                ? "border-teal/30 bg-teal/8 text-teal"
                : "border-line bg-paper text-muted/70",
            ].join(" ")}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                m.state === "on" ? "bg-teal" : "bg-muted/40"
              }`}
            />
            {m.label}
          </span>
        ))}
      </div>

      <div className="mb-5 h-px bg-line" />

      <ul className="mb-7 flex flex-1 flex-col gap-2.5">
        {tier.features.map((f) => (
          <li
            key={f.text}
            className="flex items-start gap-2.5 text-[0.8rem] leading-snug text-ink/80"
          >
            <span className="mt-0.5 shrink-0">
              {f.included ? (
                <Check className="text-teal" />
              ) : (
                <Dash className="text-line" />
              )}
            </span>
            <span className={f.included ? "" : "text-muted/70"}>
              {f.text}
              {f.chip && (
                <span
                  className={[
                    "ml-1.5 inline-block rounded-[5px] border px-1.5 py-px align-middle text-[10px] font-semibold",
                    f.chipStrong
                      ? "border-teal/30 bg-teal/10 text-teal"
                      : "border-line bg-paper text-muted",
                  ].join(" ")}
                >
                  {f.chip}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <CtaButton tier={tier} />
    </div>
  );
}

function CtaButton({ tier }: { tier: PricingTier }) {
  const base =
    "w-full rounded-pill px-6 py-3.5 text-center text-sm font-semibold transition-all duration-200";
  const styles: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-cyan to-teal text-navy shadow-[0_8px_22px_rgba(23,214,188,0.28)] hover:-translate-y-0.5",
    "outline-navy": "bg-navy text-white hover:bg-navy-3",
    "ghost-dark": "border border-line text-ink hover:border-cyan hover:-translate-y-0.5",
  };
  return (
    <Link href="#contact" className={`${base} ${styles[tier.cta.variant]}`}>
      {tier.cta.label}
    </Link>
  );
}

function CompareCell({
  value,
}: {
  value: { text: string; strong?: boolean };
}) {
  if (value.text === "—") {
    return (
      <span className="inline-flex justify-center text-line">
        <Dash />
      </span>
    );
  }
  return (
    <span
      className={
        value.strong
          ? "text-[13px] font-semibold text-teal"
          : "text-[12px] font-medium text-muted"
      }
    >
      {value.text}
    </span>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-white transition-colors hover:border-cyan/50">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[14px] font-semibold text-ink">{q}</span>
        <span
          className={`shrink-0 font-display text-xl leading-none transition-transform duration-200 ${
            open ? "rotate-45 text-teal" : "text-muted"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-[13px] leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function KarisMindPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="glow-navy bg-navy px-6 pb-20 pt-20 text-center sm:px-8">
          <div className="mx-auto max-w-hero">
            <span className="mb-7 inline-flex items-center gap-2 rounded-pill border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Simple, transparent pricing
            </span>
            <h1 className="mx-auto font-display text-[clamp(2.2rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              Three clear paths into <span className="grad-text">Karis Mind.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/45">
              Start free, grow with a Professional licence, or deploy the full
              institutional suite across your organisation.
            </p>
            <p className="mt-3 text-[12px] text-white/25">
              No hidden fees · Credits roll over · Cancel anytime on monthly plans
            </p>

            {/* BILLING TOGGLE */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-pill border border-[var(--line-navy)] bg-white/[0.06] px-4 py-2">
              <span
                className={`text-[12px] font-medium transition-colors ${
                  annual ? "text-white/40" : "text-white/85"
                }`}
              >
                Monthly
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={annual}
                aria-label="Toggle annual billing"
                onClick={() => setAnnual((v) => !v)}
                className={`relative h-5 w-9 rounded-full transition-colors duration-200 ${
                  annual ? "bg-teal" : "bg-white/15"
                }`}
              >
                <span
                  className={`absolute top-[3px] h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200 ${
                    annual ? "translate-x-[19px]" : "translate-x-[3px]"
                  }`}
                />
              </button>
              <span
                className={`text-[12px] font-medium transition-colors ${
                  annual ? "text-white/85" : "text-white/40"
                }`}
              >
                Annual
              </span>
              <span className="rounded-[5px] bg-teal/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-teal">
                Save 20%
              </span>
            </div>
          </div>
        </section>

        {/* PRICING CARDS */}
        <Section id="plans" tone="paper">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-start">
            {tiers.map((t) => (
              <TierCard key={t.id} tier={t} annual={annual} />
            ))}
          </div>

          {/* CONSULTING BANNER */}
          <div className="glow-navy mt-8 flex items-start gap-5 rounded-card bg-gradient-to-br from-navy to-navy-3 px-7 py-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-teal text-navy">
              <svg
                viewBox="0 0 24 24"
                width={20}
                height={20}
                fill="currentColor"
                aria-hidden
              >
                <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
              </svg>
            </span>
            <div>
              <h4 className="font-display text-[15px] font-bold text-white">
                Coming through a Karis Consulting engagement?
              </h4>
              <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                Organisations transitioning from a Karis Consulting engagement
                receive{" "}
                <strong className="font-semibold text-white">
                  3 months at 50% on the Institutional Suite
                </strong>{" "}
                as part of the engagement handoff. The consulting relationship is
                the on-ramp; the platform sustains the value it delivers. Talk to
                your consultant about platform onboarding.
              </p>
            </div>
          </div>
        </Section>

        {/* COMPARE TABLE */}
        <Section id="compare" tone="white">
          <SectionHeader
            kicker="Plan comparison"
            title="What's in each plan"
            intro="Six dimensions. Three tiers. Everything you need to decide."
          />
          <div className="overflow-x-auto rounded-[16px] border border-line">
            <table className="w-full min-w-[560px] border-collapse bg-white">
              <thead>
                <tr>
                  <th className="w-[38%] bg-paper px-5 py-3.5 text-left text-[12px] font-bold text-muted" />
                  <th className="bg-paper px-5 py-3.5 text-center text-[12px] font-bold text-ink">
                    Free
                    <br />
                    <span className="font-normal text-muted">$0</span>
                  </th>
                  <th className="bg-paper px-5 py-3.5 text-center text-[12px] font-bold text-ink">
                    Professional
                    <br />
                    <span className="font-normal text-muted">$149/mo</span>
                  </th>
                  <th className="border-t-[3px] border-teal bg-teal/8 px-5 py-3.5 text-center text-[12px] font-bold text-teal">
                    Karis Mind Suite
                    <br />
                    <span className="font-medium">$990/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.feature} className="border-t border-line">
                    <td className="px-5 py-4">
                      <div className="text-[13px] font-semibold text-ink">
                        {row.feature}
                      </div>
                      <div className="text-[11px] leading-tight text-muted/70">
                        {row.detail}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <CompareCell value={row.free} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <CompareCell value={row.professional} />
                    </td>
                    <td className="bg-teal/[0.04] px-5 py-4 text-center">
                      <CompareCell value={row.suite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* JOURNEY */}
        <Section id="journey" tone="paper">
          <div className="glow-navy overflow-hidden rounded-card bg-gradient-to-br from-navy to-navy-3 px-8 py-10 sm:px-10">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white/30">
              Customer journey
            </div>
            <h2 className="mb-8 font-display text-[1.4rem] font-extrabold tracking-tight text-white">
              Every path leads to <span className="text-teal">full intelligence.</span>
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {journey.map((s) => (
                <div
                  key={s.title}
                  className="flex flex-col gap-1.5 rounded-[12px] border border-[var(--line-navy)] bg-white/[0.04] p-5"
                >
                  <div
                    className={`text-[10px] font-extrabold uppercase tracking-[0.06em] ${
                      s.accent === "neutral" ? "text-white/50" : accentText[s.accent]
                    }`}
                  >
                    {s.step}
                  </div>
                  <div className="text-[14px] font-bold text-white">{s.title}</div>
                  <div className="text-[12px] leading-relaxed text-white/40">
                    {s.desc}
                  </div>
                  <span
                    className={`mt-1 inline-block w-fit rounded-[5px] px-2 py-1 text-[10px] font-bold ${accentPillDark[s.accent]}`}
                  >
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" tone="white">
          <SectionHeader kicker="Common questions" title="Things people ask" />
          <div className="flex flex-col gap-2">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Section>

        {/* CTA FOOTER */}
        <Section tone="paper">
          <div
            id="contact"
            className="glow-navy overflow-hidden rounded-[22px] bg-gradient-to-br from-navy to-navy-3 px-8 py-14 text-center sm:px-12"
          >
            <h2 className="mx-auto max-w-xl font-display text-[clamp(24px,3.2vw,34px)] font-bold leading-tight text-white">
              Not sure which plan is <span className="grad-text">right for you?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] text-white/60">
              Talk to the team. We&apos;ll find the right entry point for your
              organisation.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="rounded-pill bg-gradient-to-r from-cyan to-teal px-7 py-3.5 text-sm font-semibold text-navy shadow-[0_8px_22px_rgba(23,214,188,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Request a demo
              </Link>
              <Link
                href="/consulting"
                className="rounded-pill border border-[var(--line-navy)] px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:border-cyan/60 hover:text-white"
              >
                Talk to a consultant
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
