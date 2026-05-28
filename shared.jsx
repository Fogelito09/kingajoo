/* Kinkajoo — shared components */

function Nav({ activePage, titleContent }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('top');

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-64px 0px -55% 0px', threshold: 0 }
    );
    ['top', 'games', 'about', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (activePage !== 'home') {
    return (
      <div className="sticky-header">
        <div className="sticky-header-inner">
          <a href="index.html" className="back-btn">
            <span className="back-arrow">←</span> Home
          </a>
          <div className="sticky-header-title">{titleContent}</div>
          <div className="sticky-header-spacer" />
        </div>
      </div>
    );
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo-link">
          <img src="blueLogo.png" alt="Kinkajoo" className="nav-logo-main" />
        </a>
        <div className="nav-links">
          <a href="#top"     className={`nav-btn nav-btn-home${activeSection === 'top'     ? ' nav-btn-active' : ''}`}>Home</a>
          <a href="#games"   className={`nav-btn nav-btn-games${activeSection === 'games'   ? ' nav-btn-active' : ''}`}>Our Games &amp; Apps</a>
          <a href="#about"   className={`nav-btn nav-btn-about${activeSection === 'about'   ? ' nav-btn-active' : ''}`}>About</a>
          <a href="#contact" className={`nav-btn nav-btn-contact${activeSection === 'contact' ? ' nav-btn-active' : ''}`}>Contact</a>
        </div>
        <button
          className={`nav-hamburger${menuOpen ? ' nav-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="#top"     className="nav-btn nav-btn-home"    onClick={closeMenu}>Home</a>
          <a href="#games"   className="nav-btn nav-btn-games"   onClick={closeMenu}>Our Games &amp; Apps</a>
          <a href="#about"   className="nav-btn nav-btn-about"   onClick={closeMenu}>About</a>
          <a href="#contact" className="nav-btn nav-btn-contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-content">
        <img src="greenLogo.png" alt="Kinkajoo" className="foot-logo" />
        <span className="foot-rights">All Rights Reserved © Kinkajoo 2026</span>
        <div />
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
