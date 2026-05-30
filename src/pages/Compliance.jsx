

function Compliance() {
  return (
    <div className="compliance-container">
      <h1 className="page-title">Compliance & Governance</h1>
      
      <div className="compliance-content">
        <p className="compliance-intro">
          Clearfield Group operates in accordance with applicable laws and regulations across all jurisdictions where it provides services. Our governance framework reflects our commitment to ethical business conduct, transparency, and responsible commercial practice.
        </p>

        <div className="policy-list">
          {/* Policy 1 */}
          <section className="policy-item">
            <h2 className="policy-heading">Code of Conduct</h2>
            <p className="policy-text">
              All individuals acting on behalf of Clearfield Group are expected to conduct themselves with integrity, honesty, and transparency. Conflicts of interest must be disclosed and managed appropriately.
            </p>
          </section>

          {/* Policy 2 */}
          <section className="policy-item">
            <h2 className="policy-heading">Anti-Bribery & Anti-Corruption</h2>
            <p className="policy-text">
              Clearfield Group has a zero-tolerance approach to bribery and corruption in all forms. No individual acting on behalf of the firm may offer, accept, or facilitate any improper payment or benefit.
            </p>
          </section>

          {/* Policy 3 */}
          <section className="policy-item">
            <h2 className="policy-heading">Anti-Money Laundering</h2>
            <p className="policy-text">
              Clearfield Group does not knowingly facilitate, assist, or participate in money laundering or terrorist financing. All commercial relationships are subject to proportionate due diligence prior to engagement.
            </p>
          </section>

          {/* Policy 4 */}
          <section className="policy-item">
            <h2 className="policy-heading">Whistleblowing Channel</h2>
            <p className="policy-text">
              Concerns about conduct that may breach this framework may be reported confidentially to: <a href="mailto:contact@clearfield.group" className="compliance-email">contact@clearfield.group</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Compliance;
