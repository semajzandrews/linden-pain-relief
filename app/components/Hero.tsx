"use client";
import Image from "next/image";
import { SITE } from "./site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* soft atmospheric backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[42rem] w-[42rem] rounded-full bg-[var(--care)]/8 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[34rem] w-[34rem] rounded-full bg-[var(--clay)]/8 blur-3xl" />
      </div>

      <div className="wrap grid grid-cols-1 items-center gap-y-12 md:grid-cols-12 md:gap-x-10">
        {/* statement */}
        <div className="md:col-span-7">
          <div className="kicker">Chiropractic &amp; recovery · Orange, NJ</div>

          <h1 className="mt-6 serif text-[clamp(2.6rem,7.4vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.01em] text-[var(--ink)]">
            We find where the
            <br className="hidden sm:block" /> pain{" "}
            <span className="ital text-[var(--clay)]">actually</span> started.
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.75] text-[var(--ink-2)]">
            {SITE.doctor} runs an unhurried chiropractic and recovery practice on
            Main Street. The first visit is mostly listening, then careful
            adjustment and a plan you can keep up at home. Back, neck, shoulders,
            hips, and sports injuries.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#visit" className="btn btn-solid">
              Book a first visit
            </a>
            <a href="#bodymap" className="btn btn-ghost">
              Show me where it hurts
            </a>
          </div>

          {/* language belonging signal — real practice strength */}
          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
              Care in
            </span>
            {SITE.languages.map((l) => (
              <span
                key={l}
                className="rounded-full border border-[var(--line-2)] bg-[var(--bg)] px-3 py-1 text-[0.74rem] font-medium text-[var(--care)]"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* care photograph */}
        <div className="md:col-span-5">
          <div className="relative">
            <div className="graded warm frame relative aspect-[4/5] w-full rounded-[1.4rem] float-soft">
              <Image
                src="/img/hero-care.jpg"
                alt="A practitioner's hands easing tension along a patient's lower back during a manual therapy session"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="rounded-[1.4rem]"
              />
              {/* floating rating chip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-[var(--bg)]/92 px-4 py-3 backdrop-blur-sm">
                <div>
                  <div className="serif text-lg leading-none text-[var(--ink)]">
                    Five-star rated
                  </div>
                  <div className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
                    Patients in Orange &amp; the Oranges
                  </div>
                </div>
                <div aria-hidden className="text-[var(--clay)]">
                  <svg width="84" height="16" viewBox="0 0 84 16" fill="currentColor">
                    {[0, 17, 34, 51, 68].map((x) => (
                      <path
                        key={x}
                        transform={`translate(${x},0)`}
                        d="M8 0l2.2 4.9 5.3.5-4 3.6 1.2 5.2L8 11.9 3.3 14.2l1.2-5.2-4-3.6 5.3-.5z"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
