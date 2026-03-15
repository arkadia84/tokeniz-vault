const partners = [
  "Blockchain Networks",
  "Financial Infrastructure",
  "Legal Frameworks",
  "Real Estate Operators",
  "Custody Providers",
  "Payment Rails",
  "Compliance Partners",
  "Digital Identity",
];

export function EcosystemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Designed for a <span className="text-gradient-blue">Global Ecosystem</span>
          </h2>
        </div>

        <div className="fade-up fade-up-delay-1 glass rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((name) => (
              <div key={name} className="flex items-center justify-center h-16 opacity-30 hover:opacity-60 transition-opacity duration-300">
                <span className="text-xs font-medium text-muted-foreground text-center font-mono-data tracking-wide uppercase">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
