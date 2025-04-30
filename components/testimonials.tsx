"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "BYAS ha sido un socio clave en nuestros proyectos de infraestructura. Su precisión y profesionalismo son incomparables.",
    author: "Carlos Rodríguez",
    position: "Director de Proyectos",
    company: "Constructora del Sur",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Trabajar con BYAS nos ha permitido optimizar tiempos y recursos en nuestros desarrollos urbanísticos. Su experiencia es invaluable.",
    author: "María González",
    position: "Gerente de Operaciones",
    company: "Desarrollos Urbanos S.A.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "La precisión en los relevamientos topográficos de BYAS ha sido fundamental para el éxito de nuestros proyectos viales.",
    author: "Juan Pérez",
    position: "Ingeniero Jefe",
    company: "Vialidad Nacional",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonios" className="py-24 bg-gray-50 relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-fixed opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con
            nosotros.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-blue-200 opacity-50">
            <Quote size={80} />
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="relative z-10 w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg mx-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 italic mb-6">"{testimonials[currentIndex].quote}"</p>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">{testimonials[currentIndex].author}</h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-blue-50 text-blue-900 p-3 rounded-full shadow-md transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-800" : "bg-gray-300"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-blue-50 text-blue-900 p-3 rounded-full shadow-md transition-colors"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
