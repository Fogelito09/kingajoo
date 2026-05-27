/* Kinkajoo — Homepage */

const { useState, useEffect } = React;

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Kinkajoo · Tel-Aviv · since 2012
          </div>
          <img src="Kinkajootext.png" alt="Kinkajoo Games & Apps" className="hero-text-img" />
          <div className="hero-ctas">
            <a className="btn-solid lg" href="games.html">Browse games <span className="arr">→</span></a>
            <a className="btn-ghost lg" href="about.html">About us</a>
          </div>
        </div>

        <div className="hero-icons">
          <a className="hero-float-icon-link hero-float-icon-1" href="https://apps.apple.com/us/app/rummikub/id1015322991" target="_blank" rel="noopener noreferrer">
            <img src="https://kinkajoo-apps.com/wp-content/uploads/2024/12/ICON_BLACK_1024x1024.png" alt="Rummikub" className="hero-float-icon" />
          </a>
          <a className="hero-float-icon-link hero-float-icon-2" href="https://apps.apple.com/us/app/rummikub/id973113361" target="_blank" rel="noopener noreferrer">
            <img src="https://kinkajoo-apps.com/wp-content/uploads/2024/12/ICON-1024x1024.png" alt="Rummikub Premium" className="hero-float-icon" />
          </a>
          <a className="hero-float-icon-link hero-float-icon-3" href="https://apps.apple.com/us/app/taki/id1263854454" target="_blank" rel="noopener noreferrer">
            <img src="https://kinkajoo-apps.com/wp-content/uploads/2024/12/icon_rounded-1024x1024.png" alt="TAKI" className="hero-float-icon" />
          </a>
          <a className="hero-float-icon-link hero-float-icon-4" href="https://apps.apple.com/us/app/rummikub-jr/id1208457228" target="_blank" rel="noopener noreferrer">
            <img src="https://kinkajoo-apps.com/wp-content/uploads/2024/12/junior_icon_rounded_1024x1024.png" alt="Rummikub Junior" className="hero-float-icon" />
          </a>
          <a className="hero-float-icon-link hero-float-icon-5" href="https://apps.apple.com/us/app/rummikub-score-timer/id1280370021" target="_blank" rel="noopener noreferrer">
            <img src="https://kinkajoo-apps.com/wp-content/uploads/2025/01/SCORE_TIMER_1024x1024.png" alt="Score Timer" className="hero-float-icon" />
          </a>
        </div>

        <div className="hero-logo-display">
          <div className="hero-logo-float">
            <img src="Kinkajoologo1.png" alt="Kinkajoo" className="hero-logo-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- shell + tweaks ---------- */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "vibe": "Editorial",
  "displayFont": "Instrument Serif",
  "palette": ["#F4EFE6", "#1F3D2E", "#C8392E"],
  "showHero": true,
  "showFooter": true
}/*EDITMODE-END*/;

const VIBE_PRESETS = {
  'Editorial': { palette: ['#F4EFE6', '#1F3D2E', '#C8392E'], displayFont: 'Instrument Serif' },
  'Swiss': { palette: ['#FAFAF7', '#0A0A0A', '#0A0A0A'], displayFont: 'Geist' },
  'Playful': { palette: ['#F8EDD8', '#1E4E8C', '#D97A1C'], displayFont: 'Fraunces' },
  'Dark': { palette: ['#0F0F0E', '#F4EFE6', '#D97A1C'], displayFont: 'Instrument Serif' }
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--cream', tweaks.palette[0]);
    r.style.setProperty('--ink', tweaks.palette[1]);
    r.style.setProperty('--accent', tweaks.palette[2]);
    r.style.setProperty('--display', `"${tweaks.displayFont}", "Times New Roman", serif`);
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
        <TweakSection title="Type">
          <TweakSelect
            label="Display"
            value={tweaks.displayFont}
            onChange={(v) => setTweak('displayFont', v)}
            options={['Instrument Serif', 'Fraunces', 'DM Serif Display', 'Geist']} />
        </TweakSection>
        <TweakSection title="Sections">
          <TweakToggle label="Hero" value={tweaks.showHero} onChange={(v) => setTweak('showHero', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
