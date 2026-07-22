import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, UploadCloud, Send, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

export function Contacto() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  
  // State for precomposed values
  const [descTecnica, setDescTecnica] = useState('');
  const [tipoProyecto, setTipoProyecto] = useState('');

  useEffect(() => {
    const refParam = searchParams.get('ref');
    const catParam = searchParams.get('cat');
    if (refParam) {
      setDescTecnica(`Solicitud de cotización e información técnica detallada para el equipo con Referencia #${refParam}.`);
    }
    if (catParam) {
      // Map 'depositos', 'reactores', 'intercambiadores', 'caldereria' to option value
      if (catParam === 'depositos') setTipoProyecto('depositos');
      else if (catParam === 'reactores') setTipoProyecto('otros'); // or appropriate mappings
      else if (catParam === 'intercambiadores') setTipoProyecto('otros');
      else if (catParam === 'caldereria') setTipoProyecto('medida');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic security: Honeypot check to prevent bot spam
    if (honeypot) {
      console.warn("Bot detected. Form submission rejected.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to object for JSON submission
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      // Use FormSubmit AJAX endpoint
      await fetch("https://formsubmit.co/ajax/comercial@equinoxsl.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-brand-dark py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-6">
            {t('contacto.heroTitle')}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            {t('contacto.heroDesc')}
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-dark hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-dark/10 text-brand-dark rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t('contacto.inst')}</h3>
              <p className="text-brand-steel leading-relaxed">
                Carrer de Jordi Camp, 51<br />
                08403 Granollers<br />
                Barcelona, España
              </p>
            </div>

            {/* Phones */}
            <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-accent hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t('contacto.tel')}</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-steel">{t('contacto.oficina')}</span>
                  <a href="tel:+34938499838" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">93 849 98 38</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-steel">{t('contacto.dptoTec')}</span>
                  <a href="tel:+34626344412" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">626 34 44 12</a>
                </li>
              </ul>
            </div>

            {/* Emails */}
            <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-brand-steel hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-steel/10 text-brand-steel rounded-full flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t('contacto.emails')}</h3>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-steel">{t('contacto.infoGen')}</span>
                  <a href="mailto:comercial@equinoxsl.com" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">comercial@equinoxsl.com</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-steel">{t('contacto.proyectos')}</span>
                  <a href="mailto:comercial@equinoxsl.com" className="text-brand-dark font-medium hover:text-brand-accent transition-colors">comercial@equinoxsl.com</a>
                </li>
              </ul>
            </div>

            {/* Hours & Emergency */}
            <div className="bg-gray-50 p-8 rounded-sm border-t-4 border-red-600 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{t('contacto.horario')}</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between text-sm">
                  <span className="text-brand-steel">{t('contacto.lunesJueves')}:</span>
                  <span className="text-brand-dark font-medium">08:00 - 17:30</span>
                </li>
                <li className="flex justify-between text-sm">
                  <span className="text-brand-steel">{t('contacto.viernes')}:</span>
                  <span className="text-brand-dark font-medium">08:00 - 14:00</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+34626344412" className="flex items-center gap-2 text-red-600 font-bold text-sm hover:text-red-700 transition-colors">
                  <AlertTriangle size={16} />
                  {t('contacto.urgencias')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200" id="presupuesto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">{t('contacto.formTitle')}</h2>
              <p className="text-brand-steel text-lg">
                {t('contacto.formDesc')}
              </p>
            </div>

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
                  <h3 className="text-3xl font-bold text-brand-dark mb-4">{t('contacto.successTitle')}</h3>
                  <p className="text-brand-steel max-w-md mx-auto">
                    {t('contacto.successDesc')}
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

                  <h3 className="text-2xl font-bold text-brand-dark mb-2">{t('contacto.detallesProyecto')}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">{t('contacto.nombre')}</label>
                      <input required type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" name="nombre" placeholder="Ej. Carlos Martínez" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">{t('contacto.empresa')}</label>
                      <input required type="text" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" name="empresa" placeholder="Nombre de su empresa" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">{t('contacto.email')}</label>
                      <input required type="email" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" name="email" placeholder="email@empresa.com" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">{t('contacto.telefono')}</label>
                      <input type="tel" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" name="telefono" placeholder="+34 ___ ___ ___" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">{t('contacto.tipoProyecto')}</label>
                      <select name="tipoProyecto" 
                        required 
                        value={tipoProyecto}
                        onChange={(e) => setTipoProyecto(e.target.value)}
                        className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-brand-steel"
                      >
                        <option value="">{t('contacto.seleccione')}</option>
                        <option value="depositos">{t('contacto.opciones.dep')}</option>
                        <option value="skids">{t('contacto.opciones.skid')}</option>
                        <option value="tuberia">{t('contacto.opciones.tub')}</option>
                        <option value="medida">{t('contacto.opciones.cald')}</option>
                        <option value="montaje">{t('contacto.opciones.mont')}</option>
                        <option value="otros">{t('contacto.opciones.otros')}</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-brand-dark">{t('contacto.material')}</label>
                      <select name="material" className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all text-brand-steel">
                        <option value="304">{t('contacto.matOpciones.aisi304')}</option>
                        <option value="316L">{t('contacto.matOpciones.aisi316')}</option>
                        <option value="carbono">{t('contacto.matOpciones.carbono')}</option>
                        <option value="especiales">{t('contacto.matOpciones.aleaciones')}</option>
                        <option value="asesoramiento">{t('contacto.matOpciones.asesoramiento')}</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-brand-dark">{t('contacto.descTecnica')}</label>
                    <textarea name="descripcionTecnica" 
                      required 
                      rows={4} 
                      value={descTecnica}
                      onChange={(e) => setDescTecnica(e.target.value)}
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none" 
                      placeholder={t('contacto.descPlaceholder')}
                    ></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-brand-dark">{t('contacto.adjuntar')}</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:bg-gray-50 hover:border-brand-accent transition-all cursor-pointer group">
                      <input type="file" id="file-upload" className="hidden" accept=".pdf,.dwg,.zip,.rar,.doc,.docx" multiple />
                      <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-3">
                        <div className="w-12 h-12 bg-brand-dark/5 text-brand-dark rounded-full flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                          <UploadCloud size={24} />
                        </div>
                        <span className="text-brand-steel font-medium">{t('contacto.adjuntarDesc')}</span>
                        <span className="text-xs text-brand-steel/60">{t('contacto.maxSize')}</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <input required type="checkbox" id="privacy" className="mt-1 accent-brand-accent" />
                    <label htmlFor="privacy" className="text-xs text-brand-steel leading-relaxed">
                      {t('contacto.privacidad1')}<a href="#" className="text-brand-dark underline">{t('contacto.privacidadLink')}</a>{t('contacto.privacidad2')}
                    </label>
                  </div>

                  <button type="submit" className="mt-4 bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-sm text-lg font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 w-full md:w-auto md:self-end">
                    {t('contacto.enviar')}
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
