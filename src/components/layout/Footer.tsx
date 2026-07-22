import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="inline-block -ml-2 -mt-4 relative z-10">
              <img src="/logo_def.png" alt="EQUINOX Logo" className="h-40 md:h-56 w-auto object-contain mix-blend-screen" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/equinoxsl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-brand-accent">{t('footer.empresa')}</h4>
            <ul className="flex flex-col gap-4">
              {['Inicio', 'Quiénes somos', 'Servicios', 'Sectores', 'Contacto'].map((item, index) => {
                const keys = ['inicio', 'quienesSomos', 'servicios', 'sectores', 'contacto'];
                const paths = ['/', '/empresa', '/servicios', '/sectores', '/contacto'];
                return (
                  <li key={item}>
                    <Link to={paths[index]} className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {t(`footer.links.${keys[index]}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-brand-accent">{t('footer.servicios')}</h4>
            <ul className="flex flex-col gap-4">
              {['Calderería a medida', 'Depósitos y Tanques', 'Soldadura TIG/MIG', 'Skids Industriales', 'Montaje en Planta'].map((item, index) => {
                const keys = ['caldereria', 'depositos', 'soldadura', 'skids', 'montaje'];
                return (
                  <li key={item}>
                    <Link to="/servicios" className="text-white/70 hover:text-white text-sm">
                      {t(`footer.serviciosList.${keys[index]}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-brand-accent">{t('footer.contacto')}</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-accent shrink-0" size={20} />
                <span className="text-white/70 text-sm">Carrer de Jordi Camp, 51<br/>08403 Granollers, Barcelona, España</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-accent shrink-0" size={20} />
                <span className="text-white/70 text-sm">+34 93 849 98 38</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <span className="text-white/70 text-sm">comercial@equinoxsl.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <Link to="/aviso-legal" className="text-white/40 hover:text-white text-xs">{t('footer.legal')}</Link>
            <Link to="/privacidad" className="text-white/40 hover:text-white text-xs">{t('footer.privacidad')}</Link>
            <Link to="/cookies" className="text-white/40 hover:text-white text-xs">{t('footer.cookies')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
