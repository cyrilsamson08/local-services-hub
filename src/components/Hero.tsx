import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Trusted by 10,000+ locals
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find trusted local services{" "}
            <span className="text-primary">near you</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            From home repair to tutoring, discover top-rated professionals in your neighborhood — all in one place.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div
              className="flex flex-col gap-2 rounded-2xl bg-card p-2 sm:flex-row sm:items-center"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex flex-1 items-center gap-2 border-b border-border px-4 py-2 sm:border-b-0 sm:border-r">
                <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What service do you need?"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <div className="flex flex-1 items-center gap-2 px-4 py-2">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Your location"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
              <span>Popular:</span>
              {["Plumber", "Electrician", "Math Tutor", "House Cleaner"].map((t) => (
                <a key={t} href="#" className="font-medium text-primary hover:underline">
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
