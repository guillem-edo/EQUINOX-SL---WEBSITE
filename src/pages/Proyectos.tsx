import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, Database, Sliders, Layers, Box, CheckCircle2, ArrowRight, FileText, Search, X, Eye, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: 'depositos' | 'intercambiadores' | 'reactores' | 'caldereria';
  categoryLabel: string;
  ref: string;
  desc: string;
  material: string;
  sector: string;
  filename: string; // File name without .png, we know all are .png
  specs: string[];
}

const CATEGORY_BACKUPS: Record<string, string> = {
  depositos: 'https://images.unsplash.com/photo-1584263347416-85a18a482d99?q=80&w=1200&auto=format&fit=crop', // stainless tanks
  intercambiadores: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop', // tube haz 
  reactores: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop', // chemical vessel
  caldereria: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200&auto=format&fit=crop' // metallurgy shop
};

// Complete database of 30 physical equipment fabrications grouped by folders
const UNUSED_PROJECTS_DATABASE: Project[] = [
  // --- DEPOSITOS (8 items) ---
  {
    id: 1,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: 'TEXAPEL',
    title: 'Tanque de Proceso Químico Texapel',
    desc: 'Depósito pulmón de dosificación y mezcla controlada para formulaciones químicas complejas y resinas.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Industrial / Suministros',
    filename: 'TEXAPEL.png',
    specs: [
      'Capacidad útil: 8.500 Litros',
      'Fondo cónico inclinado autodrenante para purga completa de resinas',
      'Agitación superior de hélice marina de doble par motor',
      'Pulido mecánico interno Ra < 0.6 µm y decapado integral',
      'Visor acristalado de seguridad para control ocular directo'
    ]
  },
  {
    id: 2,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '1593',
    title: 'Depósito Decantador de Fases Ref. 1593',
    desc: 'Equipo acumulador con separador interno estanco para vertido y clasificación de mezclas bifásicas en continuo.',
    material: 'Acero Inoxidable AISI 304L / AISI 316',
    sector: 'Medio Ambiente / Conservación',
    filename: '1593.png',
    specs: [
      'Capacidad útil: 6.000 Litros',
      'Baffles internos pasivados para separación laminar estática',
      'Sistema de tuberías de purga superior regulable en altura',
      'Presión admisible: Presión atmosférica',
      'Soportes acoplados al chasis reforzados contra sismos'
    ]
  },
  {
    id: 3,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '1737',
    title: 'Tanque Pulmón Sanitario Calorifugado Ref. 1737',
    desc: 'Almacenamiento térmico para fluidos finos o alimentarios estériles con camisa de agua caliente y lana mineral.',
    material: 'Acero Inoxidable Sanitario AISI 316L (contacto)',
    sector: 'Cosmética e Higiene / Lácteo',
    filename: '1737.png',
    specs: [
      'Capacidad útil: 11.000 Litros',
      'Aislamiento de lana de roca de 80 mm de espesor soldado a chapa exterior',
      'Camisa de serpentín interior de circulación rápida de agua a 85°C',
      'Bolas de limpieza CIP integradas multidireccionales',
      'Tratamiento de juntas sanitarias según normativas FDA'
    ]
  },
  {
    id: 4,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '1952',
    title: 'Tanque Isotérmico a la Intemperie Ref. 1952',
    desc: 'Depósito exterior aislado con revestimiento estanco soldado por proceso TIG, inmune a condensaciones de humedad.',
    material: 'Acero Inoxidable AISI 316 y Chapa Exterior de Protección AISI 304',
    sector: 'Química General y Auxiliar',
    filename: '1952.png',
    specs: [
      'Capacidad útil: 15.000 Litros',
      'Camisa exterior tipo dimple-jacket para mantenimiento térmico uniforme',
      'Churreado y pasivado químico total posterior al cordón de soldadura',
      'Boca de hombre elíptica en virola con brida lateral de junta elástica',
      'Instalación con escuadras de anclaje de perfiles pesados'
    ]
  },
  {
    id: 5,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '2153',
    title: 'Recipiente Acumulador a Presión Ref. 2153',
    desc: 'Depósito hermético reforzado certificado bajo la Directiva Europea 2014/68/UE de Equipos a Presión.',
    material: 'Acero Inoxidable Súper Austenítico AISI 316L',
    sector: 'Química Hidráulica / Petroquímica',
    filename: '2153.png',
    specs: [
      'Capacidad útil: 3.200 Litros',
      'Presión de diseño: +8.5 bar a +100°C',
      'Fondos embutidos tipo Klopper con espesores ajustados por software FEA',
      'Inspección al 100% de soldaduras longitudinales por radiografía industrial',
      'Certificación CE y dossier de pruebas hidrostáticas oficiales'
    ]
  },
  {
    id: 6,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '2157 B 1',
    title: 'Depósito de Dosificación Farmacéutico Ref. 2157 B-1',
    desc: 'Depósito intermedio de ultra-pureza, pulido espejo mecánico para la correcta esterilidad de la mezcla.',
    material: 'Acero Inoxidable AISI 316L Electropulido ASME BPE',
    sector: 'Farmacéutico / Biotecnología',
    filename: '2157 B 1.png',
    specs: [
      'Capacidad útil: 900 Litros',
      'Pulido de alta calidad interna con rugosidad certificada Ra < 0.38 µm',
      'Ausencia total de zonas muertas e hilos de rosca interiores',
      'Conexiones rápidas tipo Clamp sanitarias',
      'Instalación sobre bancada con pies antivibratorios regulables'
    ]
  },
  {
    id: 7,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '2178 D',
    title: 'Tanque de Enfriamiento por Glicol Ref. 2178-D',
    desc: 'Depósito estéril provisto de camisas inferiores preparadas para el rápido enfriamiento de bases alimenticias.',
    material: 'Acero Inoxidable AISI 316L / AISI 304',
    sector: 'Alimentación / Bebidas de Proceso',
    filename: '2178 D.png',
    specs: [
      'Capacidad útil: 10.000 Litros',
      'Circuito de placa Pillow-Plate para circulación de agua glicolada a -5°C',
      'Aislamiento de poliuretano inyectado de alta durabilidad',
      'Agitador de bajas r.p.m. de paso variable para evitar degradación de mezcla',
      'Válvula de vaciado inferior higiénica de cierre por diafragma'
    ]
  },
  {
    id: 8,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '2338 368 369 370',
    title: 'Batería de Almacenamiento Acoplada Ref. 2338',
    desc: 'Tres tanques idénticos conectados mecánicamente mediante pasarelas superiores para dosificación paralela.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Pinturas / Recubrimientos Industriales',
    filename: '2338 368 369 370.png',
    specs: [
      'Capacidad combinada: 3 x 4.000 Litros',
      'Pasarela de paso superior con barandillas integradas según norma de seguridad',
      'Agitadores rápidos axiales suspendidos con deflectores laterales ajustables',
      'Colectores inferiores de descarga acoplados a bomba de engranajes',
      'Células de carga de alta sensibilidad sobre bancada estructural de soporte'
    ]
  },

  // --- INTERCAMBIADORES (7 items) ---
  {
    id: 9,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2010 b',
    title: 'Intercambiador Multitubular Compacto Ref. 2010-B',
    desc: 'Intercambiador tubular soldado para condensación de vapores orgánicos y refrigeración de fluidos corrosivos.',
    material: 'Acero Inoxidable AISI 316L / Aleación de Níquel',
    sector: 'Química Industrial / Petróleo',
    filename: '2010 b.png',
    specs: [
      'Superficie de intercambio térmico: 16 m²',
      'Diseñado según código ASME Sección VIII División 1',
      'Haz de tubos de pared delgada mandrinados térmicamente',
      'Carcasa exterior protegida con imprimación de alta resistencia térmica',
      'Control estanqueidad mediante prueba neumática por helio'
    ]
  },
  {
    id: 10,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2084',
    title: 'Intercambiador de Haz de Vapor Ref. 2084',
    desc: 'Equipo industrial multitubular de alta resistencia, idóneo para procesos de calentamiento por vapor de agua saturado.',
    material: 'Acero Inoxidable AISI 316 (Haces) / Acero al Carbono (Carcasa)',
    sector: 'Procesos Térmicos / Metalurgia',
    filename: '2084.png',
    specs: [
      'Superficie de intercambio: 40 m²',
      'Presión máxima de servicio de vapor: 12 bar',
      'Tubos expandidos y soldados a la placa tubular con mecanizado radial',
      'Deflectores internos de diseño segmentado rígido para favorecer flujos cruzados',
      'Soportes soldados tipo cuna para fijación fácil en planta'
    ]
  },
  {
    id: 11,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2090 B',
    title: 'Pasteurizador Multitubular Sanitario Ref. 2090-B',
    desc: 'Intercambiador de doble placa tubular (DTS) que evita intercontaminaciones accidentales en fluidos alimentarios.',
    material: 'Acero Inoxidable Pulido Sanitario AISI 316L',
    sector: 'Alimentario / Bebidas Sanatarias',
    filename: '2090 B.png',
    specs: [
      'Superficie de intercambio: 25 m²',
      'Exclusivo diseño DTS con cámara de fuga visible de seguridad',
      'Facilidad de autodrenado completo según directivas higiénicas de diseño',
      'Acabado interno electropulido fino Ra < 0.4 µm',
      'Accesorios clamp y juntas aptas para ciclos térmicos intensos'
    ]
  },
  {
    id: 12,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2157 C',
    title: 'Condensador de Destilación Vertical Ref. 2157-C',
    desc: 'Intercambiador multitubular sanitario de gran rendimiento, destinado a la destilación al vacío de alcoholes estériles.',
    material: 'Acero Inoxidable Sanitario AISI 316L ASME BPE',
    sector: 'Farmacéutico / Síntesis Fina',
    filename: '2157 C.png',
    specs: [
      'Superficie de intercambio: 32 m²',
      'Haces tubulares interiores de acabado espejo sin costuras mecánicas',
      'Carcasa dotada de visor acristalado de expansión de condensado',
      'Endoscopia por videofibroscopio y certificado de rugosidad en dossier técnico',
      'Listo para acoplamiento de sistemas de validación FDA IQ/OQ'
    ]
  },
  {
    id: 13,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2157 D',
    title: 'Intercambiador de Plancha y Tubos Especial Ref. 2157-D',
    desc: 'Intercambiador de haz tubular para intercambio de calor de alta responsabilidad con fluidos orgánicos volátiles.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Industrial / Refinería',
    filename: '2157 D.png',
    specs: [
      'Superficie de intercambio: 20 m²',
      'Diseñado y calculado bajo código normativo EN-13445',
      'Junta de expansión elástica soldada a la carcasa para absorber choques térmicos',
      'Bridas planas normalizadas de alta rigidez EN 1092-1',
      'Soldaduras pasivadas y decapadas selectivamente'
    ]
  },
  {
    id: 14,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2317',
    title: 'Intercambiador para Fluidos Densos Ref. 2317',
    desc: 'Equipo multitubular con tubos corrugados interiores para fluidos con lodos o carga de sólidos en suspensión.',
    material: 'Acero Inoxidable AISI 316 de espesor abrasivo',
    sector: 'Tratamiento de Aguas / EDAR',
    filename: '2317.png',
    specs: [
      'Superficie de intercambio: 50 m²',
      'Manguitos interiores corrugados para inducir flujo de mezcla turbulenta',
      'Cabezal embridado basculable desmontable para rápido acceso de limpieza',
      'Resistencia superior ante la incrustación biológica e industrial',
      'Presión y temperatura de diseño: 10 bar a +120°C'
    ]
  },
  {
    id: 15,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: 'foto 1834',
    title: 'Condensador Multitubular de Gran Sección Ref. 1834',
    desc: 'Unidad de condensación de gran diámetro diseñada para manejar altos volúmenes gaseosos corrosivos.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Fina / Solventes',
    filename: 'foto 1834.png',
    specs: [
      'Superficie de intercambio: 36 m²',
      'Carcasa exterior sobredimensionada para soportar expansión rápida de volumen',
      'Certificados de radiografías de soldaduras y dossier constructivo',
      'Pulido decapado exterior mate estético de gran uniformidad',
      'Cáncamos superiores integrados probados a tracción para izado'
    ]
  },

  // --- REACTORES (7 items) ---
  {
    id: 16,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: 'labi 1433',
    title: 'Reactor Piloto de Laboratorio Labi-1433',
    desc: 'Reactor piloto compacto, con camisa térmica y tapa desmontable cepillada para pequeñas dosificaciones y pruebas químicas.',
    material: 'Acero Inoxidable AISI 316L Electropulido',
    sector: 'Farmacia / Síntesis en Miniatura',
    filename: 'labi 1433.png',
    specs: [
      'Capacidad nominal: 50 Litros',
      'Camisa de calefacción por circulación de aceite térmico a +180°C',
      'Sistema de agitación de áncora especial con rascadores modulares de teflón',
      'Sello mecánico coaxial con depósito de lubricación fluido estéril',
      'Acabado ultra-fino interno espejo Ra < 0.3 µm sanitariamente óptimo'
    ]
  },
  {
    id: 17,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1564',
    title: 'Reactor de Proceso Químico Completo Ref. 1564',
    desc: 'Reactor de reacción e hidrólisis dotado de serpentín exterior tipo media caña soldada para transferencia térmica severa.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Fina / Resinas',
    filename: '1564.png',
    specs: [
      'Capacidad nominal: 3.500 Litros',
      'Media caña de acero inoxidable de calefacción dividida en 3 zonas independientes',
      'Aislamiento de lana de roca de alta protección calorifugada mediante chapa soldada',
      'Agitación principal por turbina de palas inclinadas de alto par motriz',
      'Sello mecánico doble equilibrado que admite presiones de vacío a +6 bar'
    ]
  },
  {
    id: 18,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1709 D',
    title: 'Reactor Mezclador Cosmético con Camisa Ref. 1709-D',
    desc: 'Reactor de homogeneización rápida para elaboración de bases cosméticas, pomadas, cremas de alta viscosidad.',
    material: 'Acero Inoxidable Sanitario AISI 316L / AISI 304',
    sector: 'Cosmética e Higiene de Proceso',
    filename: '1709 D.png',
    specs: [
      'Capacidad nominal: 2.200 Litros',
      'Calentamiento camisa por inyección directa de vapor saturado a 3 bar',
      'Agitación coaxial sincronizada: áncora periférica y dispersor superior ultra-rápido',
      'Rociadores CIP en tapa superior y válvula de fondo de bola de vaciado higiénico',
      'Acabados Ra < 0.4 µm con pasivación química y videofibroscopia interna'
    ]
  },
  {
    id: 19,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1741 b',
    title: 'Reactor de Vacío y Destilación Ref. 1741-B',
    desc: 'Equipo especializado para destilación química a baja presión con camisa de refrigeración y condensación directa.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Industrial / Farmacia',
    filename: '1741 b.png',
    specs: [
      'Capacidad nominal: 1.800 Litros',
      'Presión de diseño: Vacío total (-1 bar) a +4 bar de presión',
      'Haz de condensador de reflujo integrado en acoplamiento superior',
      'Agitador de tipo hélice doble flujo y motorreductor ATEX de seguridad',
      'Trazabilidad total de chapas bajo ensayos destructivos e inoxidabilidad'
    ]
  },
  {
    id: 20,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1918',
    title: 'Reactor de Polimerización y Alta Viscosidad Ref. 1918',
    desc: 'Reactor de mezcla robusto provisto de motorreductor sobredimensionado y agitador de áncora cizallante.',
    material: 'Aleación de Níquel / Hastelloy C22',
    sector: 'Química Ácida / Polímeros',
    filename: '1918.png',
    specs: [
      'Capacidad nominal: 4.500 Litros',
      'Fabricado íntegramente en Hastelloy para protección contra reactivos altamente ácidos',
      'Agitador de áncora reforzado con barras de tracción macizas',
      'Camisa térmica de enfriamiento rápido accionada por agua glicolada',
      'Cartucho de estanqueidad de sello mecánico presurizado mediante nitrógeno barrier'
    ]
  },
  {
    id: 21,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1961',
    title: 'Reactor Hidrogenador de Presión Ref. 1961',
    desc: 'Equipo hermético reforzado para reacciones químicas catalizadas que operan a presiones sumamente elevadas.',
    material: 'Acero Inoxidable AISI 316L de espesor especial superior',
    sector: 'Química Fina / Catalizadores',
    filename: '1961.png',
    specs: [
      'Capacidad nominal: 1.200 Litros',
      'Presión máxima de servicio de cuerpo interno: 16 bar',
      'Temperatura admisible de operación: +220°C',
      'Agitador tipo Hollow-Shaft con eje hueco inductor de gas de alta disolución',
      'Dossier oficial visado de ensayos no destructivos por OCA de control técnico'
    ]
  },
  {
    id: 22,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '2243',
    title: 'Reactor Farmacéutico Sanitario Ref. 2243',
    desc: 'Recipiente de síntesis estéril biotecnológica, pulido espejo electrolítico optimizado conforme a pautas ASME BPE.',
    material: 'Acero Inoxidable Súper Sanitario AISI 316L ASME BPE',
    sector: 'Medicina Biotecnológica / Inyectables',
    filename: '2243.png',
    specs: [
      'Capacidad nominal: 2.500 Litros',
      'Acabado de electropulido interno Ra de alta pureza estéril < 0.3 µm',
      'Camisa serpentín exterior soldada por haz de plasma por computador',
      'Mirilla de gran sección dotada de luz led IP67 refrigerada estanca',
      'Sistema de muestreo en continuo de baja retención de gota higiénica'
    ]
  },

  // --- CALDERERIA (8 items) ---
  {
    id: 23,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '1680 F',
    title: 'Colector Colector Sanitario Ref. 1680-F',
    desc: 'Colector de distribución de tuberías sanitarias finas con soldaduras orbitales con purga de argón en lazo cerrado.',
    material: 'Acero Inoxidable AISI 316L ASME BPE',
    sector: 'Laboratorio de Fluidos / Sanitario',
    filename: '1680 F.png',
    specs: [
      'Unión soldada por robot orbital con control de gas formier inerte interno',
      'Trazabilidad total de manguitos por coladas de acero grabadas con láser',
      'Inspección al 100% por videofibroscopia endoscópica grabada en soporte físico',
      'Pendientes autodrenantes que garantizan la nula formación de biofilms en lazo',
      'Conexiones tipo racor clamp higiénico de gran tolerancia'
    ]
  },
  {
    id: 24,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '1743',
    title: 'Tolva de Alimentación de Polvos Ref. 1743',
    desc: 'Tolva asimétrica de carga con vibrador para alimentación dosificada de pigmentos y aditivos a depósitos de mezcla.',
    material: 'Acero Inoxidable AISI 304 / AISI 316',
    sector: 'Alimentación / Fabricación de Pintura',
    filename: '1743.png',
    specs: [
      'Capacidad volumétrica: 2.200 Litros',
      'Diseño geométrico asimétrico que previene la formación de arcos de polvo',
      'Bancada con pletina angular estructural sobredimensionada para vibración',
      'Válvula de mariposa con actuador neumático de ajuste rápido',
      'Acabado exterior chorreado con chorro de microesferas de vidrio'
    ]
  },
  {
    id: 25,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '1749',
    title: 'Colector Integral de Válvulas Neumáticas Ref. 1749',
    desc: 'Batería de conducción montada sobre skid para la conmutación y direccionamiento de flujos de proceso y CIP.',
    material: 'Acero Inoxidable AISI 316L (Tubería) / AISI 304 (Chasis)',
    sector: 'Farmacia / Automatización de Planta',
    filename: '1749.png',
    specs: [
      'Bancada soporte antivibratoria soldada por TIG',
      'Secciones de tuberías de paso mecanizadas y acopladas mediante clapetas',
      'Prueba hidrostática de estanqueidad a 10 bar de presión',
      'Trazabilidad de soldaduras en libro con especificación de soldador WPS',
      'Colectores higiénicos exentos de recovecos sanitarios'
    ]
  },
  {
    id: 26,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '1937',
    title: 'Filtro Silenciador de Aspiración Ref. 1937',
    desc: 'Carcasa de filtro industrial diseñada para albergar filtros de mangas estancos de retención en seco con tapa manual abatible.',
    material: 'Acero Inoxidable AISI 304',
    sector: 'Filtración y Ventilación Industrial',
    filename: '1937.png',
    specs: [
      'Diámetro del depósito: 1.050 mm',
      'Apertura superior rápida tipo bisagra equilibrada por contrapeso',
      'Estanqueidad interna de paso ensayada por presión positiva de aire',
      'Abrazaderas de apriete manual basculantes tipo swing-bolts',
      'Chorreado de arena mate exterior resistente y cepillado integral'
    ]
  },
  {
    id: 27,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '2149',
    title: 'Conducto de Gases Ácidos Clorados Ref. 2149',
    desc: 'Conducto de evacuación de gran formato para vapores muy corrosivos, soldado herméticamente con aleación de alta pureza.',
    material: 'Acero Inoxidable Súper Austenítico AISI 904L',
    sector: 'Química Hidrometalúrgica / Residuos',
    filename: '2149.png',
    specs: [
      'Diámetro nominal de conducción: 550 mm con bridas en extremos',
      'Alta concentración en Níquel y Molibdeno contra el ataque por cloro',
      'Bridados torneados para asiento plano perfecto de juntas de teflón',
      'Ensayos no destructivos por líquidos penetrantes coloreados en cordones',
      'Puntales de soporte soldados soldados de fijación rápida'
    ]
  },
  {
    id: 28,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '2195',
    title: 'Bancada Estructural Autoportante Ref. 2195',
    desc: 'Estructura robusta de chasis inoxidable cepillada que sirve de soporte rígido a reactores y bombas motorizadas.',
    material: 'Acero Inoxidable de Espesores Perfilados AISI 304',
    sector: 'Estructuras de Planta / Ingeniería',
    filename: '2195.png',
    specs: [
      'Estructura calculada contra cargas mecánicas intensas y torsión de motor',
      'Cepillado final satinado con grano abrasivo 240 fino uniforme de perfiles',
      'Soportes roscados de nivelación telescópicos con goma de amortiguación',
      'Puntos y orejetas reforzados para agarre cómodo de grúa puente de izado',
      'Toda soldadura decantada por ácido de inmersión total'
    ]
  },
  {
    id: 29,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '2198',
    title: 'Cúpula Torisférica Embutida Ref. 2198',
    desc: 'Casquete embutido de caldera de gran precisión para cierre superior de silos agroalimentarios higiénicos.',
    material: 'Acero Inoxidable AISI 316',
    sector: 'Silos / Alimentaria Pesada',
    filename: '2198.png',
    specs: [
      'Diámetro del fondo: 2.100 mm embutido mediante prensa hidráulica',
      'Espesor calibrado de lámina y corona torneada de alta repetibilidad',
      'Soldadura en atmósfera protegida por robot de cordón rectilíneo',
      'Pulido exterior cepillado estético uniforme en virola circunferencial',
      'Libre de rebabas metálicas con pasivación electroquímica estéril'
    ]
  },
  {
    id: 30,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '2228',
    title: 'Sifón de Alta Sección y Descarga Corrosiva Ref. 2228',
    desc: 'Dispositivos sifónicos de purga de aguas y efluentes industriales cargados de solventes calientes.',
    material: 'Acero Inoxidable Reforzado AISI 316L',
    sector: 'Tratamiento Químico / Efluentes',
    filename: '2228.png',
    specs: [
      'Manguitos curvados sin arrugas con soldadura de cordón plano interna',
      'Mirilla circular con cristal borosilicato empernado contra fugas directas',
      'Juntas de fluoroelastómero Viton resistentes a disolventes orgánicos',
      'Apto para ciclos térmicos de fluidos desde +10°C a +130°C constantes',
      'Chorreado estético de acabado industrial de alta durabilidad química'
    ]
  }
];

const DIRECTORIES_INFO = {
  reactores: {
    title: 'Reactores de Proceso Química y Farmacia',
    folder: '/public/proyectos/reactores/',
    desc: 'Reactores e hidrolizadores diseñados para presiones elevadas y vacío, equipados con camisas térmicas, serpentines de media caña y sistemas de agitación coaxial avanzados.',
    features: ['Hasta 5.000 Litros de capacidad', 'Homologación de vacío y presión certificada', 'Sistemas de agitación coaxial / áncora a medida', 'Acabados sanitarios finos con electropulido ASME BPE']
  },
  depositos: {
    title: 'Depósitos y Tanques de Almacenamiento',
    folder: '/public/proyectos/depositos/',
    desc: 'Tanques de almacenamiento, mezcla, dosificación y clasificación atmosféricos o presurizados. Modelos calorifugados e isotérmicos estancos soldados bajo proceso TIG.',
    features: ['Estructuras monocubas o encamisadas', 'Aislamientos de lana de roca con revestimiento soldado', 'Bolas de limpieza CIP integradas multidireccionales', 'Células de carga de gran sensibilidad para dosificación']
  },
  intercambiadores: {
    title: 'Intercambiadores de Calor Multitubulares',
    folder: '/public/proyectos/intercambiadores/',
    desc: 'Intercambiadores térmicos de haz tubular o de doble placa tubular (DTS) diseñados para prevenir contaminaciones cruzadas en el calentamiento o condensación.',
    features: ['Haces tubulares mandrinados y soldados', 'Diseñado según códigos ASME Sec VIII y EN-13445', 'Cámaras de fuga visible para seguridad máxima', 'Opción de tubo corrugado para fluidos pesados']
  },
  caldereria: {
    title: 'Calderería Técnica e Ingeniería Varia',
    folder: '/public/proyectos/caldereria/',
    desc: 'Elementos auxiliares de alta precisión a medida: colectores, tolvas asimétricas, conductos de evacuación de vapores corrosivos y bancadas estructurales autoportantes.',
    features: ['Colectores sanitarios con soldadura orbital', 'Tolvas asimétricas anti-bóveda para polvos', 'Casquetes embutidos mediante prensa hidráulica', 'Estructuras robustas de chapa inoxidable cepillada']
  }
};

const PROJECTS_DATABASE: Project[] = UNUSED_PROJECTS_DATABASE;

const DUPLICATE_PROJECTS_DATABASE_UNUSED: Project[] = [
  // --- DEPOSITOS (2 items - no photo uploaded, using CAD schematic) ---
  {
    id: 1,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: 'TEXAPEL',
    title: 'Tanque de Proceso Químico Texapel',
    desc: 'Depósito pulmón de dosificación y mezcla controlada para formulaciones químicas complejas y resinas.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Industrial / Suministros',
    filename: '', // No photo, fallback to CAD SVG
    specs: [
      'Capacidad útil: 8.500 Litros',
      'Fondo cónico inclinado autodrenante para purga completa de resinas',
      'Agitación superior de hélice marina de doble par motor',
      'Pulido mecánico interno Ra < 0.6 µm y decapado integral',
      'Visor acristalado de seguridad para control ocular directo'
    ]
  },
  {
    id: 2,
    category: 'depositos',
    categoryLabel: 'Depósitos / Tanques',
    ref: '1737',
    title: 'Tanque Pulmón Sanitario Calorifugado',
    desc: 'Almacenamiento térmico para fluidos alimentarios estériles o cosméticos con camisa de agua caliente y lana mineral.',
    material: 'Acero Inoxidable Sanitario AISI 316L',
    sector: 'Cosmética e Higiene / Lácteo',
    filename: '',
    specs: [
      'Capacidad útil: 11.000 Litros',
      'Aislamiento de lana de roca de 80 mm de espesor soldado a chapa exterior',
      'Camisa de serpentín interior de circulación rápida de agua a 85°C',
      'Bolas de limpieza CIP integradas multidireccionales',
      'Tratamiento de juntas sanitarias según normativas FDA'
    ]
  },

  // --- INTERCAMBIADORES (2 items - no photo uploaded, using CAD schematic) ---
  {
    id: 3,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2010 B',
    title: 'Intercambiador Multitubular Compacto',
    desc: 'Intercambiador tubular soldado para condensación de vapores orgánicos y refrigeración de fluidos corrosivos.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Industrial / Petróleo',
    filename: '',
    specs: [
      'Superficie de intercambio térmico: 16 m²',
      'Diseñado según código ASME Sección VIII División 1',
      'Haz de tubos de pared delgada mandrinados térmicamente',
      'Carcasa exterior protegida con imprimación de alta resistencia térmica',
      'Control estanqueidad mediante prueba neumática por helio'
    ]
  },
  {
    id: 4,
    category: 'intercambiadores',
    categoryLabel: 'Intercambiadores',
    ref: '2090 B',
    title: 'Pasteurizador Multitubular Sanitario',
    desc: 'Intercambiador de doble placa tubular (DTS) que evita intercontaminaciones accidentales en fluidos alimenticios.',
    material: 'Acero Inoxidable Pulido Sanitario AISI 316L',
    sector: 'Alimentario / Bebidas Sanatarias',
    filename: '',
    specs: [
      'Superficie de intercambio: 25 m²',
      'Exclusivo diseño DTS con cámara de fuga visible de seguridad',
      'Facilidad de autodrenado completo según directivas higiénicas de diseño',
      'Acabado interno electropulido fino Ra < 0.4 µm',
      'Accesorios clamp y juntas aptas para ciclos térmicos intensos'
    ]
  },

  // --- REACTORES (4 items with real attached photos) ---
  {
    id: 5,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: 'Labi-1433',
    title: 'Reactor Piloto de Laboratorio Labi-1433',
    desc: 'Reactor piloto compacto, con camisa térmica y tapa desmontable cepillada para dosificaciones y pruebas químicas.',
    material: 'Acero Inoxidable AISI 316L Electropulido',
    sector: 'Farmacia / Síntesis en Miniatura',
    filename: 'labi 1433.png',
    specs: [
      'Capacidad nominal: 50 Litros',
      'Camisa de calefacción por circulación de aceite térmico a +180°C',
      'Sistema de agitación de áncora especial con rascadores modulares de teflón',
      'Sello mecánico coaxial con depósito de lubricación fluido estéril',
      'Acabado ultra-fino interno espejo Ra < 0.3 µm sanitariamente óptimo'
    ]
  },
  {
    id: 6,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1564',
    title: 'Reactor de Proceso Químico Completo',
    desc: 'Reactor de reacción e hidrólisis dotado de serpentín exterior tipo media caña soldada para transferencia térmica severa.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Fina / Resinas',
    filename: '1564.png',
    specs: [
      'Capacidad nominal: 3.500 Litros',
      'Media caña de acero inoxidable de calefacción dividida en 3 zonas independientes',
      'Aislamiento de lana de roca de alta protección calorifugada mediante chapa soldada',
      'Agitación principal por turbina de palas inclinadas de alto par motriz',
      'Sello mecánico doble equilibrado que admite presiones de vacío'
    ]
  },
  {
    id: 7,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1709 D',
    title: 'Reactor Mezclador Cosmético con Camisa',
    desc: 'Reactor de homogeneización rápida para elaboración de bases cosméticas, pomadas y cremas de alta viscosidad.',
    material: 'Acero Inoxidable Sanitario AISI 316L',
    sector: 'Cosmética e Higiene de Proceso',
    filename: '1709 D.png',
    specs: [
      'Capacidad nominal: 2.200 Litros',
      'Calentamiento camisa por inyección directa de vapor saturado a 3 bar',
      'Agitación coaxial sincronizada: áncora periférica y dispersor superior ultra-rápido',
      'Rociadores CIP en tapa superior y válvula de fondo de bola de vaciado higiénico',
      'Acabados Ra < 0.4 µm con pasivación química'
    ]
  },
  {
    id: 8,
    category: 'reactores',
    categoryLabel: 'Reactores',
    ref: '1741 B',
    title: 'Reactor de Vacío y Destilación',
    desc: 'Equipo especializado para destilación química a baja presión con camisa de refrigeración y condensación directa.',
    material: 'Acero Inoxidable AISI 316L',
    sector: 'Química Industrial / Farmacia',
    filename: '1741 b.png',
    specs: [
      'Capacidad nominal: 1.800 Litros',
      'Presión de diseño: Vacío total (-1 bar) a +4 bar de presión',
      'Haz de condensador de reflujo integrado en acoplamiento superior',
      'Agitador de tipo hélice doble flujo y motorreductor ATEX de seguridad',
      'Trazabilidad total de chapas bajo ensayos destructivos'
    ]
  },

  // --- CALDERERIA (2 items with real attached photos) ---
  {
    id: 9,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '2198',
    title: 'Cúpula Torisférica Embutida',
    desc: 'Casquete embutido de caldera de gran precisión para cierre superior de silos agroalimentarios higiénicos.',
    material: 'Acero Inoxidable AISI 316',
    sector: 'Silos / Alimentaria Pesada',
    filename: '2198.png',
    specs: [
      'Diámetro del fondo: 2.100 mm embutido mediante prensa hidráulica',
      'Espesor calibrado de lámina y corona torneada de alta repetibilidad',
      'Soldadura en atmósfera protegida por robot de cordón rectilíneo',
      'Pulido exterior cepillado estético uniforme en virola',
      'Libre de rebabas metálicas con pasivación electroquímica estéril'
    ]
  },
  {
    id: 10,
    category: 'caldereria',
    categoryLabel: 'Calderería Varia',
    ref: '2228',
    title: 'Sifón de Alta Sección y Descarga Corrosiva',
    desc: 'Dispostivio sifónico de purga de aguas y efluentes industriales cargados de solventes calientes.',
    material: 'Acero Inoxidable Reforzado AISI 316L',
    sector: 'Tratamiento Químico / Efluentes',
    filename: '2228.png',
    specs: [
      'Manguitos curvados sin arrugas con soldadura de cordón plano interna',
      'Mirilla circular con cristal borosilicato empernado contra fugas directas',
      'Juntas de fluoroelastómero Viton de alta durabilidad térmica',
      'Apto para ciclos térmicos de fluidos de +10°C a +130°C constantes',
      'Chorreado estético de acabado industrial de alta durabilidad'
    ]
  }
];

const EXISTING_PHOTOS = [
  '1593.png',
  '1737.png',
  '1952.png',
  '2153.png',
  '2157 b 1.png',
  '2178 d.png',
  '2338 368 369 370.png',
  'texapel.png',
  '2010 b.png',
  '2084.png',
  '2090 b.png',
  '2157 c.png',
  '2157 d.png',
  '2317.png',
  'foto 1834.png',
  '1564.png',
  '1709 d.png',
  '1741 b.png',
  '1918.png',
  '1961.png',
  '2243.png',
  'labi 1433.png',
  '1680 f.png',
  '1743.png',
  '1749.png',
  '1937.png',
  '2149.png',
  '2195.png',
  '2198.png',
  '2228.png'
];

function BlueprintPlaceholder({ category }: { category: string }) {
  // Select technical SVG drawing based on category of metal fabrications
  const renderSvg = () => {
    switch (category) {
      case 'depositos':
        return (
          <svg className="w-16 h-16 text-sky-400/60 mb-2" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="30" y="25" width="40" height="60" rx="2" strokeOpacity="0.8" />
            <path d="M30,25 C30,15 70,15 70,25" strokeOpacity="0.8" />
            <path d="M30,85 L50,100 L70,85" strokeOpacity="0.8" />
            <path d="M33,85 L30,110 M67,85 L70,110" strokeWidth="1.5" strokeOpacity="0.8" />
            <rect x="46" y="10" width="8" height="5" strokeOpacity="0.8" />
            <rect x="45" y="100" width="10" height="3" strokeOpacity="0.8" />
            <path d="M22,15 V105 M22,15 H28 M22,105 H28" stroke="currentColor" strokeOpacity="0.25" strokeDasharray="1,2" />
            <path d="M80,25 V85 M80,25 H75 M80,85 H75" stroke="currentColor" strokeOpacity="0.25" />
            <text x="50" y="55" fill="currentColor" fillOpacity="0.4" fontSize="5.5" fontFamily="monospace" textAnchor="middle">Ø 2100 mm</text>
            <text x="88" y="58" fill="currentColor" fillOpacity="0.4" fontSize="4.5" fontFamily="monospace" textAnchor="middle" transform="rotate(90 88 58)">H=3200 (mm)</text>
          </svg>
        );
      case 'reactores':
        return (
          <svg className="w-16 h-16 text-teal-400/60 mb-2" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="30" y="30" width="40" height="55" rx="3" strokeOpacity="0.8" />
            <path d="M30,30 C30,18 70,18 70,30" strokeOpacity="0.8" />
            <path d="M30,85 C30,95 70,95 70,85" strokeOpacity="0.8" />
            <rect x="44" y="5" width="12" height="10" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.8" />
            <line x1="50" y1="15" x2="50" y2="82" strokeWidth="1.5" strokeOpacity="0.8" />
            <path d="M35,65 H65 M35,61 V69 M65,61 V69" strokeWidth="1.2" strokeOpacity="0.8" />
            <path d="M27,40 C27,42 30,42 30,40 M27,48 C27,50 30,50 30,48 M27,56 C27,58 30,58 30,56" strokeWidth="0.8" strokeOpacity="0.6" />
            <path d="M73,40 C73,42 70,42 70,40 M73,48 C73,50 70,50 70,48 M73,56 C73,58 70,58 70,56" strokeWidth="0.8" strokeOpacity="0.6" />
            <text x="50" y="48" fill="currentColor" fillOpacity="0.4" fontSize="5.5" fontFamily="monospace" textAnchor="middle">ANCLA / 45 RPM</text>
            <text x="50" y="103" fill="currentColor" fillOpacity="0.4" fontSize="4.5" fontFamily="monospace" textAnchor="middle">MEDIA CAÑA TÉRMICA</text>
          </svg>
        );
      case 'intercambiadores':
        return (
          <svg className="w-16 h-16 text-sky-400/60 mb-2" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="15" y1="50" x2="105" y2="50" strokeDasharray="3,3" strokeOpacity="0.15" />
            <rect x="25" y="32" width="70" height="36" rx="1" strokeOpacity="0.8" />
            <path d="M25,32 L15,32 C12,32 12,68 15,68 L25,68 Z" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.8" />
            <path d="M95,32 L102,32 C105,32 105,68 102,68 L95,68 Z" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.8" />
            <line x1="25" y1="38" x2="95" y2="38" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="25" y1="44" x2="95" y2="44" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="25" y1="50" x2="95" y2="50" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="25" y1="56" x2="95" y2="56" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="25" y1="62" x2="95" y2="62" strokeWidth="0.8" strokeOpacity="0.6" />
            <rect x="35" y="24" width="10" height="8" strokeOpacity="0.8" />
            <line x1="33" y1="24" x2="47" y2="24" strokeWidth="1.5" strokeOpacity="0.8" />
            <rect x="75" y="68" width="10" height="8" strokeOpacity="0.8" />
            <line x1="73" y1="76" x2="87" y2="76" strokeWidth="1.5" strokeOpacity="0.8" />
            <text x="60" y="20" fill="currentColor" fillOpacity="0.4" fontSize="4.5" fontFamily="monospace" textAnchor="middle">INLET / OUTLET</text>
            <text x="60" y="86" fill="currentColor" fillOpacity="0.4" fontSize="4.5" fontFamily="monospace" textAnchor="middle">HAZ TEMA MULTITUBULAR</text>
          </svg>
        );
      case 'caldereria':
      default:
        return (
          <svg className="w-16 h-16 text-yellow-500/50 mb-2" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M20,15 H80 L70,45 H30 Z" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.8" />
            <rect x="40" y="45" width="20" height="40" strokeOpacity="0.8" />
            <path d="M40,85 C40,105 15,105 15,105" strokeOpacity="0.8" />
            <path d="M60,85 C60,115 20,115 15,115" strokeDasharray="2,2" strokeOpacity="0.5" />
            <line x1="30" y1="45" x2="70" y2="45" strokeWidth="1.2" strokeDasharray="1,1" strokeOpacity="0.8" />
            <line x1="40" y1="85" x2="60" y2="85" strokeWidth="1.2" strokeDasharray="1,1" strokeOpacity="0.8" />
            <path d="M85,25 L92,25 V75 L85,75" stroke="currentColor" strokeOpacity="0.25" />
            <text x="96" y="52" fill="currentColor" fillOpacity="0.4" fontSize="4.5" fontFamily="monospace" textAnchor="middle" transform="rotate(90 96 52)">PIPING EN-13480</text>
            <text x="50" y="65" fill="currentColor" fillOpacity="0.4" fontSize="4" fontFamily="monospace" textAnchor="middle">PIEZA ASIMÉTRICA</text>
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden" style={{ minHeight: '235px' }}>
      {/* CAD Grid Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-sky-500/10 pointer-events-none"></div>
      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-sky-500/10 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {renderSvg()}
        <span className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-brand-accent mb-1 animate-pulse">
          Plano Técnico CAD
        </span>
        <p className="text-[10px] text-white/50 max-w-[190px] leading-tight font-mono">
          Ref. disponible en dossier de cotización formal.
        </p>
      </div>
    </div>
  );
}

interface SafeProjectImageProps {
  category: string;
  filename: string;
  alt: string;
}

function SafeProjectImage({ category, filename, alt }: SafeProjectImageProps) {
  if (!filename || !EXISTING_PHOTOS.includes(filename.toLowerCase())) {
    return <BlueprintPlaceholder category={category} />;
  }

  // Purely load local files with exact file structure on disk
  const src = `/proyectos/${category}/${filename}`;

  return (
    <img
      src={encodeURI(src)}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
      referrerPolicy="no-referrer"
    />
  );
}

export function Proyectos() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [photoFilter, setPhotoFilter] = useState<'all' | 'real' | 'cad'>('all');

  // Keypress dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const foldersOrder: Array<'reactores' | 'depositos' | 'intercambiadores' | 'caldereria'> = [
    'reactores',
    'depositos',
    'intercambiadores',
    'caldereria'
  ];

  // Quick anchor scroll helper
  const scrollToFolder = (id: string) => {
    const element = document.getElementById(`folder-sec-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Compute overall match count
  const getFilteredListForCounting = () => {
    return PROJECTS_DATABASE.filter(project => {
      const hasPhoto = project.filename && EXISTING_PHOTOS.includes(project.filename.toLowerCase());
      if (photoFilter === 'real' && !hasPhoto) return false;
      if (photoFilter === 'cad' && hasPhoto) return false;

      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        project.title.toLowerCase().includes(query) ||
        project.ref.toLowerCase().includes(query) ||
        project.material.toLowerCase().includes(query) ||
        project.desc.toLowerCase().includes(query) ||
        project.sector.toLowerCase().includes(query)
      );
    });
  };

  const visibleCount = getFilteredListForCounting().length;

  return (
    <div className="flex flex-col pt-20">
      {/* Title Hero */}
      <section className="bg-brand-dark py-14 relative overflow-hidden" id="galeria-equipos_title_sec">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="text-brand-accent font-bold uppercase tracking-[0.25em] text-xs mb-2 block">
            GALERÍA REAL DE CALDERERÍA INDUSTRIAL
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-tight">
            Nuestros Equipos por Carpetas
          </h1>
          <p className="text-sm md:text-base text-white/75 max-w-2xl mx-auto font-light leading-relaxed">
            Catálogo directo de nuestros proyectos reales industriales. Visualiza las fabricaciones asociadas a cada sección del taller con plano CAD o fotos reales.
          </p>

          {/* Premium Filter Controls Board */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xs p-6 rounded-sm mt-8 max-w-4xl mx-auto text-left shadow-xl" id="interactive-filter-console">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              {/* Search Box */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-accent mb-2">
                  Búsqueda Rápida
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={14} className="text-white/40" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Escribe referencia, material (316, 304)..."
                    className="block w-full pl-9 pr-8 py-2.5 bg-brand-dark/50 border border-white/10 rounded-sm text-xs text-white placeholder-white/35 focus:outline-hidden focus:border-brand-accent transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-white/40 hover:text-white"
                      title="Limpiar búsqueda"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Gallery Filter Switch */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-accent mb-2">
                  Filtrar Documentos por Fotografía
                </label>
                <div className="grid grid-cols-3 gap-1 bg-brand-dark/50 border border-white/10 p-1 rounded-sm">
                  <button
                    onClick={() => setPhotoFilter('all')}
                    className={`py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs transition-all ${
                      photoFilter === 'all'
                        ? 'bg-brand-accent text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Todos (30)
                  </button>
                  <button
                    onClick={() => setPhotoFilter('real')}
                    className={`py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs transition-all ${
                      photoFilter === 'real'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Con Foto (30)
                  </button>
                  <button
                    onClick={() => setPhotoFilter('cad')}
                    className={`py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-xs transition-all ${
                      photoFilter === 'cad'
                        ? 'bg-sky-655/70 text-white shadow-xs bg-sky-600'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Plano CAD (0)
                  </button>
                </div>
              </div>
            </div>

            {/* Subcategories Shortcuts & Counter */}
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {foldersOrder.map((folderId) => {
                  const itemsInFolder = PROJECTS_DATABASE.filter(p => p.category === folderId);
                  const itemsMatching = itemsInFolder.filter(project => {
                    const hasPhoto = project.filename && EXISTING_PHOTOS.includes(project.filename.toLowerCase());
                    if (photoFilter === 'real' && !hasPhoto) return false;
                    if (photoFilter === 'cad' && hasPhoto) return false;
                    if (!searchQuery) return true;
                    const query = searchQuery.toLowerCase();
                    return project.title.toLowerCase().includes(query) ||
                      project.ref.toLowerCase().includes(query) ||
                      project.material.toLowerCase().includes(query) ||
                      project.desc.toLowerCase().includes(query);
                  }).length;

                  // Disabled button style if there are zero hits
                  const isDisabled = itemsMatching === 0;

                  return (
                    <button
                      key={folderId}
                      onClick={() => !isDisabled && scrollToFolder(folderId)}
                      disabled={isDisabled}
                      className={`px-3 py-1.5 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        isDisabled 
                          ? 'bg-brand-dark/20 text-white/20 border border-transparent cursor-not-allowed'
                          : 'bg-brand-dark hover:bg-white/10 text-white border border-white/5'
                      }`}
                    >
                      <span>{folderId.toUpperCase()}</span>
                      <span className="bg-brand-accent/20 text-brand-accent px-1 rounded-xs font-sans text-[9px] font-extrabold">
                        {itemsMatching}
                      </span>
                    </button>
                  );
                })}
              </div>

              <span className="text-[10px] font-mono text-white/50">
                Mostrando <strong className="text-brand-accent">{visibleCount}</strong> de 30 fabricaciones industriales
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <section className="py-12 bg-gray-50" id="showcase_main_grid">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-16">

            {visibleCount === 0 && (
              <div className="text-center py-24 bg-white border border-gray-200 rounded-sm shadow-xs max-w-xl mx-auto">
                <Database className="text-brand-steel/40 mx-auto mb-4" size={40} />
                <h3 className="text-sm font-display font-extrabold text-brand-dark uppercase tracking-widest mb-1.5">
                  Sin Resultados
                </h3>
                <p className="text-xs text-brand-steel max-w-sm mx-auto leading-relaxed mb-6 px-4">
                  No se han encontrado registros en nuestro dossier que coincidan con los filtros aplicados en este momento.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setPhotoFilter('all'); }}
                  className="bg-brand-dark hover:bg-brand-accent text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Restablecer Buscador
                </button>
              </div>
            )}

            {/* Folder list container */}
            {foldersOrder.map((folderId) => {
              const info = DIRECTORIES_INFO[folderId];
              
              // Filter database projects that belong to this specific directory and match query + photo type
              const filteredList = PROJECTS_DATABASE.filter(project => {
                if (project.category !== folderId) return false;

                // Photo status
                const hasPhoto = project.filename && EXISTING_PHOTOS.includes(project.filename.toLowerCase());
                if (photoFilter === 'real' && !hasPhoto) return false;
                if (photoFilter === 'cad' && hasPhoto) return false;

                if (!searchQuery) return true;
                const query = searchQuery.toLowerCase();
                return project.title.toLowerCase().includes(query) ||
                  project.ref.toLowerCase().includes(query) ||
                  project.material.toLowerCase().includes(query) ||
                  project.desc.toLowerCase().includes(query) ||
                  project.sector.toLowerCase().includes(query);
              });

              // If a folder has 0 matching items, we hide the folder to keep the page short and compact
              if (filteredList.length === 0) return null;

              return (
                <div 
                  key={folderId} 
                  id={`folder-sec-${folderId}`}
                  className="bg-white border border-gray-200/95 rounded-sm shadow-sm overflow-hidden scroll-mt-24 transition-all hover:shadow-md"
                >
                  {/* Folder Section Header */}
                  <div className="bg-brand-dark p-6 md:p-8 text-white relative">
                    <div className="absolute right-6 top-6 opacity-5 pointer-events-none select-none">
                      <span className="font-mono text-9xl uppercase font-black">{folderId[0]}</span>
                    </div>

                    <div className="max-w-3xl">
                      <h2 className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-tight mb-3">
                        {info.title}
                      </h2>
                      
                      <p className="text-xs md:text-sm text-white/75 leading-relaxed font-light mb-5">
                        {info.desc}
                      </p>

                      {/* Folder key metrics list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-1">
                        {info.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-white/90">
                            <CheckCircle2 size={13} className="text-brand-accent shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Folder Items Grid */}
                  <div className="p-6 md:p-8 bg-gray-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredList.map((project) => {
                        const hasRealPhoto = project.filename && EXISTING_PHOTOS.includes(project.filename.toLowerCase());

                        return (
                          <div
                            key={project.id}
                            className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:border-brand-accent transition-all group shadow-xs"
                            id={`project_card_${project.id}`}
                          >
                            {/* Visual Asset Container */}
                            <div className="relative aspect-[4/3] bg-brand-dark overflow-hidden select-none">
                              <SafeProjectImage
                                category={project.category}
                                filename={project.filename}
                                alt={project.title}
                              />
                              <div className="absolute top-3 left-3 bg-brand-dark/95 backdrop-blur-xs text-brand-accent text-[8.5px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm border border-brand-accent/20">
                                Ref. {project.ref}
                              </div>
                              {hasRealPhoto && (
                                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-xs">
                                  Foto Taller
                                </div>
                              )}
                            </div>

                            {/* Metadata list */}
                            <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                              <div className="space-y-2">
                                <span className="text-[9px] font-mono font-semibold text-brand-accent uppercase tracking-widest block">
                                  {project.sector}
                                </span>
                                <h3 className="text-sm font-display font-bold text-brand-dark uppercase tracking-tight group-hover:text-brand-accent transition-colors line-clamp-1">
                                  {project.title}
                                </h3>
                                <p className="text-xs text-brand-steel leading-relaxed line-clamp-2 font-light">
                                  {project.desc}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-[10px] text-brand-steel font-medium">
                                  Material: <span className="font-bold text-brand-dark truncate max-w-[120px] inline-block align-bottom">{project.material}</span>
                                </span>
                                
                                <button
                                  onClick={() => setSelectedProject(project)}
                                  className="inline-flex items-center gap-1 text-[10.5px] font-display font-bold uppercase tracking-widest text-brand-dark hover:text-brand-accent transition-all group/btn"
                                >
                                  <span>Ficha</span>
                                  <Eye size={11} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Compact Interactive search filter on footer banner */}
      <section className="bg-brand-dark text-white py-14 relative overflow-hidden" id="projects_footer_info">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <Wrench className="text-brand-accent mx-auto mb-3" size={32} />
          <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4 uppercase tracking-wider">
            ¿Buscas una fabricación a medida?
          </h2>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-light mb-8 max-w-xl mx-auto">
            Ofrecemos trazabilidad total de materiales con certificado de coladas 3.1, homologación de procesos de soldadura por EN o ASME y dossier de calidad oficial.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contacto" className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all">
              Presupuestos y Planos Técnicos
            </Link>
            <Link to="/empresa" className="border border-white/20 hover:bg-white/10 text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all">
              Acreditaciones de Soldadura
            </Link>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL DETAILS SHEET MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            id="datasheet_modal_wrapper"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/85 backdrop-blur-xs"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white border-t-4 border-brand-accent rounded-sm shadow-2xl relative w-full max-w-lg overflow-hidden z-10 flex flex-col max-h-[85vh]"
              id="datasheet_modal_interior"
            >
              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gray-50/70">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[9px] font-bold uppercase bg-brand-dark text-brand-accent px-2 py-0.5 rounded-sm">
                      REF #{selectedProject.ref}
                    </span>
                    <span className="text-[9px] font-bold text-brand-steel uppercase tracking-wider">
                      • {selectedProject.categoryLabel}
                    </span>
                  </div>
                  <h2 className="text-base font-display font-black text-brand-dark uppercase tracking-tight">
                    Ficha Técnica de Homologación
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 border border-gray-200 hover:border-brand-dark text-brand-steel hover:text-brand-dark rounded-xs transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scroll Content */}
              <div className="p-5 overflow-y-auto space-y-5 text-left">
                {/* Visual slot */}
                <div className="bg-brand-dark aspect-[16/10] rounded-sm overflow-hidden relative shadow-sm max-w-md mx-auto">
                  <SafeProjectImage
                    category={selectedProject.category}
                    filename={selectedProject.filename}
                    alt={selectedProject.title}
                  />
                </div>

                {/* Details layout */}
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-brand-dark uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-brand-steel leading-relaxed">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-100 text-xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider mb-0.5">ALEACIÓN</span>
                    <span className="font-bold text-brand-dark">{selectedProject.material}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gray-400 block tracking-wider mb-0.5">APLICACIÓN</span>
                    <span className="font-bold text-brand-dark">{selectedProject.sector}</span>
                  </div>
                </div>

                {/* Technical Bullet List */}
                <div className="bg-gray-50 p-4 rounded-sm border-l-2 border-brand-accent">
                  <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-brand-dark block mb-2.5">
                    Especificaciones Adicionales
                  </span>
                  
                  <ul className="space-y-2.5">
                    {selectedProject.specs.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-brand-dark font-medium">
                        <CheckCircle2 size={13} className="text-brand-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-2.5 items-center justify-between">
                <span className="text-[10px] font-bold text-brand-steel">
                  Código de Plano: <span className="font-mono text-brand-dark select-all">#EQ-{selectedProject.ref.replace(/\s+/g, '-')}</span>
                </span>
                
                <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 sm:flex-initial border border-gray-200 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-sm transition-colors text-brand-steel hover:text-brand-dark"
                  >
                    Cerrar
                  </button>
                  <Link
                    to={`/contacto?ref=${encodeURIComponent(selectedProject.ref)}`}
                    className="flex-1 sm:flex-initial bg-brand-accent hover:bg-brand-dark text-white text-center text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors shadow-sm"
                  >
                    Solicitar Presupuesto
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
