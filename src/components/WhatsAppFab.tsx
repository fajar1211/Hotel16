export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/6256255500188"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-2xl shadow-black/30 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.17_150)] animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.17_150)] animate-pulse-ring" style={{ animationDelay: "1.1s" }} />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.32.17 11.87a11.8 11.8 0 0 0 1.6 5.94L0 24l6.34-1.66a11.88 11.88 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.88-11.87a11.8 11.8 0 0 0-3.41-8.44ZM12.05 21.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.98 1-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.23c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 7 2.9 9.81 9.81 0 0 1 2.9 7c0 5.45-4.44 9.87-9.9 9.87Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07a8.1 8.1 0 0 1-2.39-1.48 9.05 9.05 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.02-1.05 2.5 1.07 2.9 1.22 3.1c.15.2 2.11 3.23 5.12 4.53.71.31 1.27.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
