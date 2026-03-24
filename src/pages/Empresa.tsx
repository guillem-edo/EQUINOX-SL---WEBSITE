import { motion } from 'motion/react';
import { Users, Factory, Award, CheckCircle2, Zap, Settings, Layers, Sparkles } from 'lucide-react';

export function Empresa() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1565439390118-bbf3252f238f?q=80&w=2069&auto=format&fit=crop"
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
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block">Quiénes Somos</span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">
              Transformando ideas en soluciones sólidas desde 1990
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Con más de 30 años de experiencia, EQUINOX S.L. es especialista en calderería industrial y fabricación de equipos de proceso para los sectores más exigentes, garantizando calidad, precisión y fiabilidad.
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
                Nuestro Compromiso con la Excelencia
              </h2>
              <p className="text-brand-steel leading-relaxed mb-6">
                En EQUINOX no solo fabricamos equipos; construimos confianza. Entendemos que en sectores como el farmacéutico o el alimentario, un acabado imperfecto o una soldadura porosa pueden suponer paradas de producción millonarias.
              </p>
              <p className="text-brand-steel leading-relaxed mb-8">
                Ofrecemos un servicio integral: diseño y cálculo según normas internacionales, fabricación, instalación, mantenimiento y legalización de equipos. Trabajamos con acero inoxidable, acero al carbono y aleaciones especiales.
              </p>
              
              <ul className="flex flex-col gap-4">
                {[
                  'Diseño y cálculo de equipos (ASME, EN-13445, TEMA, AD-Merkblätter)',
                  'Acero inoxidable, acero al carbono y aleaciones especiales (Hastelloy, Duplex)',
                  'Soldadura homologada (TIG, MIG-MAG, SMAW)',
                  'Servicio integral: fabricación, instalación, mantenimiento y legalización'
                ].map((item, i) => (
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
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                alt="Soldadura de precisión"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/90 backdrop-blur-sm p-6">
                <div className="flex items-center gap-4 text-white">
                  <Award size={40} className="text-brand-accent" />
                  <div>
                    <div className="font-bold text-xl">Calidad Certificada</div>
                    <div className="text-white/70 text-sm">ISO 9001 & WPS/PQR</div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">Capacidad Instalada</h2>
            <p className="text-brand-steel">
              Disponemos de instalaciones totalmente equipadas y maquinaria especializada para abordar proyectos integrales de calderería y fabricación de equipos de proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory size={32} />,
                title: 'Instalaciones',
                items: [
                  'Más de 700 m² de superficie total',
                  '100 m² destinados a mecanización de piezas',
                  '200 m² de patio exterior para almacenamiento y pruebas',
                  '2 puentes grúa para 6 Tn'
                ]
              },
              {
                icon: <Settings size={32} />,
                title: 'Maquinaria',
                items: [
                  '2 cilindros, 1 cizalla y 1 plegadora',
                  '1 punzonadora y 1 taladro de brazo radial',
                  '1 fresadora y 1 torno convencional mediano',
                  'Sierras de cinta, alternativas, fricción y abrasivas',
                  '1 equipo automático de corte y 3 de plasma',
                  '3 parejas de viradores indep. y 4 manuales'
                ]
              },
              {
                icon: <Zap size={32} />,
                title: 'Soldadura',
                items: [
                  '6 máquinas TIG (H.F. y P.A.)',
                  '6 máquinas MIG-MAG',
                  '5 máquinas por electrodo (SMAW)',
                  'Útiles para inertización de atmósfera',
                  '2 parejas de viradores independientes',
                  '1 posicionador y 1 tren virador'
                ]
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
                  {item.items.map((listItem, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">Materiales y Acabados</h2>
            <p className="text-brand-steel">
              Fabricamos nuestros productos en todo tipo de metales, aplicando los tratamientos superficiales más exigentes del sector.
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
                <h3 className="text-2xl font-bold text-brand-dark">Materiales de Fabricación</h3>
              </div>
              <div className="space-y-6">
                {[
                  { name: 'Aceros Inoxidables', desc: 'Austeníticos (AISI-304.L, 316.L, 904.L) para proceso. Martensíticos (AISI-410, 420) para hipertemple.' },
                  { name: 'Aceros Refractarios', desc: 'Para hornos o piezas a temperaturas elevadas (AISI-309 y 310).' },
                  { name: 'Aleaciones Especiales', desc: 'Alta corrosión y temperatura: Níquel (Alloy B2, C276, 800), Titanio, Duplex.' },
                  { name: 'Aceros al Carbono', desc: 'Para calderería general (S275JR, S355J2G3, P265GH, P295GH).' },
                  { name: 'Aceros Antidesgaste', desc: 'Utilizados para alta resistencia al desgaste.' },
                  { name: 'Otros Metales', desc: 'Latón, cobre y aluminio para protecciones o piezas específicas.' }
                ].map((mat, i) => (
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
                <h3 className="text-2xl font-bold text-brand-dark">Tratamientos y Acabados</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: 'En Acero Inoxidable',
                    items: ['Decapados', 'Pasivados', 'Pulidos industriales mates y brillantes', 'Pulido espejo', 'Electropulidos', 'Chorreado exterior', 'Recubrimientos en teflón']
                  },
                  {
                    title: 'En Acero al Carbono',
                    items: ['Imprimación epoxi', 'Pintura de acabado', 'Estabilizaciones', 'Galvanizado en caliente', 'Zincado electrolítico', 'Ebonitado', 'Recubrimientos en teflón', 'Chorreado']
                  }
                ].map((cat, i) => (
                  <div key={i} className="bg-brand-dark p-6 rounded-sm text-white h-full">
                    <h4 className="font-bold text-brand-accent mb-4 border-b border-white/10 pb-2">{cat.title}</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, idx) => (
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
