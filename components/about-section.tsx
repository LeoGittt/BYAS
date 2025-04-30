"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Más de 50 años de experiencia en el sector",
    "Equipo de profesionales altamente calificados",
    "Tecnología de última generación",
    "Compromiso con la calidad y la precisión",
    "Soluciones personalizadas para cada proyecto",
  ];

  return (
    <section
      id="sobre-nosotros"
      className="py-24 dark:bg-vercel-950 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-900/30 text-brand-300 text-sm font-medium">
              Sobre Nosotros
            </span>

            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white"
            >
              Especialistas en <br />
              <span className="text-gradient">
                topografía e ingeniería civil
              </span>
            </h2>

            <p className="text-vercel-300 text-lg mb-8">
              BYAS es una empresa de consultoría con más de 50 años de
              experiencia, especializada en apoyo a todo tipo de obras de
              infraestructura a lo largo de todo el país.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-vercel-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-vercel-900 hover:bg-vercel-800 text-white rounded-md px-8"
            >
              <Link href="#contacto">Contáctanos</Link>
            </Button>
          </motion.div>

          {/* Imagen con datos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/e.jpg?height=600&width=800"
                alt="Ingenieros de BYAS trabajando en una obra de infraestructura"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-vercel-900 p-1 sm:p-2 rounded-lg shadow-lg border border-vercel-800">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-4 sm:space-y-0">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-brand-400">
                    50+
                  </div>
                  <div className="text-xs sm:text-xs text-vercel-400">
                    Años de experiencia
                  </div>
                </div>
                <div className="h-4 sm:h-8 w-px bg-vercel-800" />
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-brand-400">
                    50+
                  </div>
                  <div className="text-xs sm:text-xs text-vercel-400">
                    Proyectos completados
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
