export type MockType = "chat" | "wallet" | "progress";

export interface ChatMock {
  messages: { from: "user" | "bot"; text: string }[];
  kpis: { label: string; value: string }[];
}

export interface WalletMock {
  rows: { label: string; value: string; meta: string }[];
  bars: { label: string; pct: number }[];
}

export interface ProgressMock {
  bars: { label: string; pct: number }[];
  kpis: { label: string; value: string }[];
}

export interface PreviewItem {
  id: string;
  tag: string;
  color: string;
  heading: string;
  description: string;
  features: string[];
  mockType: MockType;
  mock: ChatMock | WalletMock | ProgressMock;
}

/**
 * Drives the single tabbed <PlatformPreview /> component.
 * One entry per tab; the active entry's mockType selects the mock renderer.
 */
export const previews: PreviewItem[] = [
  {
    id: "mind",
    tag: "Karis Mind",
    color: "var(--cyan)",
    heading: "Your intelligent partner for smarter decisions",
    description:
      "Ask Karis AI a question in plain language and get real-time strategic insight, drawn from every connected data source across your institution.",
    features: [
      "Plain-language querying across connected data",
      "Strategy alignment and initiative tracking",
      "Board-ready intelligence briefings, generated automatically",
    ],
    mockType: "chat",
    mock: {
      messages: [
        { from: "user", text: "How are our 2026 strategic initiatives tracking?" },
        {
          from: "bot",
          text: "Two initiatives are behind schedule — deeper insights ready in your dashboard.",
        },
      ],
      kpis: [
        { label: "On track", value: "92%" },
        { label: "Alignment", value: "78%" },
        { label: "Initiatives", value: "24" },
      ],
    } satisfies ChatMock,
  },
  {
    id: "aminzi",
    tag: "Aminzi WMS",
    color: "var(--teal)",
    heading: "A digital twin for smarter, stronger water utilities",
    description:
      "Aminzi models your entire water network as a digital twin — turning operational data into the intelligence utilities need to cut non-revenue water and run at world-class efficiency.",
    features: [
      "Network modelled as a continuously updated digital twin",
      "Non-revenue water identified and reduced over time",
      "Operational intelligence for planning and response",
    ],
    mockType: "progress",
    mock: {
      bars: [
        { label: "Digital twin model accuracy", pct: 94 },
        { label: "Non-revenue water reduced (12mo)", pct: 22 },
        { label: "Operational intelligence coverage", pct: 76 },
      ],
      kpis: [
        { label: "NRW reduced", value: "22%" },
        { label: "Twin accuracy", value: "94%" },
        { label: "Faster response", value: "3.2x" },
      ],
    } satisfies ProgressMock,
  },
  {
    id: "liquidlinq",
    tag: "LiquidlinQ",
    color: "var(--cyan)",
    heading: "Borderless payments. Limitless possibilities.",
    description:
      "Enterprise treasury orchestration and compliant settlement — cross-border movement, live positions, and compliance checks in one view.",
    features: [
      "Cross-border settlement on compliant rails",
      "Real-time treasury position and liquidity",
      "Compliance checks built into every flow",
    ],
    mockType: "wallet",
    mock: {
      rows: [
        {
          label: "Cross-border settlement",
          value: "$1.24M",
          meta: "Lagos → Nairobi · cleared",
        },
        { label: "Treasury position", value: "$8.60M", meta: "Across 4 currencies" },
        { label: "Compliance check", value: "Passed", meta: "AML · sanctions · KYC" },
      ],
      bars: [
        { label: "Q1", pct: 48 },
        { label: "Q2", pct: 62 },
        { label: "Q3", pct: 71 },
        { label: "Q4", pct: 88 },
      ],
    } satisfies WalletMock,
  },
  {
    id: "learning",
    tag: "Karislearning",
    color: "var(--teal)",
    heading: "A workforce that keeps pace with the institution",
    description:
      "Adaptive learning paths that build competency, capture institutional knowledge, and keep teams current as the organisation evolves.",
    features: [
      "Adaptive competency and certification paths",
      "Institutional knowledge captured and reused",
      "Progress visible at team and organisation level",
    ],
    mockType: "progress",
    mock: {
      bars: [
        { label: "Core certification completion", pct: 87 },
        { label: "Leadership track progress", pct: 64 },
        { label: "Compliance training coverage", pct: 91 },
      ],
      kpis: [
        { label: "Learners active", value: "4,120" },
        { label: "Completion rate", value: "87%" },
        { label: "Skill paths", value: "32" },
      ],
    } satisfies ProgressMock,
  },
];
