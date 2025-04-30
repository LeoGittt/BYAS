"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ElegantCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white mb-4">
                  Transformamos tus ideas en proyectos exitosos
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Nuestro equipo de expertos está listo para ayudarte a llevar tu visión al siguiente nivel con
                  soluciones precisas y eficientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-blue-800 hover:bg-blue-700 text-white">
                    <Link href="#contacto">
                      Solicitar consulta gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#servicios">Ver nuestros servicios</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-blue-900/10"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Equipo BYAS trabajando"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
