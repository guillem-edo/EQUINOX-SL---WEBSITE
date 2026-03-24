import { motion } from 'motion/react';
import { Users, Factory, Award, CheckCircle2, Zap, Settings, Layers, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Empresa() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
            alt="Taller de calderería"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t('empresa.heroSubtitle')}</span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">
              {t('empresa.heroTitle')}
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              {t('empresa.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifiesto & Valores */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                {t('empresa.compromisoTitle')}
              </h2>
              <p className="text-brand-steel leading-relaxed mb-6">
                {t('empresa.compromisoDesc1')}
              </p>
              <p className="text-brand-steel leading-relaxed mb-8">
                {t('empresa.compromisoDesc2')}
              </p>
              
              <ul className="flex flex-col gap-4">
                {Array.isArray(t('empresa.compromisoList', { returnObjects: true })) && (t('empresa.compromisoList', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                    <CheckCircle2 className="text-brand-accent shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=2070&auto=format&fit=crop"
                alt="Ingeniería y Calidad"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/90 backdrop-blur-sm p-6">
                <div className="flex items-center gap-4 text-white">
                  <Award size={40} className="text-brand-accent" />
                  <div>
                    <div className="font-bold text-xl">{t('empresa.calidadTitle')}</div>
                    <div className="text-white/70 text-sm">{t('empresa.calidadDesc')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capacidad Instalada */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">{t('empresa.capacidadTitle')}</h2>
            <p className="text-brand-steel">
              {t('empresa.capacidadDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory size={32} />,
                title: t('empresa.capacidadList.inst.title'),
                items: t('empresa.capacidadList.inst.items', { returnObjects: true }) as string[]
              },
              {
                icon: <Settings size={32} />,
                title: t('empresa.capacidadList.maq.title'),
                items: t('empresa.capacidadList.maq.items', { returnObjects: true }) as string[]
              },
              {
                icon: <Zap size={32} />,
                title: t('empresa.capacidadList.sold.title'),
                items: t('empresa.capacidadList.sold.items', { returnObjects: true }) as string[]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 shadow-lg border-t-4 border-brand-steel hover:border-brand-accent transition-colors"
              >
                <div className="text-brand-accent mb-6 bg-brand-accent/10 w-16 h-16 flex items-center justify-center rounded-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4">{item.title}</h3>
                <ul className="text-brand-steel leading-relaxed space-y-2">
                  {Array.isArray(item.items) && item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-accent mt-1.5 text-xs">■</span>
                      <span className="text-sm">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materiales y Acabados */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">{t('empresa.materialesTitle')}</h2>
            <p className="text-brand-steel">
              {t('empresa.materialesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Materiales */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Layers className="text-brand-accent" size={32} />
                <h3 className="text-2xl font-bold text-brand-dark">{t('empresa.materialesSub1')}</h3>
              </div>
              <div className="space-y-6">
                {Array.isArray(t('empresa.materialesList', { returnObjects: true })) && (t('empresa.materialesList', { returnObjects: true }) as { name: string, desc: string }[]).map((mat, i) => (
                  <div key={i} className="bg-gray-50 p-4 border-l-4 border-brand-steel hover:border-brand-accent transition-colors">
                    <h4 className="font-bold text-brand-dark mb-1">{mat.name}</h4>
                    <p className="text-sm text-brand-steel">{mat.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Acabados */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-brand-accent" size={32} />
                <h3 className="text-2xl font-bold text-brand-dark">{t('empresa.acabadosSub2')}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: t('empresa.acabadosList.inox.title'),
                    items: t('empresa.acabadosList.inox.items', { returnObjects: true }) as string[]
                  },
                  {
                    title: t('empresa.acabadosList.carb.title'),
                    items: t('empresa.acabadosList.carb.items', { returnObjects: true }) as string[]
                  }
                ].map((cat, i) => (
                  <div key={i} className="bg-brand-dark p-6 rounded-sm text-white h-full">
                    <h4 className="font-bold text-brand-accent mb-4 border-b border-white/10 pb-2">{cat.title}</h4>
                    <ul className="space-y-2">
                      {Array.isArray(cat.items) && cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/80">
                          <span className="text-brand-accent mt-1 text-[10px]">■</span>
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
