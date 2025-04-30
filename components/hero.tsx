"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 bg-gradient-to-br from-vercel-950 via-vercel-900 to-brand-900 text-white"
    >
      {/* Fondo de grilla tenue */}
      <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Texto a la izquierda */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-5 py-1.5 mb-6 rounded-full bg-vercel-100 text-vercel-900 dark:bg-vercel-800 dark:text-vercel-100 text-sm font-medium shadow-sm"
            >
              Más de 50 años de experiencia
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Servicios de{" "}
              <span className="bg-gradient-to-r from-brand-400 to-vercel-200 bg-clip-text text-transparent">
                Topografía e Ingeniería
              </span>{" "}
              de precisión
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-md text-vercel-300 font-mono mb-10 max-w-xl"
            >
              Tecnología de última generación y profesionales calificados para
              proyectos de infraestructura y obras civiles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-vercel-900 hover:bg-gray-100 transition-all duration-200 px-8 rounded-lg shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                <Link href="#contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 rounded-lg"
              >
                <Link href="#servicios">Ver servicios</Link>
              </Button>
            </motion.div>
          </div>

          {/* Imagen a la derecha con overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="/fondo.jpg"
              alt="Agrimensores trabajando"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vercel-950/80 to-transparent mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
