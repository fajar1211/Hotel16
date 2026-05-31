import deluxe from "@/assets/room-deluxe.jpg";
import villa from "@/assets/room-villa.jpg";
import suite from "@/assets/room-suite.jpg";

const rooms = [
  {
    img: deluxe,
    name: "Ocean Deluxe",
    tag: "From IDR 3.4M / night",
    blurb: "Sun-washed king room with a private terrace opening onto the white-sand shoreline.",
    feats: ["55 sqm", "Beachfront", "King bed"],
  },
  {
    img: villa,
    name: "Pool Villa",
    tag: "From IDR 6.8M / night",
    blurb: "Thatched-roof villa wrapped around a private infinity pool framed by coconut palms.",
    feats: ["120 sqm", "Private pool", "Butler"],
  },
  {
    img: suite,
    name: "Honeymoon Suite",
    tag: "From IDR 9.2M / night",
    blurb: "A two-room sanctuary of candlelight, stone tubs, and uninterrupted horizon views.",
    feats: ["180 sqm", "Sunset view", "Dining-in-villa"],
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
            Rooms & Suites
          </p>
          <h2 className="max-w-3xl text-balance text-4xl font-light md:text-6xl">
            Three ways to <em className="font-serif italic text-gold">disappear</em> beautifully.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {rooms.map((r) => (
            <article
              key={r.name}
              className="group relative flex flex-col overflow-hidden rounded-sm bg-card shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_color-mix(in_oklab,var(--gold)_50%,transparent)]"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={1400}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur">
                  {r.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-serif text-3xl text-primary">{r.name}</h3>
                <div className="mt-3 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{r.blurb}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {r.feats.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onMouseDown={(e) => {
                    const t = e.currentTarget;
                    const rect = t.getBoundingClientRect();
                    t.style.setProperty("--rx", `${e.clientX - rect.left}px`);
                    t.style.setProperty("--ry", `${e.clientY - rect.top}px`);
                  }}
                  className="ripple mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-foreground transition-all hover:bg-gold hover:text-gold-foreground"
                >
                  Book Now
                  <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
