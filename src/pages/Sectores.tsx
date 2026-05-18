import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, Wheat, Sparkles, TestTube2, Beaker, PaintBucket, Droplet, Fuel, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Sectores() {
  const { t } = useTranslation();

  const sectors = [
    {
      id: 'farmacia',
      title: t('sectores.list.farma.title'),
      icon: <FlaskConical size={32} />,
      desc: t('sectores.list.farma.desc'),
      img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 2, title: 'Skid de Filtración Tangencial', client: 'Laboratorio Farmacéutico' }
      ]
    },
    {
      id: 'alimentacion',
      title: t('sectores.list.alim.title'),
      icon: <Wheat size={32} />,
      desc: t('sectores.list.alim.desc'),
      img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 3, title: 'Línea de Tubería Sanitaria', client: 'Planta Láctea' },
        { id: 4, title: 'Tolvas de Recepción Inoxidable', client: 'Procesado de Cereales' }
      ]
    },
    {
      id: 'cosmetica',
      title: t('sectores.list.cosm.title'),
      icon: <Sparkles size={32} />,
      desc: t('sectores.list.cosm.desc'),
      img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 5, title: 'Depósitos de Mezcla con Agitador', client: 'Fabricante de Cosmética' }
      ]
    },
    {
      id: 'quimica-fina',
      title: t('sectores.list.quimf.title'),
      icon: <TestTube2 size={32} />,
      desc: t('sectores.list.quimf.desc'),
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'quimica',
      title: t('sectores.list.quim.title'),
      icon: <Beaker size={32} />,
      desc: t('sectores.list.quim.desc'),
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 1, title: 'Batería de Reactores 5.000L', client: 'Sector Químico' }
      ]
    },
    {
      id: 'pinturas',
      title: t('sectores.list.pint.title'),
      icon: <PaintBucket size={32} />,
      desc: t('sectores.list.pint.desc'),
      img: 'https://images.unsplash.com/photo-1565439390118-bbf3252f238f?q=80&w=2069&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'petroquimica',
      title: t('sectores.list.petro.title'),
      handle: 'petroquimica',
      icon: <Fuel size={32} />,
      desc: t('sectores.list.petro.desc'),
      img: 'https://images.unsplash.com/photo-1529939440282-72971f486e91?q=80&w=2070&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'asfalto',
      title: t('sectores.list.asfalto.title'),
      icon: <Droplet size={32} />,
      desc: t('sectores.list.asfalto.desc'),
      img: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?q=80&w=2070&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'medio-ambiente',
      title: t('sectores.list.medio.title'),
      icon: <Leaf size={32} />,
      desc: t('sectores.list.medio.desc'),
      img: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 6, title: 'Decantadores de Acero Inoxidable', client: 'EDAR Municipal' }
      ]
    }
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581094751594-f3d8901f3f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            {t('sectores.heroTitle')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            {t('sectores.heroDesc')}
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-50 flex items-center justify-center rounded-sm text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    {sector.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-dark border-b-2 border-transparent group-hover:border-brand-accent transition-all pb-1">
                    {sector.title}
                  </h3>
                </div>
                
                <p className="text-brand-steel leading-relaxed mb-6 text-sm">
                  {sector.desc}
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/40 mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-brand-accent"></span>
                    {sector.projects && sector.projects.length > 0 ? t('sectores.proyectosDestacados') : t('sectores.aplicaciones')}
                  </h4>
                  
                  <ul className="space-y-3">
                    {sector.projects && sector.projects.length > 0 ? (
                      sector.projects.map(p => (
                        <li key={p.id} className="flex items-start gap-3 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-brand-dark leading-tight">{p.title}</span>
                            <span className="text-[11px] text-brand-steel opacity-70">{p.client}</span>
                          </div>
                        </li>
                      ))
                    ) : (
                      // Fallback bullets if no projects are defined
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0"></div>
                        <span className="text-sm text-brand-steel">{t('sectores.medida')}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
