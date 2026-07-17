import { SITE } from "./site";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] pb-10 pt-16 text-[var(--bg)]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Mark className="h-10 w-10" />
              <span className="serif text-2xl">Linden Pain Relief</span>
            </div>
            <p className="mt-5 max-w-sm leading-[1.7] text-[var(--bg)]/65">
              A small chiropractic and recovery practice on Main Street in Orange.
              We find where the pain actually started, then help you keep it from
              coming back.
            </p>
            <p className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-[0.74rem] text-[var(--care-soft)]">
              {SITE.languages.map((l, i) => (
                <span key={l}>
                  {l}
                  {i < SITE.languages.length - 1 && <span className="ml-2 text-[var(--bg)]/30">/</span>}
                </span>
              ))}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--bg)]/45">Visit</div>
            <p className="mt-3 leading-[1.7] text-[var(--bg)]/80">
              {SITE.addressLine}
              <br />
              {SITE.city}, {SITE.state} {SITE.zip}
            </p>
            <a href={SITE.phoneHref} className="mt-3 inline-block serif text-xl text-[var(--bg)] transition-colors hover:text-[var(--clay)]">
              {SITE.phoneDisplay}
            </a>
          </div>

          <div className="md:col-span-4">
            <div className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--bg)]/45">Pages</div>
            <ul className="mt-3 space-y-2 text-[var(--bg)]/80">
              <li><a href="#care" className="transition-colors hover:text-[var(--clay)]">What we treat</a></li>
              <li><a href="#bodymap" className="transition-colors hover:text-[var(--clay)]">Where it hurts</a></li>
              <li><a href="#method" className="transition-colors hover:text-[var(--clay)]">The method</a></li>
              <li><a href="#visit" className="transition-colors hover:text-[var(--clay)]">Hours &amp; location</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--bg)]/12 pt-6 text-[0.74rem] text-[var(--bg)]/55 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {SITE.name} · {SITE.city}, NJ
          </span>
          <span className="flex items-center gap-1.5">
            built
            <a
              href="https://bysemaj.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--bg)]/80 underline-offset-4 transition-colors hover:text-[var(--clay)] hover:underline"
            >
              bysemaj.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
