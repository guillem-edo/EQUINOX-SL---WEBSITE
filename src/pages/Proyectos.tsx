import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter } from 'lucide-react';

export function Proyectos() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const categories = [
    'Todos', 
    'Laboratorios farmacéuticos', 
    'Alimentación', 
    'Cosmética y afines', 
    'Química fina y de síntesis', 
    'Química', 
    'Pinturas y barnices', 
    'Petroquímica', 
    'Asfalto y derivados', 
    'Medio ambiente'
  ];

  const projects = [
    {
      id: 1,
      title: 'Batería de Reactores 5.000L',
      category: 'Química',
      client: 'Sector Químico',
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Skid de Filtración Tangencial',
      category: 'Laboratorios farmacéuticos',
      client: 'Laboratorio Farmacéutico',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Línea de Tubería Sanitaria',
      category: 'Alimentación',
      client: 'Planta Láctea',
      img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Tolvas de Recepción Inoxidable',
      category: 'Alimentación',
      client: 'Procesado de Cereales',
      img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1974&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Depósitos de Mezcla con Agitador',
      category: 'Cosmética y afines',
      client: 'Fabricante de Cosmética',
      img: 'https://images.unsplash.com/photo-1565439390118-bbf3252f238f?q=80&w=2069&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Decantadores de Acero Inoxidable',
      category: 'Medio ambiente',
      client: 'EDAR Municipal',
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Casos de Éxito
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Nuestra experiencia demostrada a través de proyectos reales ejecutados con la máxima precisión técnica.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 text-brand-steel mr-4">
              <Filter size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">Filtrar:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeFilter === cat 
                      ? 'bg-brand-accent text-white shadow-md' 
                      : 'bg-gray-100 text-brand-steel hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-[350px] rounded-sm overflow-hidden shadow-lg cursor-pointer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Cliente: {project.client}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
