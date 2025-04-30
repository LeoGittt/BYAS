"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Clock, Users, Shield } from "lucide-react";

const reasons = [
  {
    icon: <Award className="h-12 w-12 text-blue-100" />,
    title: "Experiencia comprobada",
    description:
      "Más de 50 años de trayectoria en la participación en obras de infraestructura y civiles a lo largo del país.",
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-100" />,
    title: "Profesionalismo y precisión",
    description:
      "Tecnología de última generación que garantiza precisión, optimización de tiempos, recursos y costos.",
  },
  {
    icon: <Clock className="h-12 w-12 text-blue-100" />,
    title: "Compromiso con los plazos",
    description:
      "Cumplimos con los plazos establecidos, manteniendo la calidad en cada etapa del trabajo.",
  },
  {
    icon: <Users className="h-12 w-12 text-blue-100" />,
    title: "Atención personalizada",
    description:
      "Asesoramiento técnico claro desde el primer contacto, acompañando al cliente en cada etapa del proceso.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="por-que-elegirnos"
      className="py-24 bg-blue-900 text-white relative"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            En BYAS nos distinguimos por nuestra trayectoria, profesionalismo y
            compromiso con cada proyecto que emprendemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-blue-700"
            >
              <div className="mb-6 bg-blue-800 p-5 rounded-full">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-100">
                {reason.title}
              </h3>
              <p className="text-blue-200">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
