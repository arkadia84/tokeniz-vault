const partners = [
  { name: "US Formation", live: true },
  { name: "Singapore Formation", live: true },
  { name: "Hong Kong Formation", live: true },
  { name: "Stablecoin Account", live: true },
  { name: "Business Banking", live: true },
  { name: "Tokenization", live: false },
];

export function PartnersSection() {
  return (
    <div className="partners-wrap" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="partners-label">Vetted partners — revealed in your personalised action plan</div>
        <div className="partners-row">
          {partners.map((p) => (
            <div key={p.name} className="partner-pill">
              <div className={`p-dot ${p.live ? 'live' : 'soon'}`} />
              {p.name}
              {!p.live && <span style={{ fontSize: '0.7rem', color: 'var(--subtle)', marginLeft: 5 }}>soon</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
