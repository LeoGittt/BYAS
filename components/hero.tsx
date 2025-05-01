"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background: `
          linear-gradient(to right, rgba(var(--brand-400-rgb), 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(var(--brand-400-rgb), 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        backgroundColor: "black",
      }}
    >
      {/* Overlay con efecto de degradado y resplandor brand */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(var(--brand-400-rgb), 0.1) 0%, transparent 70%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%)
          `,
        }}
      />

      <div className="container px-6 relative z-10 text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-5l font-extrabold tracking-tight leading-tight">
          Servicios de{" "}
          <span className="text-brand-400">Topografía, Agrimensura</span> e{" "}
          <span className="text-brand-400">Ingeniería Civil</span> para Obras de
          Infraestructura
        </h1>

        <p className="mt-6 text-lg text-white/80 font-light">
          En <strong className="text-white font-medium">BYAS</strong> brindamos
          soluciones confiables con tecnología avanzada para obras civiles e
          infraestructura tanto en el ámbito público como privado.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-400 text-white hover:bg-brand-500 transition-transform duration-150 px-8 py-5 text-base font-semibold rounded-xl shadow-md"
          >
            <Link href="#contacto">Solicitar información</Link>
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
