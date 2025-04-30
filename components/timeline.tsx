"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: "1970",
    title: "Fundación de BYAS",
    description: "Inicio de operaciones como empresa de topografía y agrimensura.",
  },
  {
    year: "1985",
    title: "Expansión de Servicios",
    description: "Incorporación de servicios de ingeniería civil y ampliación del equipo profesional.",
  },
  {
    year: "1995",
    title: "Innovación Tecnológica",
    description: "Adopción de tecnologías digitales y sistemas GPS para relevamientos topográficos.",
  },
  {
    year: "2005",
    title: "Proyectos Internacionales",
    description: "Inicio de operaciones en países limítrofes y expansión del alcance de servicios.",
  },
  {
    year: "2020",
    title: "Modernización Total",
    description: "Implementación de drones y tecnología de punta para relevamientos y proyectos.",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Nuestra Historia</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Más de 50 años de trayectoria en el sector, evolucionando constantemente para ofrecer los mejores servicios.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
            >
              {/* Year Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center z-10 shadow-lg">
                <span className="text-sm font-bold">{event.year}</span>
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
