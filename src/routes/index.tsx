import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GalleryStrip } from "@/components/GalleryStrip";
import { Rooms } from "@/components/Rooms";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kelapa Bay Resort — Tropical Luxury in Singkawang" },
      {
        name: "description",
        content:
          "A five-star beachfront sanctuary of teak villas, infinity pools, and unhurried sunsets on Singkawang's golden coastline.",
      },
      { property: "og:title", content: "Kelapa Bay Resort — Tropical Luxury in Singkawang" },
      {
        property: "og:description",
        content:
          "Beachfront villas, private pools, and cinematic sunsets at Indonesia's most golden shoreline.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <GalleryStrip />
      <Rooms />
      <Experience />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
