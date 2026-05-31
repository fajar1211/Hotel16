import heroImg from "@/assets/hero-sunset.jpg";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Cinematic still with slow zoom — stands in for video on mobile-friendly loads */}
      <img
        src={heroImg}
        alt="Kelapa Bay Resort at golden sunset"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
      />
      {/* Tonal overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-primary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]" />

      {/* Floating palm leaf */}
      <svg
        viewBox="0 0 200 200"
        className="absolute -left-10 top-24 h-48 w-48 text-gold/40 animate-float md:h-64 md:w-64"
        aria-hidden
      >
        <path
          d="M100 180 C 90 130 70 90 30 60 C 70 70 90 90 100 110 C 110 90 130 70 170 60 C 130 90 110 130 100 180Z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        className="absolute -right-12 top-1/3 h-56 w-56 rotate-45 text-gold/30 animate-float md:h-72 md:w-72"
        style={{ animationDelay: "-2s" }}
        aria-hidden
      >
        <path
          d="M100 180 C 90 130 70 90 30 60 C 70 70 90 90 100 110 C 110 90 130 70 170 60 C 130 90 110 130 100 180Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
        <p
          className="mb-6 text-xs font-medium uppercase tracking-[0.5em] text-gold animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Singkawang · Indonesia
        </p>
        <h1
          className="max-w-5xl text-balance text-5xl font-light leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem] animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Where the <em className="font-serif italic text-gold">tide</em> writes
          <br /> its softest letters.
        </h1>
        <p
          className="mt-8 max-w-xl text-base font-light text-cream/85 md:text-lg animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          A five-star sanctuary of teak villas, infinity pools, and unhurried sunsets
          along the equator's most golden shoreline.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.75s" }}
        >
          <a
            href="#book"
            className="ripple inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-foreground shadow-2xl shadow-black/40 transition-transform hover:-translate-y-0.5"
          >
            Reserve your stay
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 border-b border-cream/60 pb-1 text-xs font-medium uppercase tracking-[0.25em] text-cream transition-colors hover:text-gold"
          >
            Discover the resort →
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-cream/70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <span className="h-12 w-px animate-pulse bg-cream/60" />
        </div>
      </div>
    </section>
  );
}
