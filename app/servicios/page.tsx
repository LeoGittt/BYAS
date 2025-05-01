"use client";

import {
  Ruler,
  Building,
  Compass,
  GanttChart,
  ShieldCheck,
  Mountain,
  Tractor,
  Waves,
  Droplet,
  Trees,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Relevamiento Planialtimétrico",
    icon: Ruler,
    description:
      "Medición precisa de terrenos en 2D y 3D, clave para la planificación y ejecución de obras civiles y urbanas.",
  },
  {
    title: "Desarrollo de Urbanizaciones",
    icon: Building,
    description:
      "Planificación, diseño y ejecución de proyectos urbanísticos completos: calles, servicios y parcelamientos.",
  },
  {
    title: "Agrimensura General",
    icon: Compass,
    description:
      "Tareas de mensura, amojonamientos, subdivisiones, georreferenciación y trámites catastrales.",
  },
  {
    title: "Replanteo de Obras",
    icon: GanttChart,
    description:
      "Marcación precisa para guiar la construcción de obras viales, eléctricas, hidráulicas y civiles.",
  },
  {
    title: "Cálculos Estructurales",
    icon: ShieldCheck,
    description:
      "Diseño estructural con cálculos normativos para asegurar resistencia y funcionalidad de construcciones.",
  },
  {
    title: "Aterrazamientos",
    icon: Mountain,
    description:
      "Diseño técnico de terrazas sobre pendientes naturales, útiles para construcción, agricultura y control de erosión.",
  },
  {
    title: "Movimiento de Suelos",
    icon: Tractor,
    description:
      "Planificación y ejecución de trabajos de excavación, relleno y nivelación adaptados a cada obra.",
  },
  {
    title: "Relevamientos Batimétricos",
    icon: Waves,
    description:
      "Exploración de perfiles subacuáticos para estudios hidráulicos, ambientales o diseño de puertos y canales.",
  },
  {
    title: "Estudios Hidrológicos e Hidráulicos",
    icon: Droplet,
    description:
      "Análisis de escorrentías, drenajes, caudales y comportamiento del agua en zonas urbanas y rurales.",
  },
  {
    title: "Nivelación Geométrica",
    icon: Ruler,
    description:
      "Determinación precisa de cotas en trazados de obras lineales como caminos, canales y ferrocarriles.",
  },
  {
    title: "Diseño de Sistemas de Riego",
    icon: Trees,
    description:
      "Soluciones técnicas para riego por goteo, aspersión o gravedad, adaptadas a cada tipo de cultivo y terreno.",
  },
];


export default function Servicios() {
  return (
    <section id="servicios" className="bg-vercel-950 text-white pt-36 pb-24">
      <div className="container px-4 mx-auto">
        {/* Hero section */}
        <div className="mb-20 text-center">
          <span className="text-brand-300 font-semibold text-sm uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="mt-3 text-5xl font-bold text-white leading-tight">
            Soluciones Técnicas de Alta Precisión
          </h2>
          <p className="mt-4 text-vercel-300 max-w-3xl mx-auto text-base">
            Nuestro equipo ofrece una amplia gama de servicios profesionales en
            ingeniería, agrimensura y planificación técnica. Utilizamos
            tecnología de vanguardia para garantizar resultados confiables y
            sostenibles.
          </p>
        </div>

       

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ title, icon: Icon, description }, i) => (
            <div
              key={i}
              className="bg-vercel-900 border border-vercel-700 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Icon className="w-8 h-8 text-brand-400" />
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="text-sm text-vercel-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
