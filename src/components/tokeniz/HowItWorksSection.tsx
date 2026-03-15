import { Building, Briefcase, Coins, Send } from "lucide-react";

const steps = [
  {
    icon: Building,
    num: "01",
    title: "Create a Tokenized Company",
    desc: "Launch a digital-native company structure designed for modern entrepreneurs and asset owners.",
  },
  {
    icon: Briefcase,
    num: "02",
    title: "Attach Assets or Ventures",
    desc: "Real estate, funds, startups, infrastructure projects or digital businesses.",
  },
  {
    icon: Coins,
    num: "03",
    title: "Tokenize Ownership",
    desc: "Ownership is represented by blockchain tokens tied to legal agreements.",
  },
  {
    icon: Send,
    num: "04",
    title: "Distribute & Manage",
    desc: "Investors can participate, trade ownership or receive distributions.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            How Tokeniz Works
          </h2>
          <p className="fade-up fade-up-delay-1 text-muted-foreground max-w-xl mx-auto">
            Four steps from traditional company to globally accessible digital asset.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <div
              key={num}
              className={`fade-up fade-up-delay-${i + 1} glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono-data text-primary/60">{num}</span>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={16} className="text-primary" />
                </div>
              </div>
              <h3 className="text-sm font-semibold mb-2 text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
