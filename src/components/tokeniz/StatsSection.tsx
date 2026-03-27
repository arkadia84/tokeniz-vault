const stats = [
  { value: "40+", label: "Countries represented" },
  { value: "0%", label: "FX fee on USD" },
  { value: "100+", label: "Payout destinations" },
  { value: "24mo", label: "Account fees waived (Pro)" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border/50 py-0">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`fade-up text-center py-10 px-6 ${
              i < 3 ? "border-r border-border/50" : ""
            } ${i === 1 ? "md:border-r max-md:border-r-0" : ""}`}
          >
            <div className="text-2xl sm:text-3xl font-black text-foreground mb-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
