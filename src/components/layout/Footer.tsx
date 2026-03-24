import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                <span className="text-brand-dark font-display font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl leading-none tracking-tighter text-white">
                  EQUINOX
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/60">
                  Equipos Inoxidables
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Con más de 30 años de experiencia, especialistas en calderería industrial y fabricación de equipos de proceso en acero inoxidable, acero al carbono y aleaciones especiales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-brand-accent">Empresa</h4>
            <ul className="flex flex-col gap-4">
              {['Inicio', 'Quiénes somos', 'Servicios', 'Sectores', 'Proyectos', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/70 hover:text-white flex items-center gap-2 group transition-all">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-brand-accent">Servicios</h4>
            <ul className="flex flex-col gap-4">
              {['Calderería a medida', 'Depósitos y Tanques', 'Soldadura TIG/MIG', 'Skids Industriales', 'Montaje en Planta'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-white/70 hover:text-white text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-brand-accent">Contacto</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-accent shrink-0" size={20} />
                <span className="text-white/70 text-sm">Carrer de Jordi Camp, 51<br/>08403 Granollers, Barcelona, España</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-accent shrink-0" size={20} />
                <span className="text-white/70 text-sm">+34 93 000 00 00</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-accent shrink-0" size={20} />
                <span className="text-white/70 text-sm">info@equinox.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © 2026 EQUINOX Equipos Inoxidables SL. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-white/40 hover:text-white text-xs">Aviso Legal</Link>
            <Link to="#" className="text-white/40 hover:text-white text-xs">Privacidad</Link>
            <Link to="#" className="text-white/40 hover:text-white text-xs">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
