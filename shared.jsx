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
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="logo" href="index.html">
          <LogoMark />
          <span className="logo-word">Kinkajoo</span>
        </a>
        <nav className="nav-links">
          <a href="index.html" className={activePage === 'home' ? 'nav-active' : ''}>Home</a>
          <a href="games.html" className={activePage === 'games' ? 'nav-active' : ''}>Games</a>
          <a href="about.html" className={activePage === 'about' ? 'nav-active' : ''}>About</a>
          <a href="contact.html" className={activePage === 'contact' ? 'nav-active' : ''}>Contact</a>
        </nav>
        {activePage === 'games'
          ? <a className="btn-solid" href="index.html">← Back home</a>
          : <a className="btn-solid" href="games.html">Browse games <span className="arr">→</span></a>
        }
      </div>
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
