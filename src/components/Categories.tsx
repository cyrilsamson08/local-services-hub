import {
  Wrench,
  GraduationCap,
  Sparkles,
  Scissors,
  Car,
  Stethoscope,
  Camera,
  PawPrint,
} from "lucide-react";

const categories = [
  { icon: Wrench, label: "Home Repair", count: "320+ pros" },
  { icon: GraduationCap, label: "Tutors", count: "180+ pros" },
  { icon: Sparkles, label: "Cleaning", count: "240+ pros" },
  { icon: Scissors, label: "Beauty", count: "150+ pros" },
  { icon: Car, label: "Auto Care", count: "90+ pros" },
  { icon: Stethoscope, label: "Wellness", count: "110+ pros" },
  { icon: Camera, label: "Events", count: "75+ pros" },
  { icon: PawPrint, label: "Pet Care", count: "60+ pros" },
];

export function Categories() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Browse by category
          </h2>
          <p className="mt-3 text-muted-foreground">
            Find exactly what you need from our top categories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {categories.map(({ icon: Icon, label, count }) => (
            <button
              key={label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{count}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
