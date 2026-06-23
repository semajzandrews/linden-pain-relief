"use client";
import { useState } from "react";

type Region = {
  id: string;
  label: string;
  // position on the 220x460 body viewBox
  x: number;
  y: number;
  blurb: string;
  approach: string;
};

const REGIONS: Region[] = [
  { id: "neck", label: "Neck", x: 110, y: 78, blurb: "Stiffness, tension, and headaches that start at the base of the skull.", approach: "Gentle cervical adjustment, soft-tissue release, and posture cues for desks and phones." },
  { id: "shoulder", label: "Shoulder", x: 150, y: 118, blurb: "Rotator cuff strain, frozen shoulder, and pain referred down the arm.", approach: "Mobilization of the joint and upper spine, then a simple home routine to keep range." },
  { id: "upperback", label: "Upper back", x: 110, y: 150, blurb: "The mid-back ache that builds through a long day at a screen.", approach: "Thoracic adjustment and breathing work to unlock the ribcage." },
  { id: "lowback", label: "Lower back", x: 110, y: 210, blurb: "The most common reason patients arrive, and the one we know best.", approach: "Adjustment, decompression, and the daily habits that keep it from coming back." },
  { id: "hip", label: "Hip", x: 138, y: 240, blurb: "Tightness and alignment issues that change the way you walk.", approach: "Pelvic alignment and targeted mobility so the joint loads evenly again." },
  { id: "knee", label: "Knee", x: 96, y: 330, blurb: "Recovery from a minor sports injury or wear that flares with activity.", approach: "Alignment up the chain, plus rehab you can actually keep up at home." },
];

export default function BodyMap() {
  const [active, setActive] = useState<Region>(REGIONS[3]); // default: lower back

  return (
    <section id="bodymap" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute right-[-10%] top-1/4 -z-10 h-[30rem] w-[30rem] rounded-full bg-[var(--care)]/6 blur-3xl" />
      <div className="wrap">
        <div className="mb-12 max-w-2xl">
          <div className="kicker">02 · Where it hurts</div>
          <h2 className="mt-4 serif text-[clamp(2rem,4.6vw,3.5rem)] font-medium leading-[1.05] text-[var(--ink)]">
            Point to it. We will tell you
            <br className="hidden sm:block" /> <span className="ital text-[var(--clay)]">how we would treat it.</span>
          </h2>
          <p className="mt-5 text-[var(--ink-2)] leading-[1.7]">
            Tap a part of the body to see what usually causes pain there and how
            Dr. Baptiste approaches it. No diagnosis from a screen, just an honest
            sense of what your first visit might look like.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-12 md:gap-x-12">
          {/* the figure */}
          <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-[20rem]">
              <svg viewBox="0 0 220 460" className="w-full" role="group" aria-label="Body map. Select a region to learn how it is treated.">
                {/* simple, calm figure silhouette */}
                <g fill="var(--bg-3)" stroke="var(--line-2)" strokeWidth="1.5">
                  <circle cx="110" cy="52" r="26" />
                  <path d="M82 92 h56 q12 0 14 14 l8 78 q1 10 -9 12 l-10 2 -6 -64 -2 84 q-1 12 4 64 l8 84 q2 12 -10 12 h-10 q-9 0 -10 -10 l-7 -120 -7 120 q-1 10 -10 10 h-10 q-12 0 -10 -12 l8 -84 q5 -52 4 -64 l-2 -84 -6 64 -10 -2 q-10 -2 -9 -12 l8 -78 q2 -14 14 -14 Z" />
                </g>

                {/* care-tinted spine guide */}
                <line x1="110" y1="92" x2="110" y2="250" stroke="var(--care-soft)" strokeWidth="2" strokeDasharray="3 5" opacity="0.5" />

                {REGIONS.map((r) => {
                  const isActive = r.id === active.id;
                  return (
                    <g
                      key={r.id}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isActive}
                      aria-label={`${r.label}: ${r.blurb}`}
                      onClick={() => setActive(r)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(r); } }}
                      className="cursor-pointer outline-none"
                      style={{ transition: "transform .3s var(--ease)" }}
                    >
                      {isActive && (
                        <circle cx={r.x} cy={r.y} r="9" className="map-ring" fill="none" stroke="var(--clay)" strokeWidth="2" />
                      )}
                      <circle
                        cx={r.x}
                        cy={r.y}
                        r={isActive ? 8 : 6}
                        fill={isActive ? "var(--clay)" : "var(--bg)"}
                        stroke={isActive ? "var(--clay)" : "var(--care)"}
                        strokeWidth="2"
                      />
                      {/* enlarge hit area */}
                      <circle cx={r.x} cy={r.y} r="16" fill="transparent" />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* region chips for keyboard / clarity */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActive(r)}
                  aria-pressed={r.id === active.id}
                  className={`rounded-full px-3.5 py-1.5 text-[0.78rem] font-medium transition-colors ${
                    r.id === active.id
                      ? "bg-[var(--care)] text-[var(--bg)]"
                      : "border border-[var(--line-2)] text-[var(--ink-2)] hover:border-[var(--care)] hover:text-[var(--care)]"
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* readout */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-2)] p-7 md:p-10">
              <div className="text-[0.7rem] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                Pain in the
              </div>
              <h3 key={active.id} className="reveal in mt-2 serif text-[clamp(2rem,5vw,3rem)] font-medium leading-none text-[var(--care)]">
                {active.label.toLowerCase()}.
              </h3>
              <p className="mt-6 text-[1.05rem] leading-[1.7] text-[var(--ink)]">
                {active.blurb}
              </p>
              <div className="mt-7 rounded-2xl bg-[var(--bg)] p-5">
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-[var(--clay)]">
                  How we approach it
                </div>
                <p className="mt-2 leading-[1.7] text-[var(--ink-2)]">
                  {active.approach}
                </p>
              </div>
              <a href="#visit" className="btn btn-clay mt-7">
                Talk it through in person
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
