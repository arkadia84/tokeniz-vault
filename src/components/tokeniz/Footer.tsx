const links = [
  { label: "About Tokeniz", href: "#about" },
  { label: "Technology", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-lg font-bold tracking-tight text-foreground mb-2">Tokeniz</p>
            <p className="text-xs text-muted-foreground max-w-xs">
              Tokeniz is building infrastructure for tokenized companies and real-world assets.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Tokeniz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
