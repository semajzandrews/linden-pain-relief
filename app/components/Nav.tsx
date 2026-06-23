"use client";
import { useEffect, useState } from "react";
import { SITE } from "./site";
import Mark from "./Mark";

const LINKS = [
  { label: "Care", href: "#care" },
  { label: "Where it hurts", href: "#bodymap" },
  { label: "Method", href: "#method" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--line)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="wrap flex h-[68px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label={SITE.name}>
            <Mark className="h-9 w-9 shrink-0" />
            <span className="leading-none">
              <span className="block serif text-[1.05rem] font-medium text-[var(--ink)]">
                Linden Pain Relief
              </span>
              <span className="block text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
                Health Center · Orange, NJ
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.78rem] font-medium tracking-wide text-[var(--ink-2)] transition-colors hover:text-[var(--care)]"
              >
                {l.label}
              </a>
            ))}
            <a href={SITE.phoneHref} className="btn btn-solid">
              Call {SITE.phoneDisplay}
            </a>
          </nav>

          {/* mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-2)] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <line x1="2" y1={open ? "9" : "5"} x2="16" y2={open ? "9" : "5"} stroke="currentColor" strokeWidth="1.5" style={{ transform: open ? "rotate(45deg)" : "none", transformOrigin: "center", transition: "0.3s" }} />
              <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" opacity={open ? 0 : 1} style={{ transition: "0.2s" }} />
              <line x1="2" y1={open ? "9" : "13"} x2="16" y2={open ? "9" : "13"} stroke="currentColor" strokeWidth="1.5" style={{ transform: open ? "rotate(-45deg)" : "none", transformOrigin: "center", transition: "0.3s" }} />
            </svg>
          </button>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[var(--care-2)]/95 backdrop-blur-lg" onClick={() => setOpen(false)} />
        <nav className="relative flex h-full flex-col justify-center gap-3 px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="serif text-4xl italic text-[var(--bg)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            onClick={() => setOpen(false)}
            className="btn btn-clay mt-6 w-fit"
          >
            Call {SITE.phoneDisplay}
          </a>
          <p className="mt-8 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg)]/70">
            {SITE.languages.join("  ·  ")}
          </p>
        </nav>
      </div>

      {/* fixed mobile call pill — thumb-sized icon (ARSENAL §13) */}
      <a
        href={SITE.phoneHref}
        aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--clay)] text-white shadow-lg shadow-[var(--clay)]/30 transition-transform hover:scale-105 lg:hidden"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2 2C11 21.5 2.5 13 2.5 5.5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      </a>
    </>
  );
}
