import { Building2, Rocket, Users, Globe } from "lucide-react";

const cases = [
  {
    icon: Building2,
    title: "Real Estate Developers",
    desc: "Tokenize properties and distribute ownership to global investors.",
  },
  {
    icon: Rocket,
    title: "Operators & Entrepreneurs",
    desc: "Launch ventures with programmable ownership structures.",
  },
  {
    icon: Users,
    title: "Investment Syndicates",
    desc: "Structure deals and manage investors seamlessly.",
  },
  {
    icon: Globe,
    title: "Digital Asset Businesses",
    desc: "Create digital-native companies built for the internet.",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built for the Next Generation of{" "}
            <span className="text-gradient-blue">Asset Owners</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {cases.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`fade-up fade-up-delay-${i + 1} glass rounded-xl p-6 lg:p-8 group hover:border-primary/30 transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
