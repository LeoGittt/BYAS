"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { MapPin, Building2, Ruler, Zap, Calculator, Mountain, Shovel } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const services = [
  {
    icon: <MapPin className="h-12 w-12" />,
    title: "Relevamiento Planialtimétricos",
    description: "Mediciones precisas del terreno para determinar alturas y coordenadas.",
    details:
      "Utilizamos tecnología de última generación para realizar relevamientos planialtimétricos con precisión milimétrica. Nuestros equipos incluyen estaciones totales robóticas, sistemas GPS RTK y drones con cámaras multiespectrales.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: <Building2 className="h-12 w-12" />,
    title: "Desarrollo integral de Urbanizaciones",
    description: "Planificación y ejecución completa de proyectos urbanísticos.",
    details:
      "Ofrecemos un servicio integral para el desarrollo de urbanizaciones, desde la planificación inicial hasta la ejecución final. Incluye relevamientos topográficos, diseño de loteos, cálculos de movimiento de suelos y replanteo de obras.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-green-500 to-green-700",
  },
  {
    icon: <Ruler className="h-12 w-12" />,
    title: "Agrimensura General",
    description: "Medición, delimitación y subdivisión de terrenos con precisión.",
    details:
      "Realizamos todo tipo de trabajos de agrimensura, incluyendo mensuras, subdivisiones, unificaciones, propiedad horizontal y estados parcelarios. Contamos con profesionales matriculados con amplia experiencia.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Replanteo de Obras",
    description: "Líneas de Alta Tensión, Gasoductos, Obras Viales y Civiles en General.",
    details:
      "Nos especializamos en el replanteo de todo tipo de obras de infraestructura, garantizando la correcta ubicación de cada elemento según los planos de proyecto. Utilizamos equipos de alta precisión para minimizar errores.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-red-500 to-red-700",
  },
  {
    icon: <Calculator className="h-12 w-12" />,
    title: "Cálculos Estructurales",
    description: "Análisis y diseño de estructuras para garantizar su estabilidad y seguridad.",
    details:
      "Realizamos cálculos estructurales para todo tipo de obras civiles, incluyendo edificios, puentes, torres y estructuras especiales. Utilizamos software especializado para garantizar la seguridad y optimización de recursos.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: <Mountain className="h-12 w-12" />,
    title: "Proyectos de Aterrazamientos",
    description: "Diseño y ejecución de terrazas para optimizar el uso del terreno.",
    details:
      "Desarrollamos proyectos de aterrazamientos para aprovechar al máximo terrenos con pendientes pronunciadas. Incluye cálculos de movimiento de suelos, diseño de muros de contención y sistemas de drenaje.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: <Shovel className="h-12 w-12" />,
    title: "Movimiento de Suelos",
    description: "Proyecto y replanteo en todo tipo de Obras de Movimiento de Suelos.",
    details:
      "Planificamos y ejecutamos trabajos de movimiento de suelos con precisión, optimizando volúmenes y costos. Utilizamos software especializado para calcular cortes y rellenos, y equipos de alta precisión para el replanteo.",
    image: "/placeholder.svg?height=600&width=800",
    color: "from-orange-500 to-orange-700",
  },
]

export default function ServiceExplorer() {
  const [activeService, setActiveService] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Explora Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre en detalle nuestra amplia gama de servicios especializados en topografía e ingeniería civil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveService(service)}
              className={`cursor-pointer rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 ${
                activeService === service
                  ? "bg-gradient-to-br " + service.color + " text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700"
              }`}
            >
              <div
                className={`p-4 rounded-full mb-4 mx-auto w-20 h-20 flex items-center justify-center ${
                  activeService === service ? "bg-white/20" : "bg-blue-50 dark:bg-blue-900/30"
                }`}
              >
                <div className={activeService === service ? "text-white" : "text-blue-800 dark:text-blue-400"}>
                  {service.icon}
                </div>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 text-center ${
                  activeService === service ? "text-white" : "text-blue-900 dark:text-white"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm text-center ${
                  activeService === service ? "text-white/90" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`inline-block p-3 rounded-full bg-gradient-to-br ${activeService.color} mb-4`}>
                    <div className="text-white">{activeService.icon}</div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-white mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{activeService.details}</p>
                  <Button className={`bg-gradient-to-r ${activeService.color} text-white hover:opacity-90`}>
                    Solicitar este servicio
                  </Button>
                </div>
                <div className="relative rounded-lg overflow-hidden h-64 md:h-80">
                  <img
                    src={activeService.image || "/placeholder.svg"}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${activeService.color} opacity-20`}></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!activeService && (
          <div className="text-center mt-8">
            <p className="text-gray-500 dark:text-gray-400">Selecciona un servicio para ver más detalles</p>
          </div>
        )}
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3"></div>
    </section>
  )
}
