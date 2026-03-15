import { Wallet, Landmark, Shield, Coins } from "lucide-react";

const integrations = [
  { icon: Coins, label: "Stablecoin Rails" },
  { icon: Wallet, label: "Crypto Wallets" },
  { icon: Landmark, label: "Neobanks" },
  { icon: Shield, label: "Digital Custody" },
];

export function FinancialStackSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="fade-up text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Built for the{" "}
            <span className="text-gradient-blue">New Financial Rails</span>
          </h2>
          <p className="fade-up fade-up-delay-1 text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg">
            Tokeniz connects the worlds of traditional assets and digital finance. A seamless bridge between real-world assets and the internet of value.
          </p>
        </div>

        {/* Flow */}
        <div className="fade-up fade-up-delay-2 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-16">
          {["Real Assets", "Tokeniz Engine", "Global Liquidity"].map((label, i) => (
            <div key={label} className="flex items-center gap-4 lg:gap-6">
              <div className={`glass rounded-xl px-6 py-4 text-center ${i === 1 ? "border-primary/30 glow-blue-sm" : ""}`}>
                <p className={`text-sm font-medium ${i === 1 ? "text-primary font-mono-data" : "text-foreground"}`}>{label}</p>
              </div>
              {i < 2 && (
                <svg width="40" height="2" className="hidden lg:block overflow-visible">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="hsl(217 91% 60% / 0.4)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-dash" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {integrations.map(({ icon: Icon, label }, i) => (
            <div key={label} className={`fade-up fade-up-delay-${i + 1} glass rounded-xl p-5 text-center hover:border-primary/30 transition-colors duration-300`}>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-primary" />
              </div>
              <p className="text-xs font-medium text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
