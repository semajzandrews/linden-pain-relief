"use client";
import { motion } from "motion/react";

const STEPS = [
  { n: "一", t: "Listen", d: "First visit is 45 minutes, mostly conversation. Pain history, daily habits, what's holding you back." },
  { n: "二", t: "Assess", d: "Range-of-motion, palpation, posture. Imaging only if needed and we say why first." },
  { n: "三", t: "Adjust", d: "Manual adjustments + gentle mobilization. We explain each movement before we make it." },
  { n: "四", t: "Recover", d: "Heat, ice, or breath work depending on the body. You leave knowing how to take care of yourself." },
  { n: "五", t: "Practice", d: "Two to three stretches a day. We text reminders if you'd like, only the helpful kind." },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.32em] text-jade">— 02 · The method —</div>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.5rem)] italic text-ink leading-tight">
            Five steps, often <br/>finished in three visits.
          </h2>
        </div>

        <ol className="max-w-3xl mx-auto space-y-12">
          {STEPS.map((s, i) => (
            <motion.li key={s.n} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0 }} className="grid grid-cols-[80px_1fr] gap-8 items-start">
              <div className="text-right">
                <div className="font-display text-6xl text-seal italic">{s.n}</div>
              </div>
              <div>
                <h3 className="font-display text-2xl italic text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-2 leading-[1.7]">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
