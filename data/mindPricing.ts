/**
 * Karis Mind pricing — single source of truth.
 * The pricing page (app/karis-mind/pricing/page.tsx) maps over these arrays;
 * no per-item JSX. Edit copy, prices, or rows here only.
 *
 * Palette note: this page stays inside the Karis cyan/teal + navy system.
 * Tier accents use "teal" (recommended / full), "cyan" (paid), and neutral
 * "muted" (locked) — no green/amber/purple, per the brand token set.
 */

export type TierAccent = "neutral" | "cyan" | "teal";

export interface ModulePill {
  label: string;
  /** "on" = included, "off" = locked/greyed */
  state: "on" | "off";
}

export interface FeatureLine {
  text: string;
  included: boolean;
  /** small trailing chip, e.g. "50/month" */
  chip?: string;
  /** emphasise the chip in teal (used on the Suite card) */
  chipStrong?: boolean;
}

export interface PricingTier {
  id: "free" | "professional" | "suite";
  label: string;
  name: string;
  tagline: string;
  accent: TierAccent;
  featured?: boolean;
  badge?: string;
  /** Price presentation. `free` renders the word "Free". */
  price: {
    free?: boolean;
    monthly?: number;
    annualMonthly?: number;
    /** sub-line shown under the price, per billing mode */
    subMonthly: string;
    subAnnual?: string;
    /** amber-style annual callout in the mock -> rendered as a teal note */
    annualNote?: string;
  };
  modules: ModulePill[];
  features: FeatureLine[];
  cta: { label: string; variant: "ghost-dark" | "primary" | "outline-navy" };
}

export const tiers: PricingTier[] = [
  {
    id: "free",
    label: "Free",
    name: "Try Karis Mind",
    tagline:
      "Experience both GOLD and OCAM with curated sample content. No assessment required. Understand the frameworks before committing.",
    accent: "neutral",
    price: {
      free: true,
      subMonthly: "Forever free · No credit card required",
    },
    modules: [
      { label: "GOLD™ sample", state: "on" },
      { label: "OCAM™ snapshot", state: "on" },
      { label: "Strategy — locked", state: "off" },
    ],
    features: [
      { text: "GOLD™ sample report — see how your results would look", included: true },
      { text: "Termite Index™ — 12-question OCAM culture snapshot", included: true },
      { text: "Instant 4-domain culture health result", included: true },
      { text: "Framework explainers for GOLD and OCAM", included: true },
      { text: "Live GOLD psychometric assessment", included: false },
      { text: "Full OCAM diagnostic", included: false },
      { text: "Karis AI companion", included: false },
      { text: "Karis Strategy™ module", included: false },
    ],
    cta: { label: "Get started free", variant: "ghost-dark" },
  },
  {
    id: "professional",
    label: "Professional",
    name: "Professional",
    tagline:
      "For individual leaders and HR or L&D professionals managing assessments for a small team. Full access to GOLD and OCAM, up to 50 assessments per month.",
    accent: "cyan",
    price: {
      monthly: 149,
      annualMonthly: 119,
      subMonthly: "Per licence · 1 admin seat",
      subAnnual: "Billed annually · 1 admin seat",
      annualNote: "$1,430/year · 2 months free",
    },
    modules: [
      { label: "GOLD™ full", state: "on" },
      { label: "OCAM™ full", state: "on" },
      { label: "Strategy — locked", state: "off" },
    ],
    features: [
      { text: "Full live GOLD psychometric assessment", included: true, chip: "50/month" },
      { text: "Full OCAM culture diagnostic", included: true, chip: "50/month" },
      { text: "PE · PL · ST dimension breakdown and stage placement", included: true },
      { text: "Individual and team-level reporting", included: true },
      {
        text: "Karis AI companion — Leadership Coach and Analytical Partner modes",
        included: true,
      },
      { text: "Credit rollover — unused credits carry forward", included: true },
      { text: "Karis Strategy™ execution module", included: false },
      { text: "Cross-module intelligence layer", included: false },
    ],
    cta: { label: "Start Professional", variant: "outline-navy" },
  },
  {
    id: "suite",
    label: "Institutional",
    name: "Karis Mind Suite",
    tagline:
      "Full platform access for mid-market enterprises. All three modules, unified companion, cross-module intelligence. Built for 100–500 staff organisations.",
    accent: "teal",
    featured: true,
    badge: "Recommended for organisations",
    price: {
      monthly: 990,
      annualMonthly: 792,
      subMonthly: "Up to 15 seats · 30 combined credits/month",
      subAnnual: "Billed annually · up to 15 seats · 30 credits/mo",
      annualNote: "$9,504/year · 2 months free",
    },
    modules: [
      { label: "GOLD™ full", state: "on" },
      { label: "OCAM™ full", state: "on" },
      { label: "Strategy™ full", state: "on" },
    ],
    features: [
      {
        text: "Full GOLD and OCAM — all professional features",
        included: true,
        chip: "30 credits/mo",
        chipStrong: true,
      },
      {
        text: "Karis Strategy™ — roadmaps, OKRs, execution deviation alerts",
        included: true,
      },
      {
        text: "Cross-module intelligence layer — unified insight across all three frameworks",
        included: true,
      },
      { text: "Unified Karis AI companion — all five modes active", included: true },
      { text: "Executive governance dashboard and board reporting", included: true },
      { text: "Up to 15 admin seats across the organisation", included: true },
      { text: "Succession planning and leadership development roadmaps", included: true },
      { text: "Priority onboarding, dedicated support, and SLA", included: true },
    ],
    cta: { label: "Get the Suite", variant: "primary" },
  },
];

/** Comparison table — exactly the six required rows. */
export interface CompareRow {
  feature: string;
  detail: string;
  free: { text: string; strong?: boolean };
  professional: { text: string; strong?: boolean };
  suite: { text: string; strong?: boolean };
}

export const compareRows: CompareRow[] = [
  {
    feature: "GOLD™ access",
    detail: "Leadership intelligence",
    free: { text: "Sample report" },
    professional: { text: "Full · 50/month" },
    suite: { text: "Full · unlimited", strong: true },
  },
  {
    feature: "OCAM™ access",
    detail: "Culture intelligence",
    free: { text: "Termite Index™ only" },
    professional: { text: "Full · 50/month" },
    suite: { text: "Full · unlimited", strong: true },
  },
  {
    feature: "Karis Strategy™",
    detail: "Execution intelligence",
    free: { text: "—" },
    professional: { text: "—" },
    suite: { text: "Full access", strong: true },
  },
  {
    feature: "Karis AI companion",
    detail: "Contextual AI advisor",
    free: { text: "—" },
    professional: { text: "2 modes" },
    suite: { text: "All 5 modes", strong: true },
  },
  {
    feature: "Admin seats",
    detail: "Platform users",
    free: { text: "—" },
    professional: { text: "1 seat" },
    suite: { text: "Up to 15 seats", strong: true },
  },
  {
    feature: "Governance and reporting",
    detail: "Board packs · succession · cross-module intelligence",
    free: { text: "—" },
    professional: { text: "—" },
    suite: { text: "Full suite", strong: true },
  },
];

/** Three-step customer journey (Free → Professional → Suite). */
export interface JourneyStep {
  step: string;
  title: string;
  desc: string;
  tag: string;
  accent: TierAccent;
}

export const journey: JourneyStep[] = [
  {
    step: "Start here",
    title: "Try Karis Mind — free",
    desc: "Experience GOLD sample reports and the Termite Index™. No account, no card, no commitment. Understand what the frameworks reveal before you invest.",
    tag: "Free forever",
    accent: "neutral",
  },
  {
    step: "Grow with it",
    title: "Professional licence",
    desc: "Run live GOLD and OCAM assessments for yourself or a small team. Ideal for individual leaders deepening self-awareness, and HR or L&D professionals managing assessments each month.",
    tag: "$149/month",
    accent: "cyan",
  },
  {
    step: "Deploy at scale",
    title: "Karis Mind Suite",
    desc: "All three modules. Full organisational intelligence. Strategy execution, leadership development, and culture diagnostics unified in one platform with a shared Karis AI companion.",
    tag: "$990/month",
    accent: "teal",
  },
];

/** FAQ — five questions. */
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What is the difference between the Free sample report and a real GOLD assessment?",
    a: "The Free tier shows you a curated sample GOLD report — illustrating the format, the GOLD Index score, the PE/PL/ST dimension breakdown, and the development path a real result would generate. It is not based on your responses. The Professional tier gives you a full live psychometric assessment — your answers drive a real result, real stage placement, and a genuine personalised development path.",
  },
  {
    q: "Can I use Professional to run assessments for my team?",
    a: "Yes — Professional is designed for both individual leaders and HR or L&D professionals managing a small number of assessments. You can administer up to 50 GOLD and 50 OCAM assessments per month under a single Professional licence. If you need more than 50 assessments per month or require Karis Strategy™ execution tracking, the Institutional Suite is the right fit.",
  },
  {
    q: "What happens to unused assessment credits at the end of the month?",
    a: "Credits roll over and accumulate without expiry on both Professional and Institutional plans. If you run fewer assessments than your allocation in a given month, those credits carry forward. You never lose them.",
  },
  {
    q: "We are in a Karis Consulting engagement. Does that change our pricing?",
    a: "Yes. Organisations transitioning from a Karis Consulting engagement receive 3 months at 50% on the Institutional Suite as part of the engagement handoff. The consulting relationship is the trust-building on-ramp; the platform sustains and compounds the value it delivers. Speak to your consultant about coordinating your platform onboarding.",
  },
  {
    q: "Can I upgrade from Professional to the Institutional Suite later?",
    a: "Yes. You can upgrade at any time. When you move to the Institutional Suite, your existing credits and assessment history carry over. The upgrade unlocks Karis Strategy™, the cross-module intelligence layer, all five Karis companion modes, and the full executive governance dashboard — alongside your expanded seat count and credit allocation.",
  },
];
