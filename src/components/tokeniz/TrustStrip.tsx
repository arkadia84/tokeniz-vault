const items = [
  "US, Singapore & HK entities available",
  "US, Singapore & HK company formation",
  "Banking & stablecoin account matching",
  "No burned applications",
];

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="container trust-inner">
        {items.map((item) => (
          <div key={item} className="trust-item">
            <div className="trust-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
