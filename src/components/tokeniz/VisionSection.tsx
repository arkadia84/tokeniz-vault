export function VisionSection() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative text-center">
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-10">
          The Internet Changed Information.
          <br />
          <span className="text-gradient-blue">Blockchain Will Change Ownership.</span>
        </h2>

        <p className="fade-up fade-up-delay-1 text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg mb-12 leading-relaxed">
          Just as fintech unbundled banks and rebuilt financial infrastructure, tokenization is transforming how companies and assets are owned. Tokeniz is building the infrastructure layer that allows businesses and assets to live natively on the internet.
        </p>

        <div className="fade-up fade-up-delay-2 grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { label: "Ownership", value: "Programmable" },
            { label: "Liquidity", value: "Global" },
            { label: "Markets", value: "Accessible" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{label}</p>
              <p className="text-lg font-semibold text-primary font-mono-data">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
