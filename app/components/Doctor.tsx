import Image from "next/image";
import Reveal from "./Reveal";
import { SITE } from "./site";

const FACTS = [
  { k: "Training", v: "Rutgers University, then Doctor of Chiropractic at Sherman College" },
  { k: "Focus", v: "Spine, posture, and recovery, with an unhurried first visit" },
  { k: "Languages", v: "English, Español, Português, Kreyòl Ayisyen" },
];

export default function Doctor() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--bg-2)] py-20 md:py-28">
      <div className="wrap grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-x-12">
        <div className="md:col-span-5">
          <Reveal className="graded frame relative aspect-[4/5] w-full overflow-hidden rounded-[1.4rem]">
            <Image
              src="/img/practitioner.jpg"
              alt="Dr. Kesnold Baptiste, the chiropractor at Linden Pain Relief Health Center"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="rounded-[1.4rem]"
            />
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal className="kicker">The chiropractor</Reveal>
          <Reveal as="h2" className="mt-4 serif text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.05] text-[var(--ink)]">
            {SITE.doctor}
          </Reveal>
          <Reveal className="mt-5 max-w-xl text-[1.05rem] leading-[1.75] text-[var(--ink-2)]" delay={70}>
            Dr. Baptiste built this practice around a simple belief: people heal
            faster when they understand what is happening in their own body. He
            takes the time to explain, answers the questions you came in with, and
            never rushes the part where you actually feel heard.
          </Reveal>

          <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
            {FACTS.map((f) => (
              <Reveal key={f.k} className="bg-[var(--bg)] p-5">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--clay)]">{f.k}</dt>
                <dd className="mt-2 text-[0.92rem] leading-[1.55] text-[var(--ink-2)]">{f.v}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal className="mt-8 border-l-2 border-[var(--clay)] pl-5" delay={60}>
            <p className="serif text-[1.4rem] italic leading-[1.5] text-[var(--ink)]">
              &ldquo;Clean place, the doctor is excellent, and the staff is very
              nice. I would recommend other patients to come.&rdquo;
            </p>
            <p className="mt-3 text-[0.78rem] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
              Patient review · Google
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
