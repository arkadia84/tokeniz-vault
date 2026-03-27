const testimonials = [
  {
    quote: "I was paying $3,000+ to set up a Wyoming LLC through a law firm. Tokeniz did it in 10 minutes and gave me a business account the same day. This is the future.",
    name: "Daniel K.",
    role: "Founder, Fintech Startup — Nigeria",
  },
  {
    quote: "The AI financial assistant is a game-changer. I manage everything from WhatsApp — expenses, payroll, card controls. It's like having a CFO in my pocket.",
    name: "Maria S.",
    role: "E-commerce Operator — Brazil",
  },
  {
    quote: "We needed a US entity to receive payments from American clients, but couldn't justify $5k in legal fees. Tokeniz gave us the entity and a Visa Platinum card for under $500.",
    name: "Yuki T.",
    role: "Agency Founder — Japan",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-24 px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="fade-up text-[0.7rem] font-bold uppercase tracking-[0.12em] text-muted-foreground/60 mb-4 text-center">What founders say</p>
        <h2 className="fade-up text-3xl sm:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-[1.1] mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
          Trusted by <span className="text-primary">Global Founders</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="fade-up bg-card border border-border rounded-[20px] p-8 flex flex-col">
              <p className="text-sm text-muted-foreground leading-[1.75] flex-1 italic">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
