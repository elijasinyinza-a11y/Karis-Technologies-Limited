import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "ghost-dark";

const base =
  "inline-flex items-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  // Cyan/teal gradient fill on dark navy text.
  primary:
    "bg-gradient-to-r from-cyan to-teal text-navy shadow-[0_8px_22px_rgba(23,214,188,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(23,214,188,0.4)]",
  // Ghost/outline for use on dark surfaces.
  ghost:
    "border border-[var(--line-navy)] text-white/85 hover:border-cyan/60 hover:text-white",
  // Ghost/outline for light surfaces.
  "ghost-dark":
    "border border-line text-ink hover:border-cyan hover:-translate-y-0.5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
