export type IconName =
  | "brain"
  | "droplet"
  | "exchange"
  | "graduation"
  | "compass";

export interface Platform {
  id: string;
  name: string;
  domain: string;
  description: string;
  icon: IconName;
  href: string;
}

/**
 * Five interconnected platforms. Reorder or add by editing this array only —
 * the grid maps over it, no per-item JSX.
 */
export const platforms: Platform[] = [
  {
    id: "mind",
    name: "Karis Mind",
    domain: "Enterprise AI intelligence",
    description:
      "Strategy, leadership, and organisational intelligence — unifying Karis AI, Karis Strategy™, GOLD Leadership™, and OCAM™.",
    icon: "brain",
    href: "/platforms#mind",
  },
  {
    id: "aminzi",
    name: "Aminzi WMS",
    domain: "Smart water & utility",
    description:
      "A digital twin of the utility network that cuts non-revenue water and turns operations into real-time intelligence.",
    icon: "droplet",
    href: "/karis-mind/pricing",
  },
  {
    id: "liquidlinq",
    name: "LiquidlinQ",
    domain: "Digital finance infrastructure",
    description:
      "Evolving toward enterprise treasury orchestration and compliant, programmable settlement rails.",
    icon: "exchange",
    href: "/platforms#liquidlinq",
  },
  {
    id: "learning",
    name: "Karislearning",
    domain: "Adaptive enterprise learning",
    description:
      "Competency development, operational intelligence, and institutional knowledge systems.",
    icon: "graduation",
    href: "/platforms#learning",
  },
  {
    id: "consulting",
    name: "Karis Consulting",
    domain: "Strategic advisory",
    description:
      "Digital asset readiness, treasury modernisation, and sovereign infrastructure advisory.",
    icon: "compass",
    href: "/consulting",
  },
];
