import Image from "next/image";
import Reveal from "./Reveal";

const STEPS = [
  { n: "01", t: "Listen", d: "Your first visit runs about 45 minutes and is mostly conversation. Pain history, daily habits, and what it is keeping you from doing." },
  { n: "02", t: "Assess", d: "Range of motion, palpation, and posture. Imaging only when it is genuinely needed, and we explain why before anything else." },
  { n: "03", t: "Adjust", d: "Manual adjustment and gentle mobilization. Every movement is explained before it happens, so nothing is a surprise." },
  { n: "04", t: "Recover", d: "Heat, ice, percussion, or breath work, matched to your body. You leave knowing how to take care of yourself between visits." },
  { n: "05", t: "Maintain", d: "Two or three stretches a day and a simple check-in rhythm. Most patients feel real change inside a few visits." },
];

export default function Method() {
  return (
    <section id="method" className="relative bg-[var(--care-2)] py-20 text-[var(--bg)] md:py-28">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-12">
          {/* sticky intro + photo */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <Reveal className="kicker !text-[var(--clay)]">03 · The method</Reveal>
              <Reveal as="h2" className="mt-4 serif text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.05]">
                Five steps, and
                <br /> usually <span className="ital text-[var(--clay)]">simpler</span>
                <br /> than you expect.
              </Reveal>
              <Reveal className="mt-6 max-w-sm leading-[1.75] text-[var(--bg)]/80" delay={80}>
                No long contracts, no scare tactics. A clear plan, explained in
                plain language, in whichever of four languages is easiest for you.
              </Reveal>
              <Reveal className="graded mono frame relative mt-8 hidden aspect-[5/4] w-full rounded-2xl md:block" delay={120}>
                <Image
                  src="/img/recovery-band.jpg"
                  alt="A patient resting through a calming recovery and bodywork session"
                  fill
                  sizes="40vw"
                  className="rounded-2xl"
                />
              </Reveal>
            </div>
          </div>

          {/* steps */}
          <ol className="md:col-span-7">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                as="li"
                className={`grid grid-cols-[3.2rem_1fr] gap-5 py-7 sm:grid-cols-[4rem_1fr] sm:gap-7 ${
                  i !== STEPS.length - 1 ? "border-b border-[var(--bg)]/15" : ""
                }`}
                delay={i * 50}
              >
                <div className="tnum serif text-3xl leading-none text-[var(--care-soft)] sm:text-4xl">
                  {s.n}
                </div>
                <div>
                  <h3 className="serif text-2xl font-medium sm:text-[1.7rem]">{s.t}</h3>
                  <p className="mt-2 leading-[1.7] text-[var(--bg)]/80">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
