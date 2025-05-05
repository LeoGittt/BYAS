"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); // Reducido el margen para activación más temprana

  const features = [
    "Más de 50 años de experiencia en el sector",
    "Equipo de profesionales altamente calificados",
    "Tecnología de última generación",
    "Compromiso con la calidad y la precisión",
    "Soluciones personalizadas para cada proyecto",
  ];

  // Configuración de animaciones optimizadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section
      id="sobre-nosotros"
      className="py-24 bg-vercel-950 scroll-mt-24"
      aria-labelledby="about-heading"
      
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal - Animación optimizada */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium"
            >
              Sobre Nosotros
            </motion.span>

            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-brand-400"
            >
              Especialistas en <br />
              <span className=" text-white">
                topografía e ingeniería civil
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-vercel-300 text-lg mb-8"
            >
              BYAS es una empresa de consultoría con más de 50 años de
              experiencia, especializada en apoyo a todo tipo de obras de
              infraestructura a lo largo de todo el país.
            </motion.p>

            <motion.ul variants={containerVariants} className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-brand-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-vercel-300">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="bg-vercel-900 hover:bg-vercel-800 text-white rounded-md px-8"
                >
                  <Link href="#contacto">Contáctanos</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Imagen con datos - Animación optimizada */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            variants={imageVariants}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/f.jpg?height=600&width=800"
                alt="Ingenieros de BYAS trabajando en una obra de infraestructura"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              variants={statsVariants}
              className="absolute -bottom-6 -left-6 bg-vercel-900 p-1 sm:p-2 rounded-lg shadow-lg border border-vercel-800"
            >
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-x-3 sm:space-y-0">
  <div className="text-center">
    <div className="text-base sm:text-lg font-semibold text-brand-400">
      50
    </div>
    <div className="text-[10px] sm:text-xs text-vercel-400">
      Años de experiencia
    </div>
  </div>
  <div className="h-3 sm:h-6 w-px bg-vercel-800" />
  <div className="text-center">
    <div className="text-base sm:text-lg font-semibold text-brand-400">
      10+
    </div>
    <div className="text-[10px] sm:text-xs text-vercel-400">
      Proyectos completados
    </div>
  </div>
</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
