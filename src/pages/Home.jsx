

function Home({ setActivePage }) {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Strategic Advisory for Digital Growth</h1>
        <p className="hero-subtitle">
          Independent counsel for operators and organisations navigating performance marketing, affiliate strategy, and digital acquisition.
        </p>
        <button 
          className="cta-button" 
          onClick={() => setActivePage('contact')}
        >
          Get in Touch <span className="arrow">→</span>
        </button>
      </section>

      {/* Service Pillars Section */}
      <section className="pillars-section">
        <h2 className="pillars-title">What We Do</h2>
        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-header">
              <span className="pillar-number">I.</span>
              <h3 className="pillar-name">Affiliate Programme Management</h3>
            </div>
            <p className="pillar-description">
              Building and optimising partner programmes that drive sustainable acquisition.
            </p>
          </div>
          <div className="pillar-card">
            <div className="pillar-header">
              <span className="pillar-number">II.</span>
              <h3 className="pillar-name">Digital Acquisition Strategy</h3>
            </div>
            <p className="pillar-description">
              Cross-channel performance across paid, organic, and affiliate channels.
            </p>
          </div>
          <div className="pillar-card">
            <div className="pillar-header">
              <span className="pillar-number">III.</span>
              <h3 className="pillar-name">Strategic Advisory</h3>
            </div>
            <p className="pillar-description">
              Commercial strategy and market development for digital operators.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
