import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Settings, FlaskConical, Wheat, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584263347416-85a18a482d99?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
];

export function Home() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Industrial Background"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-brand-dark/75 backdrop-blur-[1px]"></div>
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-brand-accent/50"></div>
              <span className="text-brand-accent font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
                {t('home.heroLabel')}
              </span>
              <div className="h-[1px] w-12 bg-brand-accent/50"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.1] mb-10 tracking-tight uppercase"
            >
              {t('home.heroTitle')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12"
            >
              {t('home.heroSubtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link to="/contacto#presupuesto" className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-4 group">
                {t('home.heroCta')}
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
              <Link to="/sectores" className="border border-white/20 hover:bg-white/10 text-white px-12 py-5 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all backdrop-blur-sm flex items-center justify-center">
                {t('home.heroSecondary')}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Technical Micro-labels */}
        <div className="absolute bottom-12 left-12 hidden lg:block text-white/30 font-mono text-[10px] uppercase tracking-widest space-y-2 z-10">
          <div>LAT: 41.3851° N</div>
          <div>LON: 2.1734° E</div>
          <div>EQUINOX INDUSTRIAL SYSTEMS v2.0</div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 right-12 z-10 flex flex-col items-end gap-4"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold rotate-90 origin-right translate-y-12">Scroll</span>
          <div className="w-[1px] h-24 bg-gradient-to-b from-brand-accent to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section - New */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { val: '25+', label: 'Años de Experiencia' },
              { val: '500+', label: 'Proyectos Realizados' },
              { val: '100%', label: 'Calidad Certificada' },
              { val: '4', label: 'Sectores Estratégicos' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <span className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-2">{stat.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores Section - Redesigned */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">{t('home.sectoresLabel')}</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight uppercase tracking-tighter">{t('home.sectoresTitle')}</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                {t('home.sectoresDesc')}
              </p>
              <Link to="/sectores" className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group border-b border-white/20 pb-2">
                {t('home.sectoresLink')}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  name: t('home.sectores.farma.name'), 
                  icon: <FlaskConical size={40} />, 
                  desc: t('home.sectores.farma.desc'),
                  num: '01'
                },
                { 
                  name: t('home.sectores.alim.name'), 
                  icon: <Wheat size={40} />, 
                  desc: t('home.sectores.alim.desc'),
                  num: '02'
                },
                { 
                  name: t('home.sectores.quim.name'), 
                  icon: <Beaker size={40} />, 
                  desc: t('home.sectores.quim.desc'),
                  num: '03'
                },
                { 
                  name: 'Cosmética', 
                  icon: <Settings size={40} />, 
                  desc: 'Soluciones especializadas para la industria de la belleza y cuidado personal.',
                  num: '04'
                }
              ].map((sector, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-sm hover:bg-white/10 transition-all group relative overflow-hidden"
                >
                  <span className="absolute top-6 right-8 text-white/10 font-display font-black text-6xl group-hover:text-brand-accent/20 transition-colors">{sector.num}</span>
                  <div className="text-brand-accent mb-8 group-hover:scale-110 transition-transform origin-left">
                    {sector.icon}
                  </div>
                  <h3 className="font-bold text-2xl mb-4 uppercase tracking-tight">{sector.name}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">{sector.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features - Technical Grid */}
      <section className="py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 border border-gray-200 bg-white">
            {[
              { icon: <ShieldCheck size={32} />, title: t('home.features.diseno.title'), desc: t('home.features.diseno.desc'), accent: 'brand-accent' },
              { icon: <Zap size={32} />, title: t('home.features.servicio.title'), desc: t('home.features.servicio.desc'), accent: 'brand-dark' },
              { icon: <Settings size={32} />, title: t('home.features.materiales.title'), desc: t('home.features.materiales.desc'), accent: 'brand-steel' }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col gap-8 p-12 hover:bg-gray-50 transition-colors group">
                <div className={`w-16 h-16 bg-${feature.accent}/5 flex items-center justify-center rounded-sm text-${feature.accent} group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-brand-steel leading-relaxed text-sm opacity-80">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-auto pt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
                  <span className="w-8 h-[1px] bg-gray-200"></span>
                  Quality Assurance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Technical Grid Layout */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">{t('home.serviciosLabel')}</span>
              <h2 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark leading-[0.9] uppercase tracking-tighter">
                {t('home.serviciosTitle')}
              </h2>
            </div>
            <Link to="/servicios" className="flex items-center gap-4 text-brand-dark font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group border-b-2 border-brand-dark pb-2">
              {t('home.serviciosLink')}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t('home.serviciosList.dep.title'),
                desc: t('home.serviciosList.dep.desc'),
                icon: <FlaskConical size={32} />,
                num: '01',
                bullets: ['Recipientes a presión (ASME/EN)', 'Almacenamiento sanitario', 'Acabados pulido espejo']
              },
              {
                title: t('home.serviciosList.skid.title'),
                desc: t('home.serviciosList.skid.desc'),
                icon: <Settings size={32} />,
                num: '02',
                bullets: ['Diseño modular Plug & Play', 'Integración de instrumentación', 'Pruebas de funcionamiento FAT']
              },
              {
                title: t('home.serviciosList.sold.title'),
                desc: t('home.serviciosList.sold.desc'),
                icon: <Zap size={32} />,
                num: '03',
                bullets: ['Soldadores homologados', 'TIG / MIG-MAG / SMAW', 'Control de calidad por RX/Líquidos']
              },
              {
                title: t('home.serviciosList.mont.title'),
                desc: t('home.serviciosList.mont.desc'),
                icon: <ShieldCheck size={32} />,
                num: '04',
                bullets: ['Instalación directa en planta', 'Mantenimiento preventivo', 'Legalización de equipos']
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-gray-50 p-10 md:p-12 border border-gray-100 hover:border-brand-accent transition-all hover:shadow-xl rounded-sm"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="text-brand-accent bg-white p-4 shadow-sm rounded-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-brand-dark/10 font-display font-black text-5xl">{service.num}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-brand-dark mb-6 uppercase tracking-tight">{service.title}</h4>
                <p className="text-brand-steel mb-8 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-brand-dark font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <Link to="/servicios" className="inline-flex items-center gap-4 text-brand-dark font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group/link text-xs">
                  {t('home.saberMas')}
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dramatic */}
      <section className="py-40 bg-brand-dark relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-accent font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Ready to start?</span>
              <h2 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-12 uppercase leading-[0.9] tracking-tighter">
                {t('home.ctaTitle')}
              </h2>
              <p className="text-2xl text-white/50 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                {t('home.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link to="/contacto#presupuesto" className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-16 py-8 rounded-sm text-lg font-bold uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center">
                  {t('home.ctaPrimary')}
                </Link>
                <Link to="/contacto" className="border border-white/20 hover:bg-white/10 text-white px-16 py-8 rounded-sm text-lg font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center">
                  {t('home.ctaSecondary')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
