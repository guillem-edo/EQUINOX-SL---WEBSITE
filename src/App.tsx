import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Empresa } from './pages/Empresa';
import { Servicios } from './pages/Servicios';
import { Sectores } from './pages/Sectores';
import { Proyectos } from './pages/Proyectos';
import { Contacto } from './pages/Contacto';
import { Legal } from './pages/Legal';
import { Privacidad } from './pages/Privacidad';
import { Cookies } from './pages/Cookies';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/sectores" element={<Sectores />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aviso-legal" element={<Legal />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}
