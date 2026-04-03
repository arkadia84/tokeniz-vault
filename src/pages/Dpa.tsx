export default function Dpa() {
  return (
    <div style={{ background: '#080E1C', minHeight: '100vh', color: '#E2E8F0', fontFamily: "'Inter', sans-serif" }}>
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo">Token<span>iz</span></a>
        </div>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 62px)', padding: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.05rem', color: '#94A3B8', maxWidth: '480px' }}>
          Our Data Processing Addendum is currently being updated. Contact{' '}
          <a href="mailto:hello@tokeniz.ai" style={{ color: 'hsl(224, 80%, 63%)' }}>hello@tokeniz.ai</a> for details.
        </p>
      </div>
    </div>
  );
}
