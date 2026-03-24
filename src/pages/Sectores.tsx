import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, Wheat, Sparkles, TestTube2, Beaker, PaintBucket, Droplet, Fuel, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Sectores() {
  const sectors = [
    {
      id: 'farmacia',
      title: 'Laboratorios Farmacéuticos',
      icon: <FlaskConical size={32} />,
      desc: 'Equipos con acabados sanitarios, pulido espejo y soldaduras orbitales que cumplen con las normativas más estrictas (FDA, GMP) para garantizar la máxima esterilidad y trazabilidad.',
      img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 2, title: 'Skid de Filtración Tangencial', client: 'Laboratorio Farmacéutico' }
      ]
    },
    {
      id: 'alimentacion',
      title: 'Alimentación',
      icon: <Wheat size={32} />,
      desc: 'Soluciones en acero inoxidable diseñadas para evitar la contaminación cruzada y facilitar la limpieza CIP/SIP en procesos de lácteos, bebidas y procesado de alimentos.',
      img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 3, title: 'Línea de Tubería Sanitaria', client: 'Planta Láctea' },
        { id: 4, title: 'Tolvas de Recepción Inoxidable', client: 'Procesado de Cereales' }
      ]
    },
    {
      id: 'cosmetica',
      title: 'Cosmética y Afines',
      icon: <Sparkles size={32} />,
      desc: 'Reactores y mezcladores de alta precisión para emulsiones y cremas, asegurando homogeneidad y control exacto de temperatura durante todo el proceso de fabricación.',
      img: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 5, title: 'Depósitos de Mezcla con Agitador', client: 'Fabricante de Cosmética' }
      ]
    },
    {
      id: 'quimica-fina',
      title: 'Química Fina y de Síntesis',
      icon: <TestTube2 size={32} />,
      desc: 'Equipos fabricados en aleaciones especiales (Hastelloy, Duplex) capaces de soportar procesos altamente corrosivos y condiciones extremas de presión y temperatura.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'quimica',
      title: 'Química',
      icon: <Beaker size={32} />,
      desc: 'Calderería pesada y equipos de proceso robustos para la industria química general, incluyendo intercambiadores de calor, columnas y grandes depósitos de almacenamiento.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
      projects: [
        { id: 1, title: 'Batería de Reactores 5.000L', client: 'Sector Químico' }
      ]
    },
    {
      id: 'pinturas',
      title: 'Pinturas y Barnices',
      icon: <PaintBucket size={32} />,
      desc: 'Sistemas de agitación especializados, dispersores y reactores ATEX diseñados específicamente para el manejo seguro de solventes y productos inflamables.',
      img: 'https://images.unsplash.com/photo-1565439390118-bbf3252f238f?q=80&w=2069&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'petroquimica',
      title: 'Petroquímica',
      icon: <Fuel size={32} />,
      desc: 'Construcción de recipientes a presión, intercambiadores tubulares y tubería de proceso bajo código ASME para las exigentes condiciones del sector petroquímico.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'asfalto',
      title: 'Asfalto y Derivados',
      icon: <Droplet size={32} />,
      desc: 'Depósitos calorifugados, sistemas de calentamiento por aceite térmico y agitadores robustos para el mantenimiento y procesado de productos bituminosos.',
      img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069&auto=format&fit=crop',
      projects: []
    },
    {
      id: 'medio-ambiente',
      title: 'Medio Ambiente',
      icon: <Leaf size={32} />,
      desc: 'Equipos para plantas de tratamiento de aguas (EDAR), decantadores, filtros y estructuras para la gestión de residuos y control de emisiones.',
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
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Sectores de Aplicación y Proyectos
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Nuestra experiencia técnica y capacidad de adaptación nos permite cumplir con las normativas y exigencias de los sectores industriales más rigurosos.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-sm shadow-lg overflow-hidden group flex flex-col h-full border-t-4 border-transparent hover:border-brand-accent transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={sector.img}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-sm shadow-lg text-brand-accent transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {sector.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{sector.title}</h3>
                  <p className="text-brand-steel leading-relaxed mb-8 flex-grow">
                    {sector.desc}
                  </p>
                  
                  {sector.projects && sector.projects.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-4">Proyectos Destacados</h4>
                      <ul className="space-y-3">
                        {sector.projects.map(p => (
                          <li key={p.id} className="text-sm text-brand-steel flex items-start gap-2">
                            <span className="text-brand-accent mt-1 text-lg leading-none">•</span>
                            <div className="flex flex-col">
                              <span className="font-semibold text-brand-dark">{p.title}</span>
                              <span className="text-xs opacity-80 mt-0.5">Cliente: {p.client}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
            ¿Tu sector no está en la lista?
          </h2>
          <p className="text-xl text-brand-steel mb-10 max-w-2xl mx-auto">
            Nuestra capacidad de fabricación a medida nos permite adaptarnos a las necesidades específicas de cualquier industria.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-5 rounded-sm text-lg font-bold uppercase tracking-widest transition-all shadow-xl"
          >
            Consúltanos tu proyecto
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
