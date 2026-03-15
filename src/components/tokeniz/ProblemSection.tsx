import { FileText, Landmark, ClipboardList, Users, Calculator, Zap, Shield, Globe, BarChart3, Code } from "lucide-react";

const oldStack = [
  { icon: FileText, label: "Legal Entity" },
  { icon: Landmark, label: "Bank" },
  { icon: ClipboardList, label: "Share Registry" },
  { icon: Users, label: "Broker" },
  { icon: Calculator, label: "Accountant" },
];

const newStack = [
  { icon: Code, label: "Smart Contracts" },
  { icon: Shield, label: "Compliant Structure" },
  { icon: BarChart3, label: "On-Chain Cap Table" },
  { icon: Globe, label: "Global Access" },
  { icon: Zap, label: "Instant Settlement" },
];

export function ProblemSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            The World's Assets Still Run on{" "}
            <span className="text-gradient-blue">Paper Infrastructure</span>
          </h2>
          <p className="fade-up fade-up-delay-1 text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Companies and assets today rely on fragmented systems: lawyers, banks, registries, brokers and spreadsheets. Ownership transfers are slow, costly and opaque.
          </p>
        </div>

        <div className="fade-up fade-up-delay-2 grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Old way */}
          <div className="glass rounded-xl p-6 lg:p-8 opacity-60 hover:opacity-80 transition-opacity duration-500">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">Traditional Stack</p>
            <div className="space-y-4">
              {oldStack.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-muted-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tokeniz way */}
          <div className="glass rounded-xl p-6 lg:p-8 border-primary/20 hover:border-primary/40 transition-colors duration-500">
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-6">Tokeniz Stack</p>
            <div className="space-y-4">
              {newStack.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium font-mono-data">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
