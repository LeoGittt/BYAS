"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
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
  {
    quote:
      "El equipo de BYAS demostró un nivel de profesionalismo excepcional durante todo nuestro proyecto de desarrollo urbano.",
    author: "Laura Sánchez",
    position: "CEO",
    company: "Grupo Inmobiliario Horizonte",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const autoplayRef = useRef(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
    setAutoplay(false)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, activeIndex])

  return (
    <section className="py-24 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-blue-200 dark:text-blue-900 opacity-50">
              <Quote size={80} />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30"></div>
                    <img
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].author}
                      className="relative z-10 w-28 h-28 object-cover rounded-full border-4 border-white dark:border-gray-700 shadow-lg mx-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-400">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-blue-800" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -left-5 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="bg-white dark:bg-gray-800 text-blue-900 dark:text-white p-3 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Testimonio anterior"
                onMouseEnter={() => setAutoplay(false)}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="bg-white dark:bg-gray-800 text-blue-900 dark:text-white p-3 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                aria-label="Testimonio siguiente"
                onMouseEnter={() => setAutoplay(false)}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
