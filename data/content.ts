import type { AnyIcon } from "@/components/Icon";

/* ---------- Stats band ---------- */
export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}
export const stats: Stat[] = [
  { value: 2.4, suffix: "M+", label: "Communities impacted" },
  { value: 1250, suffix: "+", label: "Strategies digitised" },
  { value: 18600, suffix: "+", label: "Water points managed" },
  { value: 320, suffix: "M+", prefix: "$", label: "Transactions processed" },
];

/* ---------- Sectors strip (pills only, no descriptions) ---------- */
export const sectors: string[] = [
  "Government & regulators",
  "Banks & financial services",
  "Telecoms",
  "Mining & extractives",
  "Utilities",
  "NGOs & development finance",
  "Educational institutions",
  "Enterprise corporations",
];

/* ---------- Consulting ---------- */
export interface Clarification {
  not: string;
  are: string;
}
export const clarifications: Clarification[] = [
  { not: "Not a crypto company", are: "We advise, we don't trade" },
  { not: "Not a trading platform", are: "We focus on process and compliance" },
  { not: "Not a generic tech vendor", are: "We know African regulatory realities" },
];

export interface Practice {
  name: string;
  detail: string;
}
export const practices: Practice[] = [
  {
    name: "Digital strategy check-ins",
    detail: "Help you work out where digital tools actually fit",
  },
  {
    name: "Digital asset readiness review",
    detail: "An honest look at whether it's worth pursuing yet",
  },
  {
    name: "Treasury process review",
    detail: "Tidy up cash flow, FX, and liquidity processes",
  },
  {
    name: "Cross-border payment options",
    detail: "Look at faster, cheaper ways to settle payments",
  },
  {
    name: "Compliance support",
    detail: "Practical help with compliance and safe custody",
  },
  {
    name: "Regulatory updates",
    detail: "Keep you informed as the rules keep changing",
  },
];

/* ---------- Insights ---------- */
export interface Insight {
  icon: AnyIcon;
  tag: string;
  headline: string;
  date: string;
  readTime: string;
}
export const insights: Insight[] = [
  {
    icon: "brain",
    tag: "Karis Mind",
    headline: "How AI is transforming institutional decision-making",
    date: "May 12, 2026",
    readTime: "6 min read",
  },
  {
    icon: "chart",
    tag: "Karis Consulting",
    headline: "A grounded approach to digital asset readiness",
    date: "May 5, 2026",
    readTime: "5 min read",
  },
  {
    icon: "droplet",
    tag: "Aminzi WMS",
    headline: "Cutting non-revenue water with digital twins",
    date: "May 1, 2026",
    readTime: "4 min read",
  },
];
