"use client";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-52 pb-20 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-7">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-[11px] uppercase tracking-[0.32em] text-jade">
              — Chiropractic · 5 ★ · Linden Ave —
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="mt-6 font-display text-[clamp(3rem,7vw,7rem)] leading-[1.0] tracking-tight text-ink">
              The body wants <br/>
              <span className="italic">to be still.</span>
              <span className="seal ml-3 align-middle">心</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }} className="mt-7 max-w-lg text-lg leading-[1.7] text-ink-2">
              A small chiropractic and recovery practice on Linden
              Avenue. Adjustments, posture work, and time spent
              listening to where the pain actually started.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55 }} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#visit" className="bg-ink text-paper px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-seal transition-colors">Schedule a visit →</a>
              <a href="#care" className="border border-ink text-ink px-7 py-4 text-[11px] uppercase tracking-[0.24em] hover:bg-ink hover:text-paper transition-colors">What we treat</a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.2 }} className="col-span-12 md:col-span-5">
            {/* Human silhouette with pressure points */}
            <div className="relative aspect-[3/4] border border-rule-2 bg-paper-2">
              <svg viewBox="0 0 240 320" className="absolute inset-0 h-full w-full">
                {/* silhouette */}
                <ellipse cx="120" cy="60" rx="28" ry="34" fill="#36322A" />
                <path d="M 80 100 L 160 100 L 175 220 L 145 220 L 145 305 L 95 305 L 95 220 L 65 220 Z" fill="#36322A" />
                {/* Pressure points (pulse) */}
                {[
                  [120, 60, 0],   // head
                  [120, 110, 0.3], // neck
                  [120, 145, 0.6], // mid back
                  [120, 185, 0.9], // low back
                  [100, 240, 1.2], // left knee
                  [140, 240, 1.5], // right knee
                ].map(([x,y,d], i) => (
                  <g key={i} className="float-tiny" style={{ animationDelay: `${d}s` }}>
                    <circle cx={x} cy={y} r="6" fill="#C73C26" opacity="0.85" />
                    <circle cx={x} cy={y} r="12" fill="none" stroke="#C73C26" strokeWidth="1" opacity="0.35" />
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-3 right-3 vertical-tate font-display text-sm text-ink-soft">
                図一・体
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
