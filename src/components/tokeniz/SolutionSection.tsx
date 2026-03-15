import { Building2, Coins, Users, Globe, BarChart3 } from "lucide-react";

const capabilities = [
  { icon: Building2, text: "Create digital-native companies" },
  { icon: Coins, text: "Tokenize ownership of assets" },
  { icon: Users, text: "Enable fractional participation" },
  { icon: BarChart3, text: "Manage cap tables on-chain" },
  { icon: Globe, text: "Transfer ownership globally" },
];

export function SolutionSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              A New Infrastructure for{" "}
              <span className="text-gradient-blue">Ownership</span>
            </h2>
            <p className="fade-up fade-up-delay-1 text-muted-foreground mb-8 text-base lg:text-lg leading-relaxed">
              Tokeniz transforms companies into programmable ownership containers. Using compliant legal structures combined with blockchain technology, assets and businesses can be structured, fractionalized and transferred digitally.
            </p>
            <div className="space-y-4">
              {capabilities.map(({ icon: Icon, text }, i) => (
                <div key={text} className={`fade-up fade-up-delay-${i % 4 + 1} flex items-center gap-3`}>
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flow diagram */}
          <div className="fade-up fade-up-delay-2 flex justify-center">
            <div className="relative flex flex-col items-center gap-6">
              {["Company", "Tokenized Entity", "Global Investors"].map((label, i) => (
                <div key={label}>
                  <div
                    className={`glass rounded-xl px-8 py-5 text-center ${
                      i === 1 ? "border-primary/30 glow-blue-sm" : ""
                    }`}
                  >
                    <p className={`text-sm font-medium ${i === 1 ? "text-primary" : "text-foreground"}`}>{label}</p>
                  </div>
                  {i < 2 && (
                    <div className="flex justify-center py-2">
                      <svg width="2" height="28" className="overflow-visible">
                        <line
                          x1="1" y1="0" x2="1" y2="28"
                          stroke="hsl(217 91% 60% / 0.4)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          className="animate-dash"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
