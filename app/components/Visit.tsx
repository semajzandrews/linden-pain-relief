"use client";
import { motion } from "motion/react";

export default function Visit() {
  return (
    <section id="visit" className="py-28 md:py-36 bg-jade-2 text-paper">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <div className="text-[11px] uppercase tracking-[0.32em] text-paper/70">— 03 · Visit —</div>
          <h2 className="mt-3 font-display text-[clamp(2.6rem,7vw,7rem)] italic leading-[1.0]">
            Linden Avenue. <br/>
            <span className="seal align-middle">林</span> Orange, NJ.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { k: "By appointment", v: "Mon – Sat" },
            { k: "First visit", v: "45 minutes" },
            { k: "Standing", v: "5 ★ Google" },
          ].map((s) => (
            <div key={s.k} className="border border-paper/30 p-7">
              <div className="text-[10px] uppercase tracking-[0.32em] text-paper/70">{s.k}</div>
              <div className="mt-3 font-display italic text-2xl">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="tel:" className="bg-seal text-paper px-10 py-5 text-[11px] uppercase tracking-[0.32em] hover:bg-paper hover:text-jade-2 transition-colors inline-flex items-center gap-3">
            Schedule a visit →
          </a>
        </div>
      </div>
    </section>
  );
}
