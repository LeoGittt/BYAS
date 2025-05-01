"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Gustavo Taffarel",
      role: "Agrimensor",
      description:
        "Especialista en mensuras rurales y urbanas, subdivisiones, amojonamientos y trabajos topográficos.",
    },
    {
      name: "Pablo Taffarel",
      role: "Agrimensor",
      description:
        "Enfocado en relevamientos geodésicos y catastrales, combinando tecnología moderna con profundo conocimiento técnico.",
    },
    {
      name: "Juan Bértora",
      role: "Ingeniero Civil",
      description:
        "Experto en diseño y cálculo estructural, dirección de obras y proyectos de infraestructura civil.",
    },
  ];

  const galleryImages = [
    "/galeria1.jpg",
    "/foto.jpg",
    "/galeria3.jpg",
    "/galeria44.jpg",
    "/galeria5.jpg",
  ];

  return (
    <section
      id="sobre-nosotros"
      className="pt-32 pb-24 dark:bg-vercel-950 scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Texto */}
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
              Conformado por un equipo de <br />
              <span className="text-gradient">profesionales comprometidos</span>
            </h2>

            <p className="text-vercel-300 text-lg mb-8">
              Nuestro equipo combina experiencia, formación técnica y compromiso
              para ofrecer soluciones eficientes en topografía e ingeniería
              civil.
            </p>

            <ul className="space-y-6 mb-8">
              {teamMembers.map((member, index) => (
                <li key={index} className="flex items-start">
                  <Briefcase className="h-5 w-5 text-brand-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      {member.name} —{" "}
                      <span className="italic text-brand-300">
                        {member.role}
                      </span>
                    </p>
                    <p className="text-vercel-300">{member.description}</p>
                  </div>
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

          {/* Imagen + Carrusel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Imagen principal */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl mb-6">
              <img
                src="/fotoo.jpg"
                alt="Equipo de trabajo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Carrusel simple */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4">
                {galleryImages.map((src, i) => (
                  <motion.div
                    key={i}
                    className="min-w-[150px] sm:min-w-[180px] rounded-lg overflow-hidden shadow-md flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={src}
                      alt={`Galería ${i + 1}`}
                      className="object-cover w-full h-32 sm:h-40"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
