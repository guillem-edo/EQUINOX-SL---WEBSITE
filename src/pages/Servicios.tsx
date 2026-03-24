import { motion } from 'motion/react';
import { ArrowRight, Settings, Droplets, Box, Wrench, Activity, Shield, Beaker, Fan, ArrowRightLeft, Database, Blocks, Hammer, Truck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Servicios() {
  const services = [
    {
      id: 'depositos',
      icon: <Droplets size={32} />,
      title: 'Depósitos a Presión y Equipos',
      desc: 'Diseño, cálculo (ASME, EN-13445, TEMA) y construcción de equipos de proceso y recipientes a presión con su correspondiente legalización.',
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'medida',
      icon: <Shield size={32} />,
      title: 'Calderería Industrial',
      desc: 'Fabricación de tolvas, reactores, ciclones y piezas especiales. Trabajamos acero inoxidable, acero al carbono y aleaciones especiales (Hastelloy, Duplex).',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 'skids',
      icon: <Box size={32} />,
      title: 'Skids y Conjuntos Industriales',
      desc: 'Estructuras modulares "Plug & Play" que integran bombas, válvulas, intercambiadores y tubería, listas para conectar en su línea de proceso.',
      img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 'soldadura',
      icon: <Settings size={32} />,
      title: 'Soldadura Homologada',
      desc: 'Especialistas en soldadura TIG, MIG-MAG y SMAW. Soldadores homologados para uniones de alta responsabilidad y control de calidad exhaustivo.',
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'tuberia',
      icon: <Activity size={32} />,
      title: 'Piping y Tubería Industrial',
      desc: 'Instalación de líneas de proceso. Soldadura orbital y manual con purga de gas para garantizar la máxima higiene en sectores farma y alimentario.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'montaje',
      icon: <Wrench size={32} />,
      title: 'Instalación y Mantenimiento',
      desc: 'Servicio integral en planta: instalación de equipos nuevos, legalización, paradas de mantenimiento y reformas de líneas existentes.',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const detailedCatalog = [
    {
      title: 'Reactores',
      icon: <Beaker size={24} />,
      items: ['Con media caña', 'Con camisa', 'Con serpentín interior', 'Para altas temperaturas y presión', 'Hidrogenadores', 'Cristalizadores', 'Mezcladores y diluidores', 'Fermentadores']
    },
    {
      title: 'Agitadores',
      icon: <Fan size={24} />,
      items: ['Hélice de alto rendimiento', 'Hélice marina y gamma', 'Hélice doble flujo', 'Turbina axial y radial', 'Disco diente sierra', 'Áncora', 'Doble áncora y pala', 'Cinta helicoidal']
    },
    {
      title: 'Intercambiadores',
      icon: <ArrowRightLeft size={24} />,
      items: ['Con haz tubular', 'Con serpentín', 'De simple y múltiples pasos', 'Evaporadores de haces tubulares', 'Condensadores de tubos']
    },
    {
      title: 'Depósitos',
      icon: <Database size={24} />,
      desc: 'Construimos depósitos de cualquier medida y calidad a necesidad del cliente.',
      items: ['De almacenamiento', 'De calefacción', 'Estériles', 'Para alta presión', 'Calorifugados']
    },
    {
      title: 'Elementos Auxiliares',
      icon: <Blocks size={24} />,
      items: [
        'Estufas: de vacío, atmosféricas, continua de rodillos, de aire, eléctricas, con vapor y aceite térmico',
        'Filtros: de cesta, con diferentes tamices y de plato',
        'Serpentines: de cualquier forma, refrigeración, calefacción y para mezclas',
        'Mezcladoras especiales: para pastas muy viscosas, para sólidos, volteadoras y continuas',
        'Unidades compactas: calefactoras, de refrigeración, de recogida y tratamiento'
      ]
    },
    {
      title: 'Calderería General',
      icon: <Hammer size={24} />,
      items: ['Tolvas y Cubas de almacenamiento', 'Válvulas de tajadera especiales', 'Estructuras y Elementos para medio ambiente', 'Sinfines y Cribas', 'Cintas transportadoras y Binds']
    },
    {
      title: 'Servicios Especiales',
      icon: <Truck size={24} />,
      items: ['Transportes (nacionales e internacionales)', 'Transportes especiales y Grúas', 'Proyectos de ingeniería y Legalizaciones', 'Pruebas periódicas (disponemos de permisos legales)']
    },
    {
      title: 'Instalaciones',
      icon: <PenTool size={24} />,
      desc: 'Disponemos de documentación acreditativa como instaladores.',
      items: ['Tuberías de proceso, servicios, vapor, AC. térmico', 'Redes para agua y Tuberías para gases', 'Montajes de equipos y Estructuras metálicas', 'Trabajos y mantenimientos por horas']
    }
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Soluciones integrales de calderería inoxidable: desde la ingeniería de detalle hasta el montaje final en sus instalaciones.
          </p>
        </div>
      </section>

      {/* Services Grid */}
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
                className="bg-white rounded-sm shadow-lg overflow-hidden group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-brand-accent mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                  <p className="text-brand-steel leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-3 bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-5 rounded-sm text-lg font-bold uppercase tracking-widest transition-all shadow-xl"
            >
              Solicitar Presupuesto
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      {/* Detailed Catalog Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">Catálogo de Fabricación y Servicios</h2>
            <p className="text-brand-steel">
              Detalle exhaustivo de nuestras capacidades de fabricación, equipos de proceso y servicios especializados para la industria.
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
                  {category.items.map((item, idx) => (
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
