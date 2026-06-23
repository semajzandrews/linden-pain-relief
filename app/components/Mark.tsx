// Bespoke brand mark — a stylized spine reading as an "L".
// Single source of truth, reused in nav + footer. Care-green badge, clay spine.
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Linden Pain Relief mark">
      <rect x="0.5" y="0.5" width="39" height="39" rx="11" fill="var(--care)" />
      {/* vertebral spine descending then turning — an L made of discs */}
      <g fill="none" stroke="var(--bg)" strokeWidth="2.4" strokeLinecap="round">
        <path d="M14 9 L14 27 Q14 30 17 30 L28 30" />
      </g>
      <g fill="var(--clay)">
        <circle cx="14" cy="11" r="2.1" />
        <circle cx="14" cy="16.5" r="2.1" />
        <circle cx="14" cy="22" r="2.1" />
        <circle cx="20.5" cy="30" r="2.1" />
        <circle cx="26" cy="30" r="2.1" />
      </g>
    </svg>
  );
}
