"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container px-6 relative z-10 text-center max-w-4xl">
        {/* <span className="inline-block mb-6 text-sm font-semibold text-white px-4 py-1 rounded-full bg-white/10 border border-white/20 shadow-sm">
          Más de 50 años de experiencia
        </span> */}

        <h1 className="text-4xl sm:text-5xl md:text-5l font-extrabold tracking-tight leading-tight">
          Servicios de <span className="text-brand-400">Topografía, Agrimensura</span> e <span className="text-brand-400">Ingeniería Civil</span> para Obras de Infraestructura
        </h1>

        <p className="mt-6 text-lg text-white/80 font-light">
          En <strong className="text-white font-medium">BYAS</strong> brindamos soluciones confiables con tecnología avanzada para obras civiles e infraestructura tanto en el ámbito público como privado.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-400 text-white hover:bg-brand-500 transition-transform duration-150 px-8 py-5 text-base font-semibold rounded-xl shadow-md"
          >
            <Link href="#contacto">
              Solicitar información
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 transition-transform duration-150 px-8 py-5 text-base font-medium rounded-xl"
          >
            <Link href="#servicios">Ver servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
