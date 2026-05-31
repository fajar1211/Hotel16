import { useEffect, useState } from "react";

const links = [
  { label: "Stay", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Dining", href: "#dining" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-primary">
            Kelapa<span className="text-gold">·</span>Bay
          </span>
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="ripple hidden rounded-sm bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl md:inline-flex"
        >
          Reserve
        </a>
      </nav>
      {/* coastline tracing line */}
      <svg
        viewBox="0 0 1200 14"
        preserveAspectRatio="none"
        className="block h-3 w-full text-gold/70"
        aria-hidden
      >
        <path
          d="M0 7 Q 75 0 150 7 T 300 7 T 450 7 T 600 7 T 750 7 T 900 7 T 1050 7 T 1200 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
          className="animate-coast"
        />
      </svg>
    </header>
  );
}
