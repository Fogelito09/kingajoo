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
              <span className="about-highlight">Kinkajoo Ltd</span> was founded by <span className="about-highlight">Nadav Fogel</span> &amp; <span className="about-highlight">Erez Bar</span> in 2012 with the goal of creating fun games and apps for everyone to enjoy.
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
    </>
  );
}

/* ---------- app ---------- */

function App() {
  return (
    <>
      <Nav activePage="about" titleContent={
        <div className="page-title-row">
          <img src="logo-monkey.png" alt="" className="page-title-icon" />
          <h1 className="about-page-title">- About us -</h1>
        </div>
      } />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
