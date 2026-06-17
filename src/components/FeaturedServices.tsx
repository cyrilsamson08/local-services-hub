import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Marcus Johnson",
    title: "Master Plumber",
    rating: 4.9,
    reviews: 218,
    location: "Brooklyn, NY",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    tag: "Home Repair",
  },
  {
    name: "Sophia Chen",
    title: "Math & Science Tutor",
    rating: 5.0,
    reviews: 142,
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80",
    tag: "Tutoring",
  },
  {
    name: "Bright Home Co.",
    title: "Deep Cleaning Service",
    rating: 4.8,
    reviews: 304,
    location: "Queens, NY",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    tag: "Cleaning",
  },
  {
    name: "Elena Rodriguez",
    title: "Hair Stylist & Colorist",
    rating: 4.9,
    reviews: 186,
    location: "Jersey City, NJ",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    tag: "Beauty",
  },
];

export function FeaturedServices() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured services
            </h2>
            <p className="mt-3 text-muted-foreground">
              Top-rated professionals trusted by your neighbors
            </p>
          </div>
          <Button variant="outline">View all</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.name}
              className="group overflow-hidden rounded-2xl bg-card transition-all hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {s.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-foreground">{s.name}</h3>
                  <BadgeCheck className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.title}</p>

                <div className="mt-3 flex items-center gap-1.5 text-sm">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold text-foreground">{s.rating}</span>
                  <span className="text-muted-foreground">({s.reviews})</span>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{s.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
