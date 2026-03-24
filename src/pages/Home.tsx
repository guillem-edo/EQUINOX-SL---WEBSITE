import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Settings, FlaskConical, Wheat, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
            alt="Soldadura Industrial"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-sm">
                {t('home.heroLabel')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.1] mb-8 tracking-tighter"
            >
              {t('home.heroTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl"
            >
              {t('home.heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link to="/contacto#presupuesto" className="bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-5 rounded-sm text-lg font-bold uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center gap-3 group">
                {t('home.heroCta')}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/sectores" className="border border-white/30 hover:border-white text-white px-10 py-5 rounded-sm text-lg font-bold uppercase tracking-widest transition-all backdrop-blur-sm flex items-center justify-center">
                {t('home.heroSecondary')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* Sectores de Aplicación (Resumen) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t('home.sectoresLabel')}</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t('home.sectoresTitle')}</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {t('home.sectoresDesc')}
              </p>
            </div>
            <Link to="/sectores" className="flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group">
              {t('home.sectoresLink')}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: t('home.sectores.farma.name'), 
                icon: <FlaskConical size={32} />, 
                desc: t('home.sectores.farma.desc') 
              },
              { 
                name: t('home.sectores.alim.name'), 
                icon: <Wheat size={32} />, 
                desc: t('home.sectores.alim.desc') 
              },
              { 
                name: t('home.sectores.quim.name'), 
                icon: <Beaker size={32} />, 
                desc: t('home.sectores.quim.desc') 
              }
            ].map((sector, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-all group"
              >
                <div className="text-brand-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                  {sector.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3">{sector.name}</h3>
                <p className="text-white/60 leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6 p-10 bg-white shadow-xl border-t-4 border-brand-accent">
              <div className="w-16 h-16 bg-brand-accent/10 flex items-center justify-center rounded-sm text-brand-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('home.features.diseno.title')}</h3>
              <p className="text-brand-steel leading-relaxed">
                {t('home.features.diseno.desc')}
              </p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-white shadow-xl border-t-4 border-brand-dark">
              <div className="w-16 h-16 bg-brand-dark/10 flex items-center justify-center rounded-sm text-brand-dark">
                <Zap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('home.features.servicio.title')}</h3>
              <p className="text-brand-steel leading-relaxed">
                {t('home.features.servicio.desc')}
              </p>
            </div>
            <div className="flex flex-col gap-6 p-10 bg-white shadow-xl border-t-4 border-brand-steel">
              <div className="w-16 h-16 bg-brand-steel/10 flex items-center justify-center rounded-sm text-brand-steel">
                <Settings size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">{t('home.features.materiales.title')}</h3>
              <p className="text-brand-steel leading-relaxed">
                {t('home.features.materiales.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t('home.serviciosLabel')}</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark leading-tight">
                {t('home.serviciosTitle')}
              </h2>
            </div>
            <Link to="/servicios" className="flex items-center gap-3 text-brand-dark font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group">
              {t('home.serviciosLink')}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('home.serviciosList.dep.title'),
                desc: t('home.serviciosList.dep.desc'),
                img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
              },
              {
                title: t('home.serviciosList.skid.title'),
                desc: t('home.serviciosList.skid.desc'),
                img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069&auto=format&fit=crop'
              },
              {
                title: t('home.serviciosList.sold.title'),
                desc: t('home.serviciosList.sold.desc'),
                img: 'https://images.unsplash.com/photo-1565439390118-bbf3252f238f?q=80&w=2069&auto=format&fit=crop'
              },
              {
                title: t('home.serviciosList.mont.title'),
                desc: t('home.serviciosList.mont.desc'),
                img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop'
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative h-[400px] overflow-hidden rounded-sm">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h4 className="text-3xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-white/70 mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  <Link to="/servicios" className="text-brand-accent font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                    {t('home.saberMas')}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl text-center mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              {t('home.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contacto#presupuesto" className="bg-brand-accent hover:bg-brand-accent/90 text-white px-12 py-6 rounded-sm text-xl font-bold uppercase tracking-widest transition-all shadow-2xl flex items-center justify-center">
                {t('home.ctaPrimary')}
              </Link>
              <Link to="/contacto" className="border border-white/20 hover:bg-white/10 text-white px-12 py-6 rounded-sm text-xl font-bold uppercase tracking-widest transition-all flex items-center justify-center">
                {t('home.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
