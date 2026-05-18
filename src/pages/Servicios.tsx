import { motion } from 'motion/react';
import { ArrowRight, Settings, Droplets, Box, Wrench, Activity, Shield, Beaker, Fan, ArrowRightLeft, Database, Blocks, Hammer, Truck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Servicios() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'depositos',
      icon: <Droplets size={32} />,
      title: t('servicios.list.dep.title'),
      desc: t('servicios.list.dep.desc'),
      img: 'https://images.unsplash.com/photo-1584263347416-85a18a482d99?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'medida',
      icon: <Shield size={32} />,
      title: t('servicios.list.medida.title'),
      desc: t('servicios.list.medida.desc'),
      img: 'https://images.unsplash.com/photo-1565439390118-bbf3252f238f?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'skids',
      icon: <Box size={32} />,
      title: t('servicios.list.skids.title'),
      desc: t('servicios.list.skids.desc'),
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'soldadura',
      icon: <Settings size={32} />,
      title: t('servicios.list.sold.title'),
      desc: t('servicios.list.sold.desc'),
      img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'tuberia',
      icon: <Activity size={32} />,
      title: t('servicios.list.tub.title'),
      desc: t('servicios.list.tub.desc'),
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'montaje',
      icon: <Wrench size={32} />,
      title: t('servicios.list.mont.title'),
      desc: t('servicios.list.mont.desc'),
      img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const detailedCatalog = [
    {
      title: t('servicios.catalog.react.title'),
      icon: <Beaker size={24} />,
      items: t('servicios.catalog.react.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.agit.title'),
      icon: <Fan size={24} />,
      items: t('servicios.catalog.agit.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.inter.title'),
      icon: <ArrowRightLeft size={24} />,
      items: t('servicios.catalog.inter.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.dep.title'),
      icon: <Database size={24} />,
      desc: t('servicios.catalog.dep.desc'),
      items: t('servicios.catalog.dep.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.aux.title'),
      icon: <Blocks size={24} />,
      items: t('servicios.catalog.aux.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.cald.title'),
      icon: <Hammer size={24} />,
      items: t('servicios.catalog.cald.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.serv.title'),
      icon: <Truck size={24} />,
      items: t('servicios.catalog.serv.items', { returnObjects: true }) as string[]
    },
    {
      title: t('servicios.catalog.inst.title'),
      icon: <PenTool size={24} />,
      desc: t('servicios.catalog.inst.desc'),
      items: t('servicios.catalog.inst.items', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            {t('servicios.heroTitle')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            {t('servicios.heroDesc')}
          </p>
        </div>
      </section>

      {/* Services Grid - Technical Layout */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 shadow-lg border-t-4 border-brand-steel hover:border-brand-accent transition-all group flex flex-col h-full rounded-sm"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-brand-accent bg-brand-accent/5 p-4 rounded-sm group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-brand-dark/5 font-display font-black text-4xl group-hover:text-brand-accent/10 transition-colors">0{i + 1}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-brand-dark mb-6 uppercase tracking-tight">{service.title}</h3>
                <p className="text-brand-steel leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-accent border-b border-brand-accent/20 pb-2 mb-4">
                    {t('servicios.capacidades')}
                  </div>
                  <ul className="space-y-3">
                    {Array.isArray(t(`servicios.list.${service.id}.bullets`, { returnObjects: true })) && 
                      (t(`servicios.list.${service.id}.bullets`, { returnObjects: true }) as string[]).map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-brand-dark font-medium">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-1.5"></div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contacto" className="mt-auto inline-flex items-center gap-3 text-brand-dark font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group/link text-xs">
                  {t('common.consultar')}
                  <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Detailed Catalog Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">{t('servicios.catalogTitle')}</h2>
            <p className="text-brand-steel">
              {t('servicios.catalogDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedCatalog.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-gray-50 p-6 rounded-sm border border-gray-100 hover:border-brand-accent hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-brand-accent bg-white p-2 rounded-sm shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark">{category.title}</h3>
                </div>
                {category.desc && (
                  <p className="text-sm text-brand-steel mb-4 italic">{category.desc}</p>
                )}
                <ul className="space-y-2">
                  {Array.isArray(category.items) && category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-brand-steel">
                      <span className="text-brand-accent mt-1 text-[10px]">■</span>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
