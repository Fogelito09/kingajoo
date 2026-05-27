/* Kinkajoo — Games page */

/* ---------- games data ---------- */

const GAMES = [
  {
    id: 'rummikub',
    name: 'Rummikub®',
    tag: 'Tile game · 2–4 players',
    blurb: 'The original. Race to empty your rack first.',
    desc: 'One of the most popular family games in the world, played by millions of people.',
    free: true,
    color: '#C8392E',
    icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/ICON_BLACK_1024x1024.png',
    appStore: 'https://apps.apple.com/us/app/rummikub/id1015322991',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.rummikubfree'
  },
  {
    id: 'rummikub-premium',
    name: 'Rummikub® Premium',
    tag: 'Ad-free · 11 languages',
    blurb: 'No ads. Pick your turn timer.',
    desc: 'The familiar gameplay and rules of Rummikub, completely without ads.',
    free: false,
    color: '#1F3D2E',
    icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/ICON-1024x1024.png',
    appStore: 'https://apps.apple.com/us/app/rummikub/id973113361',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.RummikubHD'
  },
  {
    id: 'taki',
    name: 'TAKI',
    tag: 'Card game · 2–4 players',
    blurb: 'Action cards. Super TAKI moments.',
    desc: 'A card game that combines an equal share of luck and strategy.',
    free: true,
    color: '#1E4E8C',
    icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/icon_rounded-1024x1024.png',
    appStore: 'https://apps.apple.com/us/app/taki/id1263854454',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.taki'
  },
  {
    id: 'junior',
    name: 'Rummikub® Junior',
    tag: 'Family · ages 4–8',
    blurb: 'Built for new players.',
    desc: 'A unique, educational game based on the original Rummikub, designed for young players.',
    free: true,
    color: '#D97A1C',
    icon: 'https://kinkajoo-apps.com/wp-content/uploads/2024/12/junior_icon_rounded_1024x1024.png',
    appStore: 'https://apps.apple.com/us/app/rummikub-jr/id1208457228',
    googlePlay: null
  },
  {
    id: 'score-timer',
    name: 'Score Timer',
    tag: 'Tabletop companion',
    blurb: 'Turn timer and scorekeeper for the physical set.',
    desc: 'Makes your physical Rummikub experience more comfortable with score tracking and timers.',
    free: true,
    color: '#1A1A1A',
    icon: 'https://kinkajoo-apps.com/wp-content/uploads/2025/01/SCORE_TIMER_1024x1024.png',
    appStore: 'https://apps.apple.com/us/app/rummikub-score-timer/id1280370021',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.rummikubscoretimer'
  }
];

/* ---------- games section ---------- */

function Games() {
  return (
    <section className="games" id="games">
      <div className="section-head">
        <div className="section-eyebrow"><span>Games</span></div>
        <h2 className="section-title">Five games.</h2>
      </div>

      <div className="games-cards">
        {GAMES.map((g, i) => (
          <div key={g.id} className="game-card-row js-reveal">
            <span className="game-card-row-num">0{i + 1}</span>
            <img src={g.icon} alt={g.name} className="game-card-row-icon" />
            <div className="game-card-row-info">
              <span className="game-card-row-name">{g.name}</span>
              <span className="game-card-row-tag">{g.tag}</span>
              <span className="game-card-row-desc">{g.desc}</span>
            </div>
            <div className="game-card-row-badges">
              <a className="store-badge" href={g.appStore} target="_blank" rel="noopener noreferrer">
                App Store
              </a>
              {g.googlePlay && (
                <a className="store-badge" href={g.googlePlay} target="_blank" rel="noopener noreferrer">
                  Google Play
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- app ---------- */

function App() {
  return (
    <>
      <Nav activePage="games" />
      <main>
        <Games />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
