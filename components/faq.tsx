"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Qué áreas geográficas cubren sus servicios?",
    answer:
      "Nuestros servicios cubren todo el territorio nacional, con especial presencia en las provincias de Buenos Aires, Córdoba, Santa Fe, Mendoza y Entre Ríos. También realizamos proyectos en países limítrofes como Uruguay, Chile y Paraguay.",
  },
  {
    question: "¿Qué tecnologías utilizan para los relevamientos topográficos?",
    answer:
      "Utilizamos equipamiento de última generación, incluyendo estaciones totales robóticas, sistemas GPS RTK, drones con cámaras multiespectrales y software especializado para procesamiento de datos topográficos y modelado 3D.",
  },
  {
    question: "¿Cuánto tiempo toma completar un proyecto típico?",
    answer:
      "El tiempo de ejecución varía según la complejidad y alcance del proyecto. Un relevamiento topográfico estándar puede completarse en 1-2 semanas, mientras que proyectos más complejos como el desarrollo integral de urbanizaciones pueden llevar varios meses.",
  },
  {
    question: "¿Ofrecen servicios de consultoría además de los trabajos de campo?",
    answer:
      "Sí, ofrecemos servicios de consultoría técnica en todas las áreas relacionadas con topografía, agrimensura e ingeniería civil. Nuestro equipo de profesionales puede asesorar en la planificación y ejecución de proyectos, análisis de factibilidad y optimización de recursos.",
  },
  {
    question: "¿Cómo se inicia un proyecto con BYAS?",
    answer:
      "El proceso comienza con una consulta inicial donde evaluamos las necesidades específicas del cliente. Luego realizamos una visita técnica al sitio para evaluar las condiciones y requerimientos particulares. Finalmente, presentamos una propuesta detallada incluyendo alcance, metodología, plazos y costos.",
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Preguntas Frecuentes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Respuestas a las consultas más comunes sobre nuestros servicios y forma de trabajo.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-800 text-white shadow-lg"
                    : "bg-white text-blue-900 shadow-md hover:shadow-lg"
                }`}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border border-gray-100 rounded-b-lg shadow-inner">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
