"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Expand, ExternalLink } from "lucide-react"

const categories = [
  { id: "all", label: "Todos" },
  { id: "urbanizacion", label: "Urbanización" },
  { id: "infraestructura", label: "Infraestructura" },
  { id: "topografia", label: "Topografía" },
]

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Desarrollo urbanístico",
    category: "urbanizacion",
    title: "Urbanización Villa Verde",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Línea de alta tensión",
    category: "infraestructura",
    title: "Línea de Alta Tensión 132kV",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Relevamiento topográfico",
    category: "topografia",
    title: "Relevamiento Planialtimétrico",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Puente sobre río",
    category: "infraestructura",
    title: "Puente sobre Río Paraná",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Desarrollo urbano",
    category: "urbanizacion",
    title: "Complejo Residencial Norte",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Medición topográfica",
    category: "topografia",
    title: "Medición de Terreno",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Gasoducto",
    category: "infraestructura",
    title: "Gasoducto Regional",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Loteo residencial",
    category: "urbanizacion",
    title: "Loteo Residencial",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const filteredImages = galleryImages.filter((image) => activeCategory === "all" || image.category === activeCategory)

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Galería de Proyectos</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explora nuestros proyectos más destacados a través de nuestra galería de imágenes.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-medium">{image.title}</h3>
                <p className="text-gray-200 text-sm">{categories.find((c) => c.id === image.category)?.label}</p>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white/80 p-2 rounded-full text-blue-900">
                  <Expand className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white">
                <h3 className="text-xl font-medium">{selectedImage.title}</h3>
                <p className="text-gray-300">{categories.find((c) => c.id === selectedImage.category)?.label}</p>
              </div>
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
