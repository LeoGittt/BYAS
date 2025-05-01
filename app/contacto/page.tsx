"use client";

import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Teléfonos",
      icon: <Phone className="w-6 h-6 text-brand-400" />,
      description: "+54 3446 672227 / +54 3446 672268 / +54 3446 634132",
      links: [
        {
          label: "Llamar al principal",
          url: "tel:+543446672227",
        },
        {
          label: "Llamar al secundario",
          url: "tel:+543446672268",
        },
      ],
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-brand-400" />,
      description: "Chatea con nuestro equipo",
      links: [
        {
          label: "Contactar por WhatsApp",
          url: "https://wa.me/543446672227?text=Hola%20BYAS%20Ingeniería,%20me%20contacto%20desde%20su%20sitio%20web",
        },
      ],
    },
    {
      title: "Correo electrónico",
      icon: <Mail className="w-6 h-6 text-brand-400" />,
      description: "info@byas.com.ar",
      links: [
        {
          label: "Enviar email",
          url: "mailto:info@byas.com.ar?subject=Consulta%20desde%20sitio%20web",
        },
      ],
    },
    {
      title: "Horario de atención",
      icon: <Clock className="w-6 h-6 text-brand-400" />,
      description: "Lunes a Viernes de 8:00 a 12:00 y 15:00 a 19:00 hs",
      links: [],
    },
    {
      title: "Ubicación",
      icon: <MapPin className="w-6 h-6 text-brand-400" />,
      description: "Gualeguaychú, Entre Ríos, Argentina",
      links: [],
    },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 lg:py-40 bg-vercel-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-2 mb-5 rounded-full bg-brand-900/30 text-brand-300 text-sm md:text-base font-medium">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Cómo comunicarte con nosotros
          </h2>
          <p className="mt-5 text-vercel-300 max-w-2xl mx-auto text-base md:text-lg">
            Elige la forma más conveniente para ponerte en contacto con nuestro
            equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-vercel-900 border border-vercel-800 rounded-2xl p-6 md:p-8 transition-all hover:border-brand-400/30"
            >
              <div className="flex items-start space-x-4 mb-5">
                <div className="flex-shrink-0 mt-1">{method.icon}</div>
                <h3 className="text-white font-semibold text-xl md:text-2xl">
                  {method.title}
                </h3>
              </div>
              <p className="text-vercel-300 mb-5 md:mb-6 text-base md:text-lg">
                {method.description}
              </p>

              <div className="space-y-3">
                {method.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 text-sm md:text-base bg-brand-900/30 text-brand-300 rounded-lg hover:bg-brand-800/50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
