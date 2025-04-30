"use client";

import { useState, useRef, SetStateAction, JSX } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  Ruler,
  Zap,
  Calculator,
  Mountain,
  Shovel,
  Waves,
  X,
  ArrowRight,
  Check,
  Droplets,
  Gauge,
  Layers,
  LandPlot,
  Route,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { cn } from "@/lib/utils";

const serviceCategories = [
  {
    name: "Topografía y Agrimensura",
    services: [
      {
        icon: <MapPin className="h-6 w-6" />,
        title: "Relevamiento Planialtimétrico",
        shortDescription:
          "Mediciones precisas de terreno con tecnología de punta",
        description:
          "Levantamientos topográficos detallados para determinar coordenadas y alturas con precisión milimétrica.",
        details: {
          features: [
            "Equipos Leica TS16 y GPS RTK GS18T",
            "Precisión de ±1cm en levantamientos",
            "Modelos Digitales de Terreno (MDT)",
            "Cartografía digital y sistemas GIS",
            "Nube de puntos con escáner láser",
          ],
          applications: [
            "Loteos urbanos y rurales",
            "Regularización de dominios",
            "Catastro municipal",
            "Relevamientos para obras civiles",
            "Mediciones judiciales",
          ],
          methodology:
            "Trabajamos con estaciones totales robóticas y GPS de doble frecuencia para garantizar máxima precisión en cualquier terreno.",
        },
      },
      {
        icon: <Ruler className="h-6 w-6" />,
        title: "Agrimensura General",
        shortDescription:
          "Delimitación y división de propiedades con exactitud",
        description:
          "Servicios completos de medición, subdivisión y amojonamiento de terrenos.",
        details: {
          features: [
            "Deslinde y amojonamiento",
            "Subdivisión de parcelas",
            "Unificación de dominios",
            "Mediciones judiciales",
            "Relevamientos catastrales",
          ],
          applications: [
            "Divisiones sucesorias",
            "Regularización dominial",
            "Expensas de mensura",
            "Aprobación municipal de parcelas",
            "Informes periciales",
          ],
          methodology:
            "Combinamos tecnología GNSS con metodología tradicional para resultados legalmente válidos y técnicamente precisos.",
        },
      },
      {
        icon: <Gauge className="h-6 w-6" />,
        title: "Nivelación Geométrica",
        shortDescription: "Precisión en medición de desniveles",
        description:
          "Determinación exacta de cotas y alturas para proyectos de ingeniería.",
        details: {
          features: [
            "Nivelación de alta precisión",
            "Control de asentamientos",
            "Monitoreo de deformaciones",
            "Nivelación para obras lineales",
            "Certificación de cotas",
          ],
          applications: [
            "Cimentaciones de edificios",
            "Obras viales y ferroviarias",
            "Puentes y estructuras",
            "Sistemas de drenaje",
            "Control de movimientos de tierra",
          ],
          methodology:
            "Utilizamos niveles digitales Leica DNA con compensadores automáticos para garantizar precisión de ±0.3mm/km.",
        },
      },
    ],
  },
  {
    name: "Ingeniería Civil",
    services: [
      {
        icon: <Building2 className="h-6 w-6" />,
        title: "Desarrollo Integral de Urbanizaciones",
        shortDescription: "Planificación completa de proyectos urbanísticos",
        description:
          "Diseño y ejecución de urbanizaciones desde el concepto inicial hasta la entrega final.",
        details: {
          features: [
            "Diseño de parcelas y espacios comunes",
            "Infraestructura vial y de servicios",
            "Estudios de impacto ambiental",
            "Gestión de permisos municipales",
            "Planificación de etapas",
          ],
          applications: [
            "Barrios cerrados y countries",
            "Urbanizaciones sociales",
            "Parques industriales",
            "Conjuntos habitacionales",
            "Desarrollos turísticos",
          ],
          methodology:
            "Empleamos software Civil 3D y Autodesk InfraWorks para modelado BIM integrado con GIS para planificación urbana inteligente.",
        },
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Replanteo de Obras Especiales",
        shortDescription: "Precisión en ubicación de elementos críticos",
        description:
          "Implementación exacta de proyectos en campo para diversos tipos de obras.",
        details: {
          features: [
            "Líneas de Alta Tensión",
            "Gasoductos y redes de servicio",
            "Obras viales y autopistas",
            "Estructuras civiles complejas",
            "Control geométrico continuo",
          ],
          applications: [
            "Subestaciones eléctricas",
            "Redes de distribución de gas",
            "Autopistas y rutas nacionales",
            "Puentes y pasos a desnivel",
            "Túneles y obras subterráneas",
          ],
          methodology:
            "Sistema de replanteo con estación total robotizada y verificación con GPS RTK para máxima precisión en obras lineales.",
        },
      },
      {
        icon: <Calculator className="h-6 w-6" />,
        title: "Cálculos Estructurales",
        shortDescription: "Análisis y diseño de estructuras seguras",
        description:
          "Ingeniería detallada para garantizar estabilidad y durabilidad de construcciones.",
        details: {
          features: [
            "Análisis de cargas y esfuerzos",
            "Diseño sismo-resistente",
            "Cálculo de cimentaciones",
            "Optimización de materiales",
            "Certificación de proyectos",
          ],
          applications: [
            "Edificios de altura",
            "Naves industriales",
            "Puentes y pasarelas",
            "Estructuras especiales",
            "Refuerzo estructural",
          ],
          methodology:
            "Utilizamos SAP2000, ETABS y Robot Structural Analysis para modelado y cálculo según normas CIRSOC, ACI y Eurocódigos.",
        },
      },
    ],
  },
  {
    name: "Hidrología y Medio Ambiente",
    services: [
      {
        icon: <Waves className="h-6 w-6" />,
        title: "Relevamientos Batimétricos",
        shortDescription: "Cartografía subacuática precisa",
        description:
          "Medición de cuerpos de agua para proyectos hidráulicos y ambientales.",
        details: {
          features: [
            "Perfiles de profundidad",
            "Modelado de cuencas",
            "Volumetría de embalses",
            "Detección de obstáculos",
            "Cartografía náutica",
          ],
          applications: [
            "Diseño de puertos y muelles",
            "Dragado y mantenimiento",
            "Centrales hidroeléctricas",
            "Estudios ambientales",
            "Obras de toma y descarga",
          ],
          methodology:
            "Equipos de sonar multihaz y ecosondas de alta frecuencia combinados con GPS diferencial para precisiones de ±5cm.",
        },
      },
      {
        icon: <Droplets className="h-6 w-6" />,
        title: "Estudios Hidrológicos e Hidráulicos",
        shortDescription: "Análisis de comportamiento del agua",
        description:
          "Modelado de flujos y diseño de sistemas de manejo hídrico.",
        details: {
          features: [
            "Modelación de cuencas",
            "Cálculo de crecidas",
            "Diseño de drenajes",
            "Análisis de riesgo",
            "Estudios de inundabilidad",
          ],
          applications: [
            "Puentes y alcantarillas",
            "Sistemas de riego",
            "Control de erosión",
            "Presas y embalses",
            "Urbanizaciones en zonas húmedas",
          ],
          methodology:
            "Software especializado (HEC-RAS, SWMM, Iber) para modelación 1D y 2D con datos LIDAR y fotogrametría.",
        },
      },
      {
        icon: <Droplets className="h-6 w-6" />,
        title: "Diseño de Sistemas de Riego",
        shortDescription: "Soluciones eficientes para agricultura",
        description:
          "Proyectos de riego tecnificado para optimización hídrica.",
        details: {
          features: [
            "Riego por goteo y aspersión",
            "Automatización completa",
            "Diseño hidráulico",
            "Optimización energética",
            "Fertirrigación integrada",
          ],
          applications: [
            "Grandes extensiones agrícolas",
            "Invernaderos tecnificados",
            "Parques y jardines",
            "Campos deportivos",
            "Recuperación de suelos",
          ],
          methodology:
            "Modelado con software especializado (EPANET, IrriPro) y selección de componentes de última generación para máxima eficiencia.",
        },
      },
    ],
  },
  {
    name: "Movimiento de Tierras",
    services: [
      {
        icon: <Mountain className="h-6 w-6" />,
        title: "Proyectos de Aterrazamientos",
        shortDescription: "Optimización de terrenos en pendiente",
        description:
          "Diseño y ejecución de terrazas para aprovechamiento de terrenos complejos.",
        details: {
          features: [
            "Análisis de pendientes",
            "Diseño de bancales",
            "Cálculo de volúmenes",
            "Control de estabilidad",
            "Sistemas de drenaje",
          ],
          applications: [
            "Viñedos en ladera",
            "Urbanización en terrenos difíciles",
            "Control de erosión",
            "Explotaciones mineras",
            "Proyectos forestales",
          ],
          methodology:
            "Modelado 3D con drones y software de movimiento de tierras para minimizar costos y maximizar aprovechamiento.",
        },
      },
      {
        icon: <Shovel className="h-6 w-6" />,
        title: "Movimiento de Suelos Integral",
        shortDescription: "Gestión completa de excavaciones y rellenos",
        description:
          "Proyecto y control de obras de movimiento de tierras de cualquier escala.",
        details: {
          features: [
            "Cubicación precisa",
            "Optimización de movimientos",
            "Control de compactación",
            "Estabilización de suelos",
            "Certificación de volúmenes",
          ],
          applications: [
            "Excavaciones para cimientos",
            "Terraplenes viales",
            "Nivelación de parcelas",
            "Obras hidráulicas",
            "Rellenos controlados",
          ],
          methodology:
            "Topografía de alta frecuencia con control GPS en maquinaria y verificación con drones para exactitud en volúmenes.",
        },
      },
    ],
  },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<{
    icon: JSX.Element;
    title: string;
    description: string;
    details: {
      features: string[];
      applications: string[];
      methodology: string;
    };
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openModal = (
    service: SetStateAction<{
      icon: JSX.Element;
      title: string;
      description: string;
      details: {
        features: string[];
        applications: string[];
        methodology: string;
      };
    } | null>
  ) => {
    setSelectedService(service);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const allServices = serviceCategories.flatMap(
    (category) => category.services
  );
  const filteredServices =
    activeCategory === "Todos"
      ? allServices
      : serviceCategories.find((cat) => cat.name === activeCategory)
          ?.services || [];

  return (
    <section
      id="servicios"
      className="py-28 bg-gradient-to-b from-vercel-950 to-vercel-900"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium border border-brand-800/50 shadow-sm"
          >
            <Zap className="h-4 w-4 mr-2" />
            Servicios Profesionales
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-300 tracking-tight">
            Soluciones Técnicas Integrales
          </h2>
          <p className="text-vercel-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Combinamos tecnología de vanguardia con décadas de experiencia para
            resultados precisos y confiables
          </p>
        </motion.div>

        {/* Filtros por categoría */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={activeCategory === "Todos" ? "default" : "outline"}
            onClick={() => setActiveCategory("Todos")}
            className="rounded-full px-5 border-2"
          >
            Todos los servicios
          </Button>
          {serviceCategories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className="rounded-full px-5 border-2"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-2xl border border-vercel-800 bg-vercel-900 hover:border-brand-500 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(service)}
            >
              <div className="p-7">
                <div className="mb-5 p-3 rounded-xl inline-flex bg-gradient-to-br from-brand-900/50 to-brand-900 text-brand-300 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-vercel-400 mb-5">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
                  Explorar detalles
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/30 to-brand-900/30 p-0.5 rounded-xl inline-block">
            <Button
              asChild
              className="relative overflow-hidden group rounded-xl px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl border-0"
            >
              <Link href="#contacto">
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Análisis Personalizado
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </Button>
          </div>
          <p className="text-sm text-vercel-400 mt-4">
            Más de 50 proyectos ejecutados con éxito en los últimos 50 años
          </p>
        </motion.div>

        {/* Modal de Servicio */}
        <AnimatePresence>
          {isOpen && selectedService && (
            <Dialog
              static
              as={motion.div}
              open={isOpen}
              onClose={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                  className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-vercel-900 text-left align-middle shadow-xl transition-all border border-vercel-800"
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-vercel-800 transition-colors"
                    aria-label="Cerrar modal"
                  >
                    <X className="h-5 w-5 text-vercel-400" />
                  </button>

                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-brand-900/50 to-brand-800 text-brand-300 shadow-inner flex-shrink-0">
                        {selectedService.icon}
                      </div>
                      <div>
                        <Dialog.Title className="text-2xl font-bold text-white">
                          {selectedService.title}
                        </Dialog.Title>
                        <p className="text-lg text-vercel-400 mt-2">
                          {selectedService.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-10 md:grid-cols-2">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                            <span>Características Técnicas</span>
                          </h4>
                          <ul className="space-y-3">
                            {selectedService.details.features.map(
                              (feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-vercel-300"
                                >
                                  <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Building2 className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                            <span>Aplicaciones Prácticas</span>
                          </h4>
                          <ul className="space-y-3">
                            {selectedService.details.applications.map(
                              (app, i) => (
                                <li
                                  key={i}
                                  className="flex items-start text-vercel-300"
                                >
                                  <span className="inline-block w-2 h-2 rounded-full bg-brand-500 mt-2 mr-3 flex-shrink-0" />
                                  <span>{app}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <Zap className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                            <span>Metodología de Trabajo</span>
                          </h4>
                          <p className="text-vercel-300 pl-7">
                            {selectedService.details.methodology}
                          </p>
                        </div>

                        <div className="bg-vercel-800/50 rounded-xl p-5 border border-vercel-700">
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Beneficios Clave
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start text-vercel-300">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>
                                Precisión certificada en todos los trabajos
                              </span>
                            </li>
                            <li className="flex items-start text-vercel-300">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>Equipos de última generación</span>
                            </li>
                            <li className="flex items-start text-vercel-300">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>Informes detallados y personalizados</span>
                            </li>
                            <li className="flex items-start text-vercel-300">
                              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span>Cumplimiento de normativas vigentes</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white py-6 text-base"
                      >
                        <Link href="#contacto" onClick={closeModal}>
                          Solicitar este servicio
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-vercel-300 hover:bg-vercel-800 py-6 text-base"
                        onClick={closeModal}
                      >
                        Ver otros servicios
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
