"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "next-themes"

const projects = [
  {
    title: "Urbanización Villa Verde",
    description: "Transformación de terreno baldío a desarrollo urbanístico completo",
    beforeImage: "/placeholder.svg?height=600&width=800",
    afterImage: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Restauración de Terreno",
    description: "Recuperación de área erosionada mediante técnicas de ingeniería ambiental",
    beforeImage: "/placeholder.svg?height=600&width=800",
    afterImage: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Proyecto Vial",
    description: "Construcción de ruta en terreno montañoso",
    beforeImage: "/placeholder.svg?height=600&width=800",
    afterImage: "/placeholder.svg?height=600&width=800",
  },
]

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleMouseMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">Antes y Después</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Observa la transformación de nuestros proyectos con nuestro comparador interactivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div
              ref={containerRef}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl cursor-move"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full) */}
              <div className="absolute inset-0">
                <img
                  src={projects[activeProject].afterImage || "/placeholder.svg"}
                  alt={`Después: ${projects[activeProject].title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Before Image (Clipped) */}
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                <img
                  src={projects[activeProject].beforeImage || "/placeholder.svg"}
                  alt={`Antes: ${projects[activeProject].title}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Slider Handle */}
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-white shadow-lg"></div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">Antes</div>
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                Después
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white">{projects[activeProject].title}</h3>
                <p className="text-gray-200">{projects[activeProject].description}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Proyectos</h3>

              <div className="space-y-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    onClick={() => setActiveProject(index)}
                    whileHover={{ x: 5 }}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                      activeProject === index
                        ? "bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-600"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <h4
                      className={`font-medium ${
                        activeProject === index
                          ? "text-blue-800 dark:text-blue-400"
                          : "text-gray-900 dark:text-gray-200"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Desliza el control deslizante para comparar el antes y después de cada proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
