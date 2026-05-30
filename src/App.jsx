import { useState } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Compliance from './pages/Compliance';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'compliance':
        return <Compliance />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <header>
        <div className="brand-container">
          <div className="brand-name" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
            Clearfield
          </div>
          <hr className="brand-divider" />
          <div className="brand-tagline">Independent Advisory</div>
        </div>

        <nav>
          <span 
            className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
            onClick={() => setActivePage('services')}
          >
            Services
          </span>
          <span 
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => setActivePage('about')}
          >
            About
          </span>
          <span 
            className={`nav-link ${activePage === 'compliance' ? 'active' : ''}`}
            onClick={() => setActivePage('compliance')}
          >
            Compliance
          </span>
          <span 
            className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
            onClick={() => setActivePage('contact')}
          >
            Contact
          </span>
        </nav>
      </header>

      <main>
        {renderPage()}
      </main>

      <footer>
        <div className="footer-text">
          © 2026 Clearfield Group LLC
          <a href="mailto:contact@clearfield.group" className="footer-email">
            contact@clearfield.group
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
