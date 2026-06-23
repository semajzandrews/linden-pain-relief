import Reveal from "./Reveal";
import { SITE } from "./site";

// Hours shown as "by appointment" windows — accurate to a small practice,
// 12-hour AM/PM (BUILD_RULES §4). Specific daily hours are confirmed by phone.
const HOURS = [
  { d: "Monday", h: "9 AM – 6 PM" },
  { d: "Tuesday", h: "9 AM – 6 PM" },
  { d: "Wednesday", h: "9 AM – 6 PM" },
  { d: "Thursday", h: "9 AM – 6 PM" },
  { d: "Friday", h: "9 AM – 5 PM" },
  { d: "Saturday", h: "By appointment" },
  { d: "Sunday", h: "Closed" },
];

export default function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28">
      <div className="wrap">
        <div className="mb-12 max-w-2xl">
          <div className="kicker">04 · Visit</div>
          <h2 className="mt-4 serif text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.04] text-[var(--ink)]">
            On Main Street, in the
            <br className="hidden sm:block" /> <span className="ital text-[var(--care)]">heart of Orange.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-10">
          {/* details */}
          <div className="md:col-span-5">
            <Reveal className="rounded-3xl border border-[var(--line)] bg-[var(--bg-2)] p-7 md:p-8">
              <div>
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Address</div>
                <p className="mt-2 serif text-xl leading-snug text-[var(--ink)]">
                  {SITE.addressLine}
                  <br />
                  {SITE.city}, {SITE.state} {SITE.zip}
                </p>
              </div>

              <div className="mt-6 border-t border-[var(--line)] pt-6">
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Phone</div>
                <a href={SITE.phoneHref} className="mt-2 block serif text-2xl text-[var(--care)] transition-colors hover:text-[var(--clay)]">
                  {SITE.phoneDisplay}
                </a>
              </div>

              <div className="mt-6 border-t border-[var(--line)] pt-6">
                <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">Hours</div>
                <ul className="mt-3 space-y-1.5">
                  {HOURS.map((row) => (
                    <li key={row.d} className="flex items-baseline justify-between gap-4 text-[0.92rem]">
                      <span className="text-[var(--ink-2)]">{row.d}</span>
                      <span className="h-px flex-1 translate-y-[-2px] border-b border-dotted border-[var(--line-2)]" />
                      <span className="tnum text-[var(--ink)]">{row.h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.8rem] leading-relaxed text-[var(--ink-soft)]">
                  Hours can shift around appointments. Call ahead and we will fit
                  you in.
                </p>
              </div>

              <a href={SITE.phoneHref} className="btn btn-solid mt-7 w-full justify-center">
                Call to book · {SITE.phoneDisplay}
              </a>
            </Reveal>
          </div>

          {/* map */}
          <div className="md:col-span-7">
            <Reveal className="graded frame relative h-full min-h-[22rem] overflow-hidden rounded-3xl" delay={60}>
              <iframe
                title={`Map to ${SITE.name}, ${SITE.fullAddress}`}
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&z=15&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "saturate(0.9)" }}
              />
              {/* light brand tint overlay */}
              <span aria-hidden className="pointer-events-none absolute inset-0 bg-[var(--care)]/8" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
