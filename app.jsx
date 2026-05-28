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
            Kinkajoo · Tel-Aviv · Since 2012
          </div>
          <img src="mainLast-transparent.png" alt="Kinkajoo Games & Apps" className="hero-main-logo" />
          <div className="hero-nav-btns">
            <a href="games.html" className="hero-nav-btn hero-nav-btn-games">Our Games &amp; Apps</a>
            <div className="hero-nav-btn-row">
              <a href="about.html"   className="hero-nav-btn hero-nav-btn-about">About Us</a>
              <a href="contact.html" className="hero-nav-btn hero-nav-btn-contact">Contact Us</a>
            </div>
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
