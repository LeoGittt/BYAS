"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const contactCards = [
  {
    title: "Llamanos",
    content: ["+54 3446 672227", "+54 3446 672268", "+54 3446 634132"],
    icon: Phone,
    actions: [
      {
        label: "Llamar",
        href: "tel:+543446672227",
      },
    ],
  },
  {
    title: "Correo Electrónico",
    content: ["info@byas.com.ar"],
    icon: Mail,
    actions: [
      {
        label: "Enviar Email",
        href: "mailto:info@byas.com.ar",
      },
    ],
  },
  {
    title: "WhatsApp",
    content: ["+54 3446 672227"],
    icon: Send,
    actions: [
      {
        label: "WhatsApp",
        href: "https://wa.me/543446672227",
      },
    ],
  },
  {
    title: "Ubicación",
    content: ["Entre Ríos, Argentina", "Oficinas en todo el país"],
    icon: MapPin,
    actions: [
      {
        label: "Ver en Mapa",
        href: "https://www.google.com/maps/search/?api=1&query=Entre+Ríos,+Argentina",
      },
    ],
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-vercel-950 py-24 px-4 text-white">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-brand-800/20 text-brand-300 uppercase tracking-wide">
            Contacto
          </span>
          <h2 className="text-4xl font-bold mb-3">
            ¿Querés ponerte en contacto?
          </h2>
          <p className="text-vercel-300 max-w-xl mx-auto text-lg">
            Respondemos rápido. Elegí cómo comunicarte con nosotros.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {contactCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-900 rounded-xl">
                  <Icon className="h-6 w-6 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <div className="text-vercel-300 space-y-1 mb-4">
                {card.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="space-y-2">
                {card.actions.map((action, idx) => (
                  <a
                    key={idx}
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-brand-700 hover:bg-brand-600 text-white rounded-full transition"
                  >
                    {action.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
        >
          <iframe
            title="Ubicación - Entre Ríos, Argentina"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109498.90400000001!2d-60.0!3d-32.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65d6c1b1e1a5b%3A0x0!2sEntre%20R%C3%ADos%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1610000000000!5m2!1ses-419!2sar"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
