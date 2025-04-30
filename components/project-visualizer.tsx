"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { ChevronLeft, ChevronRight, Maximize, Minimize, RotateCw } from "lucide-react"

const projects = [
  {
    id: "urbanizacion",
    name: "Urbanización Villa Verde",
    description: "Desarrollo urbanístico de 50 hectáreas con servicios completos.",
    location: "Buenos Aires, Argentina",
    year: "2022",
    client: "Desarrollos Urbanos S.A.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    details: {
      challenge:
        "El principal desafío fue adaptar el diseño urbanístico a un terreno con importantes desniveles y áreas inundables.",
      solution:
        "Realizamos un exhaustivo relevamiento planialtimétrico y desarrollamos un proyecto de aterrazamientos y sistema de desagües que optimizó el uso del terreno.",
      results:
        "Se logró aprovechar el 95% de la superficie total, creando 200 lotes residenciales y 3 áreas comerciales, maximizando el valor del desarrollo.",
    },
    modelUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "linea-alta-tension",
    name: "Línea de Alta Tensión 132kV",
    description: "Replanteo de 120km de línea de alta tensión en terreno montañoso.",
    location: "Córdoba, Argentina",
    year: "2021",
    client: "Energía Nacional",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    details: {
      challenge: "La traza atravesaba zonas de difícil acceso con pendientes pronunciadas y vegetación densa.",
      solution:
        "Utilizamos drones para el relevamiento inicial y equipos GPS RTK para el replanteo preciso de cada torre.",
      results:
        "Se completó el replanteo en tiempo récord, permitiendo la instalación de 85 torres en terrenos complejos sin desviaciones respecto al proyecto.",
    },
    modelUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "puente",
    name: "Puente sobre Río Paraná",
    description: "Relevamiento batimétrico y topográfico para la construcción de un puente.",
    location: "Entre Ríos, Argentina",
    year: "2020",
    client: "Ministerio de Obras Públicas",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    details: {
      challenge:
        "Se requería un relevamiento de alta precisión tanto del lecho del río como de las márgenes para el diseño de un puente de 1.2km de longitud.",
      solution:
        "Combinamos técnicas de batimetría con sonar multihaz y relevamientos topográficos convencionales para crear un modelo 3D completo del área.",
      results:
        "El modelo permitió optimizar el diseño del puente, reduciendo costos de construcción en un 15% y anticipando posibles problemas geotécnicos.",
    },
    modelUrl: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProjectVisualizer() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % activeProject.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setZoom(1)
    setRotation(0)
  }

  const rotateModel = () => {
    setRotation((prev) => prev + 90)
  }

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2))
  }

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  useEffect(() => {
    setActiveImageIndex(0)
  }, [activeProject])

  return (
    <section className="py-24 bg-blue-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10"></div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-300 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-20 translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-4">
            Visualizador de Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora nuestros proyectos más destacados con nuestro visualizador interactivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Proyectos Destacados</h3>

              <div className="space-y-4">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    whileHover={{ x: 5 }}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                      activeProject.id === project.id
                        ? "bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-600"
                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <h4
                      className={`font-medium ${
                        activeProject.id === project.id
                          ? "text-blue-800 dark:text-blue-400"
                          : "text-gray-900 dark:text-gray-200"
                      }`}
                    >
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.location} • {project.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                <Tabs defaultValue="gallery" className="w-full">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-white">{activeProject.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activeProject.client} • {activeProject.location}
                      </p>
                    </div>
                    <TabsList>
                      <TabsTrigger value="gallery">Galería</TabsTrigger>
                      <TabsTrigger value="details">Detalles</TabsTrigger>
                      <TabsTrigger value="3d">Modelo 3D</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="gallery" className="m-0">
                    <div className="relative h-[400px]">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeImageIndex}
                          src={activeProject.images[activeImageIndex]}
                          alt={`${activeProject.name} - Imagen ${activeImageIndex + 1}`}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-lg font-medium">{activeProject.description}</p>
                      </div>

                      <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-blue-900 dark:text-white p-2 rounded-full shadow-md transition-colors"
                        aria-label="Imagen anterior"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-blue-900 dark:text-white p-2 rounded-full shadow-md transition-colors"
                        aria-label="Imagen siguiente"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {activeProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === activeImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="m-0 p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">El Desafío</h4>
                        <p className="text-gray-700 dark:text-gray-300">{activeProject.details.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">
                          Nuestra Solución
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{activeProject.details.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-400 mb-2">Resultados</h4>
                        <p className="text-gray-700 dark:text-gray-300">{activeProject.details.results}</p>
                      </div>

                      <div className="pt-4">
                        <Button className="bg-blue-800 hover:bg-blue-700 text-white">
                          Solicitar información completa
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="3d" className="m-0">
                    <div className="relative h-[400px] bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                      <div
                        className="relative w-full h-full"
                        style={{
                          transform: `scale(${zoom}) rotate(${rotation}deg)`,
                          transition: "transform 0.5s ease",
                        }}
                      >
                        <img
                          src={activeProject.modelUrl || "/placeholder.svg"}
                          alt={`Modelo 3D de ${activeProject.name}`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button
                          onClick={toggleFullscreen}
                          className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-blue-900 dark:text-white p-2 rounded-full shadow-md transition-colors"
                          aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
                        >
                          {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                        </button>

                        <button
                          onClick={rotateModel}
                          className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-blue-900 dark:text-white p-2 rounded-full shadow-md transition-colors"
                          aria-label="Rotar modelo"
                        >
                          <RotateCw className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="absolute bottom-4 right-4 flex space-x-2">
                        <button
                          onClick={zoomOut}
                          disabled={zoom <= 0.5}
                          className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-blue-900 dark:text-white p-2 rounded-full shadow-md transition-colors disabled:opacity-50"
                          aria-label="Alejar"
                        >
                          <span className="text-xl font-bold">-</span>
                        </button>

                        <button
                          onClick={zoomIn}
                          disabled={zoom >= 2}
                          className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-blue-900 dark:text-white p-2 rounded-full shadow-md transition-colors disabled:opacity-50"
                          aria-label="Acercar"
                        >
                          <span className="text-xl font-bold">+</span>
                        </button>
                      </div>

                      <div className="absolute bottom-4 left-4 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                        Zoom: {Math.round(zoom * 100)}%
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
