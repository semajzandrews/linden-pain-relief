"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Care", href: "#care" },
  { label: "Treatments", href: "#treatments" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-paper/95 backdrop-blur-xl border-b border-rule" : "bg-transparent border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="seal w-9 h-9 text-base">林</span>
          <span className="font-display text-2xl italic text-ink">Linden Pain Relief</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[12px] uppercase tracking-[0.22em] text-ink-soft hover:text-seal transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#visit" className="group inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-[10px] uppercase tracking-[0.24em] text-ink hover:bg-seal hover:text-paper hover:border-seal transition-colors">
          Schedule
        </a>
      </div>
    </header>
  );
}
