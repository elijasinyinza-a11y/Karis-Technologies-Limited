"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Solutions", href: "/#platforms" },
  { label: "Industries", href: "/#sectors" },
  { label: "Insights", href: "#/insights" },
  { label: "About us", href: "#/about" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-display text-white">
      <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-cyan via-blue to-teal text-sm font-bold text-navy shadow-[0_0_18px_rgba(46,231,255,0.35)]">
        K
      </span>
      <span className="text-[15px] font-bold tracking-tight">
        KARIS
        <span className="ml-1 text-[10.5px] font-normal tracking-[0.1em] text-white/50">
          TECHNOLOGIES
        </span>
      </span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line-navy)] bg-[rgba(8,15,32,0.72)] backdrop-blur-[14px] backdrop-saturate-150">
      <nav className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#login"
            className="rounded-pill bg-gradient-to-r from-cyan to-teal px-5 py-2.5 text-[13.5px] font-semibold text-navy shadow-[0_8px_20px_rgba(23,214,188,0.25)] transition-transform hover:-translate-y-0.5"
          >
            Platform login
          </Link>
        </div>

        <button
          type="button"
          className="text-white sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="animate-slide-down border-t border-[var(--line-navy)] bg-navy px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-pill bg-gradient-to-r from-cyan to-teal px-5 py-3 text-center text-sm font-semibold text-navy"
            >
              Platform login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
