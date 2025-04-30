"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  MapPin,
  Building2,
  Ruler,
  Zap,
  Calculator,
  Mountain,
  Shovel,
  Waves,
  Scale,
  Droplets,
  Sprout,
} from "lucide-react"

const services = [
  {
    icon: <MapPin className="h-10 w-10 text-blue-800" />,
    title: "Relevamiento Planialtimétricos",
    description: "Mediciones precisas del terreno para determinar alturas y coordenadas.",
  },
  {
    icon: <Building2 className="h-10 w-10 text-blue-800" />,
    title: "Desarrollo integral de Urbanizaciones",
    description: "Planificación y ejecución completa de proyectos urbanísticos.",
  },
  {
    icon: <Ruler className="h-10 w-10 text-blue-800" />,
    title: "Agrimensura General",
    description: "Medición, delimitación y subdivisión de terrenos con precisión.",
  },
  {
    icon: <Zap className="h-10 w-10 text-blue-800" />,
    title: "Replanteo de Obras",
    description: "Líneas de Alta Tensión, Gasoductos, Obras Viales y Civiles en General.",
  },
  {
    icon: <Calculator className="h-10 w-10 text-blue-800" />,
    title: "Cálculos Estructurales",
    description: "Análisis y diseño de estructuras para garantizar su estabilidad y seguridad.",
  },
  {
    icon: <Mountain className="h-10 w-10 text-blue-800" />,
    title: "Proyectos de Aterrazamientos",
    description: "Diseño y ejecución de terrazas para optimizar el uso del terreno.",
  },
  {
    icon: <Shovel className="h-10 w-10 text-blue-800" />,
    title: "Movimiento de Suelos",
    description: "Proyecto y replanteo en todo tipo de Obras de Movimiento de Suelos.",
  },
  {
    icon: <Waves className="h-10 w-10 text-blue-800" />,
    title: "Relevamientos Batimétricos",
    description: "Medición de profundidades en cuerpos de agua para proyectos hidráulicos.",
  },
  {
    icon: <Scale className="h-10 w-10 text-blue-800" />,
    title: "Nivelación Geométrica",
    description: "Determinación precisa de alturas y desniveles del terreno.",
  },
  {
    icon: <Droplets className="h-10 w-10 text-blue-800" />,
    title: "Estudios hidrológicos e hidráulicos",
    description: "Análisis del comportamiento del agua para prevenir inundaciones y optimizar recursos.",
  },
  {
    icon: <Sprout className="h-10 w-10 text-blue-800" />,
    title: "Diseño de sistemas de Riego",
    description: "Planificación e implementación de sistemas eficientes de irrigación.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" className="py-24 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados en topografía, agrimensura e ingeniería civil para
            todo tipo de proyectos de infraestructura.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
            >
              <div className="mb-6 bg-blue-50 p-5 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
