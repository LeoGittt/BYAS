"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Desarrollo Urbanístico Villa Verde",
    description: "Planificación y ejecución completa de un proyecto urbanístico de 50 hectáreas.",
    location: "Buenos Aires, Argentina",
    year: "2022",
    client: "Desarrollos Urbanos S.A.",
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Línea de Alta Tensión 132kV",
    description: "Replanteo de 120km de línea de alta tensión en terreno montañoso.",
    location: "Córdoba, Argentina",
    year: "2021",
    client: "Energía Nacional",
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Puente sobre Río Paraná",
    description: "Relevamiento batimétrico y topográfico para la construcción de un puente.",
    location: "Entre Ríos, Argentina",
    year: "2020",
    client: "Ministerio de Obras Públicas",
  },
  {
    image: "/placeholder.svg?height=600&width=800",
    title: "Sistema de Riego Agrícola",
    description: "Diseño e implementación de sistema de riego para 200 hectáreas de cultivo.",
    location: "Mendoza, Argentina",
    year: "2019",
    client: "Agroindustrias del Sur",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  return (
    <section id="proyectos" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce algunos de nuestros proyectos más relevantes en los que hemos aplicado nuestra experiencia y
            conocimiento.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative h-[500px] md:h-[600px]">
                  <img
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <div className="flex flex-col md:flex-row md:items-end justify-between">
                    <div className="mb-6 md:mb-0">
                      <span className="inline-block px-3 py-1 bg-blue-800 text-white text-sm rounded-full mb-4">
                        {projects[currentIndex].year} • {projects[currentIndex].location}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-3">{projects[currentIndex].title}</h3>
                      <p className="text-lg text-gray-200 max-w-2xl mb-4">{projects[currentIndex].description}</p>
                      <p className="text-blue-300">Cliente: {projects[currentIndex].client}</p>
                    </div>
                    <Button className="bg-white text-blue-900 hover:bg-blue-50">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-900 p-3 rounded-full shadow-lg transition-colors z-10"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-12 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-800" : "bg-gray-300"
                }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#contacto" className="inline-flex items-center text-blue-800 hover:text-blue-600 font-medium">
            ¿Interesado en nuestros servicios? Contáctanos
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
