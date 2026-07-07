import Link from "next/link";
import { Button } from "./Button";

export function CtaBanner() {
  return (
    <Section>
      <div className="glow-navy overflow-hidden rounded-[22px] bg-gradient-to-br from-navy to-navy-3 px-8 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-xl font-display text-[clamp(24px,3.2vw,34px)] font-bold leading-tight text-white">
          Ready to transform the future?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] text-white/60">
          Let&apos;s talk about where intelligent systems fit in your
          organisation.
        </p>
        <div className="mt-7 flex justify-center">
          <Button href="#contact" variant="primary">
            Get in touch
          </Button>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "./Section";

const cols = [
  {
    title: "Platforms",
    links: ["Karis Mind", "Aminzi WMS", "LiquidlinQ", "Karislearning", "Karis Consulting"],
  },
  { title: "Company", links: ["About us", "Industries", "Careers", "Contact"] },
  { title: "Resources", links: ["Insights", "Documentation", "Support"] },
];

export function Footer() {
  return (
    <footer id="about" className="bg-navy-2 text-white">
      <div className="mx-auto max-w-wrap px-6 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 font-display">
              <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-cyan via-blue to-teal text-sm font-bold text-navy">
                K
              </span>
              <span className="text-[15px] font-bold tracking-tight">KARIS</span>
            </div>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/55">
              Building intelligent systems for Africa — AI, strategy, water, and
              finance, unified into scalable infrastructure.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/80">
                {c.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-[13.5px] text-white/55 hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div id="contact">
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-white/80">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-white/55">
              <li>
                <a href="mailto:info@karistech.com" className="hover:text-white">
                  info@karistech.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  karistech.com
                </a>
              </li>
              <li>Zambia · Nigeria · Kenya</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line-navy)] pt-6 text-[12.5px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Karis Technologies Limited. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
