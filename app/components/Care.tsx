import Image from "next/image";
import Reveal from "./Reveal";

const CONCERNS = [
  {
    t: "Low back pain",
    d: "The most common reason patients walk in. Adjustment, decompression, and the daily habits keeping it there.",
  },
  {
    t: "Neck pain & stiffness",
    d: "From desks, phones, sleep, or a car accident. Cervical work plus simple posture cues that hold.",
  },
  {
    t: "Shoulder & arm",
    d: "Rotator cuff strain, frozen shoulder, and pain referred down the arm from the upper spine.",
  },
  {
    t: "Hip & knee",
    d: "Alignment work and recovery from a minor sports injury, so you move without bracing for it.",
  },
  {
    t: "Sports injury",
    d: "Get back to the game on a real timeline. Assessment, hands-on care, and rehab you can do at home.",
  },
  {
    t: "Tension headache",
    d: "Often a neck problem in disguise. Quick to assess, and a relief most patients feel early.",
  },
];

export default function Care() {
  return (
    <section id="care" className="relative border-y border-[var(--line)] bg-[var(--bg-2)] py-20 md:py-28">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-5">
            <Reveal className="kicker">01 · What we treat</Reveal>
            <Reveal as="h2" className="mt-4 serif text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[1.06] text-[var(--ink)]">
              Most pain comes
              <br /> from a handful of
              <br /> <span className="ital text-[var(--care)]">familiar places.</span>
            </Reveal>
            <Reveal className="mt-6 max-w-md leading-[1.75] text-[var(--ink-2)]" delay={80}>
              Dr. Baptiste sees the same conditions every week, and treats them
              with the same patience. No upsell, no fear. Just an honest read on
              what is going on and a plan to fix it.
            </Reveal>
            <Reveal className="mt-8 graded frame relative aspect-[4/3] w-full rounded-2xl" delay={120}>
              <Image
                src="/img/consult.jpg"
                alt="Dr. Baptiste talking through a patient's imaging during a consultation"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="rounded-2xl"
              />
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CONCERNS.map((c, i) => (
                <Reveal
                  key={c.t}
                  className="group rounded-2xl border border-[var(--line)] bg-[var(--bg)] p-6 transition-colors hover:border-[var(--care-soft)]"
                  delay={i * 60}
                >
                  <div className="flex items-center gap-2 text-[var(--clay)]">
                    <span className="tnum serif text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-[var(--line)] transition-colors group-hover:bg-[var(--clay)]/40" />
                  </div>
                  <h3 className="mt-4 serif text-[1.45rem] font-medium leading-snug text-[var(--ink)]">
                    {c.t}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-[1.65] text-[var(--ink-soft)]">
                    {c.d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
