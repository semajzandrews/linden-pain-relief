"use client";
import { motion } from "motion/react";

const CONCERNS = [
  { kanji: "頸", t: "Neck pain", d: "Tension from desks, sleep, or impact. Cervical adjustments + posture cues." },
  { kanji: "腰", t: "Low back pain", d: "Most common reason patients arrive. Often gone in three to five visits." },
  { kanji: "肩", t: "Shoulder + arm", d: "Frozen shoulder, rotator cuff strain, referred pain from the upper spine." },
  { kanji: "膝", t: "Knee + hip", d: "Alignment work, recovery from minor sports injury, post-surgical mobility." },
  { kanji: "頭", t: "Tension headache", d: "Often a neck issue in disguise. Quick to address, hard to ignore." },
  { kanji: "睡", t: "Sleep + recovery", d: "When pain is keeping you up. Patient education + at-home stretches." },
];

export default function Care() {
  return (
    <section id="care" className="py-24 md:py-32 bg-paper-2 border-y border-rule">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.32em] text-jade">— 01 · What we treat —</div>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,4.5rem)] italic text-ink leading-tight">
            Six conversations <br/>that bring most patients in.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONCERNS.map((c, i) => (
            <motion.div key={c.t} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: (i%3)*0.07 }} className="bg-paper border border-rule p-7">
              <div className="font-display text-5xl text-seal">{c.kanji}</div>
              <div className="mt-4 font-display text-2xl italic text-ink">{c.t}</div>
              <p className="mt-2 text-sm text-ink-soft leading-[1.7]">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
