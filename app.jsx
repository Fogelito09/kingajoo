/* Kinkajoo — Single-page site */

const { useState, useEffect } = React;

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
    appStore:   'https://apps.apple.com/us/app/rummikub/id1015322991',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.rummikubfree',
    facebook:   'https://www.facebook.com/TheOriginalRummikub',
    instagram:  'https://www.instagram.com/theoriginalrummikub/',
    youtube:    'https://www.youtube.com/watch?v=yRkf5wVq9Y8',
    website:    'http://www.rummikub.com'
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
    appStore:   'https://apps.apple.com/us/app/rummikub/id973113361',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.RummikubHD',
    facebook:   'https://www.facebook.com/TheOriginalRummikub',
    youtube:    'https://www.youtube.com/watch?v=yRkf5wVq9Y8',
    website:    'http://www.rummikub.com'
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
    appStore:   'https://apps.apple.com/us/app/taki/id1263854454',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.taki',
    facebook:   'https://www.facebook.com/groups/2089980354646620/',
    youtube:    'https://www.youtube.com/watch?v=5-pFhiwwAME',
    website:    'https://www.shafirgames.com/ourgames/taki'
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
    appStore:   'https://apps.apple.com/us/app/rummikub-jr/id1208457228',
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
    appStore:   'https://apps.apple.com/us/app/rummikub-score-timer/id1280370021',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kinkajoo.rummikubscoretimer'
  }
];

const LINK_TYPES = [
  { key: 'appStore',   img: 'downloadApple.png',      alt: 'App Store',    wide: true  },
  { key: 'googlePlay', img: 'downloadgoogleplay.png',  alt: 'Google Play',  wide: true  },
  { key: 'youtube',    img: 'youtube_logo.png',         alt: 'YouTube',      wide: false },
  { key: 'instagram',  img: 'instagram_logo.png',       alt: 'Instagram',    wide: false },
  { key: 'facebook',   img: 'facebook_logo.png',        alt: 'Facebook',     wide: false },
  { key: 'website',    img: 'linklogo.png',             alt: 'Website',      wide: false },
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
        <div className="badges-store-row">
          {LINK_TYPES.filter(l => l.wide).map(({ key, img, alt }) =>
            g[key] ? (
              <a key={key} className="store-badge" href={g[key]} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={alt} className="store-badge-logo" />
              </a>
            ) : null
          )}
        </div>
        <div className="badges-social-row">
          {LINK_TYPES.filter(l => !l.wide).map(({ key, img, alt }) =>
            g[key] ? (
              <a key={key} className="store-badge" href={g[key]} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={alt} className="store-badge-logo-sm" />
              </a>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- hero carousel ---------- */

function Hero() {
  const [idx, setIdx] = React.useState(0);
  const touchStartX = React.useRef(null);

  const prev = () => setIdx(i => (i - 1 + GAMES.length) % GAMES.length);
  const next = () => setIdx(i => (i + 1) % GAMES.length);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const g = GAMES[idx];
  const href = g.website || g.appStore;

  return (
    <section className="hero" id="top">
      <div className="hero-carousel-full" style={{ '--game-color': g.color }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <a
          key={g.id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="carousel-card-full"
        >
          <img src={g.icon} alt={g.name} className="carousel-icon-full" />
          <span className="carousel-name-full">{g.name}</span>
        </a>
        <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Previous">&#8592;</button>
        <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Next">&#8594;</button>
        <div className="carousel-dots">
          {GAMES.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === idx ? ' is-active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to ${GAMES[i].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- games section ---------- */

function GamesSection() {
  return (
    <section id="games">
      <div className="section-divider-header">
        <div className="page-title-row">
          <img src="pinkLogo.png" alt="" className="page-title-icon" />
          <h2 className="games-page-title">- Our games &amp; apps -</h2>
        </div>
      </div>
      <div className="games-cards" style={{ borderTop: 'none' }}>
        {GAMES.map(g => <GameCard key={g.id} g={g} />)}
      </div>
    </section>
  );
}

/* ---------- about section ---------- */

function AboutSection() {
  return (
    <section id="about">
      <div className="section-divider-header">
        <div className="page-title-row">
          <img src="orangeLogo.png" alt="" className="page-title-icon" />
          <h2 className="about-page-title">- About us -</h2>
        </div>
      </div>
      <div className="about-story-full">
        <p className="about-lede-hero">
          <span className="about-highlight">Kinkajoo Ltd</span> was founded by <span className="about-highlight">Nadav Fogel</span> &amp; <span className="about-highlight">Erez Bar</span> in 2012 with the goal of creating fun games and apps for everyone to enjoy.
        </p>
        <div className="about-body-cols">
          <p className="about-body">
            After more than 20 years of combined experience in the digital casual games industry, they decided to start something fresh. Now working with a team of talented developers, designers and game creators to make this dream come true.
          </p>
          <p className="about-body">
            Based in Tel-Aviv, Israel, the self-funded, fully independent company has developed a number of beloved apps — including the official Rummikub®, TAKI, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- contact section ---------- */

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:Support@rummikub-apps.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`;
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="section-divider-header">
        <div className="page-title-row">
          <img src="greenLogo.png" alt="" className="page-title-icon" />
          <h2 className="contact-page-title">- Contact us -</h2>
        </div>
      </div>
      <div className="about-contact" style={{ borderTop: 'none' }}>
        <div className="about-contact-inner">
          <div className="about-contact-copy">
            <p className="about-body" style={{ marginTop: '0' }}>
              Whether you're looking for answers, would like to report a problem, or just want to let us know how we did — we'll help you as quickly as possible.
            </p>
            <div className="about-contact-links">
              <a href="mailto:Support@rummikub-apps.com" className="about-contact-email">
                Support@rummikub-apps.com
              </a>
            </div>
          </div>
          <form className="about-form js-reveal" onSubmit={submit}>
            {sent ? (
              <div className="form-sent">
                <span className="form-sent-icon">✓</span>
                <p>Opening your mail client…</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <label className="form-label">Name</label>
                  <input className="form-input" name="name" type="text" placeholder="Your name" value={form.name} onChange={handle} required />
                </div>
                <div className="form-row">
                  <label className="form-label">Email</label>
                  <input className="form-input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handle} required />
                </div>
                <div className="form-row">
                  <label className="form-label">Message</label>
                  <textarea className="form-input form-textarea" name="message" placeholder="What's on your mind?" value={form.message} onChange={handle} required rows={5} />
                </div>
                <button type="submit" className="btn-solid lg form-submit" style={{ background: '#76c162' }}>Send message <span className="arr">→</span></button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- shell + tweaks ---------- */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "Editorial",
  "palette": ["#F4EFE6", "#1F3D2E", "#C8392E"],
  "showHero": true,
  "showFooter": true
}/*EDITMODE-END*/;

const VIBE_PRESETS = {
  'Editorial': { palette: ['#F4EFE6', '#1F3D2E', '#C8392E'] },
  'Swiss':     { palette: ['#FAFAF7', '#0A0A0A', '#0A0A0A'] },
  'Playful':   { palette: ['#F8EDD8', '#1E4E8C', '#D97A1C'] },
  'Dark':      { palette: ['#0F0F0E', '#F4EFE6', '#D97A1C'] }
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--cream', tweaks.palette[0]);
    r.style.setProperty('--ink', tweaks.palette[1]);
    r.style.setProperty('--accent', tweaks.palette[2]);
document.body.dataset.vibe = tweaks.vibe.toLowerCase();
  }, [tweaks]);

  const setVibe = (v) => {
    const preset = VIBE_PRESETS[v];
    setTweak({ vibe: v, ...preset });
  };

  return (
    <>
      <Nav activePage="home" />
      <main>
        {tweaks.showHero && <Hero />}
        <GamesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Vibe">
          <TweakRadio
            label="Preset"
            value={tweaks.vibe}
            onChange={setVibe}
            options={['Editorial', 'Swiss', 'Playful', 'Dark']} />
        </TweakSection>
        <TweakSection title="Palette">
          <TweakColor
            label="Theme"
            value={tweaks.palette}
            onChange={(v) => setTweak('palette', v)}
            options={[
              ['#F4EFE6', '#1F3D2E', '#C8392E'],
              ['#FAFAF7', '#0A0A0A', '#0A0A0A'],
              ['#F8EDD8', '#1E4E8C', '#D97A1C'],
              ['#0F0F0E', '#F4EFE6', '#D97A1C'],
              ['#EFE9DB', '#2E1F3D', '#C8392E'],
              ['#E8DEC8', '#1E4E8C', '#C8392E']
            ]} />
        </TweakSection>
<TweakSection title="Sections">
          <TweakToggle label="Hero" value={tweaks.showHero} onChange={(v) => setTweak('showHero', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
