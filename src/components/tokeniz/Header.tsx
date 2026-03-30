import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header({ onOpenQuiz }: { onOpenQuiz: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <a href="#" className="nav-logo">Token<span>iz</span></a>

        {/* Desktop nav */}
        <div className="nav-right nav-desktop">
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#entities" className="nav-link">Entity types</a>
          <button
            className="btn btn-ghost"
            style={{ fontSize: '0.83rem', padding: '8px 18px' }}
            onClick={onOpenQuiz}
          >
            Launch My Company →
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="#how-it-works" className="nav-link" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#entities" className="nav-link" onClick={() => setMenuOpen(false)}>Entity types</a>
          <button
            className="btn btn-ghost"
            style={{ fontSize: '0.85rem', padding: '10px 20px', width: '100%' }}
            onClick={() => { setMenuOpen(false); onOpenQuiz(); }}
          >
            Launch My Company →
          </button>
        </div>
      )}
    </nav>
  );
}
