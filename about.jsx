/* Kinkajoo — About page */

/* ---------- about ---------- */

function About() {
  return (
    <>
      {/* Story */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-text">
            <p className="about-lede">
              Kinkajoo Ltd was founded by Nadav Fogel &amp; Erez Bar in 2012 with the goal of creating fun games and apps for everyone to enjoy.
            </p>
            <p className="about-body">
              After more than 20 years of combined experience in the digital casual games industry, they decided to start something fresh. Now working with a team of talented developers, designers and game creators to make this dream come true.
            </p>
            <p className="about-body">
              Based in Tel-Aviv, Israel, the self-funded, fully independent company has developed a number of beloved apps — including the official Rummikub®, TAKI, and more.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item js-reveal">
              <span className="stat-num">2012</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat-item js-reveal">
              <span className="stat-num">5</span>
              <span className="stat-label">Games</span>
            </div>
            <div className="stat-item js-reveal">
              <span className="stat-num">11</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat-item js-reveal">
              <span className="stat-num">100%</span>
              <span className="stat-label">Independent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Games strip */}
      <section className="about-games">
        <div className="about-games-inner">
          <div className="section-eyebrow" style={{ marginBottom: '32px' }}>
            <span>What we make</span>
          </div>
          <div className="about-games-grid">
            {[
              { name: 'Rummikub®',         icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/ICON_BLACK_1024x1024.png',           href: 'https://apps.apple.com/us/app/rummikub/id1015322991' },
              { name: 'Rummikub® Premium', icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/ICON-1024x1024.png',                  href: 'https://apps.apple.com/us/app/rummikub/id973113361' },
              { name: 'TAKI',              icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/icon_rounded-1024x1024.png',          href: 'https://apps.apple.com/us/app/taki/id1263854454' },
              { name: 'Junior',            icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/junior_icon_rounded_1024x1024.png',   href: 'https://apps.apple.com/us/app/rummikub-jr/id1208457228' },
              { name: 'Score Timer',       icon: 'https://kinkajoo-apps.com/wp-content/uploads/2025/01/SCORE_TIMER_1024x1024.png',           href: 'https://apps.apple.com/us/app/rummikub-score-timer/id1280370021' }
            ].map((g) => (
              <a key={g.name} className="about-game-chip js-reveal" href={g.href} target="_blank" rel="noopener noreferrer">
                <img src={g.icon} alt={g.name} className="about-game-icon" />
                <span>{g.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- app ---------- */

function App() {
  return (
    <>
      <Nav activePage="about" />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
