import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.inicio'), path: '/' },
    { name: t('nav.empresa'), path: '/empresa' },
    { name: t('nav.servicios'), path: '/servicios' },
    { name: t('nav.sectores'), path: '/sectores' },
    { name: t('nav.contacto'), path: '/contacto' },
  ];

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'ca', label: 'CA' },
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
              to="/contacto#presupuesto"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-accent/20"
            >
              {t('nav.presupuesto')}
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 border-l pl-4 border-gray-300/30">
              <Globe size={16} className={cn(isScrolled ? "text-brand-steel" : "text-white/80")} />
              <div className="flex gap-1">
                {languages.map((lng) => (
                  <button
                    key={lng.code}
                    onClick={() => i18n.changeLanguage(lng.code)}
                    className={cn(
                      "text-xs font-bold px-1.5 py-1 rounded-sm transition-colors",
                      i18n.language === lng.code
                        ? "bg-brand-accent text-white"
                        : isScrolled 
                          ? "text-brand-steel hover:text-brand-dark hover:bg-gray-100" 
                          : "text-white/70 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {lng.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Toggle & Lang */}
          <div className="flex items-center gap-4 lg:hidden">
            <div className="flex gap-1">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => i18n.changeLanguage(lng.code)}
                  className={cn(
                    "text-[10px] font-bold px-1.5 py-1 rounded-sm transition-colors",
                    i18n.language === lng.code
                      ? "bg-brand-accent text-white"
                      : isScrolled 
                        ? "text-brand-steel" 
                        : "text-white/80"
                  )}
                >
                  {lng.label}
                </button>
              ))}
            </div>
            <button
              className="text-brand-dark"
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
