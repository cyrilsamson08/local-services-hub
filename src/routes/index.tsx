import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedServices } from "@/components/FeaturedServices";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LocalFind — Trusted Local Services Near You" },
      {
        name: "description",
        content:
          "Discover top-rated local professionals: home repair, tutors, cleaning, beauty and more. Find trusted services in your neighborhood.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedServices />
      </main>
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          © 2026 LocalFind. Connecting communities with trusted services.
        </div>
      </footer>
    </div>
  );
}
