

function Services() {
  return (
    <div className="services-container">
      <h1 className="page-title">Our Services</h1>
      
      <div className="services-list">
        {/* Section 1 */}
        <section className="service-item">
          <div className="service-meta">
            <span className="service-number">01</span>
            <h2 className="service-heading">Affiliate Programme Management</h2>
          </div>
          <div className="service-content">
            <p>
              Clearfield Group advises on the design, launch, and optimisation of affiliate and partner marketing programmes. Services include commercial structure, partner acquisition, deal negotiation, platform selection, and performance reporting architecture.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="service-item">
          <div className="service-meta">
            <span className="service-number">02</span>
            <h2 className="service-heading">Digital Acquisition Strategy</h2>
          </div>
          <div className="service-content">
            <p>
              Cross-channel acquisition consulting spanning paid media, search, and performance marketing. We help clients build acquisition frameworks that connect channel investment to measurable business outcomes — FTDs, CAC, LTV, and NGR.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="service-item">
          <div className="service-meta">
            <span className="service-number">03</span>
            <h2 className="service-heading">Strategic Advisory</h2>
          </div>
          <div className="service-content">
            <p>
              Independent strategic counsel for operators entering new markets or restructuring their growth operations. Engagements are typically retainer-based and tailored to the specific commercial challenge.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
