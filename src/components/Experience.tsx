const items = [
  { n: "01", t: "Sunset Dhow Cruise", d: "Drift across the bay aboard a hand-built timber yacht." },
  { n: "02", t: "Spice-Garden Spa", d: "Treatments rooted in centuries-old Dayak healing rituals." },
  { n: "03", t: "Reef Snorkel Lagoon", d: "A protected coral garden, ten steps from your villa." },
  { n: "04", t: "Beachfront Omakase", d: "Twelve courses, one table, the entire shoreline as your dining room." },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-primary py-28 text-cream md:py-36">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg viewBox="0 0 600 600" className="h-full w-full">
          <defs>
            <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gold" />
            </pattern>
          </defs>
          <rect width="600" height="600" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              Experiences
            </p>
            <h2 className="text-balance text-4xl font-light leading-tight md:text-6xl">
              Days <em className="font-serif italic text-gold">measured</em> in tides, not hours.
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              Every stay is composed around your rhythm — a private concierge curates each
              encounter, from dawn paddles to candlelit dinners on the sand.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="divide-y divide-cream/15">
              {items.map((it) => (
                <li key={it.n} className="group flex items-start gap-8 py-8 transition-colors hover:bg-cream/[0.03]">
                  <span className="font-serif text-2xl text-gold">{it.n}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-cream md:text-3xl">{it.t}</h3>
                    <p className="mt-2 text-sm text-cream/65">{it.d}</p>
                  </div>
                  <span className="mt-3 text-gold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
