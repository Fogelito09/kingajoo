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

function Nav({ activePage, titleContent }) {
  if (activePage === 'home') return null;

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
