import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, UploadCloud, Send, CheckCircle2 } from 'lucide-react';

export function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic security: Honeypot check to prevent bot spam
    // If the hidden field is filled, it's a bot. We silently reject it.
    if (honeypot) {
      console.warn("Bot detected. Form submission rejected.");
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            Solicitar Presupuesto
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            Cuéntenos los detalles técnicos de su proyecto. Nuestro equipo de ingeniería le responderá con una propuesta a medida.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div className="bg-white p-8 shadow-lg rounded-sm border-t-4 border-brand-dark">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Contacto Directo</h3>
                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4">
                    <MapPin className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <strong className="block text-brand-dark mb-1">Instalaciones Centrales</strong>
                      <span className="text-brand-steel text-sm">Carrer de Jordi Camp, 51<br/>08403 Granollers<br/>Barcelona, España</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <strong className="block text-brand-dark mb-1">Teléfono Técnico</strong>
                      <span className="text-brand-steel text-sm">+34 93 000 00 00</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="text-brand-accent shrink-0 mt-1" size={24} />
                    <div>
                      <strong className="block text-brand-dark mb-1">Email de Proyectos</strong>
                      <span className="text-brand-steel text-sm">presupuestos@equinox.es</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-dark p-8 shadow-lg rounded-sm text-white">
                <h3 className="text-xl font-bold mb-4">¿Urgencia en Planta?</h3>
                <p className="text-white/70 text-sm mb-6">
                  Disponemos de equipos de intervención rápida para reparaciones y soldadura de emergencia en instalaciones críticas.
                </p>
                <a href="tel:+34900000000" className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                  <Phone size={16} />
                  Llamar a Emergencias
                </a>
              </div>
            </div>

            {/* Advanced Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 shadow-xl rounded-sm">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-brand-dark mb-4">Solicitud Recibida</h3>
                    <p className="text-brand-steel max-w-md mx-auto">
                      Hemos recibido los detalles de su proyecto. Un ingeniero de nuestro equipo revisará la documentación y se pondrá en contacto con usted en menos de 24 horas laborables.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Honeypot field - Hidden from real users, visible to bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input 
                        type="text" 
                        id="website" 
                        name="website" 
                        tabIndex={-1} 
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Detalles del Proyecto</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-brand-dark">Nombre y Apellidos *</label>
                        <input required type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="Ej. Carlos Martínez" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-brand-dark">Empresa *</label>
                        <input required type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="Nombre de su empresa" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-brand-dark">Email Corporativo *</label>
                        <input required type="email" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="email@empresa.com" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-brand-dark">Teléfono</label>
                        <input type="tel" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" placeholder="+34 ___ ___ ___" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-brand-dark">Tipo de Proyecto *</label>
                        <select required className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-brand-steel">
                          <option value="">Seleccione una opción...</option>
                          <option value="depositos">Depósitos y Recipientes</option>
                          <option value="skids">Skids Industriales</option>
                          <option value="tuberia">Instalación de Tubería</option>
                          <option value="medida">Calderería a Medida</option>
                          <option value="montaje">Montaje / Mantenimiento</option>
                          <option value="otros">Otros</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-brand-dark">Material Requerido</label>
                        <select className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-brand-steel">
                          <option value="304">Acero Inoxidable AISI 304</option>
                          <option value="316L">Acero Inoxidable AISI 316L</option>
                          <option value="carbono">Acero al Carbono</option>
                          <option value="especiales">Aleaciones Especiales (Hastelloy, Duplex, etc.)</option>
                          <option value="asesoramiento">Necesito asesoramiento técnico</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">Descripción Técnica *</label>
                      <textarea required rows={4} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none" placeholder="Describa las dimensiones, presiones, acabados o cualquier requisito técnico relevante..."></textarea>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">Adjuntar Planos o Especificaciones (PDF, DWG, ZIP)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:bg-gray-50 hover:border-brand-accent transition-all cursor-pointer group">
                        <input type="file" id="file-upload" className="hidden" accept=".pdf,.dwg,.zip,.rar,.doc,.docx" multiple />
                        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-3">
                          <div className="w-12 h-12 bg-brand-dark/5 text-brand-dark rounded-full flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                            <UploadCloud size={24} />
                          </div>
                          <span className="text-brand-steel font-medium">Haga clic para subir archivos o arrástrelos aquí</span>
                          <span className="text-xs text-brand-steel/60">Tamaño máximo: 20MB</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mt-4">
                      <input required type="checkbox" id="privacy" className="mt-1 accent-brand-accent" />
                      <label htmlFor="privacy" className="text-xs text-brand-steel leading-relaxed">
                        He leído y acepto la <a href="#" className="text-brand-dark underline">Política de Privacidad</a>. Consiento el tratamiento de mis datos para la gestión de este presupuesto.
                      </label>
                    </div>

                    <button type="submit" className="mt-4 bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-sm text-lg font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 w-full md:w-auto md:self-end">
                      Enviar Solicitud
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
