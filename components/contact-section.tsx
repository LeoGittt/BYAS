"use client";

import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const contactCards = [
  {
    title: "Líneas telefónicas",
    content: [
      { text: "+54 3446 672227", description: "Línea principal" },
      { text: "+54 3446 672268", description: "Consultas técnicas" },
      { text: "+54 3446 634132", description: "Administración" },
    ],
    icon: Phone,
    color: "bg-blue-500/10",
    iconColor: "text-blue-400",
    btnColor: "bg-blue-600 hover:bg-blue-500",
    actions: [
      {
        label: "Llamar ahora",
        href: "tel:+543446672227",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/543446672227",
      },
    ],
  },
  {
    title: "Correo electrónico",
    content: [
      { text: "info@byas.com.ar", description: "Consultas generales" },
      { text: "proyectos@byas.com.ar", description: "Cotizaciones" },
    ],
    icon: Mail,
    color: "bg-purple-500/10",
    iconColor: "text-purple-400",
    btnColor: "bg-purple-600 hover:bg-purple-500",
    actions: [
      {
        label: "Enviar email",
        href: "mailto:info@byas.com.ar?subject=Consulta%20desde%20sitio%20web",
      },
    ],
  },
  {
    title: "Visítanos",
    content: [
      { text: "Oficina Central", description: "Gualeguaychú, Entre Ríos" },
    ],
    icon: MapPin,
    color: "bg-green-500/10",
    iconColor: "text-green-400",
    btnColor: "bg-green-600 hover:bg-green-500",
    actions: [
      {
        label: "Ver en mapa",
        href: "https://maps.app.goo.gl/example",
      },
    ],
  },
 
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative bg-vercel-950 py-28 px-4 text-white overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold rounded-full bg-brand-800/20 text-brand-300 uppercase tracking-widest">
            Contacto Directo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-vercel-300">
            Estamos listos para ayudarte
          </h2>
          <p className="text-vercel-300 max-w-2xl mx-auto text-lg md:text-xl">
            Contáctanos a través de nuestros canales disponibles. Nuestro equipo
            responderá en el menor tiempo posible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 ${card.color} rounded-lg`}>
                    <Icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  {card.content.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-b border-white/5 pb-3 last:border-0 last:pb-0"
                    >
                      <p className="font-medium text-white">{item.text}</p>
                      <p className="text-sm text-vercel-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {card.actions.map((action, idx) => (
                    <a
                      key={idx}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between w-full px-4 py-3 text-sm ${card.btnColor} text-white rounded-lg transition-transform hover:scale-105 active:scale-95`}
                    >
                      <span>{action.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
