/* Kinkajoo — Games page */

/* ---------- games data ---------- */

const GAMES = [
  {
    id: 'rummikub',
    name: 'Rummikub®',
    tag: 'Tile game · 2–4 players',
    blurb: 'The original. Race to empty your rack first.',
    desc: 'The original Rummikub is one of the most popular family games, played by millions of people all over the world.',
    fullDesc: 'The original Rummikub is one of the most popular family games, played by millions of people all over the world. Players experience tactical thinking, luck and tense competition across 60 years of popularity. The gameplay involves arranging tiles into color and numbers combinations to place all tiles first.',
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
    desc: 'The original Rummikub Premium version with familiar game play and rules without ads.',
    fullDesc: 'The original Rummikub Premium version with familiar game play and rules without ads. Supports multiple languages including English, German, French, Dutch, Korean, Spanish, Chinese, Hebrew, Polish, Portuguese, and Turkish. Features customizable opponents (1-3 players) and adjustable time limits (30, 60, 120 seconds).',
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
    fullDesc: 'A card game that combines an equal share of luck and strategy. Features Action cards, exciting rules and Super Taki cards designed to engage players. Supports 1-3 player competitions.',
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
    desc: 'A unique, challenging educational game based on the original Rummikub that develops cognitive abilities.',
    fullDesc: 'A unique, challenging educational game based on the original Rummikub that develops cognitive abilities. It focuses on identifying numbers and colors, forming and dissolving groups, building sets of consecutive numbers and logical reasoning.',
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
    desc: 'The original Rummikub score timer that enhances gameplay comfort.',
    fullDesc: 'The original Rummikub score timer that enhances gameplay comfort. It replaces traditional stoppers, pencils and papers with a tailor made game management solution.',
    free: true,
    color: '#1A1A1A',
    icon: 'https://kinkajoo-apps.com/wp-content/uploads/2025/01/SCORE_TIMER_1024x1024.png',
    appStore: 'https://apps.apple.com/us/app/rummikub-score-timer/id1280370021',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.rummikubscoretimer'
  }
];

/* ---------- game card ---------- */

function GameCard({ g }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="game-card-row js-reveal">
      <img src={g.icon} alt={g.name} className="game-card-row-icon" />
      <div className="game-card-row-info">
        <span className="game-card-row-name">{g.name}</span>
        <span className="game-card-row-tag">{g.tag}</span>
        <span className="game-card-row-desc">
          {expanded ? g.fullDesc : g.desc}
          {' '}
          <button className="read-more-btn" onClick={() => setExpanded(e => !e)}>
            {expanded ? 'Read less' : 'Read more'}
          </button>
        </span>
      </div>
      <div className="game-card-row-badges">
        <a className="store-badge" href={g.appStore} target="_blank" rel="noopener noreferrer">
          <img src="appStoreLogo.png" alt="Download on the App Store" className="store-badge-logo" />
        </a>
        {g.googlePlay && (
          <a className="store-badge" href={g.googlePlay} target="_blank" rel="noopener noreferrer">
            <img src="googlePlayLogo.png" alt="Get it on Google Play" className="store-badge-logo" />
          </a>
        )}
      </div>
    </div>
  );
}

/* ---------- games section ---------- */

function Games() {
  return (
    <section className="games" id="games">
      <div className="games-cards">
        {GAMES.map(g => <GameCard key={g.id} g={g} />)}
      </div>
    </section>
  );
}

/* ---------- app ---------- */

function App() {
  return (
    <>
      <Nav activePage="games" titleContent={
        <div className="page-title-row">
          <img src="pinkKinkajoo.png" alt="" className="page-title-icon" />
          <h2 className="games-page-title">- Our games &amp; apps -</h2>
        </div>
      } />
      <main>
        <Games />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
