"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
      style={{
        backgroundImage: "url('/fondo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Efecto parallax
      }}
    >
      {/* Superposición oscura sin desenfoque */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container px-6 relative z-10 text-center max-w-4xl">
        {/* Etiqueta de experiencia sin blur */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 text-sm font-semibold text-white px-4 py-1 rounded-full bg-white/10 border border-white/20 shadow-sm"
        >
          Más de 50 años de experiencia
        </motion.span>

        {/* Título principal actualizado */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-5l font-extrabold tracking-tight leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        >
          Servicios de{" "}
          <span className="text-brand-400">Topografía, Agrimensura</span> e{" "}
          <span className="text-brand-400">Ingeniería Civil</span> para Obras de
          Infraestructura
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-lg text-white/80 font-light"
        >
          En <strong className="text-white font-medium">BYAS</strong> brindamos
          soluciones confiables con tecnología avanzada para obras civiles e
          infraestructura tanto en el ámbito público como privado.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-400 text-white hover:scale-105 hover:bg-brand-500 transition-transform duration-200 px-8 py-5 text-base font-semibold rounded-xl shadow-lg"
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
            className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-transform duration-200 px-8 py-5 text-base font-medium rounded-xl"
          >
            <Link href="#servicios">Ver servicios</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
