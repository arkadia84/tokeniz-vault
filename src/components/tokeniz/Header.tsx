export function Header({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Token<span>iz</span></a>
        <div className="nav-right">
          <a href="#how-it-works" className="nav-link" style={{ marginRight: 4 }}>How it works</a>
          <a href="#entities" className="nav-link" style={{ marginRight: 16 }}>Entity types</a>
          <button
            className="btn btn-ghost"
            style={{ fontSize: '0.83rem', padding: '8px 18px' }}
            onClick={onOpenQuiz}
          >
            Launch My Company →
          </button>
        </div>
      </div>
    </nav>
  );
}
