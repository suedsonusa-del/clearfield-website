

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="page-title">Get in Touch</h1>
      
      <div className="contact-content">
        <p className="contact-intro">
          We work with a limited number of clients at any one time. If you are looking for independent advisory support on affiliate strategy or digital acquisition, we would be glad to hear from you.
        </p>

        <div className="contact-methods">
          <div className="contact-method-card">
            <span className="method-label">Direct Email</span>
            <a href="mailto:contact@clearfield.group" className="method-link">
              contact@clearfield.group
            </a>
          </div>

          <div className="contact-method-card">
            <span className="method-label">WhatsApp</span>
            <a 
              href="https://wa.me/447490930045" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="method-link"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
