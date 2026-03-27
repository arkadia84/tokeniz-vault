const footerCols = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Series LLC explained", href: "#" },
      { label: "Already incorporated", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Tokeniz", href: "#" },
      { label: "Technology", href: "#" },
      { label: "Use Cases", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[hsl(222,60%,4%)] border-t border-border/50 pt-16 pb-9 px-5">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <a href="#" className="text-xl font-extrabold text-foreground block mb-2.5" style={{ letterSpacing: "-0.02em" }}>
              Tokeniz
            </a>
            <p className="text-[0.82rem] text-muted-foreground/60 leading-[1.65] max-w-[220px]">
              Tokeniz is building infrastructure for tokenized companies and real-world assets.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h5 className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground/60 mb-3.5">{col.title}</h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.85rem] text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-7 border-t border-border/50 flex flex-col md:flex-row justify-between items-start gap-8">
          <p className="text-[0.7rem] text-muted-foreground/50 leading-[1.75] max-w-[680px]">
            Tokeniz facilitates US entity formation and connects clients with third-party financial service providers. Tokeniz is not a law firm and does not provide legal, financial, or tax advice. Business account services are provided by Elephants (AU) Pty Ltd, registered with AUSTRAC as a digital currency exchange and remittance provider (Registration No. DCE100886643-001; IND100886643-001). The Elephants card is issued by a licensed Hong Kong financial institution. Not all services are available in all jurisdictions. This content is for informational purposes only and does not constitute financial advice.
          </p>
          <p className="text-xs text-muted-foreground/50 whitespace-nowrap">
            © {new Date().getFullYear()} Tokeniz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
