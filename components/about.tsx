"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Sobre Nosotros
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mb-6"
          ></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            BYAS es una empresa de consultoría con más de 50 años de experiencia, especializada en apoyo a todo tipo de
            obras de infraestructura a lo largo de todo el país.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-blue-900/20 z-10 rounded-lg"></div>
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Equipo BYAS trabajando en obra"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent h-1/3"></div>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <span className="text-sm font-medium bg-blue-800 px-3 py-1 rounded-full">50+ años de experiencia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-blue-900 mb-6 relative">
              Nuestra Misión
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Brindamos servicios topográficos y de ingeniería a gran cantidad de empresas constructoras, utilizando
              equipamiento de última generación. Nuestro compromiso es ofrecer soluciones precisas y eficientes para
              todo tipo de proyectos de infraestructura.
            </p>

            <h3 className="text-3xl font-semibold text-blue-900 mb-6 relative">
              Nuestra Visión
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></span>
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Ser la empresa líder en servicios de topografía e ingeniería civil en el país, reconocida por la
              excelencia técnica, la innovación constante y el compromiso con nuestros clientes.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-4 rounded-lg bg-blue-50 shadow-md"
              >
                <span className="block text-4xl font-bold text-blue-800">50+</span>
                <span className="text-gray-600 text-sm">Años de experiencia</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-4 rounded-lg bg-blue-50 shadow-md"
              >
                <span className="block text-4xl font-bold text-blue-800">100+</span>
                <span className="text-gray-600 text-sm">Proyectos completados</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center p-4 rounded-lg bg-blue-50 shadow-md"
              >
                <span className="block text-4xl font-bold text-blue-800">50+</span>
                <span className="text-gray-600 text-sm">Clientes satisfechos</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
