/* Kinkajoo — shared components */

function LogoMark({ light = false }) {
  const [failed, setFailed] = React.useState(false);
  if (failed) {
    return <span className="logo-mark"><span className="logo-dot" /></span>;
  }
  return (
    <img
      src="logo-monkey.png"
      alt=""
      className={`logo-img${light ? ' logo-img-light' : ''}`}
      onError={() => setFailed(true)}
    />
  );
}

function Nav({ activePage }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="logo" href="index.html">
          <LogoMark />
          <img src="onlyKinkajoo.png" alt="Kinkajoo" className="nav-kinkajoo-text" />
        </a>
        <nav className="nav-links">
          <a href="index.html" className={activePage === 'home' ? 'nav-active' : ''}>Home</a>
          <a href="games.html" className={activePage === 'games' ? 'nav-active' : ''}>Games</a>
          <a href="about.html" className={activePage === 'about' ? 'nav-active' : ''}>About</a>
          <a href="contact.html" className={activePage === 'contact' ? 'nav-active' : ''}>Contact</a>
        </nav>
        <button
          className={`nav-hamburger ${menuOpen ? 'nav-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <nav className="nav-mobile-menu">
          <a href="index.html" onClick={closeMenu} className={activePage === 'home' ? 'nav-active' : ''}>Home</a>
          <a href="games.html" onClick={closeMenu} className={activePage === 'games' ? 'nav-active' : ''}>Games</a>
          <a href="about.html" onClick={closeMenu} className={activePage === 'about' ? 'nav-active' : ''}>About</a>
          <a href="contact.html" onClick={closeMenu} className={activePage === 'contact' ? 'nav-active' : ''}>Contact</a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-content">
        <div className="foot-brand">
          <div className="logo light">
            <LogoMark light={true} />
            <span className="logo-word">Kinkajoo</span>
          </div>
          <p>game studio. Tel-Aviv.</p>
        </div>

        <div className="foot-copy">
          <span>© Kinkajoo Ltd, 2026</span>
          <span>Rummikub® used under license.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LogoMark, Nav, Footer });
