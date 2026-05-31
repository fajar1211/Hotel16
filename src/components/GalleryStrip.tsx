import v1 from "@/assets/villa-1.jpg";
import v2 from "@/assets/villa-2.jpg";
import v3 from "@/assets/villa-3.jpg";
import { useEffect, useState } from "react";

const slides = [
  { src: v1, caption: "Open-air canopy suites" },
  { src: v2, caption: "Overwater pool villas" },
  { src: v3, caption: "Stonebath at blue hour" },
];

export function GalleryStrip() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="gallery" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto mb-14 max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              The Resort
            </p>
            <h2 className="max-w-2xl text-balance text-4xl font-light leading-tight md:text-6xl">
              Architecture that <em className="font-serif italic text-gold">listens</em> to the sea.
            </h2>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-px transition-all duration-500 ${
                  i === idx ? "w-12 bg-primary" : "w-6 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-[60vh] min-h-[480px] max-w-[1400px] overflow-hidden md:h-[78vh]">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.src}
              alt={s.caption}
              loading="lazy"
              width={1600}
              height={1024}
              className={`h-full w-full object-cover transition-transform duration-[6000ms] ease-out ${
                i === idx ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-cream">
              <p className="text-[10px] uppercase tracking-[0.45em] text-gold">
                0{idx + 1} — Kelapa Bay
              </p>
              <p className="mt-3 font-serif text-2xl italic md:text-4xl">{s.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
