const entities = [
  {
    flag: "🇺🇸",
    name: "Wyoming Series LLC",
    jurisdiction: "United States",
    desc: "Run multiple projects under one entity with full asset separation. Maximum privacy, minimum complexity.",
    tags: ["Crypto / Web3", "Digital nomads", "Asset protection"],
    cost: <>Est. formation cost — <span style={{ color: 'var(--text)', fontWeight: 600 }}>revealed in your quiz result</span></>,
  },
  {
    flag: "🇺🇸",
    name: "Delaware C-Corp",
    jurisdiction: "United States",
    desc: "The global standard for VC-backed startups. Preferred by US and international investors.",
    tags: ["VC fundraising", "Equity structures", "Stock options"],
    cost: <>Est. formation cost — <span style={{ color: 'var(--muted)' }}>$250–$450</span> <span style={{ color: 'var(--subtle)' }}>(state fees + agent + filing · $175+/yr franchise tax)</span></>,
  },
  {
    flag: "🇸🇬",
    name: "Singapore Pte Ltd",
    jurisdiction: "Southeast Asia",
    desc: "Asia's most respected jurisdiction. Favoured by fintech, APAC operators, and emerging market founders.",
    tags: ["APAC ops", "Fintech", "APAC VC"],
    cost: <>Est. formation cost — <span style={{ color: 'var(--muted)' }}>S$3,772 (~$2,790 USD)</span> <span style={{ color: 'var(--subtle)' }}>(via Osome · all-inclusive for non-residents)</span></>,
  },
  {
    flag: "🇭🇰",
    name: "Hong Kong Limited",
    jurisdiction: "Asia Gateway",
    desc: "Strategic access to China and Asia. Established financial infrastructure and strong privacy protections.",
    tags: ["China access", "Privacy", "Trading"],
    cost: <>Est. formation cost — <span style={{ color: 'var(--muted)' }}>HK$8,800 (~$1,128 USD)</span> <span style={{ color: 'var(--subtle)' }}>(via Osome · non-resident package, all-inclusive)</span></>,
  },
];

export function EntityTypesSection() {
  return (
    <section id="entities">
      <div className="container">
        <div className="section-header">
          <div className="tag">Jurisdictions</div>
          <h2>We match you with the right structure.<br />Not the easiest one to sell you.</h2>
          <p>Entity type and jurisdiction depend on where you operate, what you're building, and where you're going.</p>
        </div>
        <div className="entity-grid">
          {entities.map((e) => (
            <div key={e.name} className="entity-card">
              <div className="entity-flag">{e.flag}</div>
              <h3>{e.name}</h3>
              <div className="entity-jurisdiction">{e.jurisdiction}</div>
              <p>{e.desc}</p>
              <div className="entity-tags">
                {e.tags.map((t) => (
                  <span key={t} className="entity-tag">{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--subtle)' }}>
                {e.cost}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
