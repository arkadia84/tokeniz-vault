export function VisionSection() {
  return (
    <section className="relative py-24 lg:py-24 px-5">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4">The Thesis</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-4" style={{ letterSpacing: "-0.03em" }}>
          The Internet Changed Information.{" "}
          <span className="text-primary">Blockchain Will Change Ownership.</span>
        </h2>
        <p className="fade-up fade-up-delay-1 text-base text-muted-foreground max-w-[560px] mx-auto leading-[1.75] mt-4">
          Just as fintech unbundled banks and rebuilt financial infrastructure, tokenization is transforming how companies and assets are owned. Tokeniz is building the infrastructure layer that allows businesses and assets to live natively on the internet.
        </p>

        <div className="fade-up fade-up-delay-2 flex flex-col sm:flex-row justify-center gap-8 mt-12">
          {[
            { label: "Ownership", value: "Programmable" },
            { label: "Liquidity", value: "Global" },
            { label: "Markets", value: "Accessible" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">{label}</span>
              <span className="text-base font-bold text-primary">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
