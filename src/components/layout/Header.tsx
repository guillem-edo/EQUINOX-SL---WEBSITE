import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Empresa', path: '/empresa' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Sectores', path: '/sectores' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-dark flex items-center justify-center rounded-sm">
              <span className="text-white font-display font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className={cn("font-display font-extrabold text-xl leading-none tracking-tighter", isScrolled ? "text-brand-dark" : "text-white")}>
                EQUINOX
              </span>
              <span className={cn("text-[10px] font-medium tracking-[0.2em] uppercase", isScrolled ? "text-brand-steel" : "text-white/80")}>
                Equipos Inoxidables
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wider transition-colors hover:text-brand-accent',
                  location.pathname === link.path 
                    ? 'text-brand-accent' 
                    : isScrolled ? 'text-brand-dark' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-accent/20"
            >
              Presupuesto
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-brand-dark" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-brand-dark" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-bold text-brand-dark hover:text-brand-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2" />
            <div className="flex flex-col gap-4">
              <a href="tel:+34900000000" className="flex items-center gap-3 text-brand-steel">
                <Phone size={18} className="text-brand-accent" />
                <span className="font-medium">+34 900 000 000</span>
              </a>
              <a href="mailto:info@equinox.es" className="flex items-center gap-3 text-brand-steel">
                <Mail size={18} className="text-brand-accent" />
                <span className="font-medium">info@equinox.es</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
