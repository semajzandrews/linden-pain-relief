export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-14 pb-10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 text-center">
        <div className="flex items-baseline justify-center gap-3">
          <span className="seal">林</span>
          <span className="font-display text-3xl italic">Linden Pain Relief</span>
        </div>
        <p className="mt-6 max-w-sm mx-auto text-paper/70 italic leading-[1.7]">
          A small chiropractic and recovery practice on Linden Avenue,
          Orange NJ. By appointment.
        </p>
        <div className="mt-10 text-[10px] uppercase tracking-[0.32em] text-paper/50">
          © {new Date().getFullYear()} · Linden Pain Relief · Orange, NJ · <a href="https://bysemaj.com" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline transition-opacity hover:opacity-80">built · bysemaj.com</a>
        </div>
      </div>
    </footer>
  );
}
