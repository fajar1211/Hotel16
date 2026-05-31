export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary text-cream">
      {/* Breathing wave SVG on top */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-16 w-full -translate-y-px text-cream"
        aria-hidden
      >
        <path
          fill="currentColor"
          className="animate-wave"
          style={{ transformOrigin: "center" }}
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,80 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl">
            Kelapa<span className="text-gold">·</span>Bay
          </p>
          <p className="mt-5 max-w-sm text-sm text-cream/65">
            Jl. Pantai Pasir Panjang KM 14, Singkawang, West Kalimantan, Indonesia 79114
          </p>
          <div className="mt-8 flex gap-3">
            {["IG", "FB", "TT"].map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 text-xs transition-colors hover:border-gold hover:text-gold"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">Resort</p>
          <ul className="space-y-3 text-sm text-cream/75">
            <li><a href="#rooms" className="hover:text-gold">Rooms & Suites</a></li>
            <li><a href="#experience" className="hover:text-gold">Experiences</a></li>
            <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
            <li><a href="#" className="hover:text-gold">Wedding & Events</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-gold">Reservations</p>
          <ul className="space-y-3 text-sm text-cream/75">
            <li>+62 562 555 0188</li>
            <li>stay@kelapabay.id</li>
            <li className="pt-3">
              <a href="#book" className="border-b border-gold pb-1 text-gold hover:text-cream">
                Book direct →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-[11px] uppercase tracking-[0.3em] text-cream/40">
        © {new Date().getFullYear()} Kelapa Bay Resort — All rights reserved
      </div>
    </footer>
  );
}
